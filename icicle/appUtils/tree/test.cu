// #define DEBUG
#define MERKLE_DEBUG

#define CURVE_ID 2
#include "../../curves/curve_config.cuh"
#include "../poseidon/poseidon.cu"
#include "merkle.cu"

#ifndef __CUDA_ARCH__
#include <cassert>
#include <chrono>
#include <fstream>
#include <iostream>
#include <math.h>

using namespace poseidon;
using namespace merkle;
using namespace curve_config;
using FpMilliseconds = std::chrono::duration<float, std::chrono::milliseconds::period>;

// Arity
#define A      2
#define T      A + 1
#define A_TYPE ARITY::TWO

#define START_TIMER(timer) auto timer##_start = std::chrono::high_resolution_clock::now();
#define END_TIMER(timer, msg)                                                                                          \
  printf("%s: %.0f ms\n", msg, FpMilliseconds(std::chrono::high_resolution_clock::now() - timer##_start).count());

int main(int argc, char* argv[])
{
  cudaStream_t stream;
  cudaStreamCreate(&stream);

  // Load poseidon constants
  START_TIMER(timer_const);
  PoseidonConstants<scalar_t> constants = load_optimized_poseidon_constants<scalar_t>(T, stream);
  END_TIMER(timer_const, "Load poseidon constants: ");

  /// Tree of height N and arity A contains \sum{A^i} for i in 0..N-1 elements
  uint32_t tree_height = argc > 1 ? atoi(argv[1]) : 28;
  uint32_t number_of_leaves = pow(A, (tree_height - 1));

  /// Use keep_rows to specify how many rows do you want to store
  int keep_rows = argc > 2 ? atoi(argv[2]) : 7;
  size_t digests_len = get_digests_len(keep_rows + 1, A);

  /// Fill leaves with scalars [0, 1, ... 2^{tree_height - 1} - 1]
  START_TIMER(timer_allocation);
  scalar_t input = scalar_t::zero();
  size_t leaves_mem = number_of_leaves * sizeof(scalar_t);
  scalar_t* leaves = static_cast<scalar_t*>(malloc(leaves_mem));
  for (uint32_t i = 0; i < number_of_leaves; i++) {
    leaves[i] = input;
    input = input + scalar_t::one();
  }
  END_TIMER(timer_allocation, "Allocated memory for leaves: ");

  /// Allocate memory for digests of {keep_rows} rows of a tree
  START_TIMER(timer_digests);
  size_t digests_mem = digests_len * sizeof(scalar_t);
  scalar_t* digests = static_cast<scalar_t*>(malloc(digests_mem));
  END_TIMER(timer_digests, "Allocated memory for digests");

  std::cout << "Memory for leaves = " << leaves_mem / 1024 / 1024 << " MB; " << leaves_mem / 1024 / 1024 / 1024 << " GB"
            << std::endl;
  std::cout << "Number of leaves = " << number_of_leaves << std::endl;
  std::cout << "Memory for digests = " << digests_mem / 1024 / 1024 << " MB; " << digests_mem / 1024 / 1024 / 1024
            << " GB" << std::endl;
  std::cout << "Number of digest elements = " << digests_len << std::endl;

  std::cout << "Total RAM consumption = " << (digests_mem + leaves_mem) / 1024 / 1024 << " MB; "
            << (digests_mem + leaves_mem) / 1024 / 1024 / 1024 << " GB" << std::endl;

  MerkleConfig config = default_merkle_config();
  config.keep_rows = keep_rows;
  START_TIMER(timer_merkle);
  BuildMerkleTree(leaves, digests, tree_height, A_TYPE, constants, config);
  END_TIMER(timer_merkle, "Merkle tree built: ")

  // Use this to generate test vectors
  // for (int i = 0; i < digests_len; i++) {
  //   std::cout << "{";
  //   for (int j = 0; j < 8; j++) {
  //     std::cout << ((uint32_t*)&digests[i].limbs_storage)[j];
  //     if (j != 7) { std::cout << ", "; }
  //   }
  //   std::cout << "}," << std::endl;
  // }

  /// These scalars are digests of top-7 rows of a Merkle tree.
  /// Arity = 2, Tree height = 28, keep_rows = 7
  /// They are aligned in the following format:
  ///  L-7      L-6     L-5       L-4       L-3       L-2    L-1
  /// [0..63, 64..95, 96..111, 112..119, 120..123, 124..125, 126]
  scalar_t expected[127] = {
    {4014678573, 3239475319, 2314653449, 2957861895, 184634791, 3566699115, 1715234110, 445241356},
    {3505304837, 808365954, 2275962701, 1423516791, 1541423175, 1724600321, 226400287, 1785337258},
    {2768067495, 1388793239, 3997362411, 3464112194, 1973409933, 3681177968, 369038929, 472214073},
    {3654540770, 1469373240, 3282216438, 3185867716, 967978472, 1078033214, 78178652, 1830882032},
    {490654422, 2525841937, 626688402, 392783721, 58008344, 2145494226, 3242212931, 274501152},
    {3208477883, 3672804666, 239023996, 4035696816, 3265333325, 958951383, 181142437, 1239596452},
    {2969561146, 4232772549, 1556993315, 1662679755, 2909096842, 1439765953, 667526824, 31896728},
    {270711313, 12541629, 3347448212, 371567649, 1759208919, 1723057963, 674629473, 1013019629},
    {3017193939, 2312231485, 3737856857, 1313052851, 1196989094, 1495382607, 1023560618, 191925995},
    {293080341, 2290910595, 1543157595, 1127848979, 1815285163, 1706352673, 992727722, 591498292},
    {3549180392, 2881478531, 2660879925, 1033961139, 2665175480, 2168183735, 3470220482, 849297604},
    {2676239944, 3976356940, 2496525380, 1062384559, 686775848, 383379365, 3327679344, 1084443735},
    {1971496657, 3091116054, 3681796601, 1418643776, 3299382044, 3857762866, 3539539764, 1326628306},
    {630542774, 2408275928, 345917713, 687603493, 3754703591, 3550860419, 2083130565, 770159409},
    {870888363, 224377249, 3918057820, 3375742820, 2591003788, 2510070975, 3414099060, 340676877},
    {1875497580, 1000647891, 3811413293, 2001777831, 2253197473, 2328265571, 3906271342, 325320055},
    {1211415187, 488575334, 500057698, 3280169717, 3697121693, 1438922954, 931086076, 620808784},
    {1983293587, 2168562163, 3150824284, 3953229527, 436705204, 778341443, 3005081450, 615688285},
    {8576698, 3039838264, 671609957, 2809480667, 1620765047, 2117613498, 845941068, 455906025},
    {3906454348, 552283113, 645539850, 1316302434, 475485784, 2970197657, 274367582, 652809948},
    {1495892355, 1668646651, 14573046, 3197699206, 1489087180, 3696907100, 1481991676, 1713300937},
    {3908239800, 3651019608, 3657128408, 1619241101, 2332486430, 639066149, 2163145035, 1704519873},
    {601030174, 3024947211, 2825655316, 3863514365, 749861326, 2966866369, 3590896102, 1433089687},
    {2395125120, 2965783566, 2438173617, 591910928, 2454874264, 961201946, 3519059509, 1507770765},
    {4191182380, 3986691529, 626672198, 248199214, 2672873299, 1206537516, 4088647235, 643192311},
    {117373628, 2684708015, 1169533105, 4189512228, 39193015, 2348829360, 1044287150, 1200318263},
    {1641468310, 184141241, 1225984447, 3048243879, 3866424998, 3590741693, 2510098016, 274097253},
    {805243263, 2967911161, 448427804, 518401505, 404860884, 1593480904, 2843784918, 1217394583},
    {1068910868, 4126158631, 3428265735, 1108050638, 1809164812, 2970655045, 916421502, 271686161},
    {2733872014, 3489610640, 2253010322, 2061408208, 209418696, 317724116, 2610511126, 777106564},
    {922170442, 222695863, 4287857383, 1811357610, 3378048665, 339334666, 156256237, 1016584661},
    {2369411073, 3974740601, 3926942050, 1092836585, 2755312327, 492736530, 1777994166, 1608349307},
    {3791947957, 2178563469, 2708512205, 2104428978, 4281280169, 3158413195, 3714473637, 1932398193},
    {447850698, 872401916, 1547172058, 1242046677, 1896710579, 1137814221, 1602961798, 1571006781},
    {3469094617, 1395163063, 1061899259, 4059174800, 2083256644, 1034754354, 941298869, 416224305},
    {3468873946, 3282426941, 497353671, 953582605, 1587266512, 1740183981, 671088260, 1875939615},
    {3123987458, 2866544187, 2718390509, 359710965, 259964033, 4177846877, 740787103, 1674220305},
    {783470818, 2334330296, 116871553, 1683603268, 759950366, 3727285592, 3616407101, 525075992},
    {3899236298, 1976585972, 3822298095, 748204764, 2978121214, 200932224, 1340374715, 79506611},
    {4128139198, 1939423978, 3727937787, 1855257827, 630776586, 3470334826, 2498269262, 1495682436},
    {1348892970, 629870637, 3595702369, 770535689, 2256370736, 3444863052, 891128487, 33159341},
    {2967968932, 4261332726, 2399871138, 3313204386, 3991787238, 3531989490, 1624489585, 1792543190},
    {2179587180, 3737311899, 6357632, 3727566655, 3147613619, 2123011127, 3097377147, 992191510},
    {2182997143, 4101668140, 1996814613, 3581332946, 867002512, 1843201087, 4223363546, 1928077695},
    {3028933890, 3818130584, 3557387839, 2374442829, 911787393, 770676400, 337096879, 240174663},
    {3043672379, 1899171261, 504182702, 3054796849, 3828295843, 671705157, 3825173996, 1414902488},
    {376706115, 4194608423, 3594444823, 1625946449, 403768163, 2456846785, 44584848, 84202017},
    {3064390814, 2716996388, 3897127426, 2552999677, 3013912747, 1452854892, 3978189518, 1284784196},
    {3199468428, 2903114874, 72247584, 2410968068, 2003524493, 4123634338, 435261870, 701486964},
    {828746335, 3913770139, 1618218172, 3278121503, 2079247718, 1978636954, 910397289, 96552693},
    {2211749314, 3357848024, 3537465382, 3532697268, 2132182736, 1966921197, 1315441937, 1777448477},
    {2200248661, 391584476, 2234387592, 2850080717, 2653523993, 3210840164, 2903237762, 1794426612},
    {554961316, 3167917252, 4221707975, 1012517545, 736753739, 110159932, 145505695, 227111964},
    {3875411415, 1613987934, 1084962884, 3019340126, 2315514976, 2094187263, 3497819348, 291280352},
    {1739154213, 3075259556, 3948002791, 1367585114, 1701733509, 3623455345, 3493135301, 1923303618},
    {1827158133, 3185981038, 878567088, 2821327133, 3663194195, 4207640486, 3564098674, 1184657196},
    {3758205899, 815333136, 2869440132, 1818787811, 1081254131, 1686248084, 1041506138, 381361493},
    {3628751007, 777692999, 4180345157, 4240314964, 3494907162, 692170506, 2009935286, 1322780120},
    {887413708, 23343153, 3555916162, 3334619375, 2777783869, 2643155742, 1986000428, 630137915},
    {4096942349, 4145995447, 897723766, 2990805409, 4029167381, 2495258909, 4088391249, 609264602},
    {612790660, 2661534473, 247248263, 1136855857, 1161947150, 1315488261, 3680235769, 1229555413},
    {722881024, 192705355, 1754502243, 2697508301, 2945854931, 3504159885, 3445165630, 238076059},
    {222219657, 3437798818, 2744917536, 224256950, 1904282056, 105073736, 772693683, 292110801},
    {1796528306, 837471306, 1567726322, 1897641954, 3078024748, 3325524011, 3385455562, 951015556},
    {2407829502, 3164486936, 1487657, 4182947136, 3849960947, 3830817126, 1138850753, 130868390},
    {1678448871, 4289024418, 2650638643, 67119139, 3182458352, 3617797334, 628056031, 191722155},
    {3324568052, 2439834493, 375051932, 2170654759, 2348874396, 3713035811, 4199471222, 283037510},
    {773651958, 2125754199, 199104117, 213977251, 367104435, 3157051288, 2326732794, 275408701},
    {2460311739, 1791145889, 3915204508, 1272346229, 2834150762, 3900627326, 148310662, 1750293843},
    {2130280064, 2159064112, 1437026429, 2733029067, 294236910, 1031342011, 2050658606, 1599487766},
    {1105683188, 141496307, 1055256037, 646629220, 2520569043, 2475709708, 3396934601, 14464324},
    {2583712422, 1775337336, 2707695021, 1832388440, 4273340329, 2820244513, 2507193407, 1404928203},
    {1269867733, 2223696603, 1861500459, 2421626755, 3502911196, 2815315379, 549184699, 16975667},
    {426922700, 3601088398, 4218337357, 1790978582, 4136866168, 4035715442, 2326873078, 235501400},
    {3402079655, 566662668, 553974537, 3190505572, 1786065459, 1789792927, 1424842205, 1816440650},
    {3848752806, 4260216223, 570978505, 2129098465, 232557756, 7106551, 687416267, 1391264097},
    {670044537, 331678659, 344646513, 3012645076, 36483293, 2753421815, 1891477861, 132172653},
    {7972615, 3961288035, 486739371, 228490819, 1675833723, 2413801880, 3168288162, 1168358009},
    {1158898905, 554620687, 1047964985, 3481289834, 4201243048, 75670413, 821867979, 231202146},
    {520239323, 1484416551, 3247647509, 1403067553, 1541879850, 3785630405, 1117276684, 85930988},
    {1931565112, 3470042772, 3537431410, 2318191566, 3569616629, 726769301, 1627396145, 328822231},
    {1678673875, 3628799819, 1857961535, 915186097, 3107622699, 3356035428, 3569404983, 1026648178},
    {913100268, 3846074625, 3740179720, 3454441980, 4093733473, 1346792008, 1163703973, 57404821},
    {1519620766, 1446603960, 2393223713, 1459282094, 1023092791, 2199286418, 2096208360, 699051559},
    {2219754787, 2500265080, 191792189, 1542645732, 1161454113, 2969905865, 3687236724, 10987900},
    {1743254412, 82672506, 3135049363, 887561904, 928784698, 2657646376, 288207897, 435585205},
    {3465517945, 3661905420, 2283191968, 3144869509, 3579046583, 2037447473, 1533911765, 211714799},
    {2496160147, 1418604384, 1802507016, 1336309157, 1184402515, 206535898, 128178254, 1130299949},
    {1961044967, 3019089825, 2997612316, 265811573, 3263223461, 3365214238, 1135984798, 1595605265},
    {1483975027, 2808544081, 229106190, 450319819, 1309534945, 3830732771, 1124125013, 281790638},
    {3747100452, 107125028, 607240855, 1725178756, 3597437256, 3348335091, 2059188672, 1306485825},
    {79235387, 3022164429, 1311047830, 3155028639, 916354506, 2279445426, 83551349, 1018957398},
    {2095857719, 3787514231, 1479065116, 482814220, 2228714165, 221954960, 4265971691, 1649347513},
    {3188516880, 3597244272, 108997607, 353456206, 3223447432, 446895619, 2424498673, 1113641309},
    {57226169, 310268999, 3047208456, 3667872449, 1342874028, 1962131723, 2203612281, 717247378},
    {2523858162, 3604519783, 975513559, 4197094359, 2071686613, 2849799672, 321527978, 1319949504},
    {1913310732, 564832490, 732308813, 2586688178, 4054037287, 2720587232, 909207782, 1001626679},
    {4229590794, 3110228758, 4161959585, 4143451607, 1274301898, 499710233, 2801297171, 1696629637},
    {4283094591, 2041587860, 4272909686, 3032518657, 1275782421, 638738833, 562322176, 1764251529},
    {2166709661, 2507730084, 2167347676, 730353949, 4164042092, 702353215, 1692356174, 630374766},
    {4139857027, 2019739214, 1365461556, 190724658, 3746881101, 1551936264, 2542716346, 641014892},
    {3705816562, 1108147156, 1905372056, 2828808730, 1103318054, 1094456706, 1691237212, 559553895},
    {4190357473, 2752760058, 3475907929, 138551448, 2308123641, 1481331661, 4250021059, 794197070},
    {2204086692, 2614018999, 4066699829, 2915251952, 1331110005, 2166000553, 3772671276, 708029528},
    {3657760721, 2239870589, 436271478, 2779795192, 24689995, 1297075264, 1671988556, 523339184},
    {884023061, 652621983, 62069329, 1533423970, 279751135, 1384150035, 2787913666, 1184536494},
    {3832683369, 3220024363, 3898646445, 3616156349, 1816361908, 58265014, 2258645744, 1322185408},
    {2186663972, 992823504, 580939809, 4134674086, 3099356555, 1833300007, 689911450, 1656492952},
    {702913923, 1119558248, 3418804320, 2560686829, 3844756959, 2394009955, 1587731805, 1401231027},
    {3358386685, 971450419, 3942097807, 1751903613, 2010516544, 1867306049, 3690714201, 1210488397},
    {3401698520, 536404836, 794977212, 3865401272, 293002110, 51547193, 2792668565, 794288943},
    {2535122179, 3301198404, 1831226988, 939065116, 2928600716, 482930544, 1250716156, 1762491790},
    {754984898, 38001923, 2689392564, 1026928647, 489115662, 455738937, 2410612830, 1307198941},
    {172844518, 1699952276, 1485123703, 1156671318, 3179094813, 1188798431, 112551259, 1847940720},
    {3545208113, 2289833538, 2649086240, 2023989097, 3349947852, 696893462, 687717267, 1856396125},
    {3910459449, 3705304614, 3532442943, 3481251226, 895301896, 2986084489, 3299258047, 1761424967},
    {2725674291, 116532222, 3565763434, 1451215632, 1092995942, 2035526239, 1045737445, 1613646521},
    {4130593726, 3024687204, 1021306812, 2469430501, 497194315, 2974581792, 1255017536, 597255305},
    {523876618, 761620533, 3490119046, 1051900320, 1477617871, 2040477122, 3099679769, 1824205879},
    {4238414613, 3935907273, 2701284094, 1435298493, 2842895400, 3094051424, 2033163260, 1083623692},
    {642361789, 1604941380, 2400216156, 566375932, 30286136, 1212333003, 4008803597, 1648114656},
    {4152681515, 2343918434, 2094367525, 1848475261, 1968024081, 2889245354, 3005464900, 1786065752},
    {1081950398, 3116162259, 3148939719, 2734634826, 499009055, 1696427234, 1357324515, 801013715},
    {998077513, 4143316008, 3160753512, 1619454701, 647700665, 2041647364, 4250743448, 876294208},
    {42525978, 2569996457, 3426184151, 3354583607, 4034764830, 1228943658, 894711986, 618735436},
    {885919544, 1214434554, 3367715898, 2051767156, 3953912206, 4149513394, 37475677, 727749078},
    {4011510622, 1671330619, 385068934, 1150628512, 1425291267, 724496539, 1547726122, 746328500},
  };

  for (int i = 0; i < digests_len; i++) {
    scalar_t root = digests[i];
    assert(root == expected[i]);
  }
  free(digests);
  free(leaves);
}

#endif