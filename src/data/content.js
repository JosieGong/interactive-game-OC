// 各 App 内的具体内容。clue 字段指向 clues.js 中的线索 id，
// 表示这一块内容是可长按收藏的线索载体。

// ── 信息 App ────────────────────────────────────────────
// 每个会话：{ id, name, avatar(emoji), color, badge, preview, time, phase, blocks }
// blocks: { type:'day'|'msg'|'sys'|'link'|'voice-draft'|'recall', from:'me'|'them', name?, text, time?, clue?, phase? }

export const CHATS = [
  {
    id: 'mom', name: '妈妈', avatar: '👩', color: '#e8927c',
    badge: 3, preview: '不要熬夜了', time: '昨天',
    blocks: [
      { type: 'day', text: '周一' },
      { type: 'msg', from: 'them', text: '小鱼，周末回来吃饭吗' },
      { type: 'msg', from: 'me', text: '这周不回啦，要改论文，还要投简历' },
      { type: 'msg', from: 'them', text: '好，那你按时吃饭' },
      { type: 'msg', from: 'me', text: '嗯嗯' },
      { type: 'day', text: '昨天' },
      {
        type: 'clue-group', clue: 'msg-mom', items: [
          { type: 'link', from: 'them', title: '转发：秋天养生要点，年轻人也要看', sub: '养生百科', time: '11:02' },
          { type: 'msg', from: 'them', text: '吃饭了吗', time: '19:26' },
          { type: 'msg', from: 'them', text: '不要熬夜了', time: '23:15' },
        ],
        note: '全部未读',
      },
    ],
  },
  {
    id: 'tutor', name: '刘导师', avatar: '👨‍🏫', color: '#8d9db0',
    badge: 0, preview: '好的老师', time: '01:23',
    blocks: [
      { type: 'day', text: '上周四' },
      { type: 'msg', from: 'them', text: '在吗' },
      { type: 'msg', from: 'me', text: '在的老师' },
      { type: 'msg', from: 'them', text: '帮我把这学期的报销发票贴一下，明天要交' },
      { type: 'msg', from: 'me', text: '好的老师' },
      { type: 'day', text: '周日' },
      { type: 'msg', from: 'them', text: '周末来趟办公室，帮我整理下办公室的书' },
      { type: 'msg', from: 'me', text: '好的老师，我下午过去' },
      { type: 'day', text: '今天' },
      {
        type: 'clue-group', clue: 'msg-tutor', items: [
          { type: 'msg', from: 'them', text: '明天上午帮我取个快递，顺丰的，放在东门前台了', time: '01:17' },
          { type: 'msg', from: 'them', text: '顺便把上次那个表格重新弄一下，格式不对', time: '01:17' },
          { type: 'msg', from: 'me', text: '好的老师', time: '01:23' },
        ],
      },
    ],
  },
  {
    id: 'class', name: '暨大应用经济1班', avatar: '🎓', color: '#7c9a6d',
    group: true, badge: 0, preview: '辅导员：请大家按时填写就业意向表', time: '周二',
    clueRow: 'msg-class',
    blocks: [
      { type: 'day', text: '周二' },
      { type: 'sys', text: '群公告：暨广大学应用经济学 2024 级 1 班' },
      { type: 'msg', from: 'them', name: '辅导员·陈老师', text: '各位同学，2026 届秋季双选会将于下月举行，请大家按时填写就业意向表。' },
      { type: 'msg', from: 'them', name: '班长', text: '收到，大家记得填~' },
      { type: 'msg', from: 'them', name: '辅导员·陈老师', text: '另：本周五下午有「数字经济前沿」讲座，研二同学尽量参加。' },
    ],
  },
  {
    id: 'friends', name: '干饭突击队（3）', avatar: '🍚', color: '#d9a86a',
    group: true, badge: 0, preview: '哈哈哈哈哈哈哈', time: '昨天',
    blocks: [
      { type: 'day', text: '昨天' },
      { type: 'msg', from: 'them', name: '阿茜', text: '[图片] 你们看这个猫和我像不像' },
      { type: 'msg', from: 'them', name: '大王', text: '像，尤其是眼神' },
      { type: 'msg', from: 'me', text: '哈哈哈哈哈哈哈' },
      { type: 'msg', from: 'me', text: '像你上班的精神状态' },
      { type: 'msg', from: 'them', name: '阿茜', text: '你俩给我等着' },
      { type: 'msg', from: 'them', name: '大王', text: '小鱼最近咋样，简历投得顺吗' },
      { type: 'msg', from: 'me', text: '还行还行，在投了在投了' },
      {
        type: 'clue-group', clue: 'msg-friends', phase: 2, items: [
          { type: 'sys', text: '你们的群聊已经陪伴彼此 2,190 天' },
          { type: 'sys', text: '共 87,431 条消息，其中 99% 是废话' },
          { type: 'sys', text: '回复最及时的人：小鱼' },
        ],
      },
      {
        type: 'clue-group', clue: 'msg-voice', phase: 2, items: [
          { type: 'voice-draft', from: 'me', text: '47″ 语音（未发送）' },
          { type: 'recall', text: '你撤回了一条消息' },
        ],
      },
    ],
  },
  {
    id: 'estate', name: '幸福小区3栋邻里群', avatar: '🏠', color: '#9b8ec4',
    group: true, badge: 0, preview: '物业：明日上午9-11点停水', time: '周三',
    blocks: [
      { type: 'day', text: '周三' },
      { type: 'msg', from: 'them', name: '物业小张', text: '通知：明日上午 9:00–11:00 管道检修停水，请提前储水。' },
      { type: 'msg', from: 'them', name: '3-502', text: '收到' },
      {
        type: 'clue-group', clue: 'msg-grandma', phase: 2, items: [
          { type: 'msg', from: 'me', text: '大家好，帮 201 的王奶奶问一下，社区体检是这周六开始吗？她不会用手机预约，我帮她登记一下' },
          { type: 'msg', from: 'them', name: '物业小张', text: '是的，周六上午，带身份证就行' },
          { type: 'msg', from: 'me', text: '好的谢谢！另外王奶奶想找上门剪发的师傅，有邻居有联系方式吗' },
          { type: 'msg', from: 'them', name: '5-301', text: '有的，私你了' },
          { type: 'msg', from: 'me', text: '谢谢谢谢🌷 周四我陪奶奶去医院复查，师傅约周五可以吗' },
        ],
      },
    ],
  },
]

