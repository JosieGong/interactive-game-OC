// 全部线索定义
// phase: 1 = 表层（第一轮就出现） 2 = 深层（第二轮才出现）
// form1: 人间简历可放入的板块 id（null = 不能拖入人间简历）
// cat:   天堂档案馆简历可放入的板块 id（null = 不能拖入天堂简历）
// tag:   不能拖入时弹出的“它认为你是什么”的标签
// resume1: 拖入人间简历后渲染的内容 {t 标题, d 日期, b 要点[]}
// resume2: 拖入天堂简历后渲染的描述性转写

export const CLUES = [
  // ── 表层 ──────────────────────────────────────────────
  {
    id: 'msg-tutor', app: 'messages', phase: 1,
    label: '凌晨 1:17 的「好的老师」', icon: '💬',
    tag: '被导师PUA', form1: null, cat: null,
  },
  {
    id: 'msg-class', app: 'messages', phase: 1,
    label: '班级群：暨大应用经济1班', icon: '💬',
    form1: 'edu', cat: null,
    resume1: { t: '暨广大学｜应用经济学 硕士', d: '2024.09–至今' },
  },
  {
    id: 'msg-mom', app: 'messages', phase: 1,
    label: '妈妈的未读消息', icon: '💬',
    tag: '忙碌', form1: null, cat: null,
  },
  {
    id: 'ph-cert', app: 'photos', phase: 1,
    label: '实习证明', icon: '🖼️',
    form1: 'intern', cat: null,
    resume1: {
      t: '外贸业务实习生｜粤广消费品贸易公司', d: '2025.06–2025.09',
      b: [
        '通过B2B平台、企业数据库及公开渠道搜集海外潜在客户信息，并按照地区、业务类型和联系方式整理客户名单。',
        '根据已有模板协助发送英文开发邮件，整理产品图片、产品介绍和基础报价资料，记录客户回复情况。',
        '协助更新客户询盘、样品寄送及订单进度表，核对产品数量、交货时间等基础信息。',
        '完成部门安排的数据录入、文件整理和市场资料搜集等日常辅助工作。',
      ],
    },
  },
  {
    id: 'ph-award', app: 'photos', phase: 1,
    label: '调研比赛优秀奖奖状', icon: '🖼️',
    form1: 'proj', cat: null,
    resume1: {
      t: '大学生国货消费意愿调研｜学院市场调研案例比赛优秀奖', d: '2023.03–2023.05',
      b: [
        '与小组成员围绕大学生国货消费意愿开展调研，参与问卷题目讨论和线上发放。',
        '负责整理购买频率、价格偏好和品牌认知等数据，并使用Excel完成基础统计。',
        '协助撰写调研报告及制作展示PPT，提出加强社交媒体宣传等较为基础的建议。',
        '项目在学院组织的市场调研案例比赛中获得优秀奖。',
      ],
    },
  },
  {
    id: 'ph-offer', app: 'photos', phase: 1,
    label: '本科录取通知书', icon: '🖼️',
    form1: 'edu', cat: null,
    resume1: { t: '粤广财经大学｜国际经济与贸易 本科', d: '2019.09–2023.06' },
  },
  {
    id: 'note-interview', app: 'notes', phase: 1,
    label: '备忘录：职位面试准备', icon: '📝',
    tag: '还没等到的面试', form1: null, cat: null,
  },
  {
    id: 'note-todo', app: 'notes', phase: 1,
    label: '备忘录：课题本周 Todo', icon: '📝',
    form1: 'proj', cat: null,
    resume1: {
      t: '数字金融与居民消费关系分析｜硕士研究课题', d: '2025.10–2026.01',
      b: [
        '收集数字金融、居民消费及区域经济相关的公开数据和参考文献。',
        '在教师及小组成员指导下，使用Stata完成描述性统计、相关性分析和基础回归。',
        '负责部分数据录入、表格整理、文献归纳和论文文字校对工作。',
        '研究结果显示数字金融与居民消费可能存在一定正向关系，但结论较为初步。',
      ],
    },
  },
  {
    id: 'note-countdown', app: 'notes', phase: 1,
    label: '考研二战倒计时（已结束两年）', icon: '📝',
    tag: '考研二战', form1: null, cat: null,
  },
  {
    id: 'ai-sleep', app: 'ai', phase: 1,
    label: 'AI：失眠，和怎么包装简历', icon: '✨',
    tag: '失眠、焦虑、压力大', form1: null, cat: null,
  },
  {
    id: 'ai-course', app: 'ai', phase: 1,
    label: 'AI：把课程作业写进简历', icon: '✨',
    form1: 'proj', cat: null,
    resume1: {
      t: '大湾区跨境电商发展调研｜课程小组项目', d: '2024.09–2024.12',
      b: [
        '与小组成员收集广东省跨境电商发展情况、主要平台及相关政策等公开资料。',
        '协助设计并发放关于大学生跨境购物习惯的调查问卷，完成问卷回收和基础分类。',
        '使用Excel整理调查结果并制作简单图表，参与课程报告和汇报PPT的制作。',
        '项目完成课堂展示，并获评课程小组「优秀汇报」。',
      ],
    },
  },
  {
    id: 'ai-career', app: 'ai', phase: 1,
    label: 'AI：要不要继续投外贸', icon: '✨',
    tag: '迷茫、压力大', form1: null, cat: null,
  },
  {
    id: 'shop-suit', app: 'shop', phase: 1,
    label: '退货的面试西装', icon: '🛍️',
    tag: '节俭、经济压力', form1: null, cat: null,
  },
  {
    id: 'shop-kaoyan', app: 'shop', phase: 1,
    label: '考研资料订单', icon: '🛍️',
    tag: '坚持、上进', form1: null, cat: null,
  },
  {
    id: 'pay-rent', app: 'wallet', phase: 1,
    label: '每月房租', icon: '💳',
    tag: '独居', form1: null, cat: null,
  },
  {
    id: 'pay-tuition', app: 'wallet', phase: 1,
    label: '自己交的学费', icon: '💳',
    tag: '自己负担学费', form1: null, cat: null,
  },
  {
    id: 'pay-huabei', app: 'wallet', phase: 1,
    label: '花呗最低还款', icon: '💳',
    tag: '经济拮据', form1: null, cat: null,
  },

  // ── 深层 ──────────────────────────────────────────────
  // 她的善意
  {
    id: 'msg-grandma', app: 'messages', phase: 2,
    label: '小区群里替王奶奶问事', icon: '💬',
    form1: null, cat: 'kindness',
    resume2: '她愿意为身边的老人承担起本不属于自己的琐碎责任。',
  },
  {
    id: 'shop-catfood', app: 'shop', phase: 2,
    label: '定期买的猫粮，和大字体血压计', icon: '🛍️',
    form1: null, cat: 'kindness',
    resume2: '她习惯用具体的行动，默默照顾着生活中重要的人和动物。',
  },
  {
    id: 'shop-cart', app: 'shop', phase: 2,
    label: '购物车里没付款的一箱罐头', icon: '🛍️',
    form1: null, cat: 'kindness',
    resume2: '她对这份牵挂始终没有放下，哪怕只是一个还没完成的动作。',
  },
  {
    id: 'pay-vet', app: 'wallet', phase: 2,
    label: '给猫看病的 200 元', icon: '💳',
    form1: null, cat: 'kindness',
    resume2: '她会为一只与自己无关的生命，承担起责任。',
  },
  {
    id: 'pay-grocery', app: 'wallet', phase: 2,
    label: '帮王奶奶买的菜', icon: '💳',
    form1: null, cat: 'kindness',
    resume2: '她把邻里之间的关照，活成了日常的一部分。',
  },
  {
    id: 'ai-care', app: 'ai', phase: 2,
    label: 'AI：猫咪呕吐、老人血压', icon: '✨',
    form1: null, cat: 'kindness',
    resume2: '她的心思，总是牵挂在她所照顾的人和动物身上。',
  },
  // 她的朋友
  {
    id: 'msg-friends', app: 'messages', phase: 2,
    label: '聊了六年废话的三人小群', icon: '💬',
    form1: null, cat: 'friends',
    resume2: '她有一段持续了六年的亲密友谊。',
  },
  // 她在意的
  {
    id: 'ph-all', app: 'photos', phase: 2,
    label: '一千多张照片，没有一张自拍', icon: '🖼️',
    form1: null, cat: 'care',
    resume2: '她拥有一双善于发现生活之美的眼睛。',
  },
  {
    id: 'ai-curious', app: 'ai', phase: 2,
    label: 'AI：这种花叫什么', icon: '✨',
    form1: null, cat: 'care',
    resume2: '她对世界始终保持着孩子般的好奇心。',
  },
  {
    id: 'note-cloud', app: 'notes', phase: 2,
    label: '写了一整段的傍晚的云', icon: '📝',
    form1: null, cat: 'care',
    resume2: '她拥有细腻而丰富的内心世界。',
  },
  // 她的爱好
  {
    id: 'shop-paint', app: 'shop', phase: 2,
    label: '没舍得全买的画材', icon: '🛍️',
    form1: null, cat: 'hobby',
    resume2: '她对梦想的渴望，始终没有真正熄灭。',
  },
  {
    id: 'ph-deleted', app: 'photos', phase: 2,
    label: '「最近删除」里的画', icon: '🖼️',
    form1: null, cat: 'hobby',
    resume2: '她创作的痕迹，正在一点点被时间收走。',
  },
  // 她的秘密
  {
    id: 'msg-voice', app: 'messages', phase: 2,
    label: '47 秒没发出去的语音', icon: '💬',
    form1: null, cat: 'secret',
    resume2: '她心里藏着一些话，最终还是没能对人说出口。',
  },
  {
    id: 'note-oc', app: 'notes', phase: 2,
    label: '最后一条备忘录', icon: '📝',
    form1: null, cat: 'secret',
    resume2: '她始终没有停止过，对明天抱有一点期待。',
  },
]

export const CLUE_MAP = Object.fromEntries(CLUES.map(c => [c.id, c]))

export const FORM1_SECTIONS = [
  { id: 'edu', name: '教育经历' },
  { id: 'intern', name: '实习经历' },
  { id: 'proj', name: '项目及比赛经历' },
  { id: 'skill', name: '技能', prefill: true },
]

export const FORM1_SKILLS = [
  '英语：大学英语六级，能够完成基础英文邮件撰写和资料阅读。',
  '数据工具：熟悉Excel基础函数、数据透视表及图表制作，了解Stata基础操作。',
  '办公软件：能够使用Word和PowerPoint完成基础报告及汇报材料制作。',
]

export const FORM2_SECTIONS = [
  { id: 'info', name: '个人信息', prefill: true },
  { id: 'kindness', name: '她的善意' },
  { id: 'friends', name: '她的朋友' },
  { id: 'care', name: '她在意的' },
  { id: 'hobby', name: '她的爱好' },
  { id: 'secret', name: '她的秘密' },
]

export const APP_NAMES = {
  resume: '交简历', messages: '信息', photos: '相册',
  notes: '备忘录', ai: 'AI 助手', shop: '网购', wallet: '钱包',
}
