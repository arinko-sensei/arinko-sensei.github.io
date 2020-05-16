<!--
gyoshori = "br";	// 行処理 normal , bunkatu:行分割, br:改行タグ付加, thru:無処理
shuffle = false;		// 行分割したとき各問いをランダムに入れ替える
qn_string = "123";	// 問題番号の文字
bt_func = "seigo";	// 番号ボタンのふるまい
box_size = "";		// 解答欄のサイズ
ssort = true;		// 選択肢を昇順に並べかえる
kaito_ctrl = true;	// 解答ボタンの制限
hint_btn = false;	// ヒントボタンの有無
shikii = 50;		// 解答を得るための敷居値
tag_conv = false;
bgc1 = "lightcyan";
bgc2 = "white";
txtc1 = "black";
txtc2 = "black";
pre1 = "";
pre2 = "";
Win0opened = false;

a = new Array();
qn = new Array();
ptitle = "";
mondai_top = "以下の文中の空欄を適当な語句でうめて完成しなさい。";

// 問題文 qdata
var qdata = "   <h2>第１　目標</h2>　\n\n｛自然｝に親しみ，見通しをもって｛観察｝，｛実験｝などを行い，問題解決の能力と自然を愛する心情を育てるとともに,自然の事物・現象についての｛実感｝を伴った理解を図り，｛科学的｝な見方や考え方を養う。\n\n<h2>第2　各学年の目標及び内容<h2>\n\n<h4>第3学年</h4>\n\n<em>１　目標</em>\n\n(1）　物の重さ，風やゴムの力並びに光，磁石及び電気を働かせたときの現象を｛比較｝しながら調べ，見いだした問題を興味・関心をもって｛追究｝したり｛ものづくり｝をしたりする活動を通して，それらの｛性質｝や｛働き｝についての見方や考え方を養う。\n\n（2）　身近に見られる動物や植物，日なたと日陰の地面を比較しながら調べ，見いだした問題を興味・関心をもって追究する活動を通して，生物を｛愛護｝する態度を育てるとともに，生物の｛成長のきまり｝や｛体のつくり｝，生物と｛環境｝とのかかわり，太陽と地面の様子との関係についての見方や考え方を養う。\n\n<em>２　内容</em>\n\nA　物質・エネルギー\n\n（1）　物と重さ\n\n　粘土などを使い，物の重さや体積を調べ，物の性質についての考えをもつことができるようにする。\n\n　　ア　物は、｛形｝が変わっても重さは変わらないこと。\n\n　　イ　物は、｛体積｝が同じでも重さは違うことがあること。\n\n（2）　風やゴムの動き\n\n　風やゴムで物が動く様子を調べ，風やゴムの｛働き｝についての考えをもつことができるようにする。 \n\n　　ア　風の力は，物を動かすことができること。\n\n　　イ　ゴムの力は，物を動かすことができること。\n\n　（3）　光の性質\n\n　鏡などを使い，光の進み方や物に光が当たったときの明るさや暖かさを調べ，光の性質についての考えをもつことができるようにする。\n\n　　ア　日光は集めたり｛反射｝させたりできること。\n\n　　イ　物に｛日光｝を当てると，物の明るさや暖かさが変わること。\n\n　（4）　磁石の性質\n\n　｛磁石に付く物｝や磁石の働きを調べ，磁石の｛性質｝についての考えをもつことができるようにする。\n\n　　ア　物には，磁石に引き付けられる物と引き付けられない物があること。また，磁石に引き付けられる物には，磁石に付けると｛磁石になる｝物があること。\n\n　　イ　磁石の｛異極｝は引き合い，同極は退け合うこと。\n\n　（5）　電気の通り道\n\n　乾電池に｛豆電球｝などをつなぎ，電気を通すつなぎ方や電気を通す物を調べ，電気の｛回路｝についての考えをもつことができるようにする。\n\n　　ア　電気を通すつなぎ方と通さないつなぎ方があること。\n\n　　イ　電気を通す物と通さない物があること。\n\nB　生命・地球\n\n 　(1）　昆虫と植物\n\n　身近な昆虫や植物を探したり育てたりして，｛成長｝の過程や｛体のつくり｝を調べ，それらの成長のきまりや体のつくりについての考えをもつことができるようにする。\n\n　　ア　昆虫の育ち方には一定の順序があり，成虫の体は｛頭｝，｛胸｝及び｛腹｝からできていること。\n\n　　イ　植物の育ち方には一定の順序があり，その体は根，茎及び葉からできていること。\n\n　（2）　身近な自然の観察\n\n　身の回りの生物の様子を調べ，生物と｛その周辺の環境｝との関係についての考えをもつことができるようにする。\n\n　　ア　生物は，｛色｝，｛形｝，大きさなどの姿が違うこと。\n\n　　イ　生物は，その周辺の環境とかかわって生きていること。\n\n　（3）　太陽と地面の様子\n\n　｛日陰｝の位置の変化や，日なたと日陰の｛地面｝の様子を調べ，太陽と地面の様子との｛関係｝についての考えをもつことができるようにする。\n\n　　ア　日陰は｛太陽の光｝を遮るとでき，日陰の位置は太陽の｛動き｝によって変わること。\n\n　　イ　地面は太陽によって暖められ，日なたと日陰では｛地面｝の暖かさや湿り気に違いがあること。\n\n<em>3　内容の取扱い</em>\n\n　（1）　内容の「A物質・エネルギー」の指導に当たっては，｛3｝種類以上のものづくりを行うものとする。\n\n　（2）　内容の「B生命・地球」の（1）については，次のとおり取り扱うものとする。\n\n　　ア　ア及びイについては，｛飼育｝，｛栽培｝を通して行うこと。\n\n　　イ　イの「植物の育ち方」については，｛夏生一年生｝の｛双子葉｝植物を扱うこと。\n\n　（3）　内容の「B生命・地球」の（3）のアの「太陽の動き」については，太陽が東から｛南｝を通って西に動くことを取り扱うものとする。また，太陽の動きを調べるときの方位は東，西，南，北を扱うものとする。\n\n<h4>第4学年</h4>\n\n<em>１　目標</em>\n\n（1）　空気や水，物の｛状態｝の変化，電気による現象を｛力｝，｛熱｝，｛電気｝の働きと関係付けながら調べ，見いだした問題を興味・関心をもって追究したりものづくりをしたりする活動を通して，それらの｛性質｝や｛働き｝についての見方や考え方を養う。\n\n（2）　人の体のつくり，動物の活動や植物の成長，天気の様子，月や星の位置の変化を運動，｛季節｝，気温，｛時間｝などと｛関係付け｝ながら調べ，見いだした問題を興味・関心をもって追究する活動を通して，生物を愛護する態度を育てるとともに，人の体のつくりと運動，動物の活動や植物の成長と環境とのかかわり，気象現象，月や星の動きについての見方や考え方を養う。\n\n<em>2　内容</em>\n\n　（1）　空気と水の性質\n\nA　物質・エネルギー\n\n　（1）　空気と水の性質\n\n　閉じ込めた空気及び水に｛力｝を加え，その体積や｛圧（お）し返す｝の変化を調べ，空気及び水の性質についての考えをもつことができるようにする。\n\n　　ア　閉じ込めた空気を圧（お）すと，体積は｛小さく｝なるが，圧（お）し返す力は｛大きく｝なること。\n\n　　イ　閉じ込めた｛空気｝は圧（お）し縮められるが，｛水｝は圧（お）し縮められないこと。\n\n　（2）　金属，水，空気と温度\n\n　金属，水及び空気を｛温め｝たり｛冷やし｝たりして，それらの変化の様子を調べ，金属，水及び空気の性質についての考えをもつことができるようにする。\n\n　　ア　金属，水及び空気は，温めたり冷やしたりすると，その｛体積｝が変わること。\n\n　　イ　｛金属｝は熱せられた部分から順に温まるが，水や空気は熱せられた部分が｛移動｝して全体が温まること。\n\n　　ウ　水は，｛温度｝によって｛水蒸気｝や氷に変わること。また，水が氷になると体積が｛増える｝こと。\n\n　（3）　電気の働き\n\n　乾電池や光電池に豆電球や｛モーター｝などをつなぎ，乾電池や光電池の働きを調べ，電気の働きについての考えをもつことができるようにする。\n\n　　ア　乾電池の数やつなぎ方を変えると，豆電球の｛明るさ｝やモーターの｛回り方｝が変わること。\n\n　　イ　｛光電池｝を使ってモーターを回すことなどができること。\n\nB　生命・地球\n\n　（1）　人の体のつくりと運動\n\n　人や他の動物の体の動きを観察したり｛資料｝を活用したりして，｛骨｝や｛筋肉｝の動きを調べ，人の体のつくりと｛運動｝とのかかわりについての考えをもつことができるようにする。\n\n　　ア　人の体には骨と筋肉があること。\n\n　　イ　人が体を動かすことができるのは，骨，筋肉の働きによること。\n\n　（2）　季節と生物\n\n　身近な動物や植物を探したり育てたりして，｛季節｝ごとの動物の活動や植物の成長を調べ，それらの活動や｛成長｝と｛環境｝とのかかわりについての考えをもつことができるようにする。\n\n　　ア　動物の活動は，｛温かい｝季節，｛寒い｝季節などによって違いがあること。\n\n　　イ　｛植物｝の成長は，暖かい季節，寒い季節などによって違いがあること。\n\n　(3）　天気の様子\n\n　1日の気温の変化や水が｛蒸発｝する様子などを観察し，天気や｛気温｝の変化，水と水蒸気との関係を調べ，天気の様子や自然界の水の変化についての考えをもつことができるようにする。\n\n　　ア　天気によって1日の気温の変化の仕方に違いがあること。\n\n　　イ　水は，｛水面｝や地面などから蒸発し，水蒸気になって｛空気中｝に含まれていくこと。また，空気中の水蒸気は，｛結露｝して再び水になって現れることがあること。\n\n　（4）　月と星\n\n　月や星を観察し，月の｛位置｝と星の明るさや｛色｝及び位置を調べ，月や星の特徴や動きについての考えをもつことができるようにする。\n\n　　ア　月は｛日｝によって形が変わって見え，1日のうちでも｛時刻｝によって位置が変わること。\n\n　　イ　｛時刻｝には，明るさや色の違う星があること。\n\n　　ウ　星の集まりは，1日のうちでも｛時刻｝によって，｛並び方｝は変わらないが，位置が変わること。\n\n<em>3　内容の取扱い</em>\n\n（1）　内容の「A物質・エネルギー」の指導に当たっては，｛2｝種類以上のものづくりを行うものとする。\n\n（2）　内容の「A物質・エネルギー」の（3）のアについては，｛直列｝つなぎと｛並列｝つなぎを扱うものとする。\n\n（3）　内容の「B生命・地球」の（1）のイについては，｛関節｝の働きを扱うものとする。\n\n（4）　内容の「B生命・地球」の（2）については，1年を通して動物の活動や植物の成長をそれぞれ｛2｝種類以上観察するものとする。\n\n<h4>第5学年</h4>\n\n<em>１　目標</em>\n\n（1）　物の｛溶け方｝，｛振り子｝の運動，電磁石の変化や働きをそれらにかかわる｛条件｝に目を向けながら調べ，見いだした問題を｛計画的｝に追究したりものづくりをしたりする活動を通して，物の変化の｛規則性｝についての見方や考え方を養う。\n\n（2）　植物の｛発芽｝から｛結実｝までの過程，動物の｛発生｝や成長，｛流水｝の様子，天気の変化を｛条件｝，時間，水量，自然災害などに目を向けながら調べ，見いだした問題を計画的に追究する活動を通して，生命を｛尊重｝する態度を育てるとともに，生命の｛連続性｝，流水の働き，気象現象の｛規則性｝についての見方や考え方を養う。\n\n<em>2　内容</em>\n\nA　物質・エネルギー\n\n　(1）　物の溶け方\n\n　物を水に溶かし，水の｛温度｝や｛量｝による溶け方の違いを調べ，物の溶け方の規則性についての考えをもつことができるようにする。\n\n　　ア　物が水に溶ける量には｛限度｝があること。\n\n　　イ　物が水に溶ける量は水の温度や量，｛溶ける｝物によって違うこと。また，この性質を利用して，溶けている物を｛取り出す｝ことができること。\n\n　　ウ　物が水に溶けても，水と物とを合わせた｛重さ｝は変わらないこと。\n\n　（2）　振り子の運動\n\n　おもりを使い，おもりの｛重さ｝や糸の｛長さ｝などを変えて振り子の動く様子を調べ，振り子の運動の｛規則性｝についての考えをもつことができるようにする。\n\n 　　ア　糸につるしたおもりが1往復する時間は，おもりの重さなどによっては変わらないが，｛糸の長さ｝によって変わること。\n\n　（3）　電流の働き\n\n　電磁石の導線に｛電流｝を流し，電磁石の｛強さ｝の変化を調べ，電流の働きについての考えをもつことができるようにする。\n\n　　ア　電流の流れている｛電流｝は，鉄心を｛磁化｝する働きがあり，電流の｛向き｝が変わると，電磁石の極が変わること。\n\n　　イ　電磁石の強さは，電流の強さや導線の｛巻数｝によって変わること。\n\nB　生命・地球\n\n　（1）　植物の発芽，成長，結実\n\n　植物を育て，植物の発芽，成長及び結実の様子を調べ，植物の発芽，成長及び結実とその｛条件｝についての考えをもつことができるようにする。\n\n　　ア　植物は，種子の中の｛養分｝を基にして発芽すること。\n\n　　イ　植物の発芽には，水，空気及び｛温度｝が関係していること。\n\n　　ウ　植物の成長には，日光や｛肥料｝などが関係していること。\n\n　　エ　花にはおしべやめしべなどがあり，｛花粉｝が｛めしべ｝の先に付くとめしべのもとが｛実｝になり，実の中に種子ができること。\n\n　（2）　動物の誕生\n\n　魚を育てたり人の｛発生｝についての資料を活用したりして，卵の変化の様子や｛水中｝の小さな生物を調べ，動物の発生や成長についての考えをもつことができるようにする。\n\n　　ア　魚には｛雌雄｝があり，生まれた卵は日がたつにつれて中の様子が変化してかえること。\n\n　　イ　魚は，水中の小さな生物を｛食べ物｝にして生きていること。\n\n　　ウ　人は，｛母体｝内で成長して生まれること。\n\n　（3）　流水の働き\n\n　地面を流れる水や｛川｝の様子を観察し，流れる水の｛速さ｝や量による働きの違いを調べ，流れる水の働きと｛土地｝の変化の関係についての考えをもつことができるようにする。\n\n　　ア　流れる水には，土地を｛侵食｝したり，石や土などを｛運搬｝したり｛堆積｝させたりする働きがあること。\n\n　　イ　川の｛上流｝と｛下流｝によって，川原の石の大きさや形に違いがあること。\n\n　　ウ　雨の降り方によって，流れる水の速さや水の量が変わり，｛増水｝により土地の様子が大きく変化する場合があること。\n\n　（4）　天気の変化\n\n　1日の雲の様子を観測したり，｛映像｝などの情報を活用したりして，雲の動きなどを調べ，天気の変化の仕方についての考えをもつことができるようにする。\n\n　　ア　雲の量や動きは，天気の変化と関係があること。\n\n　　イ　天気の変化は，映像などの気象情報を用いて｛予想｝できること。\n\n<em>3　内容の取扱い</em>\n\n　（1）　内容の「A物質・エネルギー」の指導に当たっては，｛2｝種類以上のものづくりを行うものとする。\n\n　（2）　内容の「B生命・地球」の（1）については，次のとおり取り扱うものとする。\n\n　　ア　アの「種子の中の養分」については，｛でんぷん｝を扱うこと。\n\n　　イ　エについては，おしべ，めしべ，｛がく｝及び｛花びら｝を扱うこと。また，｛受粉｝については，｛風｝や昆虫などが関係していることにも触れること。\n\n　（3）　内容の「B生命・地球」の（2）のウについては，｛受精｝に至る過程は取り扱わないものとする。\n\n　（4）　内容の「B生命・地球」の（4）のイについては，｛台風｝の進路による天気の変化や台風と｛降雨｝との関係についても触れるものとする。>\n\n<h4>第6学年</h4>\n\n<em>１　目標</em>\n\n(1）　燃焼，水溶液，てこ及び電気による現象についての｛要因｝や規則性を｛推論｝しながら調べ，見いだした問題を計画的に追究したりものづくりをしたりする活動を通して，物の性質や規則性についての見方や考え方を養う。\n\n(2）　生物の体のつくりと働き，生物と環境，｛土地｝のつくりと変化の様子，月と｛太陽｝の関係を推論しながら調べ，見いだした問題を計画的に追究する活動を通して，生命を尊重する態度を育てるとともに，生物の体の働き，生物と環境とのかかわり，土地のつくりと変化のきまり，月の｛位置｝や｛特徴｝についての見方や考え方を養う。\n\n<em>2　内容</em>\n\nA　物質・エネルギー\n\n　（1）　燃焼の仕組み\n\n　物を燃やし，物や空気の変化を調べ，｛燃焼｝の仕組みについての考えをもつことができるようにする。\n\n　　ア　｛植物体｝が燃えるときには，空気中の｛酸素｝が使われて｛二酸化炭素｝ができること。\n\n　（2）　水溶液の性質\n\n　いろいろな｛水溶液｝を使い，その性質や｛金属｝を変化させる様子を調べ，水溶液の性質や働きについての考えをもつことができるようにする。\n\n　　ア　水溶液には，酸性，アルカリ性及び｛中｝性のものがあること。\n\n　　イ　水溶液には，｛気体｝が溶けているものがあること。\n\n　　ウ　水溶液には，金属を変化させるものがあること。\n\n　（3）　てこの規則性\n\n　てこを使い，力の加わる位置や大きさを変えて，てこの仕組みや働きを調べ，てこの｛規則性｝についての考えをもつことができるようにする。\n\n　　ア　水平につり合った棒の｛支点｝から等距離に物をつるして棒が｛水平｝になったとき，物の重さは｛等しい｝こと。\n\n　　イ　力を加える位置や力の大きさを変えると，てこを｛傾ける｝働きが変わり，てこがつり合うときにはそれらの間に｛規則性｝があること。\n\n　　ウ　身の回りには，てこの規則性を利用した｛道具｝があること。\n\n　（4）　電気の利用\n\n　｛手回し発電機｝などを使い，電気の利用の仕方を調べ，電気の性質や働きについての考えをもつことができるようにする。\n\n　　ア　電気は，つくりだしたり｛蓄え｝たりすることができること。\n\n　　イ　電気は，光，｛音｝，｛熱｝などに変えることができること。\n\n　　ウ　｛電熱線｝の発熱は，その｛太さ｝によって変わること。\n\n　　エ　身の回りには，電気の性質や働きを利用した道具があること。\n\nB　生命・地球\n\n　（1）　人の体のつくりと働き\n\n　人や他の動物を観察したり資料を活用したりして,｛呼吸｝，消化，｛排泄｝及び｛循環｝の働きを調べ，人や他の動物の体のつくりと働きについての考えをもつことができるようにする。\n\n　　ア　体内に｛酸素｝が取り入れられ，体外に二酸化炭素などが出されていること。\n\n　　イ　食べ物は，口，胃，｛腸｝などを通る間に消化，吸収され，吸収されなかった物は｛排泄｝されること。\n\n　　ウ　血液は，｛心臓｝の働きで体内を巡り，｛養分｝，酸素及び二酸化炭素などを運んでいること。\n\n　　エ　体内には，生命活動を維持するための様々な｛臓器｝があること。\n\n　（2）　植物の養分と水の通り道\n\n　植物を観察し，植物の体内の｛水｝などの行方や｛葉｝で養分をつくる働きを調べ，植物の体のつくりと働きについての考えをもつことができるようにする。\n\n　　ア　植物の葉に日光が当たると｛でんぷん｝ができること。\n\n　　イ　根，茎及び葉には，水の｛通り道｝があり，｛根｝から吸い上げられた水は主に葉から｛蒸散｝していること。\n\n　（3）　生物と環境\n\n　動物や植物の｛生活｝を観察したり，資料を活用したりして調べ，生物と環境とのかかわりについての考えをもつことができるようにする。\n\n　　ア　生物は，水及び｛空気｝を通して周囲の環境とかかわって生きていること。\n\n　　イ　生物の間には，｛食う食われる｝という関係があること。\n\n　（4）　土地のつくりと変化\n\n　土地やその中に含まれる物を観察し，土地の｛つくり｝や土地の｛でき方｝を調べ，土地のつくりと変化についての考えをもつことができるようにする。\n\n　　ア　土地は，｛礫（れき）｝，砂，泥，｛火山灰｝及び｛岩石｝からできており，層をつくって広がっているものがあること。\n\n　　イ　地層は，流れる水の働きや火山の噴火によってでき，｛化石｝が含まれているものがあること。\n\n　　ウ　土地は，火山の噴火や｛地震｝によって変化すること。\n\n　（5）　月と太陽\n\n　月と太陽を観察し，月の位置や形と太陽の位置を調べ，月の形の見え方や｛表面｝の様子についての考えをもつことができるようにする。 \n\n　　ア　月の｛輝いている｝側に太陽があること。また，月の形の見え方は，太陽と月の｛位置関係｝によって変わること。\n\n　　イ　月の表面の様子は，｛太陽｝と違いがあること。\n\n<em>3　内容の取扱い</em>\n\n（1）　内容の「A物質・エネルギー」の指導に当たっては，2種類以上のものづくりを行うものとする。\n\n（2）　内容の「B生命・地球」の（1）については，次のとおり取り扱うものとする。\n\n　ア　ウについては，心臓の｛拍動｝と｛脈拍｝が関係することにも触れること。\n\n　イ　エについては，主な臓器として，｛肺｝，｛胃｝，｛小腸｝，｛大腸｝，｛肝臓｝，｛腎臓｝，｛心臓｝を扱うこと。\n\n（3）　内容の「B生命・地球」の（3）のアについては，｛水｝が循環していることにも触れるものとする。\n\n（4）　内容の「B生命・地球」の（4）については，次のとおり取り扱うものとする。\n\n　ア　アについては，岩石として｛礫岩｝，｛砂岩｝及び｛泥岩｝を扱うこと。\n\n　イ　イの「化石」については，地層が｛流れる水｝の働きによって堆積したことを示す証拠として扱うこと。\n\n（5）　内容の「B生命・地球」の（5）のアについては，｛地球｝から見た太陽と月の位置関係で扱うものとする。\n\n<h2>第3　指導計画の作成と内容の取り扱い</h2>\n\n1.指導計画の作成に当たっては，次の事項に配慮するものとする。\n\n　（1）　第2の各学年の内容を通じて観察，実験や｛自然体験｝，｛科学的｝な体験を充実させることによって，科学的な知識や概念の定着を図り，科学的な見方や考え方を育成するよう配慮すること。\n\n　（2）　観察，実験の結果を整理し考察する｛学習活動｝や，科学的な言葉や｛概念｝を使用して考えたり説明したりするなどの学習活動が充実するよう配慮すること。\n\n　（3）　博物館や科学学習センターなどと連携，｛協力｝を図りながら，それらを積極的に活用するよう配慮すること。\n\n　（4）　第1章総則の第1の2及び第3章道徳の第1に示す｛道徳教育｝の目標に基づき，道徳の時間などとの関連を考慮しながら，第3章道徳の第2に示す内容について，理科の特質に応じて適切な指導をすること。\n\n2.第2の内容の取扱いについては，次の事項に配慮するものとする。\n\n　（1）　観察，実験，栽培，飼育及びものづくりの指導については，指導内容に応じて｛コンピュータ｝，｛視聴覚機器｝などを適切に活用できるようにすること。また，事故の防止に十分留意すること。\n\n　（2）　生物，天気，川，土地などの指導については，野外に出掛け地域の自然に親しむ活動や｛体験的｝な活動を多く取り入れるとともに，｛自然環境｝を大切にし，その｛保全｝に寄与しようとする態度を育成するようにすること。\n\n　（3）　個々の児童が｛主体的｝に問題解決活動を進めるとともに，学習の成果と｛日常生活｝との関連を図り，自然の事物・現象について｛実感｝を伴って理解できるようにすること。";
// === end of qdata

