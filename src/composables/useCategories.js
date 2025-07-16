// useCategories.js
import { ref } from 'vue'

const categories = ref([])

export function useCategories() {
    // 這裡可加載取 API 或靜態資料
    // 寫死700多筆資料
    function loadCategories() {
        // 載入分類資料
        categories.value = [
            
    {
        "id": 1,
        "name": "原創"
    },
    {
        "id": 2,
        "name": "007"
    },
    {
        "id": 3,
        "name": "1917"
    },
    {
        "id": 4,
        "name": "×××HOLiC"
    },
    {
        "id": 5,
        "name": "07-GHOST"
    },
    {
        "id": 6,
        "name": "1/2王子"
    },
    {
        "id": 7,
        "name": "16bit的感動"
    },
    {
        "id": 8,
        "name": "18TRIP"
    },
    {
        "id": 9,
        "name": "1942系列"
    },
    {
        "id": 10,
        "name": "86—不存在的戰區—"
    },
    {
        "id": 11,
        "name": "A3!"
    },
    {
        "id": 12,
        "name": "ACCA13區監察課"
    },
    {
        "id": 13,
        "name": "Aepro"
    },
    {
        "id": 14,
        "name": "AKIRA 阿基拉"
    },
    {
        "id": 15,
        "name": "ALIEN STAGE"
    },
    {
        "id": 16,
        "name": "Angel Beats!"
    },
    {
        "id": 17,
        "name": "Another"
    },
    {
        "id": 18,
        "name": "Apex 英雄 Apex Legends"
    },
    {
        "id": 19,
        "name": "BACCANO！大騷動！"
    },
    {
        "id": 20,
        "name": "Banana Bus Squad"
    },
    {
        "id": 21,
        "name": "Banana Fish"
    },
    {
        "id": 22,
        "name": "BLUE GIANT 藍色巨星"
    },
    {
        "id": 23,
        "name": "BORUTO-火影新世代-NARUTO NEXT GENERATIONS-"
    },
    {
        "id": 24,
        "name": "B-PROJECT"
    },
    {
        "id": 25,
        "name": "BURN THE WITCH 龍與魔女"
    },
    {
        "id": 26,
        "name": "CLAMP學園偵探團"
    },
    {
        "id": 27,
        "name": "CLANNAD"
    },
    {
        "id": 28,
        "name": "DARLING in the FRANXX"
    },
    {
        "id": 29,
        "name": "DC"
    },
    {
        "id": 30,
        "name": "Degrees of Lewdity"
    },
    {
        "id": 31,
        "name": "DRAGON DRIVE 龍騎士"
    },
    {
        "id": 32,
        "name": "ENNEAD九柱神"
    },
    {
        "id": 33,
        "name": "Fate/Apocrypha"
    },
    {
        "id": 34,
        "name": "Fate/Grand Order(FGO)"
    },
    {
        "id": 35,
        "name": "Fate/kaleid liner 魔法少女☆伊莉雅系列"
    },
    {
        "id": 36,
        "name": "Fate/Samurai Remnant"
    },
    {
        "id": 37,
        "name": "Fate/stay night"
    },
    {
        "id": 38,
        "name": "Fate/Zero"
    },
    {
        "id": 39,
        "name": "Fate系列"
    },
    {
        "id": 40,
        "name": "FINAL FANTASY VII(FF7)"
    },
    {
        "id": 41,
        "name": "FINAL FANTASY XIV(FF14)"
    },
    {
        "id": 42,
        "name": "FINAL FANTASY XVI(FF16)"
    },
    {
        "id": 43,
        "name": "FINAL FANTASY(FF系列)"
    },
    {
        "id": 44,
        "name": "FRAGARIA MEMORIES"
    },
    {
        "id": 45,
        "name": "Free! 男子游泳部"
    },
    {
        "id": 46,
        "name": "from ARGONAVIS"
    },
    {
        "id": 47,
        "name": "GATE 7～7號閘門～"
    },
    {
        "id": 48,
        "name": "GRAND BLUE 碧藍之海"
    },
    {
        "id": 49,
        "name": "GRIDMAN UNIVERSE"
    },
    {
        "id": 50,
        "name": "HiGH&amp;LOW 熱血街頭"
    },
    {
        "id": 51,
        "name": "hololive"
    },
    {
        "id": 52,
        "name": "hololive EN"
    },
    {
        "id": 53,
        "name": "hololive ID"
    },
    {
        "id": 54,
        "name": "HOLOSTARS"
    },
    {
        "id": 55,
        "name": "HOLOSTARS EN"
    },
    {
        "id": 56,
        "name": "HUNTER×HUNTER 獵人"
    },
    {
        "id": 57,
        "name": "?????????????(扭曲"
    },
    {
        "id": 58,
        "name": "It 牠"
    },
    {
        "id": 59,
        "name": "JOJO的奇妙冒險系列"
    },
    {
        "id": 60,
        "name": "JOKER GAME"
    },
    {
        "id": 61,
        "name": "J禁"
    },
    {
        "id": 62,
        "name": "K(動畫)"
    },
    {
        "id": 63,
        "name": "KILL la KILL"
    },
    {
        "id": 64,
        "name": "KPOP"
    },
    {
        "id": 65,
        "name": "Limnos利姆諾斯"
    },
    {
        "id": 66,
        "name": "Love Live! 系列"
    },
    {
        "id": 67,
        "name": "Lycoris Recoil 莉可麗絲"
    },
    {
        "id": 68,
        "name": "MAGI 魔奇少年"
    },
    {
        "id": 69,
        "name": "MARVEL"
    },
    {
        "id": 70,
        "name": "MCYT"
    },
    {
        "id": 71,
        "name": "Mignon"
    },
    {
        "id": 72,
        "name": "MIU404"
    },
    {
        "id": 73,
        "name": "NIJISANJI EN (彩虹社EN)"
    },
    {
        "id": 74,
        "name": "NIJISANJI ID (彩虹社ID)"
    },
    {
        "id": 75,
        "name": "NIJISANJI JP (彩虹社JP)"
    },
    {
        "id": 76,
        "name": "NIJISANJI KR (彩虹社KR)"
    },
    {
        "id": 77,
        "name": "Paradox Live THE ANIMATION"
    },
    {
        "id": 78,
        "name": "PASSION"
    },
    {
        "id": 79,
        "name": "PLAVE"
    },
    {
        "id": 80,
        "name": "PSYCHO-PASS 心靈判官"
    },
    {
        "id": 81,
        "name": "PUI PUI 天竺鼠車車"
    },
    {
        "id": 82,
        "name": "Ra"
    },
    {
        "id": 83,
        "name": "Re:從零開始的異世界生活"
    },
    {
        "id": 84,
        "name": "RO仙境傳說"
    },
    {
        "id": 85,
        "name": "RWBY"
    },
    {
        "id": 86,
        "name": "SAKAMOTO DAYS 坂本日常"
    },
    {
        "id": 87,
        "name": "SCP基金會"
    },
    {
        "id": 88,
        "name": "SK8 the Infinity"
    },
    {
        "id": 89,
        "name": "SKIP BEAT！華麗的挑戰"
    },
    {
        "id": 90,
        "name": "Sky光遇"
    },
    {
        "id": 91,
        "name": "SPY×FAMILY間諜家家酒"
    },
    {
        "id": 92,
        "name": "SSSS.GRIDMAN"
    },
    {
        "id": 93,
        "name": "STAR DRIVER 閃亮的塔科特"
    },
    {
        "id": 94,
        "name": "TIGER &amp; BUNNY"
    },
    {
        "id": 95,
        "name": "UNLIGHT"
    },
    {
        "id": 96,
        "name": "VALORANT 特戰英豪"
    },
    {
        "id": 97,
        "name": "VOCALOID系列"
    },
    {
        "id": 98,
        "name": "WIND BREAKER—防風少年—"
    },
    {
        "id": 99,
        "name": "Yuri!!! on ICE"
    },
    {
        "id": 100,
        "name": "??????????????(????R)"
    },
    {
        "id": 101,
        "name": "Disney Twisted-Wonderland(扭曲仙境)"
    },
    {
        "id": 102,
        "name": "???芸能???????"
    },
    {
        "id": 103,
        "name": "一拳超人"
    },
    {
        "id": 104,
        "name": "七大罪"
    },
    {
        "id": 105,
        "name": "七龍珠"
    },
    {
        "id": 106,
        "name": "乃木坂春香的秘密"
    },
    {
        "id": 107,
        "name": "九日"
    },
    {
        "id": 108,
        "name": "人偶學園"
    },
    {
        "id": 109,
        "name": "入間同學入魔了！"
    },
    {
        "id": 110,
        "name": "刀劍神域"
    },
    {
        "id": 111,
        "name": "刀劍亂舞"
    },
    {
        "id": 112,
        "name": "十二國記"
    },
    {
        "id": 113,
        "name": "三月的獅子"
    },
    {
        "id": 114,
        "name": "下剋上球兒"
    },
    {
        "id": 115,
        "name": "大叔的愛"
    },
    {
        "id": 116,
        "name": "大青蛙劇場 The Muppet Show"
    },
    {
        "id": 117,
        "name": "大英雄天團 Big Hero 6"
    },
    {
        "id": 118,
        "name": "大神同學想被吃掉～今晚和沒骨氣的老師一起轉大人！"
    },
    {
        "id": 119,
        "name": "大神系列"
    },
    {
        "id": 120,
        "name": "大逆轉裁判"
    },
    {
        "id": 121,
        "name": "大貴族"
    },
    {
        "id": 122,
        "name": "女性向遊戲世界對路人角色很不友好"
    },
    {
        "id": 123,
        "name": "女朋友 and 女朋友"
    },
    {
        "id": 124,
        "name": "女武神的餐桌"
    },
    {
        "id": 125,
        "name": "女神異聞錄系列"
    },
    {
        "id": 126,
        "name": "子午計畫Meridian Project"
    },
    {
        "id": 127,
        "name": "子彈列車 Bullet Train"
    },
    {
        "id": 128,
        "name": "小林家的龍女僕"
    },
    {
        "id": 129,
        "name": "小書痴的下剋上"
    },
    {
        "id": 130,
        "name": "小智是女孩啦！"
    },
    {
        "id": 131,
        "name": "小鎮疑雲 Broadchurch"
    },
    {
        "id": 132,
        "name": "小魔女DoReMi"
    },
    {
        "id": 133,
        "name": "小魔女學園"
    },
    {
        "id": 134,
        "name": "山田君與7人魔女"
    },
    {
        "id": 135,
        "name": "山河令"
    },
    {
        "id": 136,
        "name": "工作細胞"
    },
    {
        "id": 137,
        "name": "才女的侍從 在滿是高嶺之花的貴族學校暗中照顧（毫無生活自理能力的）學院第一大小姐"
    },
    {
        "id": 138,
        "name": "不可能的任務 - MI"
    },
    {
        "id": 139,
        "name": "不正經的魔術講師與禁忌教典"
    },
    {
        "id": 140,
        "name": "不死不運"
    },
    {
        "id": 141,
        "name": "不死軍團 The Old Guard"
    },
    {
        "id": 142,
        "name": "不良仔與眼鏡妹"
    },
    {
        "id": 143,
        "name": "不愉快的妖怪庵"
    },
    {
        "id": 144,
        "name": "中二病也想談戀愛！"
    },
    {
        "id": 145,
        "name": "中華一番！"
    },
    {
        "id": 146,
        "name": "五等分的新娘"
    },
    {
        "id": 147,
        "name": "今天的吉良同學"
    },
    {
        "id": 148,
        "name": "今天開始做魔王!"
    },
    {
        "id": 149,
        "name": "元氣少女緣結神"
    },
    {
        "id": 150,
        "name": "六道的惡女們"
    },
    {
        "id": 151,
        "name": "化物語"
    },
    {
        "id": 152,
        "name": "天元突破 紅蓮螺巖"
    },
    {
        "id": 153,
        "name": "天地創造設計部"
    },
    {
        "id": 154,
        "name": "天空侵犯"
    },
    {
        "id": 155,
        "name": "天能 TENET"
    },
    {
        "id": 156,
        "name": "天國大魔境"
    },
    {
        "id": 157,
        "name": "少女☆歌劇 Revue Starlight"
    },
    {
        "id": 158,
        "name": "少女前線"
    },
    {
        "id": 159,
        "name": "少女革命"
    },
    {
        "id": 160,
        "name": "少年正義聯盟 Young Justice"
    },
    {
        "id": 161,
        "name": "幻影少年"
    },
    {
        "id": 162,
        "name": "心靈偵探 八雲"
    },
    {
        "id": 163,
        "name": "文字化化"
    },
    {
        "id": 164,
        "name": "文豪野犬"
    },
    {
        "id": 165,
        "name": "文學少女"
    },
    {
        "id": 166,
        "name": "日常"
    },
    {
        "id": 167,
        "name": "月刊少女野崎同學"
    },
    {
        "id": 168,
        "name": "月光騎士 Moon Knight"
    },
    {
        "id": 169,
        "name": "月亮計劃 Project Moon"
    },
    {
        "id": 170,
        "name": "月薪嬌妻"
    },
    {
        "id": 171,
        "name": "比方說，這是個出身魔王關附近的少年在新手村生活的故事"
    },
    {
        "id": 172,
        "name": "水行俠 Aquaman"
    },
    {
        "id": 173,
        "name": "水星領航員"
    },
    {
        "id": 174,
        "name": "火焰之紋章系列"
    },
    {
        "id": 175,
        "name": "火影忍者"
    },
    {
        "id": 176,
        "name": "火箭人 Rocketman"
    },
    {
        "id": 177,
        "name": "片翼的米開朗基羅"
    },
    {
        "id": 178,
        "name": "犬夜叉"
    },
    {
        "id": 179,
        "name": "王者天下"
    },
    {
        "id": 180,
        "name": "王室緋聞守則"
    },
    {
        "id": 181,
        "name": "王牌投手 振臂高揮"
    },
    {
        "id": 182,
        "name": "王儲的抉擇 Young Royals"
    },
    {
        "id": 183,
        "name": "世界計畫 繽紛舞台！ feat.初音未來"
    },
    {
        "id": 184,
        "name": "世界頂尖的暗殺者轉生為異世界貴族"
    },
    {
        "id": 185,
        "name": "他人即地獄"
    },
    {
        "id": 186,
        "name": "以你的名字呼喚我 Call Me By Your Name - CMBYN"
    },
    {
        "id": 187,
        "name": "凹凸世界"
    },
    {
        "id": 188,
        "name": "出包王女"
    },
    {
        "id": 189,
        "name": "出擊飛龍系列"
    },
    {
        "id": 190,
        "name": "加速世界"
    },
    {
        "id": 191,
        "name": "北投女巫"
    },
    {
        "id": 192,
        "name": "半澤直樹"
    },
    {
        "id": 193,
        "name": "卡片戰鬥先導者"
    },
    {
        "id": 194,
        "name": "去唱卡拉OK吧！"
    },
    {
        "id": 195,
        "name": "古劍奇譚系列"
    },
    {
        "id": 196,
        "name": "只要別西卜大小姐喜歡就好"
    },
    {
        "id": 197,
        "name": "召喚惡魔"
    },
    {
        "id": 198,
        "name": "台灣VTuber (台V)"
    },
    {
        "id": 199,
        "name": "史上最強大魔王轉生為村民A"
    },
    {
        "id": 200,
        "name": "史詩級領地設計師"
    },
    {
        "id": 201,
        "name": "四月是你的謊言"
    },
    {
        "id": 202,
        "name": "外傷重症中心"
    },
    {
        "id": 203,
        "name": "失落的星球系列"
    },
    {
        "id": 204,
        "name": "尼爾：人工生命"
    },
    {
        "id": 205,
        "name": "平凡職業造就世界最強"
    },
    {
        "id": 206,
        "name": "幼女戰記"
    },
    {
        "id": 207,
        "name": "打工吧！魔王大人"
    },
    {
        "id": 208,
        "name": "未定事件簿"
    },
    {
        "id": 209,
        "name": "光之美少女系列"
    },
    {
        "id": 210,
        "name": "光速蒙面俠21"
    },
    {
        "id": 211,
        "name": "光與夜之戀"
    },
    {
        "id": 212,
        "name": "全知讀者視角"
    },
    {
        "id": 213,
        "name": "全面啟動 Inception"
    },
    {
        "id": 214,
        "name": "全職高手"
    },
    {
        "id": 215,
        "name": "冰雪奇緣 Frozen"
    },
    {
        "id": 216,
        "name": "我的英雄學院"
    },
    {
        "id": 217,
        "name": "咒術迴戰"
    },
    {
        "id": 218,
        "name": "冰菓"
    },
    {
        "id": 219,
        "name": "吊帶襪天使"
    },
    {
        "id": 220,
        "name": "名偵探柯南"
    },
    {
        "id": 221,
        "name": "回復術士的重啟人生"
    },
    {
        "id": 222,
        "name": "因為不是真正的夥伴而被逐出勇者隊伍，流落到邊境展開慢活人生"
    },
    {
        "id": 223,
        "name": "因為是反派大小姐所以養了魔王"
    },
    {
        "id": 224,
        "name": "因與聿案簿錄"
    },
    {
        "id": 225,
        "name": "在下坂本，有何貴幹？"
    },
    {
        "id": 226,
        "name": "在地下城尋求邂逅是否搞錯了什麼"
    },
    {
        "id": 227,
        "name": "在異世界獲得超強能力的我，在現實世界照樣無敵"
    },
    {
        "id": 228,
        "name": "在魔王城說晚安"
    },
    {
        "id": 229,
        "name": "地。—關於地球的運動—"
    },
    {
        "id": 230,
        "name": "少女"
    },
    {
        "id": 231,
        "name": "地獄旅館 Hazbin Hotel"
    },
    {
        "id": 232,
        "name": "地獄樂"
    },
    {
        "id": 233,
        "name": "地縛少年花子君"
    },
    {
        "id": 234,
        "name": "多羅羅"
    },
    {
        "id": 235,
        "name": "好預兆 Good Omens"
    },
    {
        "id": 236,
        "name": "宇宙小奇兵 Wander Over Yonder"
    },
    {
        "id": 237,
        "name": "宇宙兄弟"
    },
    {
        "id": 238,
        "name": "守護天使莉莉佳"
    },
    {
        "id": 239,
        "name": "守護甜心系列"
    },
    {
        "id": 240,
        "name": "年輕教宗 The Young Pope"
    },
    {
        "id": 241,
        "name": "式守同學不只可愛而已"
    },
    {
        "id": 242,
        "name": "有五個姊姊的我就註定要單身了啊"
    },
    {
        "id": 243,
        "name": "死亡復甦系列"
    },
    {
        "id": 244,
        "name": "死亡筆記本"
    },
    {
        "id": 245,
        "name": "死亡擱淺 Death Stranding"
    },
    {
        "id": 246,
        "name": "米奇與達利"
    },
    {
        "id": 247,
        "name": "老九門"
    },
    {
        "id": 248,
        "name": "艾梅洛閣下II世事件簿"
    },
    {
        "id": 249,
        "name": "艾爾登法環 Elden Ring"
    },
    {
        "id": 250,
        "name": "血界戰線"
    },
    {
        "id": 251,
        "name": "血戰"
    },
    {
        "id": 252,
        "name": "佐佐木與文鳥小嗶"
    },
    {
        "id": 253,
        "name": "佐賀偶像是傳奇"
    },
    {
        "id": 254,
        "name": "吞食天地系列"
    },
    {
        "id": 255,
        "name": "吸血鬼馬上死"
    },
    {
        "id": 256,
        "name": "吹響吧！上低音號"
    },
    {
        "id": 257,
        "name": "吾命騎士"
    },
    {
        "id": 258,
        "name": "妖怪手錶"
    },
    {
        "id": 259,
        "name": "完美啪檔"
    },
    {
        "id": 260,
        "name": "完美超人Joe系列"
    },
    {
        "id": 261,
        "name": "巫師3：狂獵 The Witcher 3: Wild Hunt"
    },
    {
        "id": 262,
        "name": "忍者亂太郎"
    },
    {
        "id": 263,
        "name": "快打旋風系列"
    },
    {
        "id": 264,
        "name": "快樂樹朋友 Happy Tree Friends"
    },
    {
        "id": 265,
        "name": "我妻同學是我的老婆"
    },
    {
        "id": 266,
        "name": "我的妹妹哪有這麼可愛！"
    },
    {
        "id": 267,
        "name": "我的朋友很少"
    },
    {
        "id": 268,
        "name": "我的武器只有攻擊力為1的針"
    },
    {
        "id": 269,
        "name": "我的狐仙女友"
    },
    {
        "id": 270,
        "name": "我的推是壞人大小姐。"
    },
    {
        "id": 271,
        "name": "我們仍未知道那天所看見的花名。"
    },
    {
        "id": 272,
        "name": "我家有個狐仙大人"
    },
    {
        "id": 273,
        "name": "我培育的S級們"
    },
    {
        "id": 274,
        "name": "我被綁架到貴族女校當「庶民樣本」"
    },
    {
        "id": 275,
        "name": "我想吃掉你的胰臟"
    },
    {
        "id": 276,
        "name": "我獨自升級"
    },
    {
        "id": 277,
        "name": "攻殼機動隊"
    },
    {
        "id": 278,
        "name": "沙丘 Dune"
    },
    {
        "id": 279,
        "name": "狂魔重生記"
    },
    {
        "id": 280,
        "name": "秀逗魔導士"
    },
    {
        "id": 281,
        "name": "亞瑟：王者之劍"
    },
    {
        "id": 282,
        "name": "亞瑟王 KING ARTHUR"
    },
    {
        "id": 283,
        "name": "亞爾斯蘭戰記"
    },
    {
        "id": 284,
        "name": "來自風平浪靜的明日"
    },
    {
        "id": 285,
        "name": "來自深淵"
    },
    {
        "id": 286,
        "name": "侏羅紀世界"
    },
    {
        "id": 287,
        "name": "刺客教條 Assassin's Creed"
    },
    {
        "id": 288,
        "name": "奇幻貓頭鷹小屋 The Owl House"
    },
    {
        "id": 289,
        "name": "奇跡暖暖"
    },
    {
        "id": 290,
        "name": "孤獨搖滾"
    },
    {
        "id": 291,
        "name": "幸運女神"
    },
    {
        "id": 292,
        "name": "底特律：變人 Detroit: Become Human"
    },
    {
        "id": 293,
        "name": "弦音－風舞高中弓道部－"
    },
    {
        "id": 294,
        "name": "彼方的阿斯特拉"
    },
    {
        "id": 295,
        "name": "怕痛的我，把防禦力點滿就對了"
    },
    {
        "id": 296,
        "name": "性愛自修室 Sex Education"
    },
    {
        "id": 297,
        "name": "怪～ayakashi～"
    },
    {
        "id": 298,
        "name": "怪化貓(物怪)"
    },
    {
        "id": 299,
        "name": "怪奇物語 Stranger Things"
    },
    {
        "id": 300,
        "name": "怪物事變"
    },
    {
        "id": 301,
        "name": "怪物的孩子"
    },
    {
        "id": 302,
        "name": "怪醫黑傑克"
    },
    {
        "id": 303,
        "name": "怪獸與牠們的產地系列 Fantastic Beasts -FB"
    },
    {
        "id": 304,
        "name": "明日方舟"
    },
    {
        "id": 305,
        "name": "東方Project"
    },
    {
        "id": 306,
        "name": "東京??????"
    },
    {
        "id": 307,
        "name": "東京卍復仇者"
    },
    {
        "id": 308,
        "name": "東京喵喵"
    },
    {
        "id": 309,
        "name": "東京謎影者"
    },
    {
        "id": 310,
        "name": "東離劍遊紀"
    },
    {
        "id": 311,
        "name": "歧路旅人"
    },
    {
        "id": 312,
        "name": "治癒魔法的錯誤使用法～奔赴戰場的回復要員～"
    },
    {
        "id": 313,
        "name": "炎炎消防隊"
    },
    {
        "id": 314,
        "name": "炎拳"
    },
    {
        "id": 315,
        "name": "物之古物奇譚"
    },
    {
        "id": 316,
        "name": "物怪(動畫)"
    },
    {
        "id": 317,
        "name": "玩命坦克 T-34"
    },
    {
        "id": 318,
        "name": "玩命關頭系列 Fast & Furious"
    },
    {
        "id": 319,
        "name": "社群網戰 The Social Network - TSN"
    },
    {
        "id": 320,
        "name": "花亦山心之月"
    },
    {
        "id": 321,
        "name": "金田一少年之事件簿"
    },
    {
        "id": 322,
        "name": "金光布袋戲"
    },
    {
        "id": 323,
        "name": "金色琴弦"
    },
    {
        "id": 324,
        "name": "金牌特務 Kingsman - KSM"
    },
    {
        "id": 325,
        "name": "金牌得主"
    },
    {
        "id": 326,
        "name": "阿凡達 Avatar"
    },
    {
        "id": 327,
        "name": "阿甘妙世界 The Amazing World of Gumball"
    },
    {
        "id": 328,
        "name": "阿拉丁2019 Aladdin"
    },
    {
        "id": 329,
        "name": "阿松"
    },
    {
        "id": 330,
        "name": "雨傘學院 The Umbrella Academy"
    },
    {
        "id": 331,
        "name": "青之驅魔師"
    },
    {
        "id": 332,
        "name": "青春豬頭少年系列"
    },
    {
        "id": 333,
        "name": "青梅竹馬絕對不會輸的戀愛喜劇"
    },
    {
        "id": 334,
        "name": "非紳士特攻隊"
    },
    {
        "id": 335,
        "name": "\"俘虜 Merry Christmas Mr. Lawrence\""
    },
    {
        "id": 336,
        "name": "信蜂"
    },
    {
        "id": 337,
        "name": "勇者鬥惡龍系列"
    },
    {
        "id": 338,
        "name": "勇者動畫系列"
    },
    {
        "id": 339,
        "name": "勇者赫魯庫"
    },
    {
        "id": 340,
        "name": "勇者辭職不幹了～下個職場是魔王城～"
    },
    {
        "id": 341,
        "name": "南方公園 South Park"
    },
    {
        "id": 342,
        "name": "哆啦A夢"
    },
    {
        "id": 343,
        "name": "哈利波特 Harry Potter"
    },
    {
        "id": 344,
        "name": "城隍"
    },
    {
        "id": 345,
        "name": "封神演義"
    },
    {
        "id": 346,
        "name": "屍鬼"
    },
    {
        "id": 347,
        "name": "屍體如山的死亡遊戲"
    },
    {
        "id": 348,
        "name": "帝一之國"
    },
    {
        "id": 349,
        "name": "帝乃三姊妹意外地，好搞定。"
    },
    {
        "id": 350,
        "name": "持續狩獵史萊姆三百年，不知不覺就練到LV MAX"
    },
    {
        "id": 351,
        "name": "星軌工作室"
    },
    {
        "id": 352,
        "name": "星期三 Wednesday"
    },
    {
        "id": 353,
        "name": "星銀島 Treasure Planet"
    },
    {
        "id": 354,
        "name": "星際大戰 Star Wars"
    },
    {
        "id": 355,
        "name": "星際爭霸戰 Star Trek"
    },
    {
        "id": 356,
        "name": "春魚創意"
    },
    {
        "id": 357,
        "name": "柏德之門3"
    },
    {
        "id": 358,
        "name": "某天成為公主"
    },
    {
        "id": 359,
        "name": "歪小子史考特 Scott Pilgrim vs The World"
    },
    {
        "id": 360,
        "name": "洛克人系列"
    },
    {
        "id": 361,
        "name": "洛克靈異偵探社 Lockwood & Co."
    },
    {
        "id": 362,
        "name": "活俠傳"
    },
    {
        "id": 363,
        "name": "為了女兒，我說不定連魔王都能幹掉。"
    },
    {
        "id": 364,
        "name": "為美好的世界獻上祝福！"
    },
    {
        "id": 365,
        "name": "看臉時代"
    },
    {
        "id": 366,
        "name": "祈願的阿斯特洛"
    },
    {
        "id": 367,
        "name": "科學超電磁砲"
    },
    {
        "id": 368,
        "name": "約會大作戰"
    },
    {
        "id": 369,
        "name": "美少女戰士"
    },
    {
        "id": 370,
        "name": "美食獵人TORIKO"
    },
    {
        "id": 371,
        "name": "美國殺人魔 American Psycho"
    },
    {
        "id": 372,
        "name": "耶穌基督萬世巨星 Jesus Christ Superstar"
    },
    {
        "id": 373,
        "name": "苦讀型超強新手"
    },
    {
        "id": 374,
        "name": "英雄王，為了窮盡武道而轉生～而後成為世界最強見習騎士♀～"
    },
    {
        "id": 375,
        "name": "英雄傳說 閃之軌跡"
    },
    {
        "id": 376,
        "name": "英雄聯盟 The league of legends"
    },
    {
        "id": 377,
        "name": "重生者的魔法一定要特別"
    },
    {
        "id": 378,
        "name": "重返未來：1999"
    },
    {
        "id": 379,
        "name": "降世神通 Avatar"
    },
    {
        "id": 380,
        "name": "Sonic 音速小子系列"
    },
    {
        "id": 381,
        "name": "風之少年系列"
    },
    {
        "id": 382,
        "name": "風花雪月"
    },
    {
        "id": 383,
        "name": "風都偵探"
    },
    {
        "id": 384,
        "name": "飛天小女警 The Powerpuff Girls"
    },
    {
        "id": 385,
        "name": "飛輪少年"
    },
    {
        "id": 386,
        "name": "食戟之靈"
    },
    {
        "id": 387,
        "name": "個人勢"
    },
    {
        "id": 388,
        "name": "個人實況主"
    },
    {
        "id": 389,
        "name": "原子小金剛"
    },
    {
        "id": 390,
        "name": "原神"
    },
    {
        "id": 391,
        "name": "哥布林殺手"
    },
    {
        "id": 392,
        "name": "哥吉拉系列"
    },
    {
        "id": 393,
        "name": "哪吒之魔童降世"
    },
    {
        "id": 394,
        "name": "夏目友人帳"
    },
    {
        "id": 395,
        "name": "家庭教師HITMAN REBORN!"
    },
    {
        "id": 396,
        "name": "庫洛魔法使"
    },
    {
        "id": 397,
        "name": "恐龍危機系列"
    },
    {
        "id": 398,
        "name": "恐懼與飢餓 Fear & Hunger"
    },
    {
        "id": 399,
        "name": "捍衛任務 John Wick"
    },
    {
        "id": 400,
        "name": "捍衛戰士 TOP GUN - TG"
    },
    {
        "id": 401,
        "name": "時光代理人"
    },
    {
        "id": 402,
        "name": "時空中的繪旅人"
    },
    {
        "id": 403,
        "name": "格鬥實況"
    },
    {
        "id": 404,
        "name": "海盜追殺令 Our Flag Means Death"
    },
    {
        "id": 405,
        "name": "海綿寶寶 Spong Bob"
    },
    {
        "id": 406,
        "name": "特殊傳說"
    },
    {
        "id": 407,
        "name": "特攝"
    },
    {
        "id": 408,
        "name": "真三國無雙系列"
    },
    {
        "id": 409,
        "name": "真珠美人魚"
    },
    {
        "id": 410,
        "name": "神風怪盜貞德"
    },
    {
        "id": 411,
        "name": "神秘小鎮大冒險 Gravity Falls"
    },
    {
        "id": 412,
        "name": "神秘博士 DOCTOR WHO - DW"
    },
    {
        "id": 413,
        "name": "神鬼奇航 Pirates of the Caribbean"
    },
    {
        "id": 414,
        "name": "神偷怪盜"
    },
    {
        "id": 415,
        "name": "神推偶像登上武道館我就死而無憾"
    },
    {
        "id": 416,
        "name": "神劍闖江湖"
    },
    {
        "id": 417,
        "name": "神樂罰"
    },
    {
        "id": 418,
        "name": "神隱少女"
    },
    {
        "id": 419,
        "name": "神臍小卷毛(史帝芬宇宙) Steven Universe"
    },
    {
        "id": 420,
        "name": "航海王(海賊王)"
    },
    {
        "id": 421,
        "name": "航海王真人版 One Piece"
    },
    {
        "id": 422,
        "name": "荒漠斷背情 Strange Way of Life"
    },
    {
        "id": 423,
        "name": "迷宮飯"
    },
    {
        "id": 424,
        "name": "逆轉裁判"
    },
    {
        "id": 425,
        "name": "閃電十一人"
    },
    {
        "id": 426,
        "name": "閃靈二人組"
    },
    {
        "id": 427,
        "name": "隻狼：暗影雙死"
    },
    {
        "id": 428,
        "name": "飢餓與恐懼"
    },
    {
        "id": 429,
        "name": "高校之神"
    },
    {
        "id": 430,
        "name": "鬥陣俱樂部 Fight Club"
    },
    {
        "id": 431,
        "name": "鬥陣特攻 Overwatch"
    },
    {
        "id": 432,
        "name": "鬼太郎"
    },
    {
        "id": 433,
        "name": "鬼太郎誕生：咯咯咯之謎"
    },
    {
        "id": 434,
        "name": "鬼武者系列"
    },
    {
        "id": 435,
        "name": "鬼滅之刃"
    },
    {
        "id": 436,
        "name": "假面騎士"
    },
    {
        "id": 437,
        "name": "假面騎士555 消失的天堂"
    },
    {
        "id": 438,
        "name": "假面騎士Black"
    },
    {
        "id": 439,
        "name": "假面騎士GEATS"
    },
    {
        "id": 440,
        "name": "假面騎士J"
    },
    {
        "id": 441,
        "name": "假面騎士OOO"
    },
    {
        "id": 442,
        "name": "偶像夢幻祭"
    },
    {
        "id": 443,
        "name": "偶像大師系列"
    },
    {
        "id": 444,
        "name": "偽裝者"
    },
    {
        "id": 445,
        "name": "偽戀"
    },
    {
        "id": 446,
        "name": "動物方城市 Zootopia"
    },
    {
        "id": 447,
        "name": "動物朋友"
    },
    {
        "id": 448,
        "name": "寄生獸"
    },
    {
        "id": 449,
        "name": "崩壞：星穹鐵道"
    },
    {
        "id": 450,
        "name": "崩壞系列"
    },
    {
        "id": 451,
        "name": "帶著智慧型手機闖蕩異世界。"
    },
    {
        "id": 452,
        "name": "從前有個好萊塢 Once Upon a Time in Hollywood"
    },
    {
        "id": 453,
        "name": "患上不出道就會死的病"
    },
    {
        "id": 454,
        "name": "探險活寶 Adventure Time"
    },
    {
        "id": 455,
        "name": "殺客同萌 Sucker punch"
    },
    {
        "id": 456,
        "name": "涼宮春日系列"
    },
    {
        "id": 457,
        "name": "猛毒 Venom"
    },
    {
        "id": 458,
        "name": "現實主義勇者的王國重建記"
    },
    {
        "id": 459,
        "name": "異世界食堂"
    },
    {
        "id": 460,
        "name": "異世界悠閒農家"
    },
    {
        "id": 461,
        "name": "異世界歸來的舅舅"
    },
    {
        "id": 462,
        "name": "異世界藥局"
    },
    {
        "id": 463,
        "name": "異種族風俗娘評鑑指南"
    },
    {
        "id": 464,
        "name": "異獸魔都"
    },
    {
        "id": 465,
        "name": "眾神眷顧的男人"
    },
    {
        "id": 466,
        "name": "移動迷宮 The Maze Runner"
    },
    {
        "id": 467,
        "name": "第五人格"
    },
    {
        "id": 468,
        "name": "粗點心戰爭"
    },
    {
        "id": 469,
        "name": "細胞神曲 -Cell of Empireo-"
    },
    {
        "id": 470,
        "name": "紳士追殺令 The Gentlemen"
    },
    {
        "id": 471,
        "name": "紳士密令 U.N.C.L.E."
    },
    {
        "id": 472,
        "name": "終末的後宮"
    },
    {
        "id": 473,
        "name": "終極一班"
    },
    {
        "id": 474,
        "name": "莫札特！Mozart! (德語音樂劇)"
    },
    {
        "id": 475,
        "name": "被勇者隊伍開除的馭獸使，邂逅了最強種的貓耳少女"
    },
    {
        "id": 476,
        "name": "被解僱的暗黑士兵（30多歲）開始了慢生活的第二人生"
    },
    {
        "id": 477,
        "name": "通靈童子(通靈王)"
    },
    {
        "id": 478,
        "name": "野球長打王"
    },
    {
        "id": 479,
        "name": "陰陽師"
    },
    {
        "id": 480,
        "name": "陰陽師Onmyoji"
    },
    {
        "id": 481,
        "name": "陰謀辦公室 Inside Job"
    },
    {
        "id": 482,
        "name": "勝利女神：妮姬"
    },
    {
        "id": 483,
        "name": "寒蟬鳴泣之時"
    },
    {
        "id": 484,
        "name": "悲慘世界 Les Miserables"
    },
    {
        "id": 485,
        "name": "惡魔人"
    },
    {
        "id": 486,
        "name": "惡魔奶爸"
    },
    {
        "id": 487,
        "name": "惡魔獵人5 Devil May Cry 5"
    },
    {
        "id": 488,
        "name": "惡魔獵人系列"
    },
    {
        "id": 489,
        "name": "惡靈古堡"
    },
    {
        "id": 490,
        "name": "惡靈古堡系列"
    },
    {
        "id": 491,
        "name": "敢動我弟弟就死定了"
    },
    {
        "id": 492,
        "name": "斯普拉遁系列"
    },
    {
        "id": 493,
        "name": "普羅米亞"
    },
    {
        "id": 494,
        "name": "最後大魔王"
    },
    {
        "id": 495,
        "name": "最後生還者 The Last of Us"
    },
    {
        "id": 496,
        "name": "最後流亡"
    },
    {
        "id": 497,
        "name": "最弱魔物使開始了撿垃圾之旅。"
    },
    {
        "id": 498,
        "name": "最強陰陽師的異世界轉生記"
    },
    {
        "id": 499,
        "name": "最強廢渣皇子暗中活躍於帝位之爭 佯裝無能的SS級皇子背地支配王位繼承戰"
    },
    {
        "id": 500,
        "name": "最強學生會長"
    },
    {
        "id": 501,
        "name": "最遊記"
    },
    {
        "id": 502,
        "name": "最遊記外傳"
    },
    {
        "id": 503,
        "name": "棋魂(棋靈王)"
    },
    {
        "id": 504,
        "name": "棒球大聯盟"
    },
    {
        "id": 505,
        "name": "植木的法則"
    },
    {
        "id": 506,
        "name": "無法親近的千金"
    },
    {
        "id": 507,
        "name": "無家可歸"
    },
    {
        "id": 508,
        "name": "無能力者娜娜"
    },
    {
        "id": 509,
        "name": "無敵少俠 Invincible"
    },
    {
        "id": 510,
        "name": "無敵怪醫K2"
    },
    {
        "id": 511,
        "name": "無頭騎士異聞錄 DuRaRaRa!!"
    },
    {
        "id": 512,
        "name": "無職轉生～到了異世界就拿出真本事～"
    },
    {
        "id": 513,
        "name": "畫江湖之不良人"
    },
    {
        "id": 514,
        "name": "盜墓筆記"
    },
    {
        "id": 515,
        "name": "結界師"
    },
    {
        "id": 516,
        "name": "萊莎的鍊金工房"
    },
    {
        "id": 517,
        "name": "街頭快打系列"
    },
    {
        "id": 518,
        "name": "街頭霸王 Gorillaz"
    },
    {
        "id": 519,
        "name": "超人力霸王"
    },
    {
        "id": 520,
        "name": "超自然檔案 Supernatural"
    },
    {
        "id": 521,
        "name": "超級瑪利歐"
    },
    {
        "id": 522,
        "name": "超異域公主連結☆Re：Dive"
    },
    {
        "id": 523,
        "name": "超超超超超喜歡你的100個女朋友"
    },
    {
        "id": 524,
        "name": "超厲害智慧型手機"
    },
    {
        "id": 525,
        "name": "越界"
    },
    {
        "id": 526,
        "name": "跑跑薑餅人"
    },
    {
        "id": 527,
        "name": "進擊的巨人"
    },
    {
        "id": 528,
        "name": "開掛藥師的異世界悠閒生活～到異世界開藥房去～"
    },
    {
        "id": 529,
        "name": "集合啦！動物森友會"
    },
    {
        "id": 530,
        "name": "雲際線工作室"
    },
    {
        "id": 531,
        "name": "黃金庭院：冬日裡的新年願望"
    },
    {
        "id": 532,
        "name": "黃金神威"
    },
    {
        "id": 533,
        "name": "黑白來看守所"
    },
    {
        "id": 534,
        "name": "黑色五葉草"
    },
    {
        "id": 535,
        "name": "黑執事"
    },
    {
        "id": 536,
        "name": "黑袍糾察隊 The Boys"
    },
    {
        "id": 537,
        "name": "亂馬1/2"
    },
    {
        "id": 538,
        "name": "催眠麥克風"
    },
    {
        "id": 539,
        "name": "傳奇系列(時空幻境系列)"
    },
    {
        "id": 540,
        "name": "想當冒險者前往都市的女兒成為S級"
    },
    {
        "id": 541,
        "name": "\"意外 Three Billboards Outside Ebbing Missouri\""
    },
    {
        "id": 542,
        "name": "愛天使傳說"
    },
    {
        "id": 543,
        "name": "\"搖滾莫札特 Mozart, l'opéra rock\""
    },
    {
        "id": 544,
        "name": "搭檔任務 秘密搜查組"
    },
    {
        "id": 545,
        "name": "新世界狂歡"
    },
    {
        "id": 546,
        "name": "新世紀福音戰士"
    },
    {
        "id": 547,
        "name": "新世紀福爾摩斯 BBC SHERLOCK"
    },
    {
        "id": 548,
        "name": "新社員"
    },
    {
        "id": 549,
        "name": "新機動戰記鋼彈W 無盡的華爾茲"
    },
    {
        "id": 550,
        "name": "暗殺教室"
    },
    {
        "id": 551,
        "name": "楓之谷"
    },
    {
        "id": 552,
        "name": "極惡老大 Helluva Boss"
    },
    {
        "id": 553,
        "name": "滅亡後的世界"
    },
    {
        "id": 554,
        "name": "煙硝絮語"
    },
    {
        "id": 555,
        "name": "瑞克和莫蒂 Rick & Morty"
    },
    {
        "id": 556,
        "name": "瑯琊榜"
    },
    {
        "id": 557,
        "name": "罪惡王冠"
    },
    {
        "id": 558,
        "name": "義呆利 Axis Powers"
    },
    {
        "id": 559,
        "name": "聖鬥士星矢"
    },
    {
        "id": 560,
        "name": "聖魔之血"
    },
    {
        "id": 561,
        "name": "萬能管家 Jeeves And Wooster"
    },
    {
        "id": 562,
        "name": "葬送的芙莉蓮"
    },
    {
        "id": 563,
        "name": "路人超能100"
    },
    {
        "id": 564,
        "name": "遊戲3人娘"
    },
    {
        "id": 565,
        "name": "遊戲王"
    },
    {
        "id": 566,
        "name": "遊戲王5D's"
    },
    {
        "id": 567,
        "name": "遊戲王ARC-V"
    },
    {
        "id": 568,
        "name": "遊戲王GO RUSH"
    },
    {
        "id": 569,
        "name": "遊戲王GX"
    },
    {
        "id": 570,
        "name": "遊戲王R"
    },
    {
        "id": 571,
        "name": "遊戲王SEVENS"
    },
    {
        "id": 572,
        "name": "遊戲王VRAINS"
    },
    {
        "id": 573,
        "name": "遊戲王ZEXAL"
    },
    {
        "id": 574,
        "name": "鈴芽之旅"
    },
    {
        "id": 575,
        "name": "銃夢"
    },
    {
        "id": 576,
        "name": "電馭叛客：邊緣行者 Cyberpunk: Edgerunners"
    },
    {
        "id": 577,
        "name": "電馭叛客2077 Cyberpunk 2077"
    },
    {
        "id": 578,
        "name": "電競真人衍生"
    },
    {
        "id": 579,
        "name": "馴龍高手 How to Train Your Dragon"
    },
    {
        "id": 580,
        "name": "境界的彼方"
    },
    {
        "id": 581,
        "name": "境界線上的地平線"
    },
    {
        "id": 582,
        "name": "境界觸發者"
    },
    {
        "id": 583,
        "name": "槍神Trigun"
    },
    {
        "id": 584,
        "name": "槍彈辯駁系列"
    },
    {
        "id": 585,
        "name": "歌劇魅影 The Pantom of the Opera"
    },
    {
        "id": 586,
        "name": "滿級新手"
    },
    {
        "id": 587,
        "name": "熊熊勇闖異世界"
    },
    {
        "id": 588,
        "name": "瑪莉亞狂熱"
    },
    {
        "id": 589,
        "name": "瑪莉亞的凝望"
    },
    {
        "id": 590,
        "name": "疑犯追蹤 Person of Interest - POI"
    },
    {
        "id": 591,
        "name": "睡魔 The Sandman"
    },
    {
        "id": 592,
        "name": "碧血狂殺 Red Dead Redemption - RDR"
    },
    {
        "id": 593,
        "name": "碧藍幻想"
    },
    {
        "id": 594,
        "name": "碧藍航線"
    },
    {
        "id": 595,
        "name": "福星小子"
    },
    {
        "id": 596,
        "name": "福爾摩斯Sherlock Holmes"
    },
    {
        "id": 597,
        "name": "精靈寶可夢"
    },
    {
        "id": 598,
        "name": "網球王子"
    },
    {
        "id": 599,
        "name": "蒼翼默示錄系列"
    },
    {
        "id": 600,
        "name": "蜘蛛人"
    },
    {
        "id": 601,
        "name": "蜘蛛人：新宇宙"
    },
    {
        "id": 602,
        "name": "銀之匙 Silver Spoon"
    },
    {
        "id": 603,
        "name": "鳴潮"
    },
    {
        "id": 604,
        "name": "齊木楠雄的災難"
    },
    {
        "id": 605,
        "name": "劍俠情緣3"
    },
    {
        "id": 606,
        "name": "劍尊歸來"
    },
    {
        "id": 607,
        "name": "增田幸助劇場 搞笑漫畫日和"
    },
    {
        "id": 608,
        "name": "影子籃球員"
    },
    {
        "id": 609,
        "name": "憂國的莫里亞蒂"
    },
    {
        "id": 610,
        "name": "數碼寶貝"
    },
    {
        "id": 611,
        "name": "暮蟬悲鳴時"
    },
    {
        "id": 612,
        "name": "潘朵拉之心"
    },
    {
        "id": 613,
        "name": "箱箱The Box"
    },
    {
        "id": 614,
        "name": "蔚藍檔案"
    },
    {
        "id": 615,
        "name": "請問您今天要來點兔子嗎？"
    },
    {
        "id": 616,
        "name": "豬肝記得煮熟再吃"
    },
    {
        "id": 617,
        "name": "賢者大叔的異世界生活日記"
    },
    {
        "id": 618,
        "name": "賢惠幼妻仙狐小姐"
    },
    {
        "id": 619,
        "name": "賭博默示錄"
    },
    {
        "id": 620,
        "name": "輝夜姬想讓人告白"
    },
    {
        "id": 621,
        "name": "輪迴7次的惡役千金，在前敵國享受隨心所欲的新婚生活"
    },
    {
        "id": 622,
        "name": "鋒迴路轉 Knives Out"
    },
    {
        "id": 623,
        "name": "鞋貓劍客 Puss in Boots"
    },
    {
        "id": 624,
        "name": "魯邦三世"
    },
    {
        "id": 625,
        "name": "魷魚遊戲"
    },
    {
        "id": 626,
        "name": "黎明死線 Dead by daylight"
    },
    {
        "id": 627,
        "name": "學園爆笑王"
    },
    {
        "id": 628,
        "name": "戰勇。"
    },
    {
        "id": 629,
        "name": "戰鬥陀螺"
    },
    {
        "id": 630,
        "name": "戰鬥員派遣中！"
    },
    {
        "id": 631,
        "name": "戰國BASARA系列"
    },
    {
        "id": 632,
        "name": "戰國Collection"
    },
    {
        "id": 633,
        "name": "戰場之狼系列"
    },
    {
        "id": 634,
        "name": "撿走被人悔婚的千金，教會她壞壞的幸福生活"
    },
    {
        "id": 635,
        "name": "擁有超常技能的異世界流浪美食家"
    },
    {
        "id": 636,
        "name": "擅長捉弄人的高木同學"
    },
    {
        "id": 637,
        "name": "機動新世紀GUNDAM X"
    },
    {
        "id": 638,
        "name": "機動戰士GUNDAM SEED DESTINY"
    },
    {
        "id": 639,
        "name": "機動戰士Z鋼彈"
    },
    {
        "id": 640,
        "name": "機動戰士鋼彈 鐵血孤兒"
    },
    {
        "id": 641,
        "name": "機動戰士鋼彈AGE"
    },
    {
        "id": 642,
        "name": "機動戰士鋼彈SEED DESTINY"
    },
    {
        "id": 643,
        "name": "機動戰士鋼彈ZZ"
    },
    {
        "id": 644,
        "name": "瓢蟲少女"
    },
    {
        "id": 645,
        "name": "貓王艾維斯 Elvis"
    },
    {
        "id": 646,
        "name": "貓的報恩"
    },
    {
        "id": 647,
        "name": "鋼殼都市雷吉歐斯"
    },
    {
        "id": 648,
        "name": "霍格華茲的傳承(哈利波特)"
    },
    {
        "id": 649,
        "name": "霍爾的移動城堡"
    },
    {
        "id": 650,
        "name": "頭七怪談"
    },
    {
        "id": 651,
        "name": "頭文字D"
    },
    {
        "id": 652,
        "name": "駭客任務 The Matrix"
    },
    {
        "id": 653,
        "name": "骸骨騎士大人異世界冒險中"
    },
    {
        "id": 654,
        "name": "龍與地下城：盜賊榮耀 - DND"
    },
    {
        "id": 655,
        "name": "龍與雀斑公主"
    },
    {
        "id": 656,
        "name": "龍戰士系列"
    },
    {
        "id": 657,
        "name": "龍貓"
    },
    {
        "id": 658,
        "name": "殭屍100～在成為殭屍前要做的 100 件事～"
    },
    {
        "id": 659,
        "name": "殭屍哪有那麼萌？"
    },
    {
        "id": 660,
        "name": "環太平洋 Pacific Rim"
    },
    {
        "id": 661,
        "name": "膽大黨"
    },
    {
        "id": 662,
        "name": "薑餅人王國"
    },
    {
        "id": 663,
        "name": "謎樣森林(花園牆外) Over the Garden Wall"
    },
    {
        "id": 664,
        "name": "賽馬娘 Pretty Derby"
    },
    {
        "id": 665,
        "name": "闇影詩章"
    },
    {
        "id": 666,
        "name": "雖然不太清楚不過我好像轉生到異世界了"
    },
    {
        "id": 667,
        "name": "嚕嚕米 MOONIN"
    },
    {
        "id": 668,
        "name": "獵魔士 The Witcher"
    },
    {
        "id": 669,
        "name": "薩爾達傳說系列"
    },
    {
        "id": 670,
        "name": "轉生公主與天才千金的魔法革命"
    },
    {
        "id": 671,
        "name": "轉生成女性向遊戲只有毀滅END的壞人大小姐"
    },
    {
        "id": 672,
        "name": "轉生成自動販賣機的我今天也在迷宮徘徊"
    },
    {
        "id": 673,
        "name": "轉生者才能駕馭的極限天賦 - Over Limit Skill Holder -"
    },
    {
        "id": 674,
        "name": "轉生就是劍"
    },
    {
        "id": 675,
        "name": "轉生貴族的異世界冒險錄～不知自重的眾神使徒～"
    },
    {
        "id": 676,
        "name": "轉生貴族憑鑑定技能扭轉人生"
    },
    {
        "id": 677,
        "name": "轉生賢者的異世界生活～取得第二職業，成為世界最強～"
    },
    {
        "id": 678,
        "name": "鎮魂"
    },
    {
        "id": 679,
        "name": "壞事大飯店"
    },
    {
        "id": 680,
        "name": "爆肝工程師的異世界狂想曲"
    },
    {
        "id": 681,
        "name": "爆漫王。"
    },
    {
        "id": 682,
        "name": "羅小黑戰記"
    },
    {
        "id": 683,
        "name": "羅密歐與茱麗葉 Romeo et Juliette"
    },
    {
        "id": 684,
        "name": "羅德斯島戰記"
    },
    {
        "id": 685,
        "name": "藥師少女的獨語"
    },
    {
        "id": 686,
        "name": "關於我在無意間被隔壁的天使變成廢柴這件事"
    },
    {
        "id": 687,
        "name": "關於我轉生變成史萊姆這檔事"
    },
    {
        "id": 688,
        "name": "難得拿到外掛轉生至異世界，就想要隨心所欲過生活"
    },
    {
        "id": 689,
        "name": "寶石之國"
    },
    {
        "id": 690,
        "name": "繼母的拖油瓶是我的前女友"
    },
    {
        "id": 691,
        "name": "艦隊Collection"
    },
    {
        "id": 692,
        "name": "鐘樓怪人 Notre Dame de Paris"
    },
    {
        "id": 693,
        "name": "櫻花大戰系列"
    },
    {
        "id": 694,
        "name": "櫻桃小丸子"
    },
    {
        "id": 695,
        "name": "櫻蘭高校男公關部"
    },
    {
        "id": 696,
        "name": "灌籃少年"
    },
    {
        "id": 697,
        "name": "灌籃高手"
    },
    {
        "id": 698,
        "name": "蠟筆小新"
    },
    {
        "id": 699,
        "name": "霸道橫行 Reservoir Dogs"
    },
    {
        "id": 700,
        "name": "霹靂布袋戲"
    },
    {
        "id": 701,
        "name": "飆速宅男"
    },
    {
        "id": 702,
        "name": "驅魔少年"
    },
    {
        "id": 703,
        "name": "魔人偵探腦嚙涅羅"
    },
    {
        "id": 704,
        "name": "魔女宅急便"
    },
    {
        "id": 705,
        "name": "魔女的考驗"
    },
    {
        "id": 706,
        "name": "魔王 JUVENILE REMIX"
    },
    {
        "id": 707,
        "name": "魔王勇者"
    },
    {
        "id": 708,
        "name": "魔王學院的不適任者～史上最強的魔王始祖～"
    },
    {
        "id": 709,
        "name": "魔王學園的反叛者"
    },
    {
        "id": 710,
        "name": "魔戒 The Lord of the Rings"
    },
    {
        "id": 711,
        "name": "魔戒：力量之戒 Rings of Power"
    },
    {
        "id": 712,
        "name": "魔技科的劍士與召喚魔王"
    },
    {
        "id": 713,
        "name": "魔法公主"
    },
    {
        "id": 714,
        "name": "魔法少女小圓"
    },
    {
        "id": 715,
        "name": "魔法少女奈葉系列"
    },
    {
        "id": 716,
        "name": "魔法少年賈修"
    },
    {
        "id": 717,
        "name": "魔法使的約定"
    },
    {
        "id": 718,
        "name": "魔法使的新娘"
    },
    {
        "id": 719,
        "name": "魔法律事務所"
    },
    {
        "id": 720,
        "name": "魔法科高中的劣等生"
    },
    {
        "id": 721,
        "name": "魔法帽的工作室"
    },
    {
        "id": 722,
        "name": "魔法禁書目錄"
    },
    {
        "id": 723,
        "name": "魔物獵人系列"
    },
    {
        "id": 724,
        "name": "魔界村系列"
    },
    {
        "id": 725,
        "name": "魔域幽靈系列"
    },
    {
        "id": 726,
        "name": "魔術師歐菲"
    },
    {
        "id": 727,
        "name": "魔髮奇緣 Tangled"
    },
    {
        "id": 728,
        "name": "魔獸世界 World of Warcraft"
    },
    {
        "id": 729,
        "name": "魔鏡娛樂"
    },
    {
        "id": 730,
        "name": "權力遊戲 Game of Thrones"
    },
    {
        "id": 731,
        "name": "歡迎來到布達佩斯大飯店 The Grand Budapest Hotel"
    },
    {
        "id": 732,
        "name": "歡迎來到實力至上主義的教室"
    },
    {
        "id": 733,
        "name": "戀上換裝娃娃"
    },
    {
        "id": 734,
        "name": "戀愛修課 Heart Stopper"
    },
    {
        "id": 735,
        "name": "戀與深空"
    },
    {
        "id": 736,
        "name": "戀與製作人"
    },
    {
        "id": 737,
        "name": "變成伯爵家的混混"
    },
    {
        "id": 738,
        "name": "變形金剛 Transformers"
    },
    {
        "id": 739,
        "name": "變態王子與不笑貓"
    },
    {
        "id": 740,
        "name": "驚爆危機"
    },
    {
        "id": 741,
        "name": "驚奇數位馬戲團 The Amazing Digital Circus"
    },
    {
        "id": 742,
        "name": "靈異教師神眉"
    },
    {
        "id": 743,
        "name": "鑽石王牌"
    },
    {
        "id": 744,
        "name": "鑽石的功罪"
    },
    {
        "id": 745,
        "name": "豔漢"
    },
    {
        "id": 746,
        "name": "排球少年"
    },
    {
        "id": 747,
        "name": "失憶投捕"
    },
    {
        "id": 748,
        "name": "藍色監獄 blue lock"
    }
]
    }

    /*api載入
async function loadCategories() {
 const res = await fetch('/api/categories')
 categories.value = await res.json()
}
    */
    return {
        categories,
        loadCategories

    }
}
