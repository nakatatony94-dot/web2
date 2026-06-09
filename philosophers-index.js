// ══════════════════════════════════════════
//  philosophers-index.js
//
//  思想家索引数组 — 供首页卡片、侧边栏使用
//
//  每条记录包含：
//    id        唯一标识，须与 thinker-detail.js 中的键名一致
//    lastName  首字母，用于侧边栏字母分组
//    nameCN    中文名
//    nameEN    英文名（全名）
//    years     生卒年
//    century   所属世纪（显示于索引卡片）
//    tradition 思想流派 / 国籍
//    photo     肖像图片路径，无则填 null
//    bio       一句话简介（显示于详情页头部名片区）
//    works     著作列表，每条：
//                { year, titleEN, titleCN, note, file }
//                file 填相对路径可下载，无则填 null
//
//  ★ 添加新思想家：在数组末尾复制一条记录填写即可
//  ★ 生平与思想贡献正文请在 thinker-detail.js 中对应 id 下编辑
// ══════════════════════════════════════════

const philosophers = [

  // ── 罗纳德·里根 ──────────────────────────
  {
    id: "Reagan",
    lastName: "R",
    nameCN: "罗纳德·里根",
    nameEN: "Ronald Reagan",
    years: "1911年2月6日—2004年6月5日",
    century: "20–21世纪",
    tradition: "保守主义政治家",
    photo: "images/portraits/reagan.jpg",
    bio: `美国第40任总统，被誉为"伟大的沟通者"。从好莱坞影星转型为保守派政治领袖，推动"里根革命"，对冷战终结、美国经济复苏和保守主义复兴产生深远影响。`,
    works: [
      { year: "1965", titleEN: "Where's the Rest of Me?", titleCN: "我的其余部分在哪里？", note: "里根自传，记述从演员到政治家的心路历程", file: null },
      { year: "1990", titleEN: "An American Life", titleCN: "一个美国人的生活", note: "总统回忆录，涵盖执政八年的政策与外交决策", file: null },
      { year: "2001", titleEN: "Reagan: A Life in Letters", titleCN: "里根：书信中的一生", note: "精选私人书信集，展现其私下的思想与情感世界", file: null },
    ]
  },

  // ── 玛格丽特·撒切尔 ──────────────────────
  {
    id: "Thatcher",
    lastName: "T",
    nameCN: "玛格丽特·撒切尔",
    nameEN: "Margaret Thatcher",
    years: "1925–2013",
    century: "20世纪",
    tradition: "保守主义政治家",
    photo: "images/portraits/thatcher.jpg",
    bio: `英国历史上第一位女首相，20世纪最具影响力的政治人物之一，人称"铁娘子"。推行私有化、削减工会权力与减税政策，与里根共同开创了1980年代的保守主义复兴浪潮。`,
    works: [
      { year: "1993", titleEN: "The Downing Street Years", titleCN: "唐宁街岁月", note: "执政回忆录第一卷，记述1979—1990年首相生涯", file: null },
      { year: "1995", titleEN: "The Path to Power", titleCN: "通往权力之路", note: "回忆录第二卷，记述成长经历与政治思想形成过程", file: null },
      { year: "2002", titleEN: "Statecraft", titleCN: "治国方略", note: "对冷战后世界秩序与英美关系的政治分析", file: null },
    ]
  },

  // ── 弗里德里希·哈耶克 ────────────────────
  {
    id: "Hayek",
    lastName: "H",
    nameCN: "弗里德里希·哈耶克",
    nameEN: "Friedrich August von Hayek",
    years: "1899–1992",
    century: "20世纪",
    tradition: "奥地利学派",
    photo: "images/portraits/hayek.jpg",
    bio: `经济学家、政治哲学家，奥地利经济学派与古典自由主义的重要代表。1974年获诺贝尔经济学奖，著有《通往奴役之路》，为20世纪自由主义思潮的复兴奠定理论基础。`,
    works: [
      { year: "1931", titleEN: "Prices and Production", titleCN: "价格与生产", note: "奥地利学派经济周期理论的系统阐述", file: null },
      { year: "1944", titleEN: "The Road to Serfdom", titleCN: "通往奴役之路", note: "计划经济必然导向专制的经典警示之作", file: null },
      { year: "1948", titleEN: "Individualism and Economic Order", titleCN: "个人主义与经济秩序", note: "知识问题与价格机制的核心论文集", file: null },
      { year: "1960", titleEN: "The Constitution of Liberty", titleCN: "自由宪章", note: "自由主义政治哲学的综合性论著", file: null },
      { year: "1973", titleEN: "Law, Legislation and Liberty (Vol. I–III)", titleCN: "法、立法与自由（三卷）", note: "规则与秩序：自发秩序理论的展开", file: null },
      { year: "1988", titleEN: "The Fatal Conceit", titleCN: "致命的自负", note: "对社会主义认识论谬误的最终批判", file: null },
    ]
  },

  // ── 米尔顿·弗里德曼 ──────────────────────
  {
    id: "Friedman",
    lastName: "F",
    nameCN: "米尔顿·弗里德曼",
    nameEN: "Milton Friedman",
    years: "1912–2006",
    century: "20–21世纪",
    tradition: "芝加哥学派",
    photo: "images/portraits/friedman.jpg",
    bio: `20世纪最具影响力的美国经济学家之一，货币主义创始人，芝加哥经济学派的领军人物，自由市场资本主义的坚定倡导者，1976年获诺贝尔经济学奖。`,
    works: [
      { year: "1957", titleEN: "A Theory of the Consumption Function", titleCN: "消费函数理论", note: "永久收入假说的系统论证", file: null },
      { year: "1962", titleEN: "Capitalism and Freedom", titleCN: "资本主义与自由", note: "自由市场思想的经典通俗阐述", file: null },
      { year: "1963", titleEN: "A Monetary History of the United States", titleCN: "美国货币史", note: "与施瓦茨合著，货币主义的奠基之作", file: null },
      { year: "1980", titleEN: "Free to Choose", titleCN: "自由选择", note: "与罗丝合著，影响最广泛的自由市场通俗著作", file: null },
    ]
  },

  // ── 路德维希·冯·米塞斯 ───────────────────
  {
    id: "Mises",
    lastName: "M",
    nameCN: "路德维希·冯·米塞斯",
    nameEN: "Ludwig von Mises",
    years: "1881–1973",
    century: "20世纪",
    tradition: "奥地利学派",
    photo: "images/portraits/mises.jpg",
    bio: `被誉为"奥地利经济学派的院长"，以人类行为学（Praxeology）建立经济学的先验基础，并以社会主义计算不可能论从根本上挑战计划经济的可行性。`,
    works: [
      { year: "1912", titleEN: "The Theory of Money and Credit", titleCN: "货币与信用理论", note: "奥地利学派货币经济学的奠基之作", file: null },
      { year: "1922", titleEN: "Socialism", titleCN: "社会主义", note: "对社会主义制度全面批判的经典文本", file: null },
      { year: "1927", titleEN: "Liberalism", titleCN: "自由主义", note: "古典自由主义政治哲学的简明阐述", file: null },
      { year: "1944", titleEN: "Bureaucracy", titleCN: "官僚制", note: "分析官僚管理与利润管理的本质差异", file: null },
      { year: "1949", titleEN: "Human Action", titleCN: "人的行为", note: "人类行为学体系的完整呈现，米塞斯最重要著作", file: null },
    ]
  },

  // ── 路德维希·维特根斯坦 ──────────────────
  {
    id: "wittgenstein",
    lastName: "W",
    nameCN: "路德维希·维特根斯坦",
    nameEN: "Ludwig Wittgenstein",
    years: "1889–1951",
    century: "20世纪",
    tradition: "分析哲学",
    photo: null,
    bio: `奥地利裔英国哲学家，20世纪最重要的分析哲学家之一。早期以图像论描述语言与世界的关系，晚期以"语言游戏"批判本质主义，开创日常语言哲学传统。`,
    works: [
      { year: "1921", titleEN: "Tractatus Logico-Philosophicus", titleCN: "逻辑哲学论", note: "语言图像论，可说与不可说的界限", file: null },
      { year: "1953", titleEN: "Philosophical Investigations", titleCN: "哲学研究", note: "语言游戏与意义使用论，晚期思想的代表作", file: null },
      { year: "1969", titleEN: "On Certainty", titleCN: "论确定性", note: "知识、怀疑与语言基础的最后沉思", file: null },
    ]
  },
  //庞巴维克
{
  id: "BohmBawerk",
  lastName: "Böhm-Bawerk",
  nameCN: "欧根·冯·庞巴维克",
  nameEN: "Eugen von Böhm-Bawerk",
  years: "1851–1914",
  century: "19–20世纪",
  tradition: "奥地利学派",
  photo: "images/portraits/bohm-bawerk.jpg",
  bio: `奥地利学派核心经济学家之一，以资本理论与利息理论闻名，是边际主义与资本时间结构分析的关键奠基者之一。他系统发展了“迂回生产”理论，并对马克思的劳动价值论与资本理论提出经典批判。`,
  works: [
    {
      year: "1884–1889",
      titleEN: "Capital and Interest",
      titleCN: "资本与利息",
      note: "三卷本巨著，系统分析利息的起源与资本理论基础",
      file: null
    },
    {
      year: "1889",
      titleEN: "The Positive Theory of Capital",
      titleCN: "资本的实证理论",
      note: "提出迂回生产与资本结构的核心分析框架",
      file: null
    },
    {
      year: "1896",
      titleEN: "Karl Marx and the Close of His System",
      titleCN: "卡尔·马克思体系的终结",
      note: "对马克思经济学体系的经典批判文本",
      file: null
    }
  ]
},
  // ──罗斯巴德────────────────────────────────
{
  id: "Rothbard",
  lastName: "Rothbard",
  nameCN: "穆瑞·罗斯巴德",
  nameEN: "Murray Newton Rothbard",
  years: "1926–1995",
  century: "20世纪",
  tradition: "奥地利学派 / 自由意志主义",
  photo: "images/portraits/rothbard.jpg",
  bio: `美国经济学家、历史学家和政治哲学家，被誉为现代自由意志主义（Libertarianism）的主要奠基人之一，也是20世纪奥地利学派最重要的继承者和传播者。罗斯巴德在米塞斯经济学基础上构建了完整的无政府资本主义（Anarcho-Capitalism）理论体系，将自由市场原则扩展至法律、安全和公共服务领域，对当代自由意志主义运动产生深远影响。`,

  works: [
    {
      year: "1962",
      titleEN: "Man, Economy, and State",
      titleCN: "人、经济与国家",
      note: "系统重建奥地利学派经济学，被视为现代奥派经济学经典著作",
      file: null
    },
    {
      year: "1963",
      titleEN: "America's Great Depression",
      titleCN: "美国大萧条",
      note: "运用奥地利商业周期理论解释1929年经济危机",
      file: null
    },
    {
      year: "1973",
      titleEN: "For a New Liberty",
      titleCN: "为了新的自由",
      note: "自由意志主义政治哲学纲领性著作",
      file: null
    },
    {
      year: "1982",
      titleEN: "The Ethics of Liberty",
      titleCN: "自由的伦理",
      note: "从自然权利角度论证自由社会的道德基础",
      file: null
    },
    {
      year: "1995",
      titleEN: "An Austrian Perspective on the History of Economic Thought",
      titleCN: "经济思想史：奥地利学派视角",
      note: "两卷本巨著，以奥地利学派视角重述经济思想发展史",
      file: null
    }
  ]
},
//-----------柯兹纳-------------------
{
  id: "Kirzner",
  lastName: "Kirzner",
  nameCN: "伊斯雷尔·柯兹纳",
  nameEN: "Israel Meir Kirzner",
  years: "1930–",
  century: "20–21世纪",
  tradition: "奥地利学派",
  photo: "images/portraits/kirzner.jpg",
  bio: `美国经济学家、奥地利学派第三代代表人物，路德维希·冯·米塞斯最重要的学生之一。柯兹纳以企业家理论（Entrepreneurship Theory）闻名，系统阐述了企业家在市场发现过程中的核心作用。他强调市场并非静态均衡状态，而是一个持续发现和协调的动态过程，其理论成为现代创业研究和市场过程理论的重要基础，被誉为“企业家经济学之父”。`,

  works: [
    {
      year: "1973",
      titleEN: "Competition and Entrepreneurship",
      titleCN: "竞争与企业家精神",
      note: "企业家发现理论的代表作，奠定现代奥派企业家理论基础",
      file: null
    },
    {
      year: "1963",
      titleEN: "Market Theory and the Price System",
      titleCN: "市场理论与价格体系",
      note: "系统介绍奥地利学派市场过程理论",
      file: null
    },
    {
      year: "1979",
      titleEN: "Perception, Opportunity, and Profit",
      titleCN: "认知、机会与利润",
      note: "分析企业家发现市场机会的过程",
      file: null
    },
    {
      year: "1992",
      titleEN: "The Meaning of Market Process",
      titleCN: "市场过程的意义",
      note: "总结和发展市场过程理论的重要论文集",
      file: null
    },
    {
      year: "2000",
      titleEN: "The Driving Force of the Market",
      titleCN: "市场的驱动力",
      note: "进一步阐述企业家警觉性与市场协调机制",
      file: null
    }
  ]
},
{
  id: "Hoppe",
  lastName: "Hoppe",
  nameCN: "汉斯-赫尔曼·霍普",
  nameEN: "Hans-Hermann Hoppe",
  years: "1949–",
  century: "20–21世纪",
  tradition: "奥地利学派 / 自由意志主义",
  photo: "images/portraits/hoppe.jpg",
  bio: `德国裔美国经济学家、政治哲学家，奥地利学派和自由意志主义的重要代表人物之一。霍普师从尤尔根·哈贝马斯，后受米塞斯和罗斯巴德思想影响，成为无政府资本主义（Anarcho-Capitalism）的主要理论家。他以“论证伦理学”（Argumentation Ethics）闻名，试图从逻辑和伦理层面为私有产权与自由社会提供哲学基础，并对民主制度、国家权力和现代福利国家提出系统批判。`,

  works: [
    {
      year: "1989",
      titleEN: "A Theory of Socialism and Capitalism",
      titleCN: "社会主义与资本主义理论",
      note: "从产权视角比较不同社会制度，被视为霍普成名作",
      file: null
    },
    {
      year: "1993",
      titleEN: "The Economics and Ethics of Private Property",
      titleCN: "私有财产的经济学与伦理学",
      note: "系统阐述论证伦理学和私有产权理论",
      file: null
    },
    {
      year: "2001",
      titleEN: "Democracy: The God That Failed",
      titleCN: "民主：失败的上帝",
      note: "对现代民主制度最具影响力的批判性著作",
      file: null
    },
    {
      year: "2006",
      titleEN: "The Economics and Ethics of Private Property: Studies in Political Economy and Philosophy",
      titleCN: "私有财产的经济学与伦理学（增订版）",
      note: "汇集霍普政治哲学与经济学的重要论文",
      file: null
    },
    {
      year: "2012",
      titleEN: "From Aristocracy to Monarchy to Democracy",
      titleCN: "从贵族制到君主制再到民主制",
      note: "从历史视角分析西方政治制度演变",
      file: null
    }
  ]
},

];