// ヒント hint
var hintdata = "";
// === end of hintdata

h = new Array();
if (hint_btn || bt_func =="hint") h = makehint(hintdata);

separator = new Array("｛","｝","｜");
tag0 = new Array("<",">");
tag1 = new Array("&lt;","&gt;");

if (gyoshori=="normal" || gyoshori=="bunkatu") question = rowsplit(qdata);
if (gyoshori=="br") question = plusbr(qdata);
if (gyoshori=="thru") question = qdata;

// 問題番号文字列をセット NUM:空欄の数 文字不足時は数字にセット
var x=0, NUM=0, qnlen;
while(x>=0){
  x=question.indexOf(separator[0],x);
  if (x==-1) break;
  x++; NUM++;
}
qnlen = qn_string.length;
var qns = qn_string.substring(0,1), qnn;
if (qns=="1" || qns=="a" || qns=="A") qnn=1; else qnn="あ".length;
for(i=1;i<=qnlen;i++) { qn[i]=qn_string.substring((i-1)*qnn,i*qnn);}
if (qnlen<NUM) for(i=1;i<=NUM;i++) { qn[i]=i; }

s = new Array();
for (i=0;i<=NUM;i++) s[i] = new Array();  // select form value 配列

// 問題文中から穴埋め箇所と解答を抽出し，Form TAG に置き換え
var x0=0, x1=0, x2=0, i=1, ql, str="", bx_size;
while(x1>=0){
  ql=question.length;
  x1 = question.indexOf(separator[0],x0);
  if (x1==-1) break;
  x2 = question.indexOf(separator[1],x0);
  a[i] = question.substring(x1+separator[0].length, x2);
  if (tag_conv) a[i]=tagrev(a[i]);
  str = question.substring(0,x1);
  if (a[i].indexOf(separator[2],0)==-1){
    if (box_size=="") bx_size=jstrlen(a[i]); else bx_size=box_size;
    str += "<input name=q" + i + " size=" + bx_size + ">";
  } else {
    str += fselect(a[i],i);
  }
  if (bt_func != "nodisp") str += "<input type=button value='" + qn[i] + "' class=qn";
  if (bt_func == "seigo") str += " onClick='hantei(" + i + ")'>";
  if (bt_func == "hint") str += " onClick='alert(\"" + h[i] + "\")'>";
  if (bt_func == "none") str += ">";
  x0 = str.length;
  question = str + question.substring(x2+separator[1].length,ql);
  i++;
}