// ── 相册 ────────────────────────────────────────────────
// photo: { e: emoji, g: 渐变类名 idx, cap?: 小字 }
const P = (e, g, cap) => ({ e, g, cap })
export const PHOTO_MONTHS = [
  {
    m: '2026年3月', items: [
      P('🍜', 3, '食堂三楼的面 7.5'), P('☁️', 0), P('🐈', 2, '楼下·橘子'),
    ],
  },
  {
    m: '2026年1月', items: [P('📄', 5, '截图'), P('🍱', 3, '自习室外卖 6'), P('📄', 5, '截图')],
  },
  {
    m: '2025年10月', items: [P('☁️', 0, '傍晚'), P('🍚', 3, '导师组会后'), P('📄', 5, '截图')],
  },
  {
    m: '2025年6月', items: [P('🐈‍⬛', 2, '小黑'), P('🍲', 3, '出租屋第一顿'), P('☁️', 0)],
  },
  {
    m: '2024年9月', items: [P('🏫', 4, '报到'), P('🍜', 3, '研究生食堂 8'), P('☁️', 0)],
  },
  {
    m: '2023年12月', items: [P('📚', 5, '二战·还有 12 天'), P('🥡', 3, '考场附近 9')],
  },
  {
    m: '2022年12月', items: [P('📚', 5, '一战·加油'), P('🍞', 3, '图书馆早餐')],
  },
  {
    m: '2022年4月', items: [
      P('🌸', 1, '教学楼后面开了'), P('🐈', 2, '三花生了小猫'), P('🍛', 3, '二食堂咖喱 8.5'), P('☁️', 0),
    ],
  },
  {
    m: '2021年10月', items: [
      P('☁️', 0, '晚自习路上'), P('🌼', 1), P('🐈', 2, '橘子胖了'), P('🍜', 3, '螺蛳粉 9'), P('🌇', 0, '天台'),
    ],
  },
  {
    m: '2021年4月', items: [
      P('🌷', 1, '家教路上'), P('🍙', 3, '便利店新品 6'), P('🐈', 2), P('☁️', 0, '像棉花糖'),
    ],
  },
  {
    m: '2020年11月', items: [
      P('🍂', 1, '第一片落叶'), P('🐈', 2, '它们认识我了'), P('🥟', 3, '和室友 9.5'), P('☁️', 0),
    ],
  },
  {
    m: '2020年5月', items: [
      P('🌺', 1), P('☁️', 0, '云像一条鱼'), P('🍜', 3, '家里的面 10'), P('🐈', 2, '第一次摸到'),
    ],
  },
  {
    m: '2019年10月', items: [
      P('🌅', 0, '大学第一个日出'), P('🌼', 1, '不知道名字'), P('🍚', 3, '一食堂 7'), P('☁️', 0), P('🐈', 2, '楼下有猫！'),
    ],
  },
]

