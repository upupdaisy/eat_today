const foods = [
    // 川菜
    "担担面", "水煮肉片", "麻婆豆腐", "回锅肉", "宫保鸡丁", "夫妻肺片", "辣子鸡",
    // 粤菜
    "白切鸡", "烧鹅", "叉烧", "虾饺", "肠粉", "蒸排骨", "清蒸鱼",
    // 湘菜
    "剁椒鱼头", "口味虾", "糖醋排骨", "湘西土匪鸭", "农家小炒肉",
    // 鲁菜
    "葱烧海参", "糖醋鲤鱼", "德州扒鸡", "九转大肠", "山东煎饼",
    // 苏菜
    "松鼠桂鱼", "盐水鸭", "大闸蟹", "狮子头", "扬州炒饭",
    // 浙菜
    "东坡肉", "龙井虾仁", "西湖醋鱼", "叫化鸡", "宁波汤圆",
    // 闽菜
    "佛跳墙", "沙县小吃", "福建炒米粉", "蚵仔煎", "海蛎煎",
    // 徽菜
    "毛豆腐", "徽州毛笋", "腌鱼", "徽式火腿", "石耳炖鸡",
    // 云南菜
    "汽锅鸡", "过桥米线", "野生菌火锅", "粑粑鱼", "昆明卤鸭",
    // 贵州菜
    "酸汤鱼", "肠旺面", "丝娃娃", "贵州牛肉粉", "贵阳肠旺",
    // 其他地方特色
    "兰州牛肉面", "重庆火锅", "北京烤鸭", "天津狗不理包子", "西安肉夹馍",
    "南京盐水鸭", "武汉热干面", "长沙臭豆腐", "杭州东坡肉", "青岛啤酒鱼"
];

let isRunning = false;
let intervalId = null;
const foodDisplay = document.getElementById('foodDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

function getRandomFood() {
    return foods[Math.floor(Math.random() * foods.length)];
}

function updateDisplay() {
    foodDisplay.innerHTML = `<span class="food-item">${getRandomFood()}</span>`;
}

function startRotating() {
    if (!isRunning) {
        isRunning = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
        intervalId = setInterval(updateDisplay, 50);
    }
}

function stopRotating() {
    if (isRunning) {
        isRunning = false;
        clearInterval(intervalId);
        startBtn.disabled = false;
        stopBtn.disabled = true;
        
        // 直接显示最终结果
        updateDisplay();
    }
}

startBtn.addEventListener('click', startRotating);
stopBtn.addEventListener('click', stopRotating);