var str_body = "<div class=honbun><form name=f>";
str_body += "<h3 class=ptitle>" + ptitle + "<\/h3>";
str_body += "<b class=qtop>" + mondai_top + "<\/b>";
str_body += "<hr width=600><div class=mondai>" + question + "<\/div><hr width=600>";
str_body += "<table width=600><tr><td>";
str_body += "<div align=center><input type=button value='採点' onClick='saiten();' class=bt>　<input type=reset value='リセット' class=bt>";
str_body += "　<input type=button value='解答' onClick='kaito();' class=bt>";
if (hint_btn) str_body += "　<input type=button value='ヒント' onClick='hintdisp();' class=bt>";

str_body += "<\/td><\/tr><\/table><\/form><\/div>";


// ------------ サブルーチン -------------

// ヒント配列 h[] の作成
function makehint(data) {
  str = data.split("\n");
  h = new Array();
  j=1;
  for (i in str){
    if (str[i] != "") {
      h[j] = str[i];
      j++;
    }
  }
  return h; 
}

// データを空行で分割
function qconv(data){
  str = data.split("\n");
  var j=1;
  q[j]="";
  for (i in str) {
    if (str[i] != "") {
       q[j] += str[i] + "<br>";
    } else if (i>0) {
       if (str[i-1] != "") j++;
       q[j]="";
    }
  }
  return j-1;
}