export const PHOTO_FAV = [
  { id: 'ph-offer', kind: 'doc', title: '录取通知书', sub: '粤广财经大学 · 国际经济与贸易', date: '2019.07' },
  { id: 'ph-cert', kind: 'doc', title: '实习证明', sub: '粤广消费品贸易公司', date: '2025.09' },
  { id: 'ph-award', kind: 'doc', title: '优秀奖奖状', sub: '学院市场调研案例比赛', date: '2023.05' },
]

export const PHOTO_DELETED = [
  { e: '🐈', cap: '橘子（速写）' },
  { e: '🪑', cap: '王奶奶的小马扎' },
  { e: '🍜', cap: '食堂那碗面' },
  { e: '☁️', cap: '傍晚的云（未画完）' },
  { e: '🌸', cap: '春天' },
  { e: '🐈‍⬛', cap: '小黑睡着了' },
]

// ── 备忘录 ──────────────────────────────────────────────
export const NOTES = [
  {
    id: 'n-oc', date: '今天 23:41', title: '明天会有OC吗', phase: 2, clue: 'note-oc',
    body: ['明天会有oc吗'],
    deleted: ['没事的，都会好的', '你已经很努力了', '再坚持一下就'],
  },
  {
    id: 'n-interview', date: '周一', title: '职位面试准备', clue: 'note-interview',
    body: [
      '自我介绍 1 分钟版 / 3 分钟版',
      '为什么选择我们公司（查官网、新闻稿）',
      '优缺点：优点说执行力，缺点说「有时过于追求细节」',
      '薪资期望：先问对方范围',
      '反问环节：培养机制、团队构成',
      '⚠️ 别再说到一半卡住了',
    ],
  },
  {
    id: 'n-todo', date: '上周', title: '课题本周 Todo', clue: 'note-todo',
    body: [
      '□ 补充数字金融与居民消费相关文献 5—8 篇',
      '□ 整理文献中的研究变量、数据来源和主要结论',
      '□ 确定核心解释变量、被解释变量及控制变量',
      '□ 下载数字普惠金融指数和居民消费相关数据',
      '□ 检查各数据集的地区、年份和统计口径是否一致',
      '□ 将已有数据录入 Excel，并标记缺失值',
      '□ 整理本周进展，记录待向老师确认的问题',
    ],
  },
  {
    id: 'n-cloud', date: '2025年10月17日', title: '傍晚的云', phase: 2, clue: 'note-cloud',
    body: [
      '今天喂完猫抬头，云是一层一层的，最下面那层被夕阳烧成橘红色，往上是粉的，再往上就淡成灰紫色了，像有人把颜料在水里洗笔。',
      '风把云吹得很慢很慢，橘子蹲在我脚边一起看，尾巴一甩一甩。',
      '如果能画下来就好了。就用那支还没舍得买的橘色。',
      '看了十分钟，回去继续改简历。',
    ],
  },
  {
    id: 'n-countdown', date: '2023年12月11日', title: '考研二战倒计时', clue: 'note-countdown',
    body: ['距离二战考研还有：12 天', '', '一战差 9 分。这次一定。', '不要慌，按计划来。'],
  },
]

