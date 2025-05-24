import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import CartHeader from "./CartHeaderArea";
import CartMain from "./CartMain.jsx";
import Light from "./LightSwitch.jsx";
import CartTopArea from "./CartTopArea.jsx";

export const ThemeContext = createContext();

const CartBody = () => {
  const ThemeProvider = ({ children }) => {
    const fruit = [
      {
        id: 1,
        name: "🍎 Apple - 蘋果香甜可口",
        img: "🍎",
        price: 30,
        sort: "fruit 水果 吃的",
      },
      {
        id: 2,
        name: "🍌 Banana - 補充能量的好選擇",
        img: "🍌",
        price: 20,
        sort: "fruit 水果 吃的",
      },
      {
        id: 3,
        name: "🍇 Grape - 多汁紫葡萄",
        img: "🍇",
        price: 40,
        sort: "fruit 水果 吃的",
      },
      {
        id: 4,
        name: "🍓 Strawberry - 少女最愛草莓",
        img: "🍓",
        price: 35,
        sort: "fruit 水果 吃的",
      },
      {
        id: 5,
        name: "🍍 Pineapple - 酸酸甜甜鳳梨",
        img: "🍍",
        price: 45,
        sort: "fruit 水果 吃的",
      },
      {
        id: 6,
        name: "🥝 Kiwi - 綠色營養炸彈",
        img: "🥝",
        price: 28,
        sort: "fruit 水果 吃的",
      },
      {
        id: 7,
        name: "🍒 Cherry - 小巧迷你櫻桃",
        img: "🍒",
        price: 50,
        sort: "fruit 水果 吃的",
      },
      {
        id: 8,
        name: "🍉 Watermelon - 夏日西瓜",
        img: "🍉",
        price: 60,
        sort: "fruit 水果 吃的",
      },
      {
        id: 9,
        name: "🍑 Peach - 蜜桃嫩嫩",
        img: "🍑",
        price: 33,
        sort: "fruit 水果 吃的",
      },
      {
        id: 10,
        name: "🍋 Lemon - 酸溜溜檸檬",
        img: "🍋",
        price: 25,
        sort: "fruit 水果 吃的",
      },
      {
        id: 11,
        name: "🥭 Mango - 熱帶芒果",
        img: "🥭",
        price: 38,
        sort: "fruit 水果 吃的",
      },
      {
        id: 12,
        name: "🥥 Coconut - 清爽椰子",
        img: "🥥",
        price: 55,
        sort: "fruit 水果 吃的",
      },
      {
        id: 13,
        name: "🍈 Melon - 蜜瓜來一片",
        img: "🍈",
        price: 42,
        sort: "fruit 水果 吃的",
      },
      {
        id: 14,
        name: "🍅 Tomato - 番茄其實是水果！",
        img: "🍅",
        price: 18,
        sort: "fruit 水果 吃的",
      },
      {
        id: 15,
        name: "🥬 Lettuce - 生菜清脆",
        img: "🥬",
        price: 15,
        sort: "vegetable 蔬菜 吃的",
      },
      {
        id: 16,
        name: "🥦 Broccoli - 健康花椰菜",
        img: "🥦",
        price: 22,
        sort: "vegetable 蔬菜 吃的",
      },
      {
        id: 17,
        name: "🥒 Cucumber - 解渴小黃瓜",
        img: "🥒",
        price: 16,
        sort: "vegetable 蔬菜 吃的",
      },
      {
        id: 18,
        name: "🌽 Corn - 黃金玉米棒",
        img: "🌽",
        price: 24,
        sort: "vegetable 蔬菜 吃的",
      },
      {
        id: 19,
        name: "🥕 Carrot - 小兔子最愛",
        img: "🥕",
        price: 19,
        sort: "vegetable 蔬菜 吃的",
      },
      {
        id: 20,
        name: "🧄 Garlic - 香味爆棚大蒜",
        img: "🧄",
        price: 12,
        sort: "vegetable 蔬菜 調味",
      },
      {
        id: 21,
        name: "🧅 Onion - 洋蔥催淚彈",
        img: "🧅",
        price: 14,
        sort: "vegetable 蔬菜 調味",
      },
      {
        id: 22,
        name: "🥔 Potato - 萬用馬鈴薯",
        img: "🥔",
        price: 17,
        sort: "vegetable 蔬菜 吃的",
      },
      {
        id: 23,
        name: "🍠 Sweet Potato - 地瓜溫暖心",
        img: "🍠",
        price: 20,
        sort: "vegetable 蔬菜 吃的",
      },
      {
        id: 24,
        name: "🥑 Avocado - 網美最愛酪梨",
        img: "🥑",
        price: 48,
        sort: "fruit 水果 吃的",
      },
      {
        id: 25,
        name: "🌶️ Chili - 辣椒讓你熱血",
        img: "🌶️",
        price: 10,
        sort: "vegetable 蔬菜 調味",
      },
      {
        id: 26,
        name: "🫑 Bell Pepper - 彩椒繽紛",
        img: "🫑",
        price: 21,
        sort: "vegetable 蔬菜 吃的",
      },
      {
        id: 27,
        name: "🥜 Peanut - 花生香脆",
        img: "🥜",
        price: 15,
        sort: "nut 堅果 零食",
      },
      {
        id: 28,
        name: "🌰 Chestnut - 冬天剝剝剝",
        img: "🌰",
        price: 18,
        sort: "nut 堅果 零食",
      },
      {
        id: 29,
        name: "🍄 Mushroom - 森林小菇",
        img: "🍄",
        price: 23,
        sort: "vegetable 菇類 吃的",
      },
      {
        id: 30,
        name: "🫒 Olive - 地中海橄欖",
        img: "🫒",
        price: 26,
        sort: "fruit 水果 調味",
      },
    ];

    const daily = [
      {
        id: 31,
        name: "🧻 Toilet Paper - 柔軟三層紙",
        price: 35,
        sort: "daily 日用品 清潔",
        img: "🧻",
      },
      {
        id: 32,
        name: "🪥 Toothbrush - 牙齒清潔靠它",
        price: 20,
        sort: "daily 日用品 清潔",
        img: "🪥",
      },
      {
        id: 33,
        name: "🧼 Soap - 古早味香皂",
        price: 15,
        sort: "daily 日用品 清潔",
        img: "🧼",
      },
      {
        id: 34,
        name: "🧴 Shampoo - 洗髮精順順的",
        price: 45,
        sort: "daily 日用品 清潔",
        img: "🧴",
      },
      {
        id: 35,
        name: "🪒 Razor - 刮鬍乾淨俐落",
        price: 38,
        sort: "daily 日用品 個人護理",
        img: "🪒",
      },
      {
        id: 36,
        name: "🧽 Sponge - 洗碗小幫手",
        price: 12,
        sort: "daily 日用品 廚房",
        img: "🧽",
      },
      {
        id: 37,
        name: "🪑 Chair - 居家簡約椅",
        price: 160,
        sort: "daily 家具 生活",
        img: "🪑",
      },
      {
        id: 38,
        name: "🛏️ Bed - 一覺好眠",
        price: 480,
        sort: "daily 家具 生活",
        img: "🛏️",
      },
      {
        id: 39,
        name: "🧯 Fire Extinguisher - 滅火器備用",
        price: 300,
        sort: "daily 安全 防火",
        img: "🧯",
      },
      {
        id: 40,
        name: "🧃 Juice Box - 吸一口果汁",
        price: 25,
        sort: "daily 飲品 食物",
        img: "🧃",
      },
      {
        id: 41,
        name: "🧵 Thread - 補衣小工具",
        price: 8,
        sort: "daily 手作 裁縫",
        img: "🧵",
      },
      {
        id: 42,
        name: "🪡 Needle - 裁縫專用",
        price: 5,
        sort: "daily 手作 裁縫",
        img: "🪡",
      },
      {
        id: 43,
        name: "🪞 Mirror - 照出你的帥氣",
        price: 45,
        sort: "daily 居家 美容",
        img: "🪞",
      },
      {
        id: 44,
        name: "🧺 Laundry Basket - 衣服收一收",
        price: 60,
        sort: "daily 洗衣 收納",
        img: "🧺",
      },
      {
        id: 45,
        name: "🧹 Broom - 掃地神器",
        price: 28,
        sort: "daily 清潔 工具",
        img: "🧹",
      },
      {
        id: 46,
        name: "🪠 Plunger - 馬桶救星",
        price: 33,
        sort: "daily 清潔 工具",
        img: "🪠",
      },
      {
        id: 47,
        name: "🧯 Fire Extinguisher - 安全第一",
        price: 300,
        sort: "daily 安全 防火",
        img: "🧯",
      },
      {
        id: 48,
        name: "🧂 Salt - 調味基本款",
        price: 10,
        sort: "daily 食品 調味",
        img: "🧂",
      },
      {
        id: 49,
        name: "🪤 Mousetrap - 居家守護者",
        price: 20,
        sort: "daily 居家 防護",
        img: "🪤",
      },
      {
        id: 50,
        name: "🪟 Window Cleaner - 擦窗神器",
        price: 25,
        sort: "daily 清潔 工具",
        img: "🪟",
      },
      {
        id: 51,
        name: "🧊 Ice Tray - 製冰好幫手",
        price: 18,
        sort: "daily 廚房 小物",
        img: "🧊",
      },
      {
        id: 52,
        name: "🪣 Bucket - 提水提心",
        price: 30,
        sort: "daily 清潔 工具",
        img: "🪣",
      },
      {
        id: 53,
        name: "🧯 Fire Blanket - 火場救命布",
        price: 150,
        sort: "daily 安全 防火",
        img: "🧯",
      },
      {
        id: 54,
        name: "🧦 Socks - 溫暖你雙腳",
        price: 22,
        sort: "daily 衣物 穿搭",
        img: "🧦",
      },
      {
        id: 55,
        name: "👕 T-shirt - 居家短T",
        price: 80,
        sort: "daily 衣物 穿搭",
        img: "👕",
      },
      {
        id: 56,
        name: "👖 Jeans - 牛仔褲耐穿",
        price: 120,
        sort: "daily 衣物 穿搭",
        img: "👖",
      },
      {
        id: 57,
        name: "👜 Bag - 日常背包",
        price: 90,
        sort: "daily 衣物 配件",
        img: "👜",
      },
      {
        id: 58,
        name: "🧢 Cap - 帽子遮陽又時尚",
        price: 60,
        sort: "daily 衣物 配件",
        img: "🧢",
      },
      {
        id: 59,
        name: "🧤 Gloves - 冬日保暖",
        price: 35,
        sort: "daily 衣物 配件",
        img: "🧤",
      },
      {
        id: 60,
        name: "🧳 Luggage - 小旅行必備",
        price: 240,
        sort: "daily 出遊 收納",
        img: "🧳",
      },
    ];

    const snack = [
      {
        id: 61,
        name: "🍿 爆米花 - 焦糖香甜",
        price: 35,
        sort: "snack 零食 吃的",
        img: "🍿",
      },
      {
        id: 62,
        name: "🍫 巧克力 - 牛奶風味",
        price: 45,
        sort: "snack 零食 吃的",
        img: "🍫",
      },
      {
        id: 63,
        name: "🍪 餅乾 - 奶油曲奇",
        price: 30,
        sort: "snack 零食 吃的",
        img: "🍪",
      },
      {
        id: 64,
        name: "🥜 花生 - 鹽味烘焙",
        price: 25,
        sort: "snack 零食 吃的",
        img: "🥜",
      },
      {
        id: 65,
        name: "🍬 糖果 - 綜合水果",
        price: 20,
        sort: "snack 零食 吃的",
        img: "🍬",
      },
      {
        id: 66,
        name: "🍘 米果 - 海苔風味",
        price: 28,
        sort: "snack 零食 吃的",
        img: "🍘",
      },
      {
        id: 67,
        name: "🍥 小魚乾 - 蒜香辣味",
        price: 38,
        sort: "snack 零食 吃的",
        img: "🍥",
      },
      {
        id: 68,
        name: "🥠 幸運餅乾",
        price: 15,
        sort: "snack 零食 吃的",
        img: "🥠",
      },
      {
        id: 69,
        name: "🍩 甜甜圈 - 巧克力糖霜",
        price: 40,
        sort: "snack 零食 吃的",
        img: "🍩",
      },
      {
        id: 70,
        name: "🍰 起司蛋糕片",
        price: 55,
        sort: "snack 零食 吃的",
        img: "🍰",
      },
      {
        id: 71,
        name: "🍡 串燒麻糬",
        price: 32,
        sort: "snack 零食 吃的",
        img: "🍡",
      },
      {
        id: 72,
        name: "🍠 地瓜條 - 低溫烘焙",
        price: 34,
        sort: "snack 零食 吃的",
        img: "🍠",
      },
      {
        id: 73,
        name: "🥟 鮮蝦煎餃",
        price: 48,
        sort: "snack 零食 吃的",
        img: "🥟",
      },
      {
        id: 74,
        name: "🍙 梅子飯糰",
        price: 25,
        sort: "snack 零食 吃的",
        img: "🍙",
      },
      {
        id: 75,
        name: "🍛 咖哩脆餅",
        price: 29,
        sort: "snack 零食 吃的",
        img: "🍛",
      },
      {
        id: 76,
        name: "🍞 吐司脆片 - 奶油糖",
        price: 27,
        sort: "snack 零食 吃的",
        img: "🍞",
      },
      {
        id: 77,
        name: "🍜 泡麵餅乾 - 韓式辣味",
        price: 22,
        sort: "snack 零食 吃的",
        img: "🍜",
      },
      {
        id: 78,
        name: "🍗 雞塊 - 辣味脆皮",
        price: 39,
        sort: "snack 零食 吃的",
        img: "🍗",
      },
      {
        id: 79,
        name: "🥓 肉乾 - 碳烤豬肉片",
        price: 50,
        sort: "snack 零食 吃的",
        img: "🥓",
      },
      {
        id: 80,
        name: "🍧 冰沙果凍 - 葡萄味",
        price: 18,
        sort: "snack 零食 吃的",
        img: "🍧",
      },
      {
        id: 81,
        name: "🍯 蜂蜜堅果棒",
        price: 42,
        sort: "snack 零食 吃的",
        img: "🍯",
      },
      {
        id: 82,
        name: "🍨 冰淇淋脆筒",
        price: 37,
        sort: "snack 零食 吃的",
        img: "🍨",
      },
      {
        id: 83,
        name: "🥖 法棍切片 - 起司口味",
        price: 36,
        sort: "snack 零食 吃的",
        img: "🥖",
      },
      {
        id: 84,
        name: "🍦 軟雪糕 - 香草",
        price: 33,
        sort: "snack 零食 吃的",
        img: "🍦",
      },
      {
        id: 85,
        name: "🍮 布丁 - 焦糖口味",
        price: 30,
        sort: "snack 零食 吃的",
        img: "🍮",
      },
      {
        id: 86,
        name: "🍵 抹茶羊羹",
        price: 41,
        sort: "snack 零食 吃的",
        img: "🍵",
      },
      {
        id: 87,
        name: "🥥 椰子脆片",
        price: 26,
        sort: "snack 零食 吃的",
        img: "🥥",
      },
      {
        id: 88,
        name: "🥬 蔬菜棒 - 低熱量",
        price: 28,
        sort: "snack 零食 吃的",
        img: "🥬",
      },
      {
        id: 89,
        name: "🍠 芋頭酥",
        price: 43,
        sort: "snack 零食 吃的",
        img: "🍠",
      },
      {
        id: 90,
        name: "🍗 炸雞皮餅乾",
        price: 31,
        sort: "snack 零食 吃的",
        img: "🍗",
      },
    ];

    const divce = [
      {
        id: 91,
        name: "🔌 充電線 - Type-C 快充",
        img: "🔌",
        price: 199,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 92,
        name: "🔋 行動電源 - 10000mAh",
        img: "🔋",
        price: 499,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 93,
        name: "🎧 耳機 - 無線藍牙",
        img: "🎧",
        price: 899,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 94,
        name: "🖱 滑鼠 - 靜音無線",
        img: "🖱",
        price: 350,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 95,
        name: "⌨ 鍵盤 - 藍牙可折疊",
        img: "⌨",
        price: 699,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 96,
        name: "📱 手機殼 - 防摔透明",
        img: "📱",
        price: 180,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 97,
        name: "🖥 螢幕架 - 多功能擴充",
        img: "🖥",
        price: 420,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 98,
        name: "🎮 遊戲手把 - 多平台支援",
        img: "🎮",
        price: 980,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 99,
        name: "📷 網路攝影機 - 高清1080P",
        img: "📷",
        price: 650,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 100,
        name: "🧲 磁吸手機支架 - 車用",
        img: "🧲",
        price: 220,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 101,
        name: "🖨 印表機 - 彩色無線",
        img: "🖨",
        price: 1650,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 102,
        name: "🧰 工具盒 - 3C 修理專用",
        img: "🧰",
        price: 240,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 103,
        name: "🎥 攝影燈 - 補光神器",
        img: "🎥",
        price: 299,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 104,
        name: "📦 SSD 固態硬碟 - 512GB",
        img: "📦",
        price: 1350,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 105,
        name: "🔉 藍牙喇叭 - 重低音",
        img: "🔉",
        price: 550,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 106,
        name: "🕹 迷你街機遊戲機",
        img: "🕹",
        price: 880,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 107,
        name: "🧲 磁吸充電盤",
        img: "🧲",
        price: 310,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 108,
        name: "📡 USB 無線網卡",
        img: "📡",
        price: 260,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 109,
        name: "🖍 筆電清潔組",
        img: "🖍",
        price: 120,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 110,
        name: "🔧 鍵帽拔除器",
        img: "🔧",
        price: 90,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 111,
        name: "🔋 電池收納盒",
        img: "🔋",
        price: 55,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 112,
        name: "🧼 螢幕清潔噴霧",
        img: "🧼",
        price: 80,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 113,
        name: "📏 螢幕防窺片 - 13吋",
        img: "📏",
        price: 320,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 114,
        name: "🧲 平板磁吸支架",
        img: "🧲",
        price: 260,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 115,
        name: "🧵 線材收納帶",
        img: "🧵",
        price: 35,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 116,
        name: "🎮 電競滑鼠墊",
        img: "🎮",
        price: 210,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 117,
        name: "🪞 手機自拍鏡頭",
        img: "🪞",
        price: 180,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 118,
        name: "📷 鏡頭蓋 - 萬用型",
        img: "📷",
        price: 60,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 119,
        name: "📶 WIFI 放大器",
        img: "📶",
        price: 420,
        sort: "digital 3C 配件 電子",
      },
      {
        id: 120,
        name: "🧰 桌面理線槽",
        img: "🧰",
        price: 70,
        sort: "digital 3C 配件 電子",
      },
    ];

    const cart = [];
    const products = [...fruit, ...daily];

    const [theme, setTheme] = useState("bulb-dark");
    // 開闔設定
    const [isOpen, setIsOpen] = useState(false);
    const toggleCart = () => {
      setIsOpen(!isOpen);
      //
    };
    const [item, setItem] = useState("fruit");
    const handleItems = (e) => {
      if (e.target.value === "fruit") {
        setItem("fruit");
        console.log(e.target.value);
      } else if (e.target.value === "daily") {
        setItem("daily");
        console.log(e.target.value);
      }
    };

    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);
    const [isSearch, setIsSearch] = useState(false);

    const handleSearch = () => {
      const filtered = products.filter((item) =>
        item.sort.toLowerCase().includes(query.toLowerCase())
      );
      setResult(filtered);
      setQuery("");
      setIsSearch(true);
      console.log("搜尋已點擊!!");
      // setTimeout(() => {
      //   console.log(filtered);
      // }, 1000);
    };
    useEffect(() => {
      document.body.className = "";
      document.body.classList.add(theme);
      // console.log(theme);
    }, [theme]);

    // useReducer

    // console.log(products);
    function productRudcer(state, action) {
      switch (action.type) {
        case "ADD_Item": {
          // 先判斷是否存在
          // console.log("ADD ...");
          const existingItem = state.find(
            (item) => item.id === action.payload.id
          );
          if (existingItem) {
            return state.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            return [...state, { ...action.payload, quantity: 1 }];
          }
        }
        case "REMOVE_Item": {
          return state.filter((item) => item.id !== action.payload.id);
        }
        default:
          return state;
      }
    }

    const [cartItem, dispatch] = useReducer(productRudcer, cart);

    return (
      <ThemeContext.Provider
        value={{
          theme,
          setTheme,
          isOpen,
          toggleCart,
          fruit,
          daily,
          snack,
          divce,
          dispatch,
          cartItem,
          products,
          query,
          setQuery,
          result,
          setResult,
          handleSearch,
          item,
          setItem,
          handleItems,
          isSearch,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  };
  return (
    <div>
      <ThemeProvider>
        <CartTopArea />
        <Light />
        <CartHeader />
        <CartMain />
      </ThemeProvider>
    </div>
  );
};

export default CartBody;