// データを行単位で分割
function qconv2(data){
  str = data.split("\n");
  j=1;
  for (i in str) {
    if (str[i] != "") { q[j]=str[i]; j++; }
  }
  return j-1;
}

// データを行, 空行で分割し，行末に改行タグを挿入。shuffleの場合はランダム化
function rowsplit(data){
  str = data.split("\n");
  q = new Array();
  x = new Array();
  hintm = new Array();
  
  if (gyoshori=="normal") j = qconv(data);
  if (gyoshori=="bunkatu") j = qconv2(data);
  
  // ヒントを２次元配列 hintm[][] に格納
  for (i=0;i<=j;i++) hintm[i] = new Array();
  var xx=0, m=0, n;  // m:何問目
  for (i=1;i<=j;i++){
     xx=0; n=0;
     while(xx>=0){
       xx=q[i].indexOf(separator[0],xx);
       if (xx==-1) break;
       xx++; m++; n++;
       hintm[i][n] = h[m];  // i問目のn番目のヒント
     }
  }

  x = ransu(j);
  var ss = "<table width=600 border=0 cellpadding=5 cellspacing=0>";
  m=0;
  for (i=1;i<=j;i++){
    if (shuffle) {
        k=x[i];
        // ヒント配列組み直し
        xx=0; n=0;
        while(xx>=0){
          xx=q[k].indexOf(separator[0],xx);
          if (xx==-1) break;
          xx++; m++; n++;
          h[m] = hintm[k][n];  // k問目のn番目のヒント
        }
    } else k=i;
    if (i % 2 == 1) { bgc=bgc1; txtc=txtc1;} else { bgc=bgc2; txtc=txtc2; }
    ss += "<tr><td bgcolor=" + bgc + " valign=top width=36>";
    ss += "<table border=2 cellspacing=0><tr><th width=24 height=24 bgcolor=pink><font color=black>" + i + "<\/font><\/th><\/tr><\/table><\/td>";
    ss += "<td bgcolor=" + bgc + " width=564><font color=" + txtc + ">"+ pre1 + q[k] + pre2 + "<\/font><\/td><\/tr>";
  }
  ss += "<\/table>";
  return ss;
}