// ── AI 助手 ─────────────────────────────────────────────
export const AI_SESSIONS = [
  {
    id: 'a-sleep', title: '如何缓解失眠', time: '02:14', clue: 'ai-sleep',
    msgs: [
      { from: 'me', text: '如何缓解失眠' },
      { from: 'ai', text: '可以尝试：固定作息、睡前一小时远离手机、白天适量运动、避免下午后摄入咖啡因。如果失眠持续两周以上并影响白天状态，建议就医。' },
      { from: 'me', text: '没有实习经历如何美化包装？' },
      { from: 'ai', text: '可以从课程项目、社团经历、志愿活动中提炼「可迁移能力」：数据处理、沟通协调、文案撰写等，用动词开头、量化结果。注意：是「翻译」不是「编造」。' },
      { from: 'me', text: '好的。那失眠那个，有没有不用去医院的办法' },
      { from: 'ai', text: '短期可以试试 4-7-8 呼吸法和白噪音。但如果是压力源没有解决，这些只能缓解。要不要聊聊最近压力大的原因？' },
    ],
  },
  {
    id: 'a-course', title: '课程作业写进简历', time: '周二', clue: 'ai-course',
    msgs: [
      { from: 'me', text: '怎么把「大湾区跨境电商发展调研」的课程作业写进简历？我就是收资料、发问卷、做了几张 Excel 图' },
      { from: 'ai', text: '可以这样写：\n大湾区跨境电商发展调研｜课程小组项目（2024.09–2024.12）\n· collect 公开资料，梳理广东省跨境电商发展情况、主要平台及相关政策；\n· 参与设计并发放大学生跨境购物习惯调查问卷，完成回收与分类；\n· 使用 Excel 完成数据整理与图表制作，参与报告与汇报 PPT 制作；\n· 项目获课程小组「优秀汇报」。\n真实、具体、有产出，不算夸大。' },
      { from: 'me', text: '谢谢，这样看起来还挺像回事的' },
    ],
  },
  {
    id: 'a-career', title: '要不要继续投外贸', time: '上周', clue: 'ai-career',
    msgs: [
      { from: 'me', text: '我现在研二了，只有一段小外贸公司的实习。如果继续投外贸可能比较容易拿到 offer，但我又怕以后再也转不出去，我该怎么办？' },
      { from: 'ai', text: '外贸继续投，当保底；同时选一个想转的方向集中补经历、投岗位。\n选外贸 offer 时只看一点：能不能积累可迁移能力。优先选能接触客户、市场、产品、数据的，少选纯跟单、报关、机械执行岗。\n你现在最危险的不是做外贸，而是因为害怕没 offer，就不再尝试别的方向。' },
      { from: 'me', text: '但这样会不会显得我没有方向？而且我也没有相关经验，感觉投了也不会有人要。' },
      { from: 'ai', text: '不会。对外只讲一个方向，对内可以多投。\n比如你决定转海外运营，就把外贸实习改写成客户沟通、市场调研、竞品分析、订单推进，而不是强调「做外贸」。再补一个相关项目，就能形成「国际贸易背景＋海外业务经验＋想转海外运营」的完整叙事。\n没经验确实会降低成功率，但不是「投了也没人要」。你可以先投与外贸相邻的岗位：海外运营、跨境电商运营、国际市场、供应链运营。别一上来跨到完全无关的产品经理或数据分析。\n核心是：不要同时把自己包装成五种人；选一个相邻方向，集中投。' },
    ],
  },
  {
    id: 'a-cat', title: '猫咪频繁呕吐怎么办', time: '2025.11', phase: 2, clue: 'ai-care',
    msgs: [
      { from: 'me', text: '猫咪频繁呕吐怎么办，一天吐了三次，是楼下的流浪猫' },
      { from: 'ai', text: '频繁呕吐需要重视：先禁食 4–6 小时（不禁水），观察是否吐毛球或异物。如果持续、精神萎靡或便血，尽快送医。流浪猫建议用航空箱或纸箱带去，注意抓挠。' },
      { from: 'me', text: '带去看了，医生说吃了不干净的东西，输了液。花了 200，值了' },
      { from: 'ai', text: '你做得很好。接下来两天喂温水泡软的猫粮，少食多餐，观察精神状态。' },
      { from: 'me', text: '老人血压160严重吗' },
      { from: 'ai', text: '160mmHg 属于 2 级高血压，需要重视。建议尽快陪同就医、规律服药、每天固定时间测量并记录。家里备一个大字体、大按键的电子血压计会方便老人自己测。' },
    ],
  },
  {
    id: 'a-flower', title: '这种花叫什么', time: '2025.04', phase: 2, clue: 'ai-curious',
    msgs: [
      { from: 'me', text: '[图片] 这种花叫什么，教学楼后面开了一排' },
      { from: 'ai', text: '这是紫荆（Bauhinia），春天开花，花先于叶开放，南方校园很常见。' },
      { from: 'me', text: '好看。那今天那种一丝一丝的云的学名是什么' },
      { from: 'ai', text: '一丝一丝、像羽毛一样的高空云叫卷云（Cirrus），由冰晶组成，通常出现在 6000 米以上。' },
      { from: 'me', text: '如果想画傍晚的云，橘红色到灰紫色的过渡，这里该用什么颜色' },
      { from: 'ai', text: '建议从暖到冷渐变：镉橙 → 玫瑰红 → 浅群青加一点灰。水彩的话趁湿衔接，让颜色自己在纸上融合，比调好再画更像真的云。' },
    ],
  },
]

