
const APP_DATA={
 clues:{
  name:{label:"姓名",value:"陈默",source:"微信 / 汇款记录"},
  school:{label:"学历",value:"临江职业技术学院 · 大专",source:"聊天 / 浏览记录"},
  address:{label:"常住地",value:"临江市新桥巷 42 号",source:"外卖 / 网购记录"},
  event:{label:"工作",value:"便利店夜班 + 白昼书店店员",source:"相册 / 日历"},
  time:{label:"手机遗失时间",value:"6月14日 20:40 左右",source:"照片元数据"},
  person:{label:"紧急联系人",value:"妈妈 · 备注“家”",source:"微信 / 通讯录"}
 },
 // TODO: 替换为真实剧情内容
 chats:[
  {id:"curator",name:"馆长",avatar:"馆",time:"",preview:"",unlockAt:0,pinned:true,messages:[]},
  {id:"sister",name:"妹妹",avatar:"妹",time:"21:06",preview:"姐，这个月生活费收到了。",unread:2,unlockAt:0,messages:[{from:"them",content:"姐，这个月生活费收到了，你别总吃泡面。",timestamp:"20:58"},{from:"me",content:"知道了。学校缺什么就说，考试别紧张。",timestamp:"21:01"},{from:"them",content:"你下夜班记得睡觉，别又直接去书店。",timestamp:"21:06"}],stageMessages:[{unlockAt:1,from:"them",content:"姐，我考上大学了！这次真的要谢谢你这些年……",timestamp:"今天 08:16"},{unlockAt:1,from:"me",content:"是你自己考上的。学费别担心，先好好过暑假。",timestamp:"今天 08:20"},{unlockAt:1,from:"them",content:"学校还要交一笔住宿费，能不能再给我一点？",timestamp:"5月17日 22:41"},{unlockAt:1,from:"me",content:"（该消息已撤回）",timestamp:"5月17日 22:44"},{unlockAt:1,from:"me",content:"对不起，刚才说重了。不是你的错，是我今天太累。钱我周五发工资后转。",timestamp:"5月17日 22:52"}]},
  {id:"manager",name:"夜班店长",avatar:"店",time:"昨天",preview:"这周还是连上四个夜班。",unlockAt:0,messages:[{from:"them",content:"这周还是连上四个夜班，临时换班提前说。",timestamp:"18:31"},{from:"me",content:"好。周三早上我会晚半小时到书店。",timestamp:"18:35"}]},
  {id:"family",name:"家里",avatar:"家",time:"周一",preview:"钱收到了，弟弟的资料费够了。",unlockAt:0,messages:[{from:"them",content:"钱收到了，弟弟的资料费够了。你也留一点在身上。",timestamp:"09:14"},{from:"me",content:"我这边有员工餐，不用担心。",timestamp:"09:22"}]},
  {id:"recruiter",name:"招聘联系人",avatar:"招",time:"6月10日",preview:"暂时无法进入下一轮。",unlockAt:0,messages:[{from:"them",content:"你好，我们看过你的简历了。岗位目前优先考虑本科及以上学历、两年以上相关经验的候选人。",timestamp:"14:26"},{from:"them",content:"很遗憾，你这次暂时无法进入下一轮。感谢投递。",timestamp:"14:27"},{from:"me",content:"收到，谢谢回复。",timestamp:"14:39"}]},
  {id:"stranger",name:"一位陌生人",avatar:"陌",time:"星期日",preview:"一直想当面谢谢你。",unread:1,unlockAt:1,messages:[{from:"them",content:"你可能不记得我了。上个月凌晨，是你让我在便利店等到家人来接。",timestamp:"23:48"},{from:"them",content:"那晚我状态很差。一直想当面谢谢你。",timestamp:"23:49"},{from:"me",content:"不用谢。那天换成谁都会这么做。",timestamp:"00:03"}]},
  {id:"uncleChen",name:"陈叔",avatar:"陈",time:"上周",preview:"书店这边不急，你先休息。",unlockAt:2,messages:[{from:"them",content:"昨晚又通宵了吧？书店这边不急，你下午再来。",timestamp:"08:12"},{from:"me",content:"没事，我能到。这个月已经请过一次假了。",timestamp:"08:16"},{from:"them",content:"工资照算。柜台下面给你留了饭，别只喝咖啡。",timestamp:"08:19"},{from:"me",content:"谢谢陈叔。欠您的钱我会慢慢还。",timestamp:"08:25"}]}
  ,{id:"service",name:"服务通知",avatar:"讯",time:"星期一",preview:"账号安全功能已更新。",unlockAt:0,archiveable:false,messages:[{from:"them",content:"账号安全功能已更新，请前往设置查看。",timestamp:"10:00"}]}
  ,{id:"drafts",name:"草稿箱",avatar:"稿",time:"",preview:"1 条未发送内容",unlockAt:2,archiveable:false,messages:[{from:"me",content:"有空再说吧。",timestamp:"未发送"}]}
 ],
 // TODO: 替换为真实剧情内容
 photos:[
  {id:1,cls:"factory",date:"6月14日 20:40",place:"新桥便利店",title:"又一个夜班",desc:"打卡屏显示 22:00—07:00。柜台后放着一本翻旧的小说。",clue:"event",unlockAt:0},
  {id:2,cls:"door",date:"6月13日 09:12",place:"白昼书店",title:"书店同事合影",desc:"陈默站在最边上，没有看镜头。工牌写着“兼职店员”。",clue:"name",unlockAt:0},
  {id:3,cls:"school",date:"5月26日 16:05",place:"临江职业技术学院",title:"毕业照",desc:"照片背面：2019 级连锁经营管理 2 班，陈默。",clue:"school",unlockAt:0},
  {id:4,cls:"river",date:"4月03日 13:20",place:"新桥巷 42 号",title:"出租屋窗台",desc:"很小的房间，窗边整齐摞着二十多本旧书。",clue:"address",unlockAt:1},
  {id:5,cls:"door",date:"2月10日 18:02",place:"临江火车站",title:"弟弟妹妹返校",desc:"两张年轻的笑脸，各自拖着一个行李箱。",clue:"person",unlockAt:2},
  {id:6,cls:"school",date:"1月22日 03:17",place:"屏幕截图",title:"一条来自博主的回复",desc:"“谢谢你一直看我的视频。你也会有自己的远方，不一定现在，但会有的。”截图来自收藏夹博主 @书店散步。",clue:"event",unlockAt:3}
  ,{id:7,cls:"school",date:"毕业前",place:"临江职业技术学院",title:"成绩单截图",desc:"连锁经营管理专业，平均成绩 68.4。两门课程补考，班级综合排名 37/42；没有奖学金或校级荣誉。",clue:"school",unlockAt:0}
  ,{id:8,cls:"river",date:"6月12日 17:10",place:"屏幕截图",title:"天气截图",desc:"临江市未来三天有阵雨，周末转晴。",unlockAt:0,archiveable:false}
 ],
 recentlyDeleted:[
  // TODO: 补充“珍藏但不愿被看见”的正式剧情照片
  {id:"del1",cls:"river",date:"3月07日 05:48",place:"新桥便利店门口",title:"天亮之前",desc:"台阶边放着她常穿的深色外套，旁边是一杯热水和一张被揉皱的出租车小票。画面里没有人。",unlockAt:1},
  {id:"del2",cls:"school",date:"去年9月1日",place:"临江火车站",title:"妹妹入学第一天",desc:"照片里只有妹妹的背影。备注：终于赶上了。",unlockAt:2}
 ],
 // TODO: 替换为真实剧情内容
 ai:[
  {id:"sleep",title:"如何缓解失眠？",time:"6月14日 04:37",preview:"夜班结束后还是睡不着。",unlockAt:0,user:"夜班结束后很累，但回去还是睡不着，有没有不花钱的办法？",answer:"可以先固定遮光、减少咖啡因，并在白天安排短而规律的睡眠。如果长期失眠影响生活，建议寻求专业帮助。"},
  {id:"loan",title:"如何申请助学贷款？",time:"6月11日",preview:"家里有两个孩子要读书。",unlockAt:0,user:"大一新生怎么申请助学贷款？家里有两个孩子要读书，姐姐可以代办吗？",answer:"通常需要学生本人申请，准备录取通知、家庭经济情况等材料。姐姐可以协助整理，但具体以当地资助中心要求为准。"},
  {id:"exam",title:"如何鼓励即将考试的人？",time:"6月8日",preview:"不想让她觉得压力更大。",unlockAt:1,user:"妹妹明天参加重要考试。我不太会说好听的话，怎么鼓励她又不给压力？",answer:"可以告诉她：结果不定义她，你关心的是她是否尽力，也会一直支持她。"},
  {id:"private",title:"一个普通人怎样才算没有白活",time:"5月30日 02:18",preview:"有时候觉得每天都在重复。",unlockAt:2,user:"有时候觉得每天都在重复。一个没做成什么大事的人，怎样才算没有白活？",answer:"人的价值不只由成就衡量。你维系的关系、给过的善意，以及仍然愿意理解世界的心，也构成了生命的重量。"},
  {id:"books",title:"适合通勤读的短篇小说",time:"5月22日",preview:"每天只有四十分钟。",unlockAt:1,user:"每天通勤只有四十分钟，推荐一些适合分段读的短篇小说。",answer:"可以从契诃夫、汪曾祺或爱丽丝·门罗的短篇集开始。"},
  {id:"rant",title:"为什么有人总把脾气留给店员",time:"5月19日 03:46",preview:"今天那个顾客真的很难相处。",unlockAt:3,user:"今天那个顾客真的很难相处。明明是她自己看错价格，还一直说我们这种人脑子不好。我知道不该这么说，但她讲话真的又刻薄又自以为是。",answer:"被不尊重会让人愤怒。可以承认自己的情绪，同时把对行为的不满和对人的整体判断分开。"}
  ,{id:"welcome",title:"欢迎使用芝麻",time:"首次使用",preview:"了解基础功能和隐私设置。",unlockAt:0,archiveable:false,user:"你能做什么？",answer:"我可以回答问题、整理文字或提供一般建议。请勿输入敏感个人信息。"}
 ],
 // TODO: 替换为真实剧情内容
 shopping:[
  {id:"shop1",title:"三双装黑色棉袜",subtitle:"已签收",price:"¥12.90",timestamp:"6月13日 18:42",address:"新桥巷 42 号",content:"平台补贴商品；使用签到红包 ¥2.00",unlockAt:0},
  {id:"shop2",title:"临期速溶咖啡 40 条",subtitle:"已签收",price:"¥19.80",timestamp:"6月10日 21:06",address:"新桥便利店",content:"保质期剩余 4 个月；订单备注：放员工柜即可",unlockAt:0},
  {id:"shop3",title:"二手帆布鞋",subtitle:"已签收",price:"¥35.00",timestamp:"5月28日 12:15",address:"新桥巷 42 号",content:"九成新；鞋底有轻微磨损；卖家包邮",unlockAt:0},
  {id:"shop4",title:"抽纸 24 包",subtitle:"已签收",price:"¥28.60",timestamp:"5月20日 20:08",address:"新桥巷 42 号",content:"为了凑满减多买了两提，后来分给了同事。",unlockAt:1},
  {id:"shop5",title:"大学英语四级真题",subtitle:"已签收",price:"¥42.80",timestamp:"5月12日 09:32",address:"临江市第三中学",content:"收件人：陈小雨（妹妹）；附言：别买盗版答案。",unlockAt:1},
  {id:"shop6",title:"少年编程入门套装",subtitle:"已签收",price:"¥86.00",timestamp:"4月28日 23:11",address:"临江县河西镇",content:"收件人：陈航（弟弟）；生日礼物。",unlockAt:2}
  ,{id:"shop7",title:"厨房收纳盒",subtitle:"退款成功",price:"-¥9.90",timestamp:"4月21日 12:08",address:"新桥巷 42 号",content:"商品有轻微划痕。平台判定退款不退货；陈默仍继续使用。",unlockAt:1}
  ,{id:"shop8",title:"手机壳",subtitle:"订单已取消",price:"¥0.00",timestamp:"4月18日 09:20",address:"未填写",content:"下单后 12 秒取消；未付款",unlockAt:0,archiveable:false}
 ],
 // TODO: 替换为真实剧情内容
 calls:[
  {id:"call1",title:"妈妈",subtitle:"呼入",timestamp:"今天 09:12",duration:"02:41",direction:"↙",content:"联系人备注：家"},
  {id:"call2",title:"阿岚",subtitle:"呼出",timestamp:"昨天 21:18",duration:"00:36",direction:"↗",content:"微信联系人：阿岚"},
  {id:"call3",title:"城西连锁超市招聘",subtitle:"呼入",timestamp:"6月13日 16:03",duration:"03:08",direction:"↙",content:"号码：021-6608-1420；通话后未再联系"},
  {id:"call4",title:"未知号码",subtitle:"未接来电",timestamp:"6月12日 11:26",duration:"未接通",direction:"↙",content:"号码：138 **** 2751"}
  ,{id:"call6",title:"临江人才服务中心",subtitle:"呼出",timestamp:"6月10日 15:02",duration:"01:17",direction:"↗",content:"咨询大专学历可投岗位。对方建议先从零售、客服或仓储岗位寻找机会。",unlockAt:0}
  ,{id:"call5",title:"138 **** 2751",subtitle:"连续未接来电",timestamp:"今天 05:42",duration:"3 次未接通",direction:"↙",content:"号码后四位与店内一本旧交接簿上的记录相同，姓名栏被水渍盖住。",unlockAt:4}
  ,{id:"call7",title:"95***",subtitle:"疑似广告",timestamp:"6月11日 13:07",duration:"00:04",direction:"↙",content:"系统自动标记：营销推广",unlockAt:0,archiveable:false}
 ],
 // TODO: 替换为真实剧情内容
 delivery:[
  {id:"food1",title:"桥头粥铺",subtitle:"已送达",timestamp:"6月14日 19:35",price:"¥12.50",address:"新桥便利店后门",content:"白粥 × 1；茶叶蛋 × 1；使用夜间配送券"},
  {id:"food2",title:"青禾小馆",subtitle:"已送达",timestamp:"6月13日 12:26",price:"¥18.00",address:"白昼书店收银台",content:"番茄鸡蛋饭 × 1；备注：不要餐具"},
  {id:"food3",title:"春田面馆",subtitle:"已送达",timestamp:"6月11日 18:48",price:"¥22.80",address:"新桥巷 42 号",content:"牛肉面 × 2；其中一份不要香菜"}
  ,{id:"food4",title:"平台红包",subtitle:"已过期",timestamp:"6月10日 00:00",price:"¥5.00",address:"—",content:"满 35 元可用；有效期 24 小时",unlockAt:0,archiveable:false}
 ],
 // TODO: 替换为真实剧情内容
 transfers:[
  {id:"pay1",title:"妈妈",subtitle:"转出",timestamp:"6月1日 08:30",price:"-¥2,000.00",content:"备注：六月生活费",status:"out",unlockAt:0},
  {id:"pay2",title:"妹妹",subtitle:"转出",timestamp:"5月28日 22:14",price:"-¥860.00",content:"备注：报名费和资料",status:"out",unlockAt:0},
  {id:"pay3",title:"妈妈",subtitle:"转出",timestamp:"5月1日 08:02",price:"-¥2,000.00",content:"备注：五月生活费",status:"out",unlockAt:0},
  {id:"pay4",title:"弟弟",subtitle:"转出",timestamp:"4月19日 20:08",price:"-¥300.00",content:"备注：别跟妈说，买双球鞋",status:"out",unlockAt:1},
  {id:"pay5",title:"新桥便利店",subtitle:"转入",timestamp:"4月15日 10:16",price:"+¥3,420.00",content:"备注：三月工资",status:"in",unlockAt:0},
  {id:"pay6",title:"白昼书店",subtitle:"转入",timestamp:"4月10日 18:30",price:"+¥1,680.00",content:"备注：三月兼职工资",status:"in",unlockAt:1},
  {id:"pay7",title:"临江大学缴费平台",subtitle:"转出",timestamp:"8月26日 09:03",price:"-¥4,800.00",content:"备注：陈小雨第一学年学费",status:"out",unlockAt:1}
 ],
 // TODO: 替换为真实剧情内容
 calendar:[
  {id:"cal1",title:"便利店盘点",subtitle:"新桥便利店",timestamp:"6月19日 22:00–次日08:00",date:"6月19日 周四",content:"比平时多留一小时；确认加班是否计入下月工资。"},
  {id:"cal2",title:"电话面谈",subtitle:"城西连锁超市",timestamp:"6月20日 14:30–14:50",date:"6月20日 周五",content:"联系人只留了姓氏和座机号。"},
  {id:"cal3",title:"转学费",subtitle:"个人提醒",timestamp:"6月21日 18:00",date:"6月21日 周六",content:"小雨住宿费，等书店工资到账。"},
  {id:"cal4",title:"借阅到期",subtitle:"市图书馆",timestamp:"6月23日 全天",date:"6月23日 周一",content:"归还《人间草木》和一本没有记下书名的小说。"}
  ,{id:"cal5",title:"便利店夜班",subtitle:"新桥便利店",timestamp:"6月14日 22:00–次日07:00",date:"6月14日 周六",content:"本周第 4 个夜班；下班后 09:30 到白昼书店。",unlockAt:0}
 ],
 // TODO: 替换为真实剧情内容
 browser:[
  {id:"web1",title:"夜班转白班怎么和店长说",subtitle:"搜索记录",timestamp:"今天 01:24",content:"打开了三个问答页面，没有留下回复。"},
  {id:"web2",title:"零售店员面试 自我介绍 一分钟",subtitle:"搜索记录",timestamp:"昨天 23:18",content:"访问结果：求职经验；页面停留 11 分钟"},
  {id:"web3",title:"临江市图书馆 开放时间",subtitle:"搜索记录",timestamp:"昨天 18:02",content:"访问结果：市图书馆官网；随后查看借阅规则"},
  {id:"web4",title:"青禾路地铁站 B口 地图",subtitle:"搜索记录",timestamp:"6月12日 16:44",content:"访问结果：地图"},
  {id:"web6",title:"大专学历 没有工作经验 能找什么工作",subtitle:"搜索记录",timestamp:"6月10日 14:51",content:"先后查看了零售店员、客服、仓库分拣与销售岗位。",unlockAt:0},
  {id:"web7",title:"成绩不好简历怎么写",subtitle:"搜索记录",timestamp:"6月9日 02:08",content:"停留页面：没有奖学金和比赛经历，是否需要写成绩。",unlockAt:0},
  {id:"web8",title:"临江市明天天气",subtitle:"搜索记录",timestamp:"6月8日 19:22",content:"查看天气卡片后退出。",unlockAt:0,archiveable:false},
  {id:"web5",title:"总觉得很累怎么办",subtitle:"搜索记录",timestamp:"5月18日 04:03",content:"没有继续打开任何结果。",unlockAt:3}
 ],
 campus:[
  {id:"camp1",title:"在校成绩总览",subtitle:"连锁经营管理 · 2019级2班",timestamp:"2022年6月30日",content:"平均成绩 68.4，班级排名 37/42；已修满毕业所需学分。",unlockAt:0},
  {id:"camp2",title:"补考记录",subtitle:"共 2 门",timestamp:"2021—2022学年",content:"基础会计：初考 48，补考 62；经济数学：初考 51，补考 60。",unlockAt:0},
  {id:"camp3",title:"奖助与荣誉",subtitle:"暂无校级荣誉",timestamp:"在校期间",content:"无奖学金、竞赛获奖或学生干部经历；曾领取一学年困难助学金。",unlockAt:0},
  {id:"camp4",title:"第二课堂积分",subtitle:"12 / 30 分",timestamp:"毕业审核记录",content:"活动参与度偏低，主要积分来自新生讲座与两次校园清洁活动。因兼职申请免除剩余要求。",unlockAt:0},
  {id:"camp5",title:"图书馆志愿服务",subtitle:"累计 18 小时",timestamp:"2021年11月",content:"连续四周参与旧书整理和闭馆清点。负责老师评价：话不多，做事仔细。",unlockAt:1},
  {id:"camp6",title:"读书分享会报名",subtitle:"报名后未上台",timestamp:"2022年4月18日",content:"准备主题：《月亮与六便士》里的理想与生存。备注：因临时替班缺席。",unlockAt:2}
  ,{id:"camp7",title:"系统维护通知",subtitle:"教务服务暂停",timestamp:"2022年3月12日",content:"服务器维护时间：02:00—05:00。",unlockAt:0,archiveable:false}
 ],
 alarms:[
  {id:"alarm1",title:"06:45",subtitle:"交班 · 工作日 · 已关闭",timestamp:"下一次：明天",content:"提醒事项：交班；铃声：雷达",unlockAt:0},
  {id:"alarm2",title:"08:32",subtitle:"别坐过站 · 周一至周六 · 已开启",timestamp:"下一次：明天",content:"提醒事项：别坐过站；稍后提醒：开启",unlockAt:0},
  {id:"alarm3",title:"21:18",subtitle:"出门 · 周二、周四、周六 · 已开启",timestamp:"下一次：周四",content:"提醒事项：出门；没有写目的地",unlockAt:0},
  {id:"alarm4",title:"16:20",subtitle:"给小雨回电话 · 仅一次 · 已关闭",timestamp:"5月17日",content:"提醒事项：给小雨回电话",unlockAt:1},
  {id:"alarm5",title:"02:40",subtitle:"抢早鸟票 · 仅一次 · 已关闭",timestamp:"4月30日",content:"提醒事项：抢早鸟票；闹钟在三分钟后被删除",unlockAt:2}
 ],
 notes:[
  {id:"note0",title:"工作提醒",subtitle:"店内通知抄录",timestamp:"6月13日 07:12",content:"本月迟到 2 次，收银差额 1 次。店长说再出现一次会扣全勤。夜班不能成为理由。","checks":[0],unlockAt:0},
  {id:"note1",title:"月亮和六便士",subtitle:"读书笔记",timestamp:"6月12日 03:26",content:"现实像每天必须擦干净的地板，理想像窗外的月亮。够不到不等于没看见。也许我只能偶尔抬头，但那一眼也是真的。",unlockAt:0},
  {id:"note2",title:"夜班之后",subtitle:"日记",timestamp:"6月3日 07:18",content:"七点交班，坐第一班公交去书店。车上睡过了两站，迟到十二分钟。陈叔没说什么，只把柜台后的椅子往外挪了挪。",unlockAt:1},
  {id:"note3",title:"他们都长大了",subtitle:"日记",timestamp:"5月29日 01:42",content:"妹妹说不想再用我的钱。其实我也没做什么，只是比他们早几年开始赚钱。",unlockAt:2},
  {id:"note4",title:"今天做错了两次",subtitle:"工作记录",timestamp:"5月24日 07:36",content:"把找零算错，又把预订的书给了别人。顾客投诉得没错。可我听见她说“这种人只能干这个”，还是很生气。最后又是陈叔帮我收拾。","checks":[0,1],unlockAt:2},
  {id:"note5",title:"欠陈叔 1,200",subtitle:"账目",timestamp:"5月23日 00:18",content:"妹妹交资料费时向陈叔借的。已经还了 400。每次他装作忘了，我就更不知道怎么开口。","checks":[0],unlockAt:2},
  {id:"note6",title:"关于占便宜",subtitle:"随手记",timestamp:"5月16日 02:51",content:"总爱算满减、拿赠品，好像省下三块钱就赢了生活一次。挺可笑的。可三块钱也够我坐一次公交。",unlockAt:3},
  {id:"note7",title:"如果不用再为钱发愁",subtitle:"深夜独白",timestamp:"5月10日 03:08",content:"我想睡到自然醒，下午在有阳光的桌边读完一本书。带小雨和小航去看海。也许开一家很小的旧书店，不必很赚钱。","checks":[1,2],unlockAt:4},
  {id:"note8",title:"临期饭团",subtitle:"未分类",timestamp:"5月08日 06:54",content:"下班时拿走了两个报损饭团。店长看见了，只说“别让监控拍正脸”。她大概是默许的，可我回家后还是有点心虚。","checks":[0],unlockAt:4}
  ,{id:"note9",title:"新建备忘录",subtitle:"无附加文本",timestamp:"4月02日 11:10",content:"（空白）",unlockAt:0,archiveable:false}
  ,{id:"note10",title:"没有发出去",subtitle:"未完成草稿",timestamp:"3月29日 02:11",content:"其实最近不太顺利。等有结果了再告诉你们。",unlockAt:2}
 ],
 favorites:[
  // TODO: 替换为正式的梦想收藏剧情
  {id:"fav1",title:"坐慢火车穿过整个西北",subtitle:"@远方旅人",timestamp:"6月9日 02:31",content:"收藏夹：想去的地方；视频展示河西走廊与雪山。",unlockAt:0},
  {id:"fav2",title:"一个人的海边小屋",subtitle:"@海风日记",timestamp:"5月26日 23:48",content:"评论草稿：如果能休息一个月。",unlockAt:0},
  {id:"fav3",title:"三十岁重新开始学写作",subtitle:"@普通人的一页",timestamp:"5月18日 04:12",content:"收藏后反复观看 7 次。",unlockAt:1},
  {id:"fav4",title:"开一家只在白天营业的小书店",subtitle:"@书店散步",timestamp:"4月30日 01:06",content:"收藏备注只有一句：十点开门，太阳落山前关店。",unlockAt:2},
  {id:"fav5",title:"一个人骑行去西藏需要准备什么",subtitle:"@二十七码",timestamp:"4月22日 03:55",content:"收藏备注：先存钱，先学会修车。",unlockAt:2},
  {id:"fav6",title:"带家人第一次看海",subtitle:"@沿海公路",timestamp:"4月12日 03:55",content:"收藏备注：等小雨毕业。",unlockAt:3}
 ]
};
Object.assign(APP_DATA,{
 clues:{
  name:{label:"姓名",value:"张小鱼",source:"简历截图 / 微信"},
  school:{label:"教育",value:"普通一本 · 二战读研",source:"备忘录 / 直聘"},
  address:{label:"居住地",value:"梧桐苑 3 栋",source:"相册 / 外卖"},
  event:{label:"当前状态",value:"研二 · 求职中",source:"直聘 / 备忘录"},
  time:{label:"手机停留时间",value:"6月17日 02:17",source:"状态栏"},
  person:{label:"联系人",value:"妈妈 / 三人群 / 王奶奶",source:"微信 / 日历"}
 },
 chats:[
  {id:"curator",name:"馆长",avatar:"馆",time:"02:17",preview:"老规矩，表格填满",pinned:true,unlockAt:0,archiveable:false,messages:[]},
  {id:"advisor",name:"导师",avatar:"导",time:"02:03",preview:"好的老师。",unread:0,unlockAt:0,messages:[{from:"them",content:"数据今晚重新跑一遍，明早发我。",timestamp:"01:47"},{from:"me",content:"好的老师。",timestamp:"02:03"}]},
  {id:"mom",name:"妈",avatar:"妈",time:"昨天",preview:"怎么一天没回消息啊",unread:6,unlockAt:0,archiveable:false,messages:[{from:"them",content:"今天降温了。",timestamp:"昨天 08:12"},{from:"them",content:"记得加衣服。",timestamp:"昨天 08:13"},{from:"them",content:"怎么一天没回消息啊。",timestamp:"昨天 22:40"}]},
  {id:"friends",name:"三个人（6）",avatar:"仨",time:"昨天",preview:"小鱼怎么又不说话",unread:38,unlockAt:0,messages:[{from:"them",content:"晚饭吃什么。",timestamp:"周一 18:02"},{from:"me",content:"二食堂窗口今天的面还行，辣油少放。",timestamp:"周一 18:05"},{from:"them",content:"你怎么每顿都能写测评。",timestamp:"周一 18:06"},{from:"me",content:"不记就白吃了。",timestamp:"周一 18:07"},{from:"them",content:"小鱼怎么又不说话。",timestamp:"昨天 23:18"}]},
  {id:"community",name:"梧桐苑小区群",avatar:"区",time:"周一",preview:"王奶奶家的检查是几号？",unread:17,unlockAt:0,messages:[{from:"me",content:"替 3 栋王奶奶问一下，明天停水到几点？她不会看群。",timestamp:"5月12日 09:20"},{from:"me",content:"社区体检是周四吗？王奶奶的手机收不到验证码。",timestamp:"4月08日 11:13"},{from:"them",content:"小张，我私发你登记表。",timestamp:"4月08日 11:20"}]}
 ],
 directhire:[
  {id:"job1",title:"数据运营实习生",subtitle:"已读 · 未回复",timestamp:"昨天 16:40",content:"投递状态停留在“已读”",unlockAt:0},
  {id:"job2",title:"产品助理",subtitle:"不合适",timestamp:"6月15日",content:"岗位要求：两段相关实习；申请记录未填写实习经历",unlockAt:0},
  {id:"job3",title:"内容运营",subtitle:"沟通结束",timestamp:"6月13日",content:"HR：目前优先有相关项目经验的候选人",unlockAt:0},
  {id:"job4",title:"投递统计",subtitle:"40 份 · 3 回复 · 0 OC",timestamp:"近 30 天",content:"投递方向先后改过三次",unlockAt:0},
  {id:"job5",title:"26届 求职互助",subtitle:"置顶群聊",timestamp:"今天 01:52",content:"群消息：今天有 OC 吗？",unlockAt:0}
 ],
 photos:[
  {id:"p1",cls:"school",date:"6月16日 23:09",place:"屏幕截图",title:"简历第 17 版",desc:"教育背景占了半页，实习经历一栏仍然空着。",unlockAt:0},
  {id:"p2",cls:"door",date:"6月16日 21:31",place:"屏幕截图",title:"岗位收藏",desc:"三个岗位，方向彼此不同。",unlockAt:0},
  {id:"p3",cls:"river",date:"2021年9月—2023年6月",place:"相册时间线",title:"云、花、猫和饭",desc:"同一段时间里几乎每天都有照片：窗外的云、路边的花、楼下的猫，以及每顿饭。没有自拍。",unlockAt:0},
  {id:"p4",cls:"factory",date:"6月15日 18:02",place:"梧桐苑 3 栋",title:"猫今天来了",desc:"灰白猫蹲在旧单元门旁，碗里刚添过粮。相似照片从四年前开始反复出现。",unlockAt:0}
 ],
 recentlyDeleted:[
  {id:"delart1",cls:"river",date:"剩余 6 天",place:"最近删除",title:"楼下那只猫",desc:"一张普通的速写。纸角标着日期，旁边写着“今天还是没让我摸”。",unlockAt:0},
  {id:"delart2",cls:"door",date:"剩余 6 天",place:"最近删除",title:"王奶奶的背影",desc:"小马扎、布鞋和一只装药的塑料袋。",unlockAt:0},
  {id:"delart3",cls:"school",date:"剩余 6 天",place:"最近删除",title:"室友睡着了",desc:"台灯只照亮半张桌子。画得并不精致。",unlockAt:0}
 ],
 notes:[
  {id:"n1",title:"考研倒计时",subtitle:"已归零",timestamp:"两年前",content:"二战第 214 天。今天不要想结果，只把这一页做完。",noChecklist:true,unlockAt:0},
  {id:"n2",title:"论文进度",subtitle:"3 / 11",timestamp:"6月16日",content:"补实验、改图 4、导师批注还剩 8 处。","checks":[0,1],unlockAt:0},
  {id:"n3",title:"面试准备",subtitle:"未完成",timestamp:"6月16日 22:10",content:"空白期怎么解释；为什么没有实习；职业规划。","checks":[0],unlockAt:0},
  {id:"n4",title:"傍晚六点十二分",subtitle:"随手记",timestamp:"2022年5月18日",content:"云从宿舍楼后面慢慢翻过去，最下面是粉的，上面还是很亮。猫在车底只露出一截尾巴。",unlockAt:0},
  {id:"n5",title:"明天会有 OC 吗",subtitle:"未分类",timestamp:"昨晚 23:41",content:"明天会有 OC 吗。",unlockAt:0}
 ],
 calendar:[
  {id:"c1",title:"论文中期检查",subtitle:"研究生日历",timestamp:"6月20日 09:00",date:"6月20日 周五",content:"材料还差导师签字。",unlockAt:0},
  {id:"c2",title:"线上面试",subtitle:"直聘同步",timestamp:"6月21日 14:30",date:"6月21日 周六",content:"提前十分钟进入会议。",unlockAt:0},
  {id:"c3",title:"王奶奶复查",subtitle:"每月重复",timestamp:"每月 8 日 08:30",date:"重复至明年6月",content:"市二院老年科；带医保卡和上次报告。",unlockAt:0},
  {id:"c4",title:"给猫驱虫",subtitle:"每三个月重复",timestamp:"7月3日 18:20",date:"7月3日 周四",content:"药放在玄关第二格。",unlockAt:0},
  {id:"c5",title:"阿圆生日",subtitle:"每年重复",timestamp:"8月17日 全天",date:"8月17日",content:"去年答应一起吃火锅。",unlockAt:0}
 ],
 ai:[
  {id:"a1",title:"如何缓解失眠",time:"今天 02:08",preview:"导师凌晨消息之后",unlockAt:0,user:"导师总在凌晨发消息，我回完之后睡不着怎么办？",answer:"可以先把工作消息设为固定处理时段，并记录睡眠。如果长期影响生活，建议寻求专业帮助。"},
  {id:"a2",title:"三年没有实习经历简历怎么写",time:"昨天",preview:"如何包装空白期",unlockAt:0,user:"大一到大三没有实习，简历怎么写？",answer:"可以把长期兴趣转写为能力，例如持续记录体现观察力，长期照顾动物体现责任心。"},
  {id:"a3",title:"这种云叫什么",time:"5月20日",preview:"附了一张傍晚照片",unlockAt:0,user:"这种底下是粉色、上面还很亮的云叫什么？",answer:"从描述看可能是高积云受到低角度阳光照射。"},
  {id:"a4",title:"猫为什么喜欢晒太阳",time:"4月12日",preview:"楼下那只每天都在",unlockAt:0,user:"猫为什么每天傍晚都趴在同一块水泥地上？",answer:"那里可能保留了白天的热量，也可能让它感到安全。"},
  {id:"a5",title:"你觉得我画得好吗",time:"3月02日",preview:"没有继续追问",unlockAt:0,user:"你觉得我画得好吗？",answer:"我无法只凭这句话判断。不过你可以先问自己，画的时候是否真的看见了你想留下的东西。"}
 ],
 settings:[
  {id:"storage",title:"iPhone 储存空间",subtitle:"已使用 126.8 GB / 128 GB",timestamp:"现在",content:"照片占用 42.1 GB；直聘与文件占用近期快速增加。系统建议清理“最近删除”。",unlockAt:0}
 ],
 shopping:[{id:"catfood",title:"成猫粮 2kg",subtitle:"购物车 · 未付款",price:"¥48.90",timestamp:"昨天 22:18",address:"梧桐苑",content:"数量 1；预计明天送达",unlockAt:0}],
 delivery:[{id:"lastmeal",title:"兰州拉面",subtitle:"已送达",timestamp:"昨晚 20:46",price:"¥19.00",address:"梧桐苑 3 栋门口",content:"牛肉面 × 1；外卖员已放门口",unlockAt:0}],
 alarms:[{id:"missed",title:"06:50",subtitle:"起床 · 已错过",timestamp:"今天",content:"闹钟持续响铃后自动停止",unlockAt:0}]
});
/* Final game-spec content. UI components above remain unchanged. */
Object.assign(APP_DATA,{
 chats:[
  {id:"advisor",name:"导师",avatar:"导",time:"02:03",preview:"好的老师。",unlockAt:0,messages:[{from:"them",content:"明天去学院帮我拿一下快递。",timestamp:"01:47"},{from:"me",content:"好的老师。",timestamp:"02:03"}]},
  {id:"class",name:"暨广大学应用经济1班",avatar:"班",time:"昨天",preview:"论文查重通知已发群文件",unlockAt:0,messages:[{from:"them",content:"暨广大学应用经济学专业本周考试安排已上传。",timestamp:"周一 10:20"},{from:"them",content:"论文查重通知已发群文件，请大家确认。",timestamp:"昨天 16:08"}]},
  {id:"mom",name:"妈",avatar:"妈",time:"昨天",preview:"怎么一天没回消息啊",unlockAt:0,messages:[{from:"them",content:"养生文章：年轻人也要按时吃饭。",timestamp:"昨天 08:12"},{from:"them",content:"吃饭了吗？",timestamp:"昨天 19:26"},{from:"them",content:"不要熬夜了。",timestamp:"昨天 23:15"}],stageMessages:[{unlockAt:1,from:"them",content:"今天降温了",timestamp:"刚刚"},{unlockAt:1,from:"them",content:"出门记得带件外套",timestamp:"刚刚"},{unlockAt:1,from:"them",content:"怎么一天没回消息啊",timestamp:"刚刚"}]},
  {id:"community",name:"梧桐苑小区群",avatar:"区",time:"周一",preview:"小张，我私发你登记表",unlockAt:1,messages:[{from:"me",content:"请问这次社区体检具体是哪天呀，需要提前预约吗？替3栋王奶奶问一下。",timestamp:"5月12日 09:20"},{from:"me",content:"附近有可以上门给老人剪头发的吗？王奶奶腿脚不方便。",timestamp:"4月08日 11:13"},{from:"them",content:"小张，我私发你登记表。",timestamp:"4月08日 11:20"}]},
  {id:"friends",name:"我们仨",avatar:"仨",time:"昨天",preview:"到了到了",unlockAt:1,messages:[{from:"them",content:"今天吃什么。",timestamp:"周一 18:02"},{from:"me",content:"二食堂那碗面，今天辣油放得刚好。",timestamp:"周一 18:05"},{from:"them",content:"你又写饭评。",timestamp:"周一 18:06"},{from:"me",content:"不记就白吃了。",timestamp:"周一 18:07"},{from:"them",content:"到了吗。",timestamp:"昨天 23:18"},{from:"me",content:"到了到了。",timestamp:"昨天 23:19"}]},
  {id:"draft",name:"阿圆",avatar:"圆",time:"草稿",preview:"47秒语音 · 未发送",unlockAt:1,messages:[{from:"me",content:"▶ 47″　未发送",timestamp:"草稿"},{from:"me",content:"你撤回了一条消息",timestamp:"系统提示"}]}
 ],
 photos:[
  {id:"intern",src:"assets/photos/实习证明.png",album:"favorites",date:"2025年9月",place:"收藏",title:"实习证明",desc:"外贸业务实习生｜某粤广消费品贸易公司（2025.06–2025.09）",unlockAt:0},
  {id:"award",src:"assets/photos/奖状.png",album:"favorites",date:"2023年5月",place:"收藏",title:"学院优秀奖奖状",desc:"大学生国货消费意愿调研｜学院市场调研案例比赛优秀奖",unlockAt:0},
  {id:"life",src:"assets/photos/乌云.png",album:"library",date:"2021年7月18日",place:"宿舍窗边",title:"雨前的云",desc:"",unlockAt:1},
  {id:"sunny",src:"assets/photos/晴天.png",album:"library",date:"2022年4月09日",place:"教学楼下",title:"晴天",desc:"",unlockAt:1},
  {id:"sunset",src:"assets/photos/晚霞.png",album:"library",date:"2022年5月18日",place:"宿舍楼外",title:"傍晚六点十二分",desc:"云的最下面是粉色的，上面仍然很亮。",unlockAt:1},
  {id:"wildflower",src:"assets/photos/野花.png",album:"library",date:"2021年3月27日",place:"去食堂的路上",title:"路边的野花",desc:"一小丛没有名字的花，她拍了三张。",unlockAt:1},
  {id:"kitten",src:"assets/photos/小猫.png",album:"library",date:"2023年6月02日",place:"梧桐苑楼下",title:"楼下那只猫",desc:"同一只猫、同一个傍晚时段，在相册里出现了四年。",unlockAt:1},
  {id:"mealbox",src:"assets/photos/盒饭.png",album:"library",date:"2024年11月14日",place:"实验室",title:"今天的盒饭",desc:"她为吃过的每一顿饭拍照，也认真写下评价。",unlockAt:1},
  {id:"noodles",src:"assets/photos/面.png",album:"library",date:"2025年3月08日",place:"二食堂",title:"食堂的一碗面",desc:"备注写着：辣油刚好，面有一点软。",unlockAt:1}
 ],
 recentlyDeleted:[
  {id:"drawings",src:"删除的画.png",date:"剩余6天",place:"最近删除",title:"最近删除的画",desc:"楼下那只猫、王奶奶的背影、食堂的一碗面。还有6天永久删除。",unlockAt:1}
 ],
 notes:[
  {id:"interview",title:"职位面试准备",subtitle:"待办清单",timestamp:"6月16日",content:"整理常见外贸面试问题及回答思路；准备1分钟自我介绍；复习实习案例；查看公司的主营业务和产品线。",unlockAt:0},
  {id:"research",title:"课题本周 Todo",subtitle:"数字金融与居民消费",timestamp:"6月15日",content:"补充相关文献5—8篇；整理研究变量、数据来源和主要结论；下载指数和居民消费数据；录入Excel并标记缺失值。","checks":[0,1],unlockAt:0},
  {id:"exam",title:"考研二战倒计时",subtitle:"已结束两年",timestamp:"两年前",content:"第二次考研，第214天。今天不要想结果，只把这一页做完。",unlockAt:0},
  {id:"cloud",title:"傍晚六点十二分",subtitle:"日记",timestamp:"2022年5月18日",content:"云从宿舍楼后面慢慢翻过去，最下面是粉的，上面还是很亮。风把树叶吹得一阵深一阵浅，猫在车底只露出一截尾巴。",unlockAt:1},
  {id:"oc",title:"明天会有 OC 吗",subtitle:"未分类",timestamp:"昨晚23:41",content:"明天会有 OC 吗。",unlockAt:1},
  {id:"deletedHope",title:"最近删除",subtitle:"已删除的文字",timestamp:"昨天",content:"没关系，明天再试一次。",unlockAt:1}
 ],
 ai:[
  {id:"sleep",title:"如何缓解失眠",time:"今天02:08",preview:"导师凌晨消息之后",unlockAt:0,user:"导师总在凌晨发消息，我回完之后睡不着怎么办？",answer:"可以先把工作消息设为固定处理时段，并记录睡眠。如果长期影响生活，建议寻求专业帮助。"},
  {id:"polish",title:"没有实习经历如何美化包装",time:"昨天",preview:"简历怎么写",unlockAt:0,user:"我现在研二了，只有一段小外贸公司的实习，其他经历很少，简历怎么写？",answer:"优先写与你目标岗位相关的课程项目、工具能力和具体产出。不要虚构经历，可用任务、方法和结果说明你做过什么。"},
  {id:"bay",title:"大湾区课程作业怎么写进简历",time:"6月14日",preview:"背景—方法—结果",unlockAt:0,user:"怎么把大湾区跨境电商发展调研的课程作业写进简历？",answer:"可以按“背景—方法—结果”改写：说明行业背景、你负责的问卷与数据整理环节，再量化有效问卷数量和课程评价。"},
  {id:"care",title:"猫咪频繁呕吐怎么办",time:"5月20日",preview:"猫咪最近总是吐",unlockAt:1,user:"猫咪频繁呕吐怎么办？",answer:"如果持续呕吐、精神不振或无法进食，应尽快就医，并记录呕吐频率与食物变化。"},
  {id:"careBlood",title:"老人血压160严重吗",time:"5月20日",preview:"需要马上去医院吗",unlockAt:1,user:"老人血压160严重吗？",answer:"血压明显偏高，需要安静休息后复测。若伴随头痛、胸闷等不适，应及时就诊。"},
  {id:"curious",title:"这种花叫什么",time:"5月18日",preview:"路边看到的小花",unlockAt:1,user:"这种花叫什么？",answer:"可以拍清楚花朵、叶片和茎部，再结合开花地点与季节进行辨认。"},
  {id:"curiousCloud",title:"傍晚的云有学名吗",time:"5月18日",preview:"想知道云的名字",unlockAt:1,user:"傍晚的云有学名吗？",answer:"云的分类主要依据形态和高度。可以拍下完整天空，并记录当时的天气与时间来判断。"},
  {id:"curiousColor",title:"这里该用什么颜色",time:"5月18日",preview:"画面颜色怎么选",unlockAt:1,user:"这里该用什么颜色？",answer:"先观察真实光线里的明暗和冷暖关系，再选择最接近你当时感受的颜色。"}
 ],
 shopping:[
  {id:"suit",title:"商务西装套装",spec:"尺码：M｜颜色：黑色",price:"-¥299.00",timestamp:"6月12日",statusLabel:"退货",statusType:"refund",bottomText:"退款成功",unlockAt:0},
  {id:"examBooks",title:"考研资料",spec:"应用经济学考研真题和笔记",price:"¥186.40",timestamp:"两年前",statusLabel:"已签收",statusType:"done",unlockAt:0},
  {id:"catFood",title:"猫粮与肉罐头",subtitle:"定期购买",price:"¥128.00",timestamp:"每月",address:"梧桐苑",content:"购物车里还有一箱未付款。",unlockAt:1},
  {id:"monitor",title:"大字体血压计",subtitle:"已签收",price:"¥169.00",timestamp:"5月08日",address:"王奶奶",content:"大字体、大音量款。",unlockAt:1},
  {id:"paint",title:"水彩与画纸",subtitle:"部分仍在购物车",price:"¥236.00",timestamp:"4月12日",address:"宿舍",content:"买了一部分，还有几盒彩色颜料没舍得付款。",unlockAt:1}
 ],
 transfers:[
  {id:"rent",title:"房租",subtitle:"支出",timestamp:"6月1日",price:"-¥1,800.00",content:"六月房租",status:"out",unlockAt:0},
  {id:"tuition",title:"学费",subtitle:"支出",timestamp:"3月2日",price:"-¥8,000.00",content:"暨广大学学费",status:"out",unlockAt:0},
  {id:"huabei",title:"花吧最低还款",subtitle:"支出",timestamp:"5月10日",price:"-¥326.00",content:"最低还款",status:"out",unlockAt:0},
  {id:"catVet",title:"宠物医院",subtitle:"支出",timestamp:"5月16日",price:"-¥200.00",content:"给楼下的猫看病",status:"out",unlockAt:1},
  {id:"groceries",title:"菜市场",subtitle:"支出",timestamp:"5月08日",price:"-¥86.40",content:"替王奶奶买菜",status:"out",unlockAt:1}
 ]
});
const DATA=APP_DATA;
const DOSSIER_SECTIONS=[
 {id:"education",label:"教育经历",description:"学校与学历",phase:0},
 {id:"internship",label:"实习经历",description:"工作与实习证明",phase:0},
 {id:"projects",label:"项目及比赛经历",description:"课程项目、比赛与研究",phase:0},
 {id:"personal",label:"个人信息",description:"等待后续补充",phase:1,optional:true},
 {id:"kindness",label:"她的善意",description:"她为别人具体做过的事",phase:1},
 {id:"friends",label:"她的朋友",description:"持续存在的关系",phase:1},
 {id:"cares",label:"她在意的",description:"她认真看见的世界",phase:1},
 {id:"hobbies",label:"她的爱好",description:"没有写进简历的创作",phase:1},
 {id:"secrets",label:"她的秘密",description:"没有说出口的话",phase:1}
];
const DOSSIER_FIELDS=[
 {id:"educationFact",label:"教育经历",category:"education",unlockAt:0},
 {id:"internshipFact",label:"实习经历",category:"internship",unlockAt:0},
 {id:"projectFact",label:"项目及比赛经历",category:"projects",unlockAt:0},
 {id:"kindnessFact",label:"她的善意",category:"kindness",unlockAt:1},
 {id:"friendsFact",label:"她的朋友",category:"friends",unlockAt:1},
 {id:"caresFact",label:"她在意的",category:"cares",unlockAt:1},
 {id:"hobbiesFact",label:"她的爱好",category:"hobbies",unlockAt:1},
 {id:"secretsFact",label:"她的秘密",category:"secrets",unlockAt:1}
];
const EVIDENCE_LIBRARY={
 name:{title:"姓名：陈默",content:"工牌与毕业照中出现相同姓名。",fields:["fullName"]},
 school:{title:"学历：大专",content:"临江职业技术学院，连锁经营管理专业。",fields:["schoolName","major"]},
 event:{title:"两份工作",content:"便利店夜班店员，同时在白昼书店兼职。",fields:["work"]},
 person:{title:"供养弟弟妹妹",content:"返校照片与家庭聊天可以相互印证。",fields:["familyDuty"]},
 "ai-loan":{title:"查询助学贷款",content:"她在替弟弟妹妹了解入学资助。",fields:["familyDuty","kindness"]},
 "ai-private":{title:"深夜自我怀疑",content:"她怀疑普通、重复的生活是否有意义。",fields:["midnight","painful"]},
 "ai-rant":{title:"对顾客的刻薄吐槽",content:"疲惫时，她也会用不友善的话评价别人。",fields:["weakness","contradiction"]},
 "notes-note1":{title:"长期阅读习惯",content:"《月亮与六便士》读书笔记。",fields:["reading","skills"]},
 "notes-note4":{title:"疲惫造成工作失误",content:"找零与预订都出了错，并收到投诉。",fields:["mistake","weakness"]},
 "notes-note5":{title:"欠陈叔 1,200 元",content:"为妹妹资料费借钱，尚未还清。",fields:["hurt","contradiction"]},
 "notes-note6":{title:"对占便宜的反思",content:"她会算满减、拿赠品，也知道这并不体面。",fields:["weakness","mistake"]},
 "notes-note7":{title:"未完成的生活愿望",content:"读书、看海，以及开一家很小的旧书店。",fields:["wish","happiest"]},
 "notes-note8":{title:"拿走临期饭团",content:"店长似乎默许，但她仍然感到心虚。",fields:["grayArea","mistake"]},
 "archive-photos-7":{title:"成绩单截图",content:"大专平均成绩 68.4，班级排名 37/42，两门课程补考。",fields:["schoolName","major","awards"]},
 "archive-wechat-recruiter":{title:"求职未进入下一轮",content:"招聘方优先本科及有相关经验者，她只收到了一封简短拒信。",fields:["schoolName","work","awards"]},
 "archive-notes-note0":{title:"工作表现提醒",content:"当月迟到两次，并出现一次收银差额。",fields:["work","mistake","weakness"]},
 "archive-browser-web6":{title:"低门槛岗位搜索",content:"她搜索大专且没有相关经验可以从事的工作。",fields:["schoolName","work"]},
 "archive-browser-web7":{title:"成绩不佳的简历写法",content:"她没有奖学金或比赛经历，不知道是否该在简历中写成绩。",fields:["schoolName","awards","weakness"]},
 "archive-calls-call6":{title:"向人才中心咨询工作",content:"被建议从零售、客服、仓储或销售岗位开始。",fields:["schoolName","work"]},
 "archive-calendar-cal5":{title:"连续夜班排班",content:"一周内第四个夜班，下班后还要赶去书店。",fields:["work"]},
 "explored-transfers-pay1":{title:"每月固定汇款",content:"向家里转出 2,000 元，备注生活费。",fields:["familyDuty","kindness"]},
 "explored-transfers-pay7":{title:"替妹妹支付学费",content:"向大学缴费平台转出 4,800 元。",fields:["familyDuty","kindness"]},
 "explored-shopping-shop7":{title:"退款不退货",content:"商品有划痕，退款后仍继续使用。",fields:["weakness","mistake"]},
 "explored-favorites-fav4":{title:"开旧书店的梦想",content:"收藏了只在白天营业的小书店。",fields:["wish","reading"]},
 "explored-calls-call5":{title:"神秘连续来电",content:"号码与便利店旧记录有关，身份未知。",fields:["grayArea"]}
};
Object.assign(EVIDENCE_LIBRARY,{
 "archive-directhire-job1":{title:"岗位投递：已读未回",content:"投递记录停在“已读”。",fields:["internFact","planFact"]},
 "archive-directhire-job2":{title:"实习经历空白",content:"岗位要求两段实习，申请记录没有可填写的经历。",fields:["internFact"]},
 "archive-directhire-job4":{title:"40 份投递，0 个 OC",content:"近一个月投递 40 份，只收到 3 次回复。",fields:["planFact"]},
 "archive-directhire-job5":{title:"今天有 OC 吗",content:"求职互助群反复出现的问句。",fields:["planFact"]},
 "archive-photos-p1":{title:"简历第 17 版",content:"教育背景占了半页，实习经历仍然空着。",fields:["eduFact","internFact"]},
 "archive-photos-p3":{title:"三年的云、花、猫和饭",content:"大一到大三，几乎每天都有一张。",fields:["attention"]},
 "archive-photos-p4":{title:"四年里反复出现的猫",content:"同一只猫、同一个傍晚时段。",fields:["lasting"]},
 "archive-photos-delart1":{title:"最近删除的画",content:"画在过期，她留下了简历截图。",fields:["attention","privateFact"]},
 "archive-notes-n1":{title:"二战倒计时归零",content:"她考了两次，第二次考上了。",fields:["eduFact"]},
 "archive-notes-n3":{title:"面试准备清单",content:"空白期、实习和职业规划都没有答案。",fields:["planFact"]},
 "archive-notes-n4":{title:"傍晚六点十二分",content:"一整段只写云和猫的随手记。",fields:["attention"]},
 "archive-notes-n5":{title:"明天会有 OC 吗",content:"写于昨晚 23:41。",fields:["privateFact"]},
 "archive-calendar-c3":{title:"王奶奶复查",content:"每月重复，已经排到明年。",fields:["helped","lasting"]},
 "archive-calendar-c4":{title:"给猫驱虫",content:"未来的重复日程。",fields:["lasting"]},
 "archive-wechat-advisor":{title:"凌晨两点回复导师",content:"01:47 收到任务，02:03 回复“好的老师”。",fields:["internFact","privateFact"]},
 "archive-wechat-friends":{title:"六年的三人群",content:"她是那个一直在回复的人。",fields:["helped"]},
 "archive-wechat-community":{title:"替王奶奶问事",content:"停水、体检、验证码，反复出现。",fields:["helped","lasting"]},
 "archive-wechat-mom":{title:"妈妈的未读消息",content:"消息从昨天开始没有得到回复。",fields:["privateFact"]},
 "archive-doubao-a1":{title:"如何缓解失眠",content:"提问紧跟在导师凌晨消息之后。",fields:["privateFact"]},
 "archive-doubao-a2":{title:"AI 包装过的简历",content:"观察力与责任心被改写成求职语言。",fields:["skillFact","privateFact"]},
 "archive-doubao-a3":{title:"这种云叫什么",content:"一个与求职无关的问题。",fields:["attention"]},
 "archive-settings-storage":{title:"照片占用 42.1 GB",content:"系统建议清空最近删除，为文件腾出空间。",fields:["privateFact"]}
});
Object.assign(EVIDENCE_LIBRARY["archive-notes-n1"],{humanContent:"普通一本；一战未录取，二战进入普通院校。",archiveContent:"她考了两次。第二次考上了。"});
Object.assign(EVIDENCE_LIBRARY["archive-directhire-job2"],{humanContent:"大一到大三无相关实习，申请记录为空。",archiveContent:"那三年，相册里留下了一千多张照片。"});
Object.assign(EVIDENCE_LIBRARY["archive-wechat-advisor"],{humanContent:"可整理为科研经历：按要求完成导师任务。",archiveContent:"导师 01:47 发来任务，她 02:03 回了“好的老师”。"});
Object.assign(EVIDENCE_LIBRARY["archive-doubao-a2"],{humanContent:"具备良好的观察力与长期责任心。",archiveContent:"她照着 AI 的包装法写过一版，然后删了。"});
Object.assign(EVIDENCE_LIBRARY["archive-doubao-a1"],{humanContent:"该信息与岗位无关。",archiveContent:"这次提问紧跟在导师的凌晨消息之后。"});
Object.assign(EVIDENCE_LIBRARY["archive-photos-p3"],{humanContent:"该信息与岗位无关。",archiveContent:"大一到大三，云、花、猫和饭，几乎每天一张。"});
Object.assign(EVIDENCE_LIBRARY["archive-photos-delart1"],{humanContent:"该信息与岗位无关。",archiveContent:"内存不够。她删了画，留下简历和岗位截图。"});
Object.assign(EVIDENCE_LIBRARY["archive-calendar-c3"],{humanContent:"该信息与岗位无关。",archiveContent:"每月重复的复查日程，已经排到了明年。"});
Object.assign(EVIDENCE_LIBRARY["archive-wechat-community"],{humanContent:"可归入沟通与协调能力。",archiveContent:"王奶奶不会用智能手机，她替她问了很多次。"});
Object.assign(EVIDENCE_LIBRARY["archive-wechat-friends"],{humanContent:"该信息与岗位无关。",archiveContent:"六年的废话里，她是那个一直在回复的人。"});
Object.assign(EVIDENCE_LIBRARY["archive-notes-n5"],{humanContent:"可归入职业规划与求职状态。",archiveContent:"昨晚 23:41，她写：明天会有 OC 吗。"});
Object.assign(EVIDENCE_LIBRARY,{
 "archive-wechat-advisor":{title:"导师凌晨消息",content:"导师凌晨1:47让她拿快递，她2:03回复“好的老师”。",fields:[]},
 "archive-wechat-class":{title:"暨广大学应用经济1班",content:"暨广大学｜应用经济学 硕士（2024.09–至今）",fields:["educationFact"]},
 "archive-wechat-mom":{title:"妈妈的未读消息",content:"养生链接、吃饭了吗、不要熬夜了，从昨天开始未读。",fields:[]},
 "archive-wechat-community":{title:"替王奶奶问事",content:"小区群里替王奶奶询问体检和上门剪发。",archiveContent:"她愿意为身边的老人承担起本不属于自己的琐碎责任。",fields:["kindnessFact"]},
 "archive-wechat-friends":{title:"六年的三人群",content:"三个人聊了六年，她总在回复。",archiveContent:"她有一段持续了六年的亲密友谊。",fields:["friendsFact"]},
 "archive-wechat-draft":{title:"没有发出的消息",content:"47秒未发送语音和一条撤回消息。",archiveContent:"她心里藏着一些话，最终还是没能对人说出口。",fields:["secretsFact"]},
 "archive-photos-intern":{title:"实习证明",content:"外贸业务实习生｜某粤广消费品贸易公司（2025.06–2025.09）",fields:["internshipFact"]},
 "archive-photos-award":{title:"学院优秀奖奖状",content:"大学生国货消费意愿调研｜学院市场调研案例比赛优秀奖",fields:["projectFact"]},
 "archive-photos-life":{title:"一千多张收藏照片",content:"云、花、猫、每顿饭，没有自拍。",archiveContent:"她拥有一双善于发现生活之美的眼睛。",fields:["caresFact"]},
 "archive-photos-sunny":{title:"晴天",content:"她拍下教学楼外很亮的天空。",archiveContent:"她拥有一双善于发现生活之美的眼睛。",fields:["caresFact"]},
 "archive-photos-sunset":{title:"傍晚六点十二分",content:"她留下了那天傍晚粉色的云。",archiveContent:"她拥有一双善于发现生活之美的眼睛。",fields:["caresFact"]},
 "archive-photos-wildflower":{title:"路边的野花",content:"去食堂的路上，她为一小丛野花拍了三张照片。",archiveContent:"她拥有一双善于发现生活之美的眼睛。",fields:["caresFact"]},
 "archive-photos-kitten":{title:"楼下那只猫",content:"同一只猫在她的相册里出现了四年。",archiveContent:"她拥有一双善于发现生活之美的眼睛。",fields:["caresFact"]},
 "archive-photos-mealbox":{title:"今天的盒饭",content:"她认真记录吃过的每一顿饭。",archiveContent:"她拥有一双善于发现生活之美的眼睛。",fields:["caresFact"]},
 "archive-photos-noodles":{title:"食堂的一碗面",content:"她为一碗普通的面留下了照片和评价。",archiveContent:"她拥有一双善于发现生活之美的眼睛。",fields:["caresFact"]},
 "archive-photos-drawings":{title:"最近删除的画",content:"画还有6天永久删除。",archiveContent:"她创作的痕迹，正在一点点被时间收走。",fields:["hobbiesFact"]},
 "archive-notes-interview":{title:"职位面试准备",content:"外贸面试问题、自我介绍、实习案例与公司产品线。",fields:[]},
 "archive-notes-research":{title:"数字金融课题 Todo",content:"数字金融与居民消费关系分析｜硕士研究课题（2025.10–2026.01）",fields:["projectFact"]},
 "archive-notes-exam":{title:"考研二战倒计时",content:"已结束两年。",fields:[]},
 "archive-notes-cloud":{title:"傍晚六点十二分",content:"一整段关于傍晚的云。",archiveContent:"她拥有细腻而丰富的内心世界。",fields:["caresFact"]},
 "archive-notes-oc":{title:"明天会有 OC 吗",content:"写于昨晚23:41。",archiveContent:"她始终没有停止过，对明天抱有一点期待。",fields:["secretsFact"]},
 "archive-notes-deletedHope":{title:"已删除的自我鼓励",content:"没关系，明天再试一次。",archiveContent:"她始终没有停止过，对明天抱有一点期待。",fields:["secretsFact"]},
 "archive-doubao-sleep":{title:"如何缓解失眠",content:"失眠、焦虑和压力。",fields:[]},
 "archive-doubao-polish":{title:"没有实习经历如何包装",content:"求职迷茫与压力。",fields:[]},
 "archive-doubao-bay":{title:"大湾区课程作业",content:"粤港澳大湾区跨境电商发展调研｜课程小组项目（2024.09–2024.12）",fields:["projectFact"]},
 "archive-doubao-care":{title:"猫咪频繁呕吐怎么办",content:"她在查询猫咪频繁呕吐的问题。",archiveContent:"她的心思，总是牵挂在她所照顾的人和动物身上。",fields:["kindnessFact"]},
 "archive-doubao-careBlood":{title:"老人血压160严重吗",content:"她在查询老人血压偏高是否需要就医。",archiveContent:"她的心思，总是牵挂在她所照顾的人和动物身上。",fields:["kindnessFact"]},
 "archive-doubao-curious":{title:"这种花叫什么",content:"她在查询路边小花的名称。",archiveContent:"她对世界始终保持着孩子般的好奇心。",fields:["caresFact"]},
 "archive-doubao-curiousCloud":{title:"傍晚的云有学名吗",content:"她在查询傍晚云层的名称。",archiveContent:"她对世界始终保持着孩子般的好奇心。",fields:["caresFact"]},
 "archive-doubao-curiousColor":{title:"这里该用什么颜色",content:"她在思考画面应该使用什么颜色。",archiveContent:"她对世界始终保持着孩子般的好奇心。",fields:["caresFact"]},
 "archive-shopping-suit":{title:"面试西装退货",content:"买来又退掉的面试西装。",fields:[]},
 "archive-shopping-examBooks":{title:"考研资料",content:"二战时购买的考研资料。",fields:[]},
 "archive-shopping-catFood":{title:"猫粮与肉罐头",content:"定期购买，购物车里还有一箱未付款。",archiveContent:"她习惯用具体的行动，默默照顾着生活中重要的人和动物。",fields:["kindnessFact"]},
 "archive-shopping-monitor":{title:"大字体血压计",content:"给王奶奶的大字体血压计。",archiveContent:"她习惯用具体的行动，默默照顾着生活中重要的人和动物。",fields:["kindnessFact"]},
 "archive-shopping-paint":{title:"水彩与画纸",content:"部分画材还在购物车。",archiveContent:"她对梦想的渴望，始终没有真正熄灭。",fields:["hobbiesFact"]},
 "archive-transfers-rent":{title:"房租",content:"六月房租。",fields:[]},
 "archive-transfers-tuition":{title:"暨广大学学费",content:"自己承担的学费。",fields:[]},
 "archive-transfers-huabei":{title:"花吧最低还款",content:"最低还款记录。",fields:[]},
 "archive-transfers-catVet":{title:"给猫看病200元",content:"宠物医院支出。",archiveContent:"她会为一只与自己无关的生命，承担起责任。",fields:["kindnessFact"]},
 "archive-transfers-groceries":{title:"替王奶奶买菜",content:"菜市场支出。",archiveContent:"她把邻里之间的关照，活成了日常的一部分。",fields:["kindnessFact"]}
});
function freshGameState(){return {unlocked:false,introSeen:false,tutorialWelcomeSeen:false,tutorialEndNoticeSeen:false,tutorialStep:0,tutorialDone:false,tutorialModal:false,app:null,view:null,photoTab:"library",photoOrigin:"library",clues:[],archiveOpen:false,dossier:false,reveal:false,revealPending:false,ending:false,endingScheduled:false,endingVisible:false,pin:"",unlockStage:0,dossierValues:{},evidenceAssignments:{},selectedEvidence:null,pendingArchive:null,lastAccuracy:null,newFieldCount:0,submitMessage:"",formError:"",formAlert:false,commNotice:false,confirmSubmit:false,seenStages:{},submissionCount:0,failCount:0,curatorMessages:[],curatorTyping:false,curatorChoice:false,curatorChoiceMode:"",curatorSilent:false,curatorCanContinue:false,curatorRun:0,unusedEvidence:[],momBanner:false,momBannerPhase:"",momNotificationIndex:0,momNoticeRun:0,momFinal:false}}
const state=freshGameState();
let endingTimer=null;
let endingSequence=0;
const $=s=>document.querySelector(s);
const currentTime=()=>"02:17";
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function status(light=false){return `<div class="status ${light?"light":""}"><span>${currentTime()}</span><span class="status-icons"><span class="signal">▂▄▆█</span><span>⌁</span><span class="battery"><i></i></span></span></div>`}
function setUnlockStage(next){
 if(next<=state.unlockStage)return;
 const before=DOSSIER_FIELDS.filter(f=>f.unlockAt<=state.unlockStage).length;
 state.unlockStage=Math.min(1,next);
 const after=DOSSIER_FIELDS.filter(f=>f.unlockAt<=state.unlockStage).length;
 state.newFieldCount+=after-before;
}
function discover(id){
 if(!state.clues.includes(id))state.clues.push(id);
}
function collectedEvidence(){return state.clues.filter(id=>EVIDENCE_LIBRARY[id]).map(id=>({id,...EVIDENCE_LIBRARY[id]}))}
function evidenceText(item){return state.unlockStage===0?(item.humanContent||item.content):(item.archiveContent||item.content)}
const APP_ARCHIVE_FIELDS={
 wechat:["internFact","helped","privateFact"],photos:["eduFact","internFact","attention","lasting","privateFact"],
 doubao:["attention","privateFact"],directhire:["eduFact","internFact","planFact"],
 calendar:["planFact","helped","lasting"],notes:["eduFact","planFact","attention","privateFact"],
 settings:["attention","privateFact"],shopping:["lasting"],delivery:["privateFact"],alarms:["privateFact"]
};
function getAppItem(appId,itemId){
 const key=APP_DATA_KEYS[appId]?.[0]||appId;
 if(appId==="photos")return [...APP_DATA.photos,...APP_DATA.recentlyDeleted].find(x=>String(x.id)===String(itemId));
 return (APP_DATA[key]||[]).find(x=>String(x.id)===String(itemId));
}
function ensureArchiveEvidence(appId,itemId){
 const evidenceId="archive-"+appId+"-"+itemId;
 if(EVIDENCE_LIBRARY[evidenceId])return evidenceId;
 const item=getAppItem(appId,itemId);if(!item)return null;
 const content=item.content||item.desc||item.preview||item.user||item.subtitle||"该条记录未包含更多说明。";
 const allowed=APP_ARCHIVE_FIELDS[appId]||[];
 const realFields=allowed.filter(id=>DOSSIER_FIELDS.some(f=>f.id===id));
 EVIDENCE_LIBRARY[evidenceId]={title:item.title||item.name||"未命名记录",content,fields:realFields.length?realFields:["experience"]};
 return evidenceId;
}
function openInformation(appId,itemId){
 state.view=String(itemId);
 render();
}
function archiveAttrs(appId,itemId,part,title,content){
 const sourceItem=getAppItem(appId,itemId);
 if(sourceItem?.archiveable===false)return `disabled aria-disabled="true" title="这条记录没有可归档信息"`;
 const evidenceId=ensureArchiveEvidence(appId,itemId);
 return `data-archive-evidence="${esc(evidenceId)}"`;
}
function clue(){return ""}
function visibleData(key){return (APP_DATA[key]||[]).filter(item=>(item.unlockAt||0)<=state.unlockStage)}
function render(){
  const p=$("#phone");
  if(state.endingVisible){
   if(!p.querySelector(".ending-overlay"))p.insertAdjacentHTML("beforeend",endingHTML());
   bindEnding();return;
  }
  if(!state.unlocked){p.innerHTML=lockHTML();bindLock();return}
	if(!state.introSeen){p.innerHTML=introHTML();bindIntro();return}
	if(!state.app){p.innerHTML=homeHTML();bindHome();mountGlobalArchive();mountPersistentArchiveToggle();mountTutorialUI();return}
  p.innerHTML=appHTML();bindApp();
  if(state.app!=="dossierApp")mountGlobalArchive();
  mountPersistentArchiveToggle();
  mountTutorialUI();
}
function endingHTML(){
 const quote="一份简历能装下的，从来不是一个完整的人。";
 const letters=Array.from(quote).map((char,index)=>`<span style="--ending-letter:${index}">${char===" "?"&nbsp;":esc(char)}</span>`).join("");
 return `<section class="ending-overlay"><div class="ending-copy"><h1>游戏结束</h1><p aria-label="${esc(quote)}">${letters}</p><button id="restartGame">重新开始</button></div></section>`;
}
function bindEnding(){
 const restart=$("#restartGame");if(!restart)return;
 restart.onclick=()=>{
  endingSequence++;
  clearTimeout(endingTimer);endingTimer=null;
  Object.keys(state).forEach(key=>delete state[key]);
  Object.assign(state,freshGameState());
  render();fitPortraitViewport();
 };
}
function scheduleEnding(){
 if(state.endingScheduled||state.endingVisible)return;
 state.endingScheduled=true;
 state.ending=true;
 const sequence=++endingSequence;
 endingTimer=setTimeout(()=>{
  if(sequence!==endingSequence)return;
  state.endingVisible=true;
  render();
 },5000);
}
function introHTML(){return `<section class="screen intro-screen"><div class="intro-card"><small>明天会有 OC 吗</small><h1>帮张小鱼<br>完成一份简历</h1><p>张小鱼是一个研二的学生，最近正在忙着找工作。看看她的手机，长按收藏重要的信息，完成她的简历吧～</p><button id="enterPhone">查看她的手机</button></div></section>`}
function bindIntro(){$("#enterPhone").onclick=()=>{state.introSeen=true;render()}}
const TUTORIAL_COPY={
 0:["查找信息","点击任意 App，可以查看张小鱼手机里的各种信息"],
 2:["查看已收藏内容","点击这里，可以随时查看你已经收藏的所有信息"],
 3:["填写简历","打开这里，把收藏的信息拖进简历对应的位置吧"]
};
function mountTutorialUI(){
  const screen=$("#phone .screen");if(!screen)return;
  if(state.tutorialDone){
    if(!state.tutorialEndNoticeSeen){
      screen.insertAdjacentHTML("beforeend",`<div class="tutorial-end-notice"><div class="tutorial-end-card"><p>请开始收集重要的信息，完成张小鱼的简历吧</p></div></div>`);
      state.tutorialEndNoticeSeen=true;
      setTimeout(()=>{
        const notice=document.querySelector(".tutorial-end-notice");
        if(notice){notice.style.transition="opacity .4s ease";notice.style.opacity="0";setTimeout(()=>notice.remove(),400)}
      },2500);
    }
    return;
  }
  if(!state.tutorialWelcomeSeen){
    screen.insertAdjacentHTML("beforeend",`<div class="confirm-sheet" id="tutorialWelcomeSheet"><div class="confirm-card"><h2>新手教程</h2><p>接下来将通过几个简单的步骤，引导你熟悉如何操作。</p><div class="confirm-actions"><button class="primary" id="startTutorial">开始教程</button></div></div></div>`);
    $("#startTutorial").onclick=()=>{state.tutorialWelcomeSeen=true;render()};
    return;
  }
  if(state.tutorialStep===1){
  screen.classList.add("tutorial-dim");
  const clue=screen.querySelector('[data-archive-evidence="archive-wechat-class"]');
  if(clue){
   clue.classList.add("tutorial-line-target");
   clue.insertAdjacentHTML("afterend",`<div class="tutorial-inline">长按这条信息，可以将它收藏起来</div>`);
  }
 }
 if(state.tutorialStep===2){
  screen.classList.add("tutorial-dim");
  const star=$("#archiveToggle");
  if(star)star.classList.add("tutorial-target",...(state.tutorialModal?[]:["tutorial-wiggle"]));
 }
  if(state.tutorialStep===4&&state.app==="dossierApp"&&!state.view){
   screen.classList.add("tutorial-dim");
   const star=$("#archiveToggle");
   if(!state.archiveOpen){
    screen.querySelectorAll("[data-drop-field],[data-evidence],#submitDossier,#openResumeMessages").forEach(el=>{el.style.pointerEvents="none";el.style.opacity=".7"});
    if(star)star.classList.add("tutorial-target","tutorial-wiggle");
    screen.insertAdjacentHTML("beforeend",`<div class="tutorial-inline tutorial-resume-arrow">点击这里查看你收藏的信息</div>`);
   }else{
    screen.querySelectorAll("#submitDossier,#openResumeMessages").forEach(el=>{el.style.pointerEvents="none";el.style.opacity=".7"});
    const card=screen.querySelector('[data-evidence="archive-wechat-class"]')||screen.querySelector("[data-evidence]");
    const sectionId=card?correctSectionsFor(card.dataset.evidence)[0]:null;
    const target=sectionId?screen.querySelector(`[data-drop-field="${sectionId}"]`):null;
    screen.querySelectorAll("[data-drop-field]").forEach(el=>{el.style.pointerEvents="none";el.style.opacity=".7"});
    if(card){card.style.pointerEvents="auto";card.style.opacity="1";card.classList.add("tutorial-line-target")}
    if(target){target.style.pointerEvents="auto";target.style.opacity="1";target.classList.add("tutorial-line-target")}
    screen.querySelectorAll("[data-evidence]").forEach(el=>{el.style.pointerEvents="auto";el.style.opacity="1"});
    screen.insertAdjacentHTML("beforeend",`<div class="tutorial-inline">按住高亮卡片拖动。镜像会跟随手指或鼠标，把它放进高亮的简历板块</div>`);
   }
  }
 if(state.tutorialStep===5&&state.app==="dossierApp"&&!state.view){
  const content=screen.querySelector(".content");
  if(content)content.insertAdjacentHTML("afterbegin",`<div class="tutorial-final">注：信息如果和板块不匹配会被退回，全部板块填写完成后即可点击提交<button id="tutorialFinish">我知道了</button></div>`);
   $("#tutorialFinish").onclick=()=>{state.tutorialDone=true;state.tutorialStep=-1;state.tutorialModal=false;state.app=null;state.view=null;render()};
 }
 if(!state.tutorialModal)return;
 const [title,copy]=TUTORIAL_COPY[state.tutorialStep]||[];
 if(!title)return;
 screen.insertAdjacentHTML("beforeend",`<div class="tutorial-modal-layer"><div class="tutorial-modal"><h2>${title}</h2><p>${copy}</p><button id="tutorialModalNext">${state.tutorialStep===0?"下一步":"知道了"}</button></div></div>`);
 $("#tutorialModalNext").onclick=()=>{
  state.tutorialModal=false;
  if(state.tutorialStep===0){state.tutorialStep=1;state.app="wechat";state.view="class"}
  else if(state.tutorialStep===2){state.tutorialStep=3;state.archiveOpen=false;state.app=null;state.view=null}
  else if(state.tutorialStep===3){state.tutorialStep=4;state.archiveOpen=false;state.app="dossierApp";state.view=null}
  render();
 };
}
function renderPreservingScroll(){
 const top=$(".content")?.scrollTop||0,left=$(".evidence-list")?.scrollLeft||0;
 render();
 requestAnimationFrame(()=>{const content=$(".content"),list=$(".evidence-list");if(content)content.scrollTop=top;if(list)list.scrollLeft=left});
}
function lockHTML(){return `<button class="screen hello-screen" id="helloStart"><span class="hello-word">hello</span><small>轻触继续</small></button>`}
function bindLock(){$("#helloStart").onclick=()=>{state.unlocked=true;render()}}
const APPS=[
 ["dossierApp","交简历","档","dossier-app-icon"],["wechat","信息","微","wechat","1"],["photos","相册","✺","photos"],
 ["notes","备忘录","≡","notes"],["doubao","AI 助手","✦","doubao"],["shopping","网购","购","shopping"],["transfers","花吧","¥","transfers"]
];
const INACTIVE_APPS=[];
const PLACEHOLDER_APPS={};
const APP_DATA_KEYS={wechat:["chats"],photos:["photos","recentlyDeleted"],doubao:["ai"],notes:["notes"],shopping:["shopping"],transfers:["transfers"]};
function hasAppUpdate(appId){
 if(state.unlockStage===0)return false;
 if(appId==="dossierApp")return state.unlockStage>(state.seenStages[appId]??-1);
 const keys=APP_DATA_KEYS[appId]||[];
 return keys.some(key=>(APP_DATA[key]||[]).some(item=>(item.unlockAt||0)>0&&(item.unlockAt||0)<=state.unlockStage&&(state.seenStages[appId]??0)<state.unlockStage));
}
function homeHTML(){
 const tutorialTarget=!state.tutorialDone?(state.tutorialStep===0?"wechat":state.tutorialStep===3?"dossierApp":null):null;
 const guided=Boolean(tutorialTarget);
 return `<section class="screen home ${guided?"tutorial-dim":""}">${status(true)}<div class="apps">${APPS.map(a=>{
  const target=a[0]===tutorialTarget,locked=guided&&!target;
  return `<button class="app ${a[0]==="dossierApp"?"core-app":""} ${target?"tutorial-target":""}" data-app="${a[0]}" ${locked?"disabled aria-disabled=\"true\"":""}><span class="icon ${a[3]} ${target&&!state.tutorialModal?"tutorial-wiggle":""}">${a[2]}${a[4]?`<i class="app-badge">${a[4]}</i>`:hasAppUpdate(a[0])?`<i class="update-dot"></i>`:""}</span><span>${a[1]}</span></button>`;
 }).join("")}</div></section>`;
}
function openApp(appId){state.seenStages[appId]=state.unlockStage;state.app=appId;state.view=null;render()}
function bindHome(){document.querySelectorAll("[data-app]").forEach(b=>b.onclick=()=>{
 if(!state.tutorialDone&&((state.tutorialStep===0&&b.dataset.app==="wechat")||(state.tutorialStep===3&&b.dataset.app==="dossierApp"))){state.tutorialModal=true;render();return}
 openApp(b.dataset.app)
});document.querySelectorAll("[data-case]").forEach(b=>b.onclick=()=>openApp("dossierApp"))}
function shell(title,content,extra=""){return `<section class="screen slide-in ${extra}">${status()}<header class="nav">${state.view?`<button id="back">‹ 返回</button>`:`<span></span>`}<b>${esc(title)}</b><span></span></header><div class="content">${content}</div><button class="homebar" id="homebar" aria-label="向上滑动返回主屏幕"></button></section>`}
function appHTML(){
 if(PLACEHOLDER_APPS[state.app]){
  const placeholder=PLACEHOLDER_APPS[state.app];
  return shell(placeholder.title,`<div class="placeholder-app"><div class="placeholder-hero ${INACTIVE_APPS.find(item=>item[0]===state.app)?.[3]||""}"><span>${placeholder.symbol}</span><h1>${placeholder.title}</h1></div><div class="placeholder-list">${placeholder.items.map(item=>`<div><b>${esc(item[0])}</b><small>${esc(item[1])}</small></div>`).join("")}</div></div>`);
 }
 if(state.app==="directhire")return recordsHTML("直聘","directhire","聘");
 if(state.app==="wechat")return wechatHTML();
 if(state.app==="photos")return photosHTML();
 if(state.app==="doubao")return aiHTML();
 if(state.app==="shopping")return shoppingHTML();
 if(state.app==="calls")return recordsHTML("电话","calls","☎");
 if(state.app==="delivery")return recordsHTML("饱了么","delivery","餐");
 if(state.app==="transfers")return recordsHTML("花吧","transfers","¥");
 if(state.app==="calendar")return calendarHTML();
 if(state.app==="browser")return browserHTML();
 if(state.app==="campus")return recordsHTML("校园通","campus","校");
 if(state.app==="alarms")return recordsHTML("时钟","alarms","◷");
 if(state.app==="notes")return notesHTML();
 if(state.app==="favorites")return recordsHTML("摇摇看","favorites","♪");
 if(state.app==="settings")return recordsHTML("设置","settings","⚙");
 if(state.app==="dossierApp")return dossierAppHTML();
 const a=APPS.find(x=>x[0]===state.app);return shell(a[1],`<div class="locked"><span>${a[2]}</span><h2>内容已被移除</h2><p>这部分数据没有同步到设备。也许其他 App 里还留有痕迹。</p></div>`);
}
const CONTACT_AVATAR_COLORS={
 curator:"#9b887a",mom:"#b89b8b",friends:"#a9947f",draft:"#b29a91",
 community:"#9eaa91",advisor:"#948b83",class:"#a99f8b",sister:"#b49a8d",
 manager:"#8f9993",family:"#aa9684",recruiter:"#9a8f87",stranger:"#a3a08f",
 uncleChen:"#a58e7d",service:"#969f9d",drafts:"#aa9b91"
};
function contactAvatarColor(contactId){
 if(CONTACT_AVATAR_COLORS[contactId])return CONTACT_AVATAR_COLORS[contactId];
 const palette=["#a89082","#999d8d","#ad9886","#918f88","#a49b91"];
 return palette[[...String(contactId)].reduce((sum,char)=>sum+char.charCodeAt(0),0)%palette.length];
}
function messageLineHTML(content,from,contactId){
 return `<div class="message-line ${from==="me"?"me":""}" style="--contact-avatar:${contactAvatarColor(contactId)}"><span class="message-avatar" aria-hidden="true"></span>${content}</div>`;
}
const MOM_NOTIFICATION_MESSAGES=["今天降温了","出门记得带件外套","怎么一天没回消息啊"];
function wechatHTML(){
 const chats=visibleData("chats").sort((a,b)=>(b.pinned?1:0)-(a.pinned?1:0));
 if(!state.view)return shell("信来",`<div class="search">⌕ 搜索</div>${chats.map(c=>{const curatorLast=c.id==="curator"?state.curatorMessages.at(-1)?.text:"";return `<button class="chat-row" data-chat="${c.id}"><span class="avatar">${c.avatar}</span><span class="chat-copy"><b>${c.name}</b><small>${esc(curatorLast||c.preview||"")}</small></span><span class="chat-time">${c.id==="curator"?"刚刚":c.time}${c.unread?`<i class="unread">${c.unread}</i>`:""}</span></button>`}).join("")}`);
 if(state.view==="curator"){
  const messages=state.curatorMessages.map(message=>messageLineHTML(message.kind==="file"?`<div class="file-bubble ${message.from==="me"?"me":""}"><span class="file-icon">${message.ext||"DOC"}</span><span><b>${esc(message.text)}</b><small>文件 · ${message.from==="me"?"已发送":"点击后已保存"}</small></span></div>`:`<div class="bubble ${message.from==="me"?"me":""}">${esc(message.text)}</div>`,message.from,"curator")).join("");
  const typing=state.curatorTyping?messageLineHTML(`<div class="bubble typing-bubble" aria-label="对方正在输入"><i></i><i></i><i></i></div>`,"them","curator"):"";
  const choice=state.curatorChoice?`<button class="curator-choice" id="curatorChoice">${state.curatorChoiceMode==="final"?"好了好了馆长":"不是投简历吗"}</button>`:"";
  const silent=state.curatorCanContinue?`<button class="silent-hint action" id="curatorContinue">返回档案继续调整</button>`:state.curatorSilent?`<div class="silent-hint">请稍候…</div>`:"";
  const mom=state.momBanner?`<button class="mom-banner ${state.momBannerPhase==="leaving"?"leaving":""}" id="momBanner"><b>妈</b><span><strong>妈妈</strong><em>${esc(MOM_NOTIFICATION_MESSAGES[state.momNotificationIndex]||"")}</em></span></button>`:"";
  return shell("Boss",`${mom}<div class="curator-thread"><div class="chat-date">0079412 · 归档对话</div>${messages}${typing}${choice}${silent}${state.commNotice?`<div class="comm-notice">天堂档案员禁止与人间通讯。</div>`:""}<button class="dead-input" id="blockedInput" aria-label="无法输入">输入消息</button></div>`,"curator-screen");
 }
 const c=APP_DATA.chats.find(x=>x.id===state.view);
 const all=[...(c.messages||[]),...(c.stageMessages||[]).filter(m=>m.unlockAt<=state.unlockStage)];
 const avatarChar=c.avatar||c.name.charAt(0);
 let lastTime=null;
 const msgs=all.map((m,i)=>{
  const ts=m.timestamp||"";
  let timeHeader="";
  if(ts!==lastTime){timeHeader=`<div class="time-divider">${esc(ts)}</div>`;lastTime=ts;}
  const isMe=m.from==="me";
  const attr=archiveAttrs("wechat",c.id,"message"+i,c.name+" · "+(m.timestamp||"消息"),m.content);
  if(!isMe&&m.content&&m.content.startsWith("养生文章：")){
   const articleTitle=m.content.replace("养生文章：","");
   return `${timeHeader}<div class="msg-row"><span class="msg-avatar">${avatarChar}</span><button class="mp-article-card archive-info" ${attr}><div class="mp-article-cover">🌿</div><div class="mp-article-body"><div class="mp-article-title">${esc(articleTitle)}</div><div class="mp-article-source"><i></i> 养生每日推送</div></div></button></div>`;
  }
  return `${timeHeader}<div class="msg-row ${isMe?"me":""}">${isMe?"":`<span class="msg-avatar">${avatarChar}</span>`}<button class="bubble archive-info ${isMe?"me":""}" ${attr}>${esc(m.content)}</button>${isMe?`<span class="msg-avatar me-avatar">我</span>`:""}</div>`;
 }).join("");

 return shell(c.name,`<div class="messages">${msgs}${c.id==="mom"?`<button class="dead-input" id="blockedInput" aria-label="无法输入">输入消息</button>`+"":""}${c.id==="mom"&&state.commNotice?`<div class="comm-notice">天堂档案员禁止与人间通讯。</div>`:""}</div>`);
}
function photoThumbHTML(item,deleted=false){
 const image=item.src?`<img src="${esc(item.src)}" alt="${esc(item.title)}">`:`<span class="ios-photo-placeholder ${item.cls||""}">${esc(item.title)}</span>`;
 return `<button class="ios-photo-thumb" ${deleted?`data-deleted-photo="${item.id}"`:`data-photo="${item.id}"`} data-photo-origin="${deleted?"deleted":item.album||"library"}" aria-label="${esc(item.title)}">${image}</button>`;
}
function photosHTML(){
 const allPhotos=visibleData("photos");
 if(!state.view){
  const selected=allPhotos.filter(photo=>(photo.album||"library")===state.photoTab);
  const empty=state.photoTab==="library"&&state.unlockStage===0
   ?`<div class="ios-photo-empty"><b>图库暂无照片</b><span>权限开放后，这里会显示普通相册内容。</span></div>`
   :`<div class="ios-photo-empty"><b>暂无照片</b></div>`;
  const tabs=`<div class="photos-segment"><button data-photo-tab="library" class="${state.photoTab==="library"?"active":""}">图库</button><button data-photo-tab="favorites" class="${state.photoTab==="favorites"?"active":""}">收藏</button></div>`;
  const deletedAvailable=state.unlockStage>0;
  return shell("照片",`<div class="ios-photos-home"><header class="ios-photos-heading"><h1>${state.photoTab==="library"?"图库":"收藏"}</h1><small>${selected.length} 张照片</small></header>${tabs}${selected.length?`<div class="ios-photo-grid">${selected.map(photo=>photoThumbHTML(photo)).join("")}</div>`:empty}<section class="album-options"><h2>更多项目</h2><button class="album-row" ${deletedAvailable?"data-deleted":"disabled"}><span>最近删除</span><small>${deletedAvailable?`${visibleData("recentlyDeleted").length} 项`:"尚无权限"}　›</small></button></section></div>`,"photos-screen");
 }
 if(state.view==="deleted"){
  const deleted=visibleData("recentlyDeleted");
  return shell("最近删除",`<div class="ios-photos-home"><header class="ios-photos-heading"><h1>最近删除</h1><small>这些项目将在 28 天后删除</small></header>${deleted.length?`<div class="ios-photo-grid">${deleted.map(photo=>photoThumbHTML(photo,true)).join("")}</div>`:`<div class="ios-photo-empty"><b>没有照片</b></div>`}</div>`,"photos-screen");
 }
 const item=[...APP_DATA.photos,...APP_DATA.recentlyDeleted].find(photo=>String(photo.id)===String(state.view));
 if(!item)return shell("照片",`<div class="ios-photo-empty"><b>照片不可用</b></div>`,"photos-screen");
 const source=state.photoOrigin==="deleted"
  ?visibleData("recentlyDeleted")
  :allPhotos.filter(photo=>(photo.album||"library")===state.photoOrigin);
 const currentIndex=Math.max(0,source.findIndex(photo=>String(photo.id)===String(item.id)));
 const image=item.src?`<img src="${esc(item.src)}" alt="${esc(item.title)}">`:`<span class="ios-photo-placeholder ${item.cls||""}">${esc(item.title)}</span>`;
 return shell(item.date,`<div class="ios-photo-detail"><button class="photo-detail-more" aria-label="更多操作">•••</button><div class="photo-detail-stage"><button class="photo-detail-image" ${archiveAttrs("photos",item.id,"image",item.title,item.desc)}>${image}</button></div><div class="photo-detail-caption"><b>${esc(item.title)}</b><small>${esc(item.date)} · ${esc(item.place)}</small>${item.desc?`<p>${esc(item.desc)}</p>`:""}</div><div class="photo-detail-controls"><button data-photo-nav="${currentIndex-1}" ${currentIndex<=0?"disabled":""} aria-label="上一张">‹</button><button data-photo-nav="${currentIndex+1}" ${currentIndex>=source.length-1?"disabled":""} aria-label="下一张">›</button></div></div>`,"photo-detail-screen");
}
function aiHTML(){
 const history=visibleData("ai");
 if(!state.view)return shell("",`<div class="ai-dashboard"><header class="ai-profile"><button aria-label="菜单">≡</button><span><small>你好，</small><b>张小鱼</b></span><i></i></header><section class="ai-welcome"><small>AI ASSISTANT</small><h1>今天想聊点<br>什么？</h1></section><div class="ai-actions"><button class="primary-ai-action"><i>◉</i><span>和 AI<br>聊一聊</span><b>↗</b></button><div><button><i>◎</i><span>继续对话</span><b>↗</b></button><button><i>▧</i><span>图片提问</span><b>↗</b></button></div></div><section class="ai-history"><header><h2>历史记录</h2><small>查看全部</small></header>${history.map((item,index)=>`<button class="ai-history-row tone-${index%3}" data-ai="${item.id}"><i>${index%3===0?"◉":index%3===1?"◎":"▧"}</i><span><b>${esc(item.title)}</b><small>${esc(item.preview)}</small></span><time>${esc(item.time)}</time><em>⋮</em></button>`).join("")}</section></div>`,"ai-screen");
 const item=APP_DATA.ai.find(h=>h.id===state.view);
 return shell("AI 助手",`<div class="ai-conversation"><header><small>当前对话</small><h1>${esc(item.title)}</h1><time>${esc(item.time)}</time></header><div class="ai-chat-label">你</div><button class="ai-chat-card ai-chat-user archive-info" ${archiveAttrs("doubao",item.id,"question",item.title,item.user)}>${esc(item.user)}</button><div class="ai-chat-label bot">AI 助手</div><button class="ai-chat-card ai-chat-answer archive-info" ${archiveAttrs("doubao",item.id,"answer",item.title+" · AI 回复",item.answer)}>${esc(item.answer)}</button><div class="ai-compose"><span>继续输入问题…</span><button>↑</button></div></div>`,"ai-screen ai-detail-screen");
}
function notesHTML(){
 const visible=visibleData("notes");
 if(state.view){
  const item=APP_DATA.notes.find(x=>x.id===state.view);
  const body=item.noChecklist?`<div class="note-plain">${esc(item.content)}</div>`:(()=>{const sentences=item.content.split(/[。！？；]/).filter(s=>s.trim()).map(s=>s.trim());const checks=item.checks||[];return sentences.map((s,i)=>`<div class="checklist-item"><span class="check-dot${checks.includes(i)?" checked":""}">✓</span><span>${esc(s)}</span></div>`).join("");})();
  return shell(item.title,`<button class="note-detail archive-info" ${archiveAttrs("notes",item.id,"note",item.title,item.content)}><h1>${esc(item.title)}</h1><div class="note-date">${esc(item.timestamp)}</div>${body}</button>`);
 }
 const preview=(text,n=35)=>text.length>n?text.slice(0,n)+"…":text;
 return shell("随记",`<div class="notes-list"><div class="notes-count">${visible.length} 个备忘录</div>${visible.map(item=>`<button class="notes-card archive-heart-host" data-record="${item.id}" ${archiveAttrs("notes",item.id,"card",item.title,item.content)}><h3>${esc(item.title)}</h3><div class="notes-date">${esc(item.timestamp)}</div><div class="notes-preview">${esc(preview(item.content))}</div></button>`).join("")}</div>`);
}
function walletRecordIcon(item){return item.id==="rent"?"⌂":item.id==="tuition"?"▤":item.id==="huabei"?"◫":item.id==="catVet"?"✚":"⌁"}
function recordDetailHTML(title,key,symbol){
 const item=APP_DATA[key].find(x=>x.id===state.view);
 const appId=state.app;
 if(key==="transfers"){
  const completeRecord=`时间：${item.timestamp}；金额：${item.price||""}；转账备注：${item.content}`;
  return shell("交易详情",`<div class="wallet-detail-page"><header class="wallet-detail-heading"><span class="wallet-record-icon">${walletRecordIcon(item)}</span><div><small>${esc(item.subtitle||"交易记录")}</small><h1>${esc(item.title)}</h1></div></header><section class="wallet-detail-card"><small>交易金额</small><strong>${esc(item.price||"")}</strong><span>已完成</span></section><button class="wallet-detail-fields archive-info" ${archiveAttrs(appId,item.id,"record",item.title,completeRecord)}><span class="wallet-detail-field"><small>时间</small><b>${esc(item.timestamp)}</b></span><span class="wallet-detail-field"><small>金额</small><b>${esc(item.price||"")}</b></span><span class="wallet-detail-field"><small>转账备注</small><b>${esc(item.content)}</b></span></button></div>`,"wallet-screen wallet-detail-screen");
 }
 return shell(title,`<article class="detail-card"><div class="detail-symbol">${symbol}</div><h1>${esc(item.title)}</h1><p>${esc(item.subtitle||"记录详情")}</p><button class="detail-line archive-line" ${archiveAttrs(appId,item.id,"time",item.title+" · 时间",item.timestamp)}><small>时间</small><b>${esc(item.timestamp)}</b></button>${item.price?`<button class="detail-line archive-line" ${archiveAttrs(appId,item.id,"price",item.title+" · "+(key==="transfers"?"金额":"价格"),item.price)}><small>${key==="transfers"?"金额":"价格"}</small><b>${esc(item.price)}</b></button>`:""}${item.duration?`<button class="detail-line archive-line" ${archiveAttrs(appId,item.id,"duration",item.title+" · 通话时长",item.duration)}><small>通话时长</small><b>${esc(item.duration)}</b></button>`:""}${item.address?`<button class="detail-line archive-line" ${archiveAttrs(appId,item.id,"address",item.title+" · 地址",item.address)}><small>${key==="delivery"?"送达地址":"收货地址"}</small><b>${esc(item.address)}</b></button>`:""}<button class="detail-line archive-line" ${archiveAttrs(appId,item.id,"content",item.title,item.content)}><small>${key==="transfers"?"转账备注":key==="delivery"?"餐品明细":key==="shopping"?"商品信息":"记录信息"}</small><b>${esc(item.content)}</b></button></article>`);
}
function shoppingHTML(){
 const orders=visibleData("shopping");
 if(state.view){
  const item=APP_DATA.shopping.find(x=>x.id===state.view);
  if(item.id==="suit"){
   const lines=[
    {label:"退回银行卡",value:"¥299",bold:false},
    {label:"返还优惠",value:"¥0.96",bold:false},
    {label:"运费保障",value:"",bold:false}
   ];
   const rows=lines.map(l=>`<div class="order-detail-row"><span>${esc(l.label)}</span><span class="${l.bold?"order-detail-bold":""}">${esc(l.value)}</span></div>`).join("");
   return shell("订单详情",`<div class="order-detail-page"><div class="order-detail-status refund">退款成功</div>${rows}</div>`);
  }
  if(item.id==="examBooks"){
   const lines=[
    {label:"商品总价",value:"¥186.4",bold:false},
    {label:"店铺优惠",value:"-¥7.9",bold:false},
    {label:"平台优惠",value:"-¥10",bold:false},
    {label:"实际付款",value:"¥168.5",bold:true}
   ];
   const rows=lines.map(l=>`<div class="order-detail-row"><span>${esc(l.label)}</span><span class="${l.bold?"order-detail-bold":""}">${esc(l.value)}</span></div>`).join("");
   return shell("订单详情",`<div class="order-detail-page"><div class="order-detail-status done">已签收</div>${rows}</div>`);
  }
  return recordDetailHTML("网购","shopping","▣");
 }
 const cards=orders.map(item=>{
  const tag=item.statusLabel?`<span class="order-status-tag ${item.statusType||""}">${esc(item.statusLabel)}</span>`:"";
  const bottom=item.bottomText?`<div class="order-bottom">${esc(item.bottomText)}</div>`:"";
  const spec=item.spec?`<div class="order-spec">${esc(item.spec)}</div>`:"";
  const imgIcon=item.id==="suit"?"👔":item.id==="examBooks"?"📚":"📦";
  const archiveAttr=archiveAttrs("shopping",item.id,"order",item.title,item.price);
  return `<button class="order-card archive-heart-host" data-record="${item.id}" ${archiveAttr}><div class="order-img">${imgIcon}</div><div class="order-info"><div class="order-name">${esc(item.title)}</div>${spec}<div class="order-price">${esc(item.price)}</div>${bottom}</div>${tag}</button>`;
 }).join("");
 return shell("网购",`<div class="order-list"><div class="order-section-title">我的订单</div>${cards}</div>`);
}
function recordsHTML(title,key,symbol){
 if(state.view)return recordDetailHTML(title,key,symbol);
 if(key==="transfers"){
  const records=visibleData(key);
  return shell("",`<div class="wallet-page"><header class="wallet-profile"><span class="wallet-avatar"></span><span><small>早上好</small><b>张小鱼</b></span><button aria-label="通知">♢<i></i></button></header><h1>我的花吧</h1><section class="wallet-balance-card"><div class="wallet-card-top"><span>Finlight</span><b>花吧</b></div><small>本月支出</small><strong>¥10,412.40</strong><div class="wallet-card-bottom"><span>••••　••••　••••　6925</span><small>更新于<br>6月17日</small></div></section><div class="wallet-actions"><button><i>↗</i><span>转账</span></button><button><i>↙</i><span>收款</span></button><button><i>▣</i><span>充值</span></button></div><section class="wallet-transactions"><header><h2>交易记录</h2><div class="wallet-period"><button class="active">按月</button><button>按天</button></div></header>${records.map(item=>`<button class="wallet-transaction-row" data-record="${item.id}"><span class="wallet-record-icon">${walletRecordIcon(item)}</span><span class="wallet-record-copy"><b>${esc(item.title)}</b><small>${esc(item.subtitle)} · ${esc(item.timestamp)}</small></span><strong class="${item.status||""}">${esc(item.price||"")}</strong></button>`).join("")}</section></div>`,"wallet-screen");
 }
 const summary=key==="transfers"?`<div class="detail-card" style="margin-bottom:8px"><small>账单统计</small><h2>本月支出 ¥10,412.40</h2><div class="resume-tabs" style="margin:10px 0 0"><button class="active">按月</button><button>按天</button></div></div>`:"";
 const hideRecordIcon=key==="shopping"||key==="transfers";
 return shell(title,`${summary}<div class="record-list"><div class="section-label">最近记录</div>${visibleData(key).map(item=>`<button class="record-row ${hideRecordIcon?"plain-record-row":""}" data-record="${item.id}">${hideRecordIcon?"":`<span class="record-icon">${item.direction||symbol}</span>`}<span class="record-copy"><b>${esc(item.title)}</b><small>${esc(item.subtitle)}${item.duration?" · "+esc(item.duration):""}</small></span><span class="record-meta"><time>${esc(item.timestamp)}</time>${item.price?`<strong class="${item.status||""}">${esc(item.price)}</strong>`:""}</span></button>`).join("")}</div>`);
}
function calendarHTML(){
 if(state.view){const item=APP_DATA.calendar.find(x=>x.id===state.view);return shell("日历",`<article class="detail-card"><div class="detail-symbol">15</div><h1>${esc(item.title)}</h1><p>${esc(item.date)}</p><button class="detail-line archive-line" ${archiveAttrs("calendar",item.id,"time",item.title+" · 时间",item.timestamp)}><small>时间</small><b>${esc(item.timestamp)}</b></button><button class="detail-line archive-line" ${archiveAttrs("calendar",item.id,"calendar",item.title+" · 日历",item.subtitle)}><small>日历</small><b>${esc(item.subtitle)}</b></button><button class="detail-line archive-line" ${archiveAttrs("calendar",item.id,"content",item.title+" · 备注",item.content)}><small>备注</small><b>${esc(item.content)}</b></button></article>`)}
 return shell("日历",`<div class="month-head"><button>‹</button><h1>2025年6月</h1><button>›</button></div><div class="record-list">${APP_DATA.calendar.map(item=>`<div class="calendar-day">${esc(item.date)}</div><button class="calendar-row" data-record="${item.id}"><b>${esc(item.title)}</b><small>${esc(item.timestamp)} · ${esc(item.subtitle)}</small></button>`).join("")}</div>`);
}
function browserHTML(){
 if(state.view)return recordDetailHTML("搜一搜看","browser","⌕");
 const groups={"今天":[],"昨天":[],"更早":[]};visibleData("browser").forEach(item=>groups[item.timestamp.startsWith("今天")?"今天":item.timestamp.startsWith("昨天")?"昨天":"更早"].push(item));
 return shell("搜一搜看",`<div class="search">⌕ 搜索历史记录</div><div class="record-list">${Object.entries(groups).map(([day,items])=>items.length?`<div class="section-label">${day}</div>${items.map(item=>`<button class="record-row" data-record="${item.id}"><span class="record-icon">⌕</span><span class="record-copy"><b>${esc(item.title)}</b><small>${esc(item.subtitle)}</small></span><span class="record-meta"><time>${esc(item.timestamp.replace(day,"").trim())}</time></span></button>`).join("")}`:"").join("")}</div>`);
}
function dossierAppHTML(){
 if(state.view==="messages")return resumeMessagesHTML();
 if(state.view==="curator")return wechatHTML();
 if(state.view==="feedback")return shell("前程档",`<div class="feedback-card"><div class="feedback-mark">%</div><small>档案校验结果</small><h2>分类正确率 ${state.lastAccuracy??0}%</h2><p>${esc(state.submitMessage)}</p><button class="primary" id="continueExplore">返回主屏幕继续完善</button></div>`);
 const activeSections=DOSSIER_SECTIONS.filter(section=>section.phase===(state.unlockStage===0?0:1));
 const activeIds=activeSections.flatMap(section=>state.evidenceAssignments[section.id]||[]);
 const filled=activeIds.length;
 const activeCategoryIds=activeSections.map(section=>section.id);
 const evidence=state.unlockStage===0?collectedEvidence():collectedEvidence().filter(item=>correctSectionsFor(item.id).some(category=>activeCategoryIds.includes(category)));
 const archive=`<section class="evidence-archive ${state.archiveOpen?"open":""}"><div class="archive-head"><h3>已收藏线索</h3><small>${evidence.length} 条 · 向左滑动浏览</small></div>${evidence.length?`<div class="evidence-list">${evidence.map(item=>`<button class="evidence-card ${state.selectedEvidence===item.id?"selected":""} ${activeIds.includes(item.id)?"used":""}" data-evidence="${item.id}"><b>${esc(item.title)}</b><small>${esc(evidenceText(item))}</small></button>`).join("")}</div>`:`<div class="archive-empty">暂无收藏。<br>请先返回手机长按收藏线索。</div>`}</section>`;
 const firstEmptySection=activeSections.find(section=>!section.optional)?.id;
 const form=activeSections.map(section=>{const ids=state.evidenceAssignments[section.id]||[];const emptyHint=section.id===firstEmptySection?`将“已收集信息”放入对应栏目<br><small>不符合这份表格的信息会退回未采用区</small>`:`<span class="empty-brief">暂无归档内容</span>`;return `<section class="form-section"><h3>${esc(section.label)}<small style="display:block;margin-top:4px;font-weight:400">${esc(section.description)}</small></h3><div class="field"><div class="drop-field section-drop ${ids.length?"filled":"empty-quiet"}" data-drop-field="${section.id}" tabindex="0">${ids.length?ids.map(id=>{const item=EVIDENCE_LIBRARY[id];return `<div class="filed-evidence"><button class="remove-evidence" data-remove-evidence="${id}" data-section="${section.id}">×</button><b>${esc(item.title)}</b><small>${esc(evidenceText(item))}</small></div>`}).join(""):emptyHint}</div></div></section>`}).join("");
 const unused=state.unusedEvidence.length?`<section class="unused-tray"><h3>未采用</h3>${state.unusedEvidence.map(id=>`<span>${esc(EVIDENCE_LIBRARY[id]?.title||"未命名信息")}</span>`).join("")}</section>`:"";
 const confirm=state.confirmSubmit?`<div class="confirm-sheet"><div class="confirm-card"><h2>确定提交档案吗？</h2><p>还有一些信息可能没有被发现。提交后将检查档案的完整度与分类。</p><div class="confirm-actions"><button class="primary" id="confirmDossier">确认提交</button><button class="secondary" id="cancelDossier">继续填写</button></div></div></div>`:"";
 const formAlert=state.formAlert?`<div class="confirm-sheet"><div class="confirm-card"><h2>暂时无法提交</h2><p>${esc(state.formError)}</p><div class="confirm-actions"><button class="primary" id="dismissFormAlert">知道了</button></div></div></div>`:"";
 const required=activeSections.filter(section=>!section.optional).length;
 const completed=activeSections.filter(section=>!section.optional&&(state.evidenceAssignments[section.id]||[]).length).length;
 return shell(state.unlockStage===0?"人间简历模版":"天堂档案馆简历",`<div class="resume-tabs"><button class="active">写简历</button><button id="openResumeMessages">消息列表</button></div><div class="resume-hero"><small>${state.unlockStage===0?"HUMAN RESUME · 0079412":"HEAVEN ARCHIVE · 0079412"}</small><h1>${state.unlockStage===0?"人间简历模版":"天堂档案馆简历模版"}</h1><p>${state.unlockStage===0?"把她压缩进一张简历":"这次，表格换了一组问题"}</p><div class="resume-progress"><span><i style="width:${Math.min(100,completed/required*100)}%"></i></span><b>${completed}/${required}</b></div></div>${state.formError&&!state.formAlert?`<div class="form-error">${esc(state.formError)}</div>`:""}${unused}${form}<div class="submit-wrap"><button class="primary" id="submitDossier">一键提交</button></div>${archive}${confirm}${formAlert}`);
}
function resumeMessagesHTML(){
 const bossPreview=state.curatorMessages.at(-1)?.text||"";
 const hrs=[
  ["启程科技 HR","感谢关注，经过综合评估，很遗憾这次无法继续推进您的申请。"],
  ["粤海贸易招聘","已读"],
  ["某消费品公司 HR","目前优先考虑有更多相关实习经验的候选人。"],
  ["数据运营招聘","感谢理解，祝您求职顺利！"]
 ];
 return shell("消息列表",`<div class="resume-tabs"><button id="openResumeForm">写简历</button><button class="active">消息列表</button></div><button class="chat-row" ${state.curatorMessages.length?`id="openBoss"`:"disabled"}><span class="avatar">B</span><span class="chat-copy"><b>Boss</b><small>${esc(bossPreview||"档案馆")}</small></span><span class="chat-time">刚刚${state.revealPending?`<i class="unread">1</i>`:""}</span></button>${hrs.map(([name,preview])=>`<button class="chat-row hr-row" disabled><span class="avatar">HR</span><span class="chat-copy"><b>${name}</b><small>${preview}</small><em class="hr-read">已读</em></span><span class="chat-time">昨天以前</span></button>`).join("")}`);
}
function requiredDossierSections(phase){
 return DOSSIER_SECTIONS.filter(section=>section.phase===phase&&!section.optional);
}
function missingDossierSections(phase){
 return requiredDossierSections(phase).filter(section=>!(state.evidenceAssignments[section.id]||[]).length);
}
function submitDossier(){
 const phase=state.unlockStage===0?0:1;
 const missing=missingDossierSections(phase);
 state.confirmSubmit=false;
 if(missing.length&&phase===0){
   state.formError="信息不足，请检查是否有板块还没有填写内容";
   state.formAlert=true;renderPreservingScroll();
   return;
 }
 if(missing.length&&phase===1){
   state.failCount++;
   state.curatorMessages.push({from:"them",text:state.failCount%2?"信息收集的不全，再仔细翻翻看她的手机！":"再去看看，我总觉得还少点什么！"});
   state.app="dossierApp";state.view="curator";state.curatorCanContinue=true;renderCurator();
   return;
 }
 state.formError="";
 if(phase===0){state.submissionCount=1;beginCuratorSubmission(1,false)}
 else{state.submissionCount++;beginCuratorSubmission(state.submissionCount,true)}
}
function renderCurator(){
 render();
 requestAnimationFrame(()=>{const content=$(".content");if(content)content.scrollTop=content.scrollHeight});
}
function startMomNotifications(){
 const run=++state.momNoticeRun;
 const show=index=>{
  if(run!==state.momNoticeRun||index>=MOM_NOTIFICATION_MESSAGES.length)return;
  state.momNotificationIndex=index;state.momBanner=true;state.momBannerPhase="entering";render();
  setTimeout(()=>{
   if(run!==state.momNoticeRun)return;
   state.momBannerPhase="leaving";render();
   setTimeout(()=>{
    if(run!==state.momNoticeRun)return;
    state.momBanner=false;state.momBannerPhase="";render();
    if(index+1<MOM_NOTIFICATION_MESSAGES.length)setTimeout(()=>show(index+1),700);
   },340);
  },1800);
 };
 show(0);
}
function queueCuratorReplies(items,onDone){
 const run=state.curatorRun;
 const next=index=>{
  if(run!==state.curatorRun)return;
  if(index>=items.length){if(onDone)onDone();return}
  const item=items[index];
  setTimeout(()=>{
   if(run!==state.curatorRun)return;
   state.curatorTyping=true;renderCurator();
   setTimeout(()=>{
    if(run!==state.curatorRun)return;
    state.curatorTyping=false;
    state.curatorMessages.push({from:"them",kind:item.kind||"text",text:item.text,ext:item.ext});
    if(item.unlockAfter)setUnlockStage(1);
    renderCurator();next(index+1);
   },item.typeFor||950);
  },item.pauseBefore??420);
 };
 next(0);
}
function runInterruptedTyping(onDone){
 const run=state.curatorRun;
 const steps=[
  {typing:true,wait:900},
  {typing:false,wait:2000},
  {typing:true,wait:850},
  {typing:false,wait:1100}
 ];
 const next=index=>{
  if(run!==state.curatorRun)return;
  if(index>=steps.length){onDone();return}
  state.curatorTyping=steps[index].typing;
  renderCurator();
  setTimeout(()=>next(index+1),steps[index].wait);
 };
 next(0);
}
function beginCuratorSubmission(count,complete){
 state.app="dossierApp";state.view=count===1?"messages":"curator";state.curatorChoice=false;state.curatorSilent=false;state.curatorCanContinue=false;state.curatorTyping=false;state.curatorRun++;
 if(count===1){
  state.curatorMessages.push({from:"me",kind:"file",text:"张小鱼_简历.docx",ext:"DOCX"},{from:"me",text:"馆长，0079412，填好了"});
  state.revealPending=true;render();
  return;
 }
 state.curatorMessages.push({from:"me",text:complete?"馆长，0079412，重新整理完了":"馆长，0079412，我又整理了一遍"},{from:"me",kind:"file",text:`0079412_张小鱼_档案_v${count}.docx`,ext:"DOCX"});
 renderCurator();
 if(complete){
  queueCuratorReplies([
   {text:"这还差不多，你发那个第一版也太不全了"},
   {text:"等一下",pauseBefore:1400},
   {text:"名单上的人不是 0079421 吗？"},
   {text:"你今天怎么回事...差点搞错了！"},
   {text:"张小鱼还活着呢！",pauseBefore:850}
  ],()=>{state.curatorSilent=false;renderCurator();scheduleEnding()});
 }else{
  queueCuratorReplies([
   {text:"还是有几处对不上"},{text:"有些东西放错地方了"},{text:"再看看吧"}
  ],()=>{state.curatorSilent=true;state.curatorCanContinue=true;renderCurator()});
 }
}
function assignedEvidenceIds(){return Object.values(state.evidenceAssignments).flat()}
function correctSectionsFor(evidenceId){
 const item=EVIDENCE_LIBRARY[evidenceId];if(!item)return[];
 return [...new Set(item.fields.map(fieldId=>DOSSIER_FIELDS.find(f=>f.id===fieldId)?.category).filter(Boolean))];
}
function assignEvidence(sectionId,evidenceId){
 const item=EVIDENCE_LIBRARY[evidenceId];
 if(!item||!DOSSIER_SECTIONS.some(section=>section.id===sectionId))return false;
 if(!correctSectionsFor(evidenceId).includes(sectionId)){
  if(!state.unusedEvidence.includes(evidenceId))state.unusedEvidence.push(evidenceId);
  state.selectedEvidence=null;
  renderPreservingScroll();
  return false;
 }
 const targetPhase=DOSSIER_SECTIONS.find(section=>section.id===sectionId)?.phase;
 Object.keys(state.evidenceAssignments).forEach(key=>{if(DOSSIER_SECTIONS.find(section=>section.id===key)?.phase===targetPhase)state.evidenceAssignments[key]=(state.evidenceAssignments[key]||[]).filter(id=>id!==evidenceId)});
 if(!state.evidenceAssignments[sectionId])state.evidenceAssignments[sectionId]=[];
 state.evidenceAssignments[sectionId].push(evidenceId);
 state.dossierValues[sectionId]=state.evidenceAssignments[sectionId].join(",");
 state.selectedEvidence=null;
 renderPreservingScroll();
 return true;
}
function showArchivePrompt(){
 const item=EVIDENCE_LIBRARY[state.pendingArchive];if(!item)return;
 $("#phone").insertAdjacentHTML("beforeend",`<div class="confirm-sheet" id="archivePrompt"><div class="confirm-card"><small style="color:#7f8985">发现一条可归档信息</small><h2>${esc(item.title)}</h2><p>${esc(evidenceText(item))}</p><div class="confirm-actions"><button class="primary" id="confirmArchive">存入已收集信息</button><button class="secondary" id="cancelArchive">暂不存档</button></div></div></div>`);
 $("#confirmArchive").onclick=()=>{discover(state.pendingArchive);state.pendingArchive=null;render()};
 $("#cancelArchive").onclick=()=>{state.pendingArchive=null;$("#archivePrompt")?.remove()};
}
function globalArchiveHTML(){
  const evidence=collectedEvidence();
  const usedIds=Object.values(state.evidenceAssignments).flat();
  return `<section class="global-evidence evidence-archive ${state.archiveOpen?"open":""}"><div class="archive-head"><h3>已收藏线索</h3><small>${evidence.length} 条 · 向左滑动浏览</small></div>${evidence.length?`<div class="evidence-list">${evidence.map(item=>`<div class="evidence-card ${usedIds.includes(item.id)?"used":""}"><b>${esc(item.title)}</b><small>${esc(evidenceText(item))}</small></div>`).join("")}</div>`:`<div class="archive-empty">暂无收藏。<br>长按线索并拖到这里。</div>`}</section>`;
}
function mountGlobalArchive(){
 const screen=$("#phone .screen");if(!screen)return;
 screen.querySelector(".global-evidence")?.remove();
 screen.insertAdjacentHTML("beforeend",globalArchiveHTML());
}
function mountPersistentArchiveToggle(){
 const phone=$("#phone");if(!phone||!state.unlocked||!state.introSeen)return;
 phone.querySelector(":scope > .persistent-archive-toggle")?.remove();
 phone.insertAdjacentHTML("beforeend",`<button class="archive-toggle persistent-archive-toggle" id="archiveToggle" aria-label="收藏夹">★</button>`);
 const toggle=$("#archiveToggle");
  toggle.onclick=()=>{
   if(!state.tutorialDone&&state.tutorialStep===2){state.archiveOpen=true;state.tutorialModal=true;render();return}
   if(!state.tutorialDone&&state.tutorialStep===4){state.archiveOpen=true;render();return}
   state.archiveOpen=!state.archiveOpen;
  if(state.app==="dossierApp"&&!state.view)renderPreservingScroll();
  else{mountGlobalArchive();mountPersistentArchiveToggle()}
 };
}
function bindArchiveHearts(){
 document.querySelectorAll("[data-archive-evidence]").forEach((el,index)=>{
  const evidenceId=el.dataset.archiveEvidence;
  el.classList.add("archive-heart-host");
  el.onclick=null;
  const tutorialClue=!state.tutorialDone&&state.tutorialStep===1;
  const tutorialStar=!state.tutorialDone&&state.tutorialStep===2;
  if(tutorialStar){el.style.pointerEvents="none";el.style.opacity=".7"}
  if(tutorialClue&&(evidenceId!=="archive-wechat-class"||index>0)){el.style.pointerEvents="none";el.style.opacity=".7"}
  if(state.clues.includes(evidenceId))el.classList.add("collected");
  let timer=null,active=false,clone=null,pointerId=null,startX=0,startY=0,lastX=0,lastY=0,sourceRect=null,visualScale=1;
  const removeGlobalListeners=()=>{
   window.removeEventListener("pointermove",onMove);
   window.removeEventListener("pointerup",onEnd);
   window.removeEventListener("pointercancel",onCancel);
  };
  const clearState=()=>{
   clearTimeout(timer);timer=null;removeGlobalListeners();
   document.querySelector(".global-evidence")?.classList.remove("collect-drop-active");
   if(active){active=false;el.classList.remove("longpress-active");el.closest(".screen")?.classList.remove("collect-focus")}
  };
  const moveClone=(x,y)=>{
   if(!clone)return;
   clone.style.transform=`translate3d(${x-startX}px,${y-startY}px,0) scale(${visualScale*1.07})`;
   const tray=document.querySelector(".global-evidence");
   if(tray){
    const r=tray.getBoundingClientRect();
    tray.classList.toggle("collect-drop-active",x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom);
   }
  };
  const begin=()=>{
   active=true;state.archiveOpen=true;sourceRect=el.getBoundingClientRect();
   visualScale=sourceRect.width/el.offsetWidth||1;
   clone=el.cloneNode(true);
   clone.removeAttribute("data-archive-evidence");
   clone.classList.remove("longpress-active","tutorial-line-target","collected");
   clone.classList.add("evidence-drag-clone","archive-collect-clone");
   Object.assign(clone.style,{left:`${sourceRect.left}px`,top:`${sourceRect.top}px`,width:`${el.offsetWidth}px`,height:`${el.offsetHeight}px`,transformOrigin:"top left"});
   document.body.appendChild(clone);
   el.classList.add("longpress-active");el.closest(".screen")?.classList.add("collect-focus");
   mountGlobalArchive();
   requestAnimationFrame(()=>moveClone(lastX,lastY));
  };
   el.onpointerdown=event=>{
    if(state.clues.includes(evidenceId))return;
    pointerId=event.pointerId;
    startX=lastX=event.clientX;startY=lastY=event.clientY;
    window.addEventListener("pointermove",onMove,{passive:false});
    window.addEventListener("pointerup",onEnd);
    window.addEventListener("pointercancel",onCancel);
    if(tutorialClue){begin()}
    else{timer=setTimeout(begin,420)}
  };
  const onMove=event=>{
   if(event.pointerId!==pointerId)return;
   lastX=event.clientX;lastY=event.clientY;
   if(!active){
    if(Math.hypot(lastX-startX,lastY-startY)>10){clearTimeout(timer);timer=null}
    return;
   }
   event.preventDefault();moveClone(lastX,lastY);
  };
  const finish=(x,y)=>{
   const tray=document.querySelector(".global-evidence");
   const trayRect=tray?.getBoundingClientRect();
   const accepted=!!trayRect&&x>=trayRect.left&&x<=trayRect.right&&y>=trayRect.top&&y<=trayRect.bottom;
   clearState();
   if(accepted){
    clone?.remove();clone=null;
    discover(evidenceId);el.classList.add("collected");
     if(tutorialClue){
      state.tutorialStep=2;state.archiveOpen=false;
      const screen=$("#phone .screen");
      screen.classList.remove("tutorial-dim");
      screen.querySelectorAll(".tutorial-inline").forEach(el=>el.remove());
      screen.querySelectorAll(".tutorial-line-target").forEach(el=>el.classList.remove("tutorial-line-target"));
      document.querySelector(".global-evidence")?.remove();
      mountPersistentArchiveToggle();
      const star=$("#archiveToggle");
      if(star)star.classList.add("tutorial-target","tutorial-wiggle");
      return;
     }
    state.archiveOpen=false;mountGlobalArchive();return;
   }
   state.archiveOpen=false;mountGlobalArchive();
   if(!clone)return;
   clone.style.transition="transform .25s ease-out,opacity .25s ease-out";
   clone.style.transform=`translate3d(0,0,0) scale(${visualScale})`;
   clone.style.opacity=".65";
   const returningClone=clone;clone=null;
   setTimeout(()=>returningClone.remove(),260);
  };
  const onEnd=event=>{
   if(event.pointerId!==pointerId)return;
   clearTimeout(timer);
   if(!active){
    const dist=Math.hypot(event.clientX-startX,event.clientY-startY);
    if(dist<10&&el.dataset.record){openInformation(state.app,el.dataset.record)}
    clearState();return;
   }
   finish(event.clientX,event.clientY);
  };
  const onCancel=event=>{
   if(event.pointerId!==pointerId)return;
   if(active)finish(lastX,lastY);
   else clearState();
  };
  el.ondragstart=event=>event.preventDefault();
 });
}
function bindEvidenceDrag(card){
 let clone=null,startX=0,startY=0,lastX=0,lastY=0,startRect=null,timer=null,dragging=false,pointerId=null,visualScale=1;
 const evidenceId=card.dataset.evidence;
 const clearTargets=()=>document.querySelectorAll("[data-drop-field].dragover").forEach(box=>box.classList.remove("dragover"));
 const targetAt=(x,y)=>{
  const direct=document.elementFromPoint(x,y)?.closest?.("[data-drop-field]");
  if(direct)return direct;
  return [...document.querySelectorAll("[data-drop-field]")].find(box=>{
   const r=box.getBoundingClientRect();return x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom;
  })||null;
 };
 const moveClone=(x,y)=>{
  if(!clone)return;
  clone.style.transform=`translate3d(${x-startX}px,${y-startY}px,0) scale(${visualScale*1.07})`;
  clearTargets();
  targetAt(x,y)?.classList.add("dragover");
 };
 const begin=event=>{
  if(dragging)return;
   dragging=true;startRect=card.getBoundingClientRect();
   visualScale=startRect.width/card.offsetWidth||1;
   clone=card.cloneNode(true);
   clone.removeAttribute("data-evidence");
   clone.setAttribute("aria-hidden","true");
   clone.classList.add("evidence-drag-clone","resume-evidence-clone");
   clone.classList.remove("selected","drag-source");
   Object.assign(clone.style,{left:`${startRect.left}px`,top:`${startRect.top}px`,width:`${card.offsetWidth}px`,height:`${card.offsetHeight}px`,transformOrigin:"top left"});
   document.body.appendChild(clone);
   card.classList.add("drag-source");
   document.documentElement.classList.add("resume-evidence-dragging");
   try{card.setPointerCapture?.(pointerId)}catch{}
   requestAnimationFrame(()=>moveClone(lastX,lastY));
  };
 const removeGlobalListeners=()=>{
  window.removeEventListener("pointermove",onGlobalMove);
  window.removeEventListener("pointerup",onGlobalEnd);
  window.removeEventListener("pointercancel",onGlobalCancel);
 };
 const clean=()=>{
   clearTimeout(timer);timer=null;clearTargets();card.classList.remove("drag-source");
   document.documentElement.classList.remove("resume-evidence-dragging");
   try{if(card.hasPointerCapture?.(pointerId))card.releasePointerCapture(pointerId)}catch{}
   removeGlobalListeners();
  };
 card.onpointerdown=event=>{
  if(event.button!==undefined&&event.button!==0)return;
  if(event.pointerType!=="touch")event.preventDefault();
   pointerId=event.pointerId;
  startX=lastX=event.clientX;startY=lastY=event.clientY;
  window.addEventListener("pointermove",onGlobalMove,{passive:false});
  window.addEventListener("pointerup",onGlobalEnd);
  window.addEventListener("pointercancel",onGlobalCancel);
    begin(event);
 };
 const onGlobalMove=event=>{
  if(event.pointerId!==pointerId)return;
  lastX=event.clientX;lastY=event.clientY;
  if(!dragging){
   if(Math.hypot(lastX-startX,lastY-startY)>9)clearTimeout(timer);
   return;
  }
  event.preventDefault();moveClone(lastX,lastY);
 };
 const finish=event=>{
  clearTimeout(timer);
  if(!dragging){clean();return}
  dragging=false;
  card._evidenceDragged=true;
  setTimeout(()=>{card._evidenceDragged=false},0);
  lastX=event.clientX;lastY=event.clientY;
  const target=targetAt(lastX,lastY);
  const valid=target&&correctSectionsFor(evidenceId).includes(target.dataset.dropField);
  clean();
  if(valid){
   clone?.remove();clone=null;
   if(!state.tutorialDone&&state.tutorialStep===4){
    state.tutorialStep=5;
    state.archiveOpen=false;
   }
   assignEvidence(target.dataset.dropField,evidenceId);
   return;
  }
  if(!clone)return;
  clone.style.transition="transform .25s ease-out,opacity .25s ease-out";
  clone.style.transform=`translate3d(0,0,0) scale(${visualScale})`;
  clone.style.opacity=".65";
  const rejectedSection=target?.dataset.dropField;
  const returningClone=clone;clone=null;
  setTimeout(()=>{
   returningClone.remove();
   if(rejectedSection)assignEvidence(rejectedSection,evidenceId);
  },260);
 };
 const onGlobalEnd=event=>{if(event.pointerId===pointerId)finish(event)};
 const onGlobalCancel=event=>{
  if(event.pointerId!==pointerId)return;
  if(dragging)finish({clientX:lastX,clientY:lastY});
  else clean();
 };
 card.ondragstart=event=>event.preventDefault();
}
function bindApp(){
 const tutorialLocked=()=>!state.tutorialDone&&[1,2,4].includes(state.tutorialStep);
 const goBack=()=>{
  if(tutorialLocked())return;
  if(state.app==="dossierApp"&&state.view==="curator")state.view="messages";
  else if(state.app==="photos"&&state.view&&state.view!=="deleted")state.view=state.photoOrigin==="deleted"?"deleted":null;
  else if(state.view)state.view=null;
  else state.app=null;
  render();
 };
 if($("#back"))$("#back").onclick=goBack;
  const goHome=()=>{if(tutorialLocked())return;state.app=null;state.view=null;state.archiveOpen=false;render()};
 $("#homebar").onclick=goHome;
 let touchX=0,touchY=0,homeGesture=false;
 $("#phone").ontouchstart=e=>{const touch=e.touches[0],rect=$("#phone").getBoundingClientRect();touchX=touch.clientX;touchY=touch.clientY;homeGesture=touchY>rect.bottom-82};
 $("#phone").ontouchend=e=>{const touch=e.changedTouches[0];if(homeGesture&&touchY-touch.clientY>65){goHome();return}if(touchX<30&&touch.clientX-touchX>70)goBack()};
 document.querySelectorAll("[data-chat]").forEach(b=>b.onclick=()=>openInformation("wechat",b.dataset.chat));
 document.querySelectorAll("[data-photo-tab]").forEach(button=>button.onclick=()=>{state.photoTab=button.dataset.photoTab;state.view=null;render()});
 document.querySelectorAll("[data-photo]").forEach(button=>button.onclick=()=>{state.photoOrigin=button.dataset.photoOrigin||state.photoTab;openInformation("photos",button.dataset.photo)});
 if($("[data-deleted]"))$("[data-deleted]").onclick=()=>{state.photoOrigin="deleted";state.view="deleted";render()};
 document.querySelectorAll("[data-deleted-photo]").forEach(button=>button.onclick=()=>{state.photoOrigin="deleted";openInformation("photos",button.dataset.deletedPhoto)});
 document.querySelectorAll("[data-photo-nav]").forEach(button=>button.onclick=()=>{
  const source=state.photoOrigin==="deleted"?visibleData("recentlyDeleted"):visibleData("photos").filter(photo=>(photo.album||"library")===state.photoOrigin);
  const next=source[Number(button.dataset.photoNav)];if(next){state.view=String(next.id);render()}
 });
 const photoStage=document.querySelector(".photo-detail-stage");
 if(photoStage){
  let photoSwipeX=null;
  photoStage.onpointerdown=event=>{photoSwipeX=event.clientX;photoStage.setPointerCapture?.(event.pointerId)};
  photoStage.onpointerup=event=>{
   if(photoSwipeX===null)return;
   const delta=event.clientX-photoSwipeX;photoSwipeX=null;
   if(Math.abs(delta)<45)return;
   const buttons=[...document.querySelectorAll("[data-photo-nav]")];
   const target=delta>0?buttons[0]:buttons[1];
   if(target&&!target.disabled)target.click();
  };
  photoStage.onpointercancel=()=>{photoSwipeX=null};
 }
 document.querySelectorAll("[data-ai]").forEach(b=>b.onclick=()=>openInformation("doubao",b.dataset.ai));
 document.querySelectorAll("[data-record]").forEach(b=>b.onclick=()=>openInformation(state.app,b.dataset.record));
 document.querySelectorAll("[data-clue]").forEach(b=>b.onclick=()=>{discover(b.dataset.clue);b.classList.add("found");b.innerHTML="✓ 已收录"});
 bindArchiveHearts();
 document.querySelectorAll("[data-evidence]").forEach(card=>{
  card.onclick=()=>{if(card._evidenceDragged)return;state.selectedEvidence=state.selectedEvidence===card.dataset.evidence?null:card.dataset.evidence;renderPreservingScroll()};
  bindEvidenceDrag(card);
 });
 document.querySelectorAll("[data-drop-field]").forEach(box=>{
  box.ondragover=e=>{e.preventDefault();box.classList.add("dragover")};
  box.ondragleave=()=>box.classList.remove("dragover");
  box.ondrop=e=>{e.preventDefault();box.classList.remove("dragover");assignEvidence(box.dataset.dropField,e.dataTransfer.getData("text/plain"))};
  box.onclick=e=>{if(e.target.closest("[data-remove-evidence]"))return;if(state.selectedEvidence)assignEvidence(box.dataset.dropField,state.selectedEvidence)};
 });
 document.querySelectorAll("[data-remove-evidence]").forEach(btn=>btn.onclick=e=>{e.stopPropagation();const section=btn.dataset.section,id=btn.dataset.removeEvidence;state.evidenceAssignments[section]=(state.evidenceAssignments[section]||[]).filter(item=>item!==id);state.dossierValues[section]=state.evidenceAssignments[section].join(",");renderPreservingScroll()});
 if($("#curatorChoice"))$("#curatorChoice").onclick=()=>{
  state.curatorChoice=false;
  state.curatorMessages.push({from:"me",text:"不是投简历吗"});
  renderCurator();
  queueCuratorReplies([{text:"投什么简历"},{text:"人家就等着这辈子档案归好去投胎了",pauseBefore:620,typeFor:1050}],()=>{
   state.curatorSilent=true;renderCurator();
   setTimeout(()=>{
    state.curatorSilent=false;renderCurator();
    queueCuratorReplies([
     {kind:"file",text:"天堂档案馆_简历模版（标准）",ext:"XLSX"},
     {text:"用这个"},
     {text:"我给你开放一些权限，最近删除、草稿箱、回收站，都能看了",unlockAfter:true,pauseBefore:700}
    ],()=>{state.curatorSilent=true;renderCurator();startMomNotifications()});
   },5200);
  });
 };
 if($("#dismissNewFields"))$("#dismissNewFields").onclick=()=>{state.newFieldCount=0;render()};
 if($("#openResumeMessages"))$("#openResumeMessages").onclick=()=>{state.view="messages";render()};
 if($("#openResumeForm"))$("#openResumeForm").onclick=()=>{state.view=null;render()};
 if($("#openBoss"))$("#openBoss").onclick=()=>{
  const startReveal=state.revealPending;
  state.revealPending=false;state.view="curator";renderCurator();
  if(startReveal)runInterruptedTyping(()=>{
   queueCuratorReplies([
    {text:"？"},{text:"怎么是 人间的简历模版"},
    {text:"而且这信息一点都不全啊",pauseBefore:1450,typeFor:1150},{text:"这怎么归档"}
   ],()=>{state.curatorChoice=true;renderCurator()});
  });
 };
 if($("#curatorContinue"))$("#curatorContinue").onclick=()=>{state.curatorSilent=false;state.curatorCanContinue=false;state.app="dossierApp";state.view=null;render()};
 if($("#blockedInput"))$("#blockedInput").onclick=()=>{state.commNotice=true;renderCurator()};
 if($("#momBanner"))$("#momBanner").onclick=()=>{state.momNoticeRun++;state.momBanner=false;state.momBannerPhase="";state.app="wechat";state.view="mom";render()};
 if($("#submitDossier"))$("#submitDossier").onclick=()=>{
  const phase=state.unlockStage===0?0:1;
  if(phase===0&&missingDossierSections(phase).length){
   state.formError="信息不足，请检查是否有板块还没有填写内容";
   state.formAlert=true;state.confirmSubmit=false;renderPreservingScroll();return;
  }
  state.formError="";state.formAlert=false;state.confirmSubmit=true;render();
 };
 if($("#cancelDossier"))$("#cancelDossier").onclick=()=>{state.confirmSubmit=false;render()};
 if($("#dismissFormAlert"))$("#dismissFormAlert").onclick=()=>{state.formAlert=false;state.formError="";renderPreservingScroll()};
 if($("#confirmDossier"))$("#confirmDossier").onclick=submitDossier;
 if($("#continueExplore"))$("#continueExplore").onclick=()=>{state.app=null;state.view=null;render()};
 if($("#returnPhone"))$("#returnPhone").onclick=()=>{state.app=null;state.view=null;render()};
}
document.addEventListener("keydown",e=>{
 if(e.code!=="Space"||!state.unlocked||!state.app||state.ending)return;
 e.preventDefault();
 state.app=null;
 state.view=null;
 state.confirmSubmit=false;
 state.pendingArchive=null;
 render();
},{capture:true});
function fitPortraitViewport(){
 const phone=$("#phone");
 const touchPortrait=matchMedia("(max-width:760px) and (hover:none) and (pointer:coarse) and (orientation:portrait)").matches;
 if(touchPortrait){
  phone.style.transform="";
  phone.style.left="";
  phone.style.top="";
  phone.style.position="";
  return;
 }
 const bounds=$(".stage").getBoundingClientRect();
 const width=bounds.width;
 const height=bounds.height;
 const scale=Math.min(1,(width-24)/375,(height-24)/812);
 const fittedScale=Math.max(.2,scale);
 phone.style.position="absolute";
 phone.style.left=`${Math.max(12,(width-375*fittedScale)/2)}px`;
 phone.style.top=`${Math.max(12,(height-812*fittedScale)/2)}px`;
 phone.style.transform=`scale(${fittedScale})`;
}
window.addEventListener("resize",fitPortraitViewport);
window.visualViewport?.addEventListener("resize",fitPortraitViewport);
render();
fitPortraitViewport();