// データはそのままに，各行の最後に <br>を挿入
function plusbr(data){
  str = data.split("\n");
  var ss="";
  for (i in str) ss += str[i] + "<br>";
  return ss;
}

// 文字列からセパレータ｜を探し，選択肢を抽出。select form 作成
function fselect(str,n) {
  var x=0, i=1, j, data;
  var xr = new Array();
  var w = new Array();
  s[n][0]=""; w[0]="";
  while(x>=0){
    alen = str.length;
    x = str.indexOf(separator[2],0);
    if (x==-1) break;
    w[i]=str.substring(0,x);
    str = str.substring(x+separator[2].length,alen);
    i++;
  }
  w[i]=str;
  a[n]=w[1];  // 正解を a[n] にセット
  data = "<select name=q"  + n + "><option value=''> ";
  if (ssort)  w.sort(); else xr = ransu(i);
  for (j=1;j<=i;j++){
    if (ssort) k = j; else k = xr[j];
    data += "<option value='" + w[k] + "'>" + w[k];
    s[n][j]=w[k];
  }
  data += "<\/select>";
  return data;
}

// n までの整数をランダムに発生  戻り値 x[]
function ransu(n) {
  var k=1, l,  bingo;
  var x=new Array();
  x[k] = Math.floor(n * Math.random())+1;
  k++;
  while ( k<=n ) {
    x[k] = Math.floor(n * Math.random())+1;
    bingo = 0;
    for (l=1; l<k; l++) {  // すでに同じ数字がないかチェック
       if ( x[k] == x[l] ) { bingo=1; break; }
    }
    if (bingo==0) k++;     // 同じ数字がなければ k++
  }
  return x;
}