// ── 网购 ────────────────────────────────────────────────
export const SHOP_CART = [
  { id: 'shop-cart2', clue: 'shop-cart', phase: 2, e: '🥫', title: '猫罐头整箱 24 罐 · 混合口味', price: '¥86.00', note: '未付款 · 已在购物车 17 天' },
  { id: 'cart-paint', cluePart: 'shop-paint', phase: 2, e: '🎨', title: '半干水彩颜料 24 色（樱花家）', price: '¥128.00', note: '未付款 · 收藏于 2025.10' },
]

export const SHOP_ORDERS = [
  { e: '👔', title: '女士西装套装 面试职业装', price: '¥219.00', date: '2026.03.02', state: '退款成功', clue: 'shop-suit', stateColor: '#c0392b' },
  { e: '🐟', title: '冻干猫条 30 支装', price: '¥39.90', date: '2026.02.18', state: '已签收', clue: 'shop-catfood', phase: 2, group: 'catfood' },
  { e: '🩺', title: '电子血压计 大字体大按键 语音播报', price: '¥139.00', date: '2026.01.05', state: '已签收', cluePart: 'shop-catfood', phase: 2 },
  { e: '🐱', title: '流浪猫粮 10kg 装（复购第 11 次）', price: '¥89.00', date: '2025.12.20', state: '已签收', cluePart: 'shop-catfood', phase: 2 },
  { e: '🖌️', title: '水彩笔刷 3 支入门装', price: '¥45.00', date: '2025.10.28', state: '已签收', clue: 'shop-paint', phase: 2 },
  { e: '📓', title: '细纹水彩本 300g 16开', price: '¥32.00', date: '2025.10.28', state: '已签收', cluePart: 'shop-paint', phase: 2 },
  { e: '🐱', title: '流浪猫粮 10kg 装', price: '¥89.00', date: '2025.09.14', state: '已签收', cluePart: 'shop-catfood', phase: 2 },
  { e: '📚', title: '考研数学三真题+经济学综合全套', price: '¥156.00', date: '2023.03.11', state: '已签收', clue: 'shop-kaoyan' },
  { e: '📖', title: '考研英语一历年真题详解', price: '¥68.00', date: '2022.04.02', state: '已签收', cluePart: 'shop-kaoyan' },
]

// ── 钱包 ────────────────────────────────────────────────
export const WALLET_MONTH = { in: '¥2,300.00', out: '¥3,187.50' }
export const WALLET_BILLS = [
  {
    day: '今天', items: [
      { e: '🍜', title: '学一食堂', amt: '-12.50', time: '12:07' },
      { e: '🧋', title: '蜜雪冰城', amt: '-7.00', time: '15:41' },
    ],
  },
  {
    day: '昨天', items: [
      { e: '🏠', title: '房租 · 3月（转账给房东）', amt: '-1,100.00', time: '09:00', clue: 'pay-rent' },
      { e: '🛒', title: '永辉超市（帮王奶奶买菜）', amt: '-63.80', time: '17:22', clue: 'pay-grocery', phase: 2 },
      { e: '💰', title: '家教课时费（学生家长转入）', amt: '+300.00', time: '20:15', in: true },
    ],
  },
  {
    day: '02月26日', items: [
      { e: '🐾', title: '安安宠物医院', amt: '-200.00', time: '18:40', clue: 'pay-vet', phase: 2 },
      { e: '🍱', title: '美团外卖', amt: '-16.90', time: '12:31' },
    ],
  },
  {
    day: '02月20日', items: [
      { e: '🌸', title: '花呗 · 本期最低还款', amt: '-127.30', time: '10:00', clue: 'pay-huabei' },
      { e: '🚇', title: '地铁出行', amt: '-4.00', time: '08:12' },
    ],
  },
  {
    day: '02月15日', items: [
      { e: '🏫', title: '暨广大学 · 2025-2026 学年学费', amt: '-8,000.00', time: '14:00', clue: 'pay-tuition' },
      { e: '💰', title: '家教课时费（学生家长转入）', amt: '+300.00', time: '19:30', in: true },
    ],
  },
]