// 文字列の長さを返す（日本語を２としてカウント）
function jstrlen(str) {
  var len = 0, i;
  str = escape(str);
  for (i=0;i<str.length;i++,len++) {
    if (str.charAt(i) == "%") {
      if (str.charAt(++i) == "u") {
        i += 3;
        len++;
      }
      i++;
    }
  }
  return len;
}

// タグ文字変換 <> → &lt; &gt;
function tagconv(s){
  var i, x;
  for(i in tag0){
    x = s.indexOf(tag0[i],0);
    while(x>-1){
      s = s.substring(0,x) + tag1[i] + s.substring(x+tag0[i].length,s.length);
      x = s.indexOf(tag0[i],0);
    }
  }
  return s;
}

// タグ文字変換 &lt; &gt; → <>
function tagrev(s){
  var i, x;
  for(i in tag1){
    x = s.indexOf(tag1[i],0);
    while(x>-1){
      s = s.substring(0,x) + tag0[i] + s.substring(x+tag1[i].length,s.length);
      x = s.indexOf(tag1[i],0);
    }
  }
  return s;
}

// 正誤判定ボタンを押した時の処理
function hantei(m) {
  var answer="";
  if (document.f.elements[(m-1)*2].type == "text") { 
    answer = document.f.elements[(m-1)*2].value;
  } else {
    answer = s[m][document.f.elements[(m-1)*2].selectedIndex];
  }
  if (answer==a[m]) alert("○ 正解！"); else alert("× 違うよ！");
}

// 採点し，score を返す
function scorecheck(){
  var tmp, data="", seikai=0, mm;
  answer = new Array();
  maru = new Array();
  if (bt_func == "nodisp") mm=1; else mm=2;
  // 正解数をカウントし，○×判定 maru[]
  for (i=1;i<=NUM;i++) {
    if (document.f.elements[(i-1)*mm].type=="text") {
        answer[i] = document.f.elements[(i-1)*mm].value;
    } else {
      answer[i] = s[i][document.f.elements[(i-1)*mm].selectedIndex];
    }
    if (answer[i] == a[i]) {
       maru[i] = true;
       seikai += 1;
    } else { maru[i]=false; }
  }
  score = Math.floor(100*seikai/NUM + 0.5);
  return score;
}

// 採点ボタンを押したときの処理
function saiten(){
  score = scorecheck();
  data ="<html><head><title>採点結果<\/title><\/head><bo" + "dy bgcolor=pink><center>";
  data += "<h3>結　果<\/h3><form>";
  data += "<table border cellspacing=0>";
  data += "<tr><th width=25 height=25>問<\/th><th width=120>あなたの解答<\/th><th>正誤<\/th>";
  for (i=1;i<=NUM;i++) {
    data += "<tr><th height=25>" + qn[i] + "<\/th><td nowrap>　" + tagconv(answer[i]) + "<\/td><th>";
    data += "<font ";
    if (maru[i]) data += "color=blue>○"; else data += "color=red>×";
    data += "<\/font><\/th>";
    data += "<\/tr>";
  }
  data += "<\/table><br>";
  data += "<font color=red><u><font size=7>" + score + "<\/font><\/u><font size=6> 点<\/font><\/font><br>";
  if (!kaito_ctrl && score < shikii) data += "<small>" + shikii + "点以上で解答が見られます<\/small><br>";
  data += "<br><input type=button value='閉じる' onClick='window.close()'><\/center>";
  data += "<\/form><\/body><\/html>";
  Win0opened = true;
  wh = 25*NUM + 230;
  if (wh > 600) wh=600;
  Win0=window.open("","Win0","width=350,height=" + wh + ",toolbar=0,menubar=0,resizable=1,scrollbars=1,location=0,directories=0,status=0");
  Win0.focus();
  Win0.document.open();
  Win0.document.write(data);
  Win0.document.close();
}