// ── 交简历 App：HR 会话列表 ──────────────────────────────
export const HR_LIST = [
  { name: '广州跨越电商 · HR Lily', preview: '感谢您的投递，很遗憾您与该岗位暂不匹配…', time: '昨天' },
  { name: '深circle供应链 · 招聘', preview: '您好，该岗位已招满，建议关注其他机会', time: '昨天' },
  { name: '字节动跳 · 校招小助手', preview: '您投递的「海外运营培训生」岗位状态更新：不合适', time: '周一' },
  { name: '粤贸通外贸 · 王经理', preview: '我们更倾向有 2 年以上经验的候选人哦', time: '周一' },
  { name: '汇丰隆银行 · 校园招聘', preview: '笔试未通过，感谢参与', time: '上周' },
  { name: '拼夕夕 · 招聘助手', preview: '[自动回复] 简历已收到，请耐心等待', time: '上周' },
  { name: '某红书 · HRBP', preview: '已读', time: '2周前' },
]

// ── 馆长剧本 ────────────────────────────────────────────
// step: {t:'me'|'boss', text} | {t:'file', from, name} | {t:'typing', ms} | {t:'pause', ms}
//       {t:'choice', options:[..]} | {t:'action', do:'unlock2'|'ending'}
export const SCRIPT_REVEAL = [
  { t: 'file', from: 'me', name: '张小鱼_简历.docx' },
  { t: 'me', text: '馆长，0079412，填好了' },
  { t: 'pause', ms: 900 },
  { t: 'typing', ms: 1600 },
  { t: 'pause', ms: 900 },
  { t: 'typing', ms: 1200 },
  { t: 'boss', text: '？' },
  { t: 'typing', ms: 1000 },
  { t: 'boss', text: '怎么是 人间的简历模版' },
  { t: 'pause', ms: 1600 },
  { t: 'boss', text: '而且这信息一点都不全啊' },
  { t: 'boss', text: '这怎么归档' },
  { t: 'choice', options: ['不是投简历吗', '简历不都是这么写的吗'] },
  { t: 'typing', ms: 1100 },
  { t: 'boss', text: '投什么简历' },
  { t: 'boss', text: '人家就等着这辈子档案归好去投胎了' },
  { t: 'pause', ms: 2600 },
  { t: 'file', from: 'boss', name: '天堂档案馆_简历模版（标准）' },
  { t: 'boss', text: '用这个' },
  { t: 'boss', text: '刚刚是不是漏了一些信息，你再仔细看看' },
  { t: 'action', do: 'unlock2' },
]

export const SCRIPT_ENDING = [
  { t: 'file', from: 'me', name: '张小鱼_档案.docx' },
  { t: 'me', text: '馆长，0079412，重新整理好了' },
  { t: 'pause', ms: 800 },
  { t: 'typing', ms: 1500 },
  { t: 'boss', text: '这还差不多，你发那个第一版也太不全了' },
  { t: 'pause', ms: 2400 },
  { t: 'boss', text: '等一下' },
  { t: 'typing', ms: 1400 },
  { t: 'boss', text: '名单上的人不是 0079421 吗？' },
  { t: 'boss', text: '你今天怎么回事…差点搞错了！' },
  { t: 'pause', ms: 1400 },
  { t: 'boss', text: '张小鱼还活着呢！' },
  { t: 'pause', ms: 2800 },
  { t: 'action', do: 'ending' },
]

export const BOSS_PRELUDE = [
  { from: 'boss', text: '今天的名单发你了' },
  { from: 'boss', text: '0079412，张小鱼，26 岁' },
  { from: 'boss', text: '手机已经同步给你了，尽快把档案交上来' },
]

export const FAIL_LINES = [
  '信息收集的不全，再仔细翻翻看她的手机！',
  '再去看看，我总觉得还少点什么！',
]

export const MOM_BANNERS = [
  '今天降温了',
  '出门记得带件外套',
  '怎么一天没回消息啊',
]