// 解答ボタンを押したときの処理
function kaito(){
  var tmpk=null, chk="", data="", c;
  // 解答しているかどうかチェック
  if (bt_func == "nodisp") mm=1; else mm=2;
  for (i=1;i<=NUM;i++) { 
    tmpk = document.f.elements[(i-1)*mm].value;
    if (document.f.elements[(i-1)*mm].type=="text") chk += tmpk; else 
       chk += s[i][document.f.elements[(i-1)*mm].selectedIndex];
  }
  if ( chk == "" ) { alert("ちゃんと答えてからね！"); return; }
  score = scorecheck();
  if (!kaito_ctrl && score < shikii) { alert(shikii + "点以上取らないとダメです"); return; }

  data ="<html><head><title>解答<\/title><\/head><bo" + "dy bgcolor=lavender><center>";
  data += "<h3>解答<\/h3>";
  data += "<table border cellspacing=0>";
  data += "<tr><th width=25 height=25> 問 <\/th><th width=150>解答<\/th>";
  for (i=1;i<=NUM;i++) {
    data += "<tr><th height=25>" + qn[i] + "<\/th>";
    if (maru[i]) c="black"; else c="red";
    data += "<td align=center><font color=" + c + ">" + tagconv(a[i]) + "<\/font><\/td><\/tr>";
  }
  data += "<\/table><br><br><form>";
  data += "<input type=button value='閉じる' onClick='window.close()'><\/center>";
  data += "<\/form><\/body><\/html>";
  
  Win0opened = true;
  wh = 25*NUM + 160;
  if (wh > 600) wh=600;
  Win0=window.open("","Win0","width=300,height=" + wh + ",toolbar=0,menubar=0,resizable=1,scrollbars=1,location=0,directories=0,status=0");
  Win0.focus();
  Win0.document.open();
  Win0.document.write(data);
  Win0.document.close();
}

// ヒント一覧
function hintdisp (){
  var data="";
  data ="<html><head><title>解答<\/title><\/head><bo" + "dy bgcolor=lavender><center>";
  data += "<table border cellspacing=0>";
  data += "<tr><th width=25 height=25> 問 <\/th><th width=150>ヒント<\/th>";
  for (i=1;i<=NUM;i++) {
    data += "<tr><th height=25>" + qn[i] + "<\/th>";
    data += "<td>" + h[i] + "<\/td><\/tr>";
  }
  data += "<\/table><br><br><form>";
  data += "<input type=button value='閉じる' onClick='window.close()'><\/center>";
  data += "<\/form><\/body><\/html>";

  Win0opened = true;
  wh = 25*NUM + 140;
  if (wh > 600) wh=600;
  Win0=window.open("","Win0","width=300,height=" + wh + ",toolbar=0,menubar=0,resizable=1,scrollbars=1,location=0,directories=0,status=0");
  Win0.focus();
  Win0.document.open();
  Win0.document.write(data);
  Win0.document.close();
}

// Unload したとき
function winclose(){
  if (Win0opened && !Win0.closed) Win0.close();
}

// -->