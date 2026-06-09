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
  // ── 庄子 ────────────────────────────────
  {
    id: "zhuangzi",
    lastName: "Z",
    nameCN: "庄子",
    nameEN: "Zhuangzi",
    years: "约 369–286 BC",
    century: "公元前4世纪",
    tradition: "道家 / 中国哲学",
    photo: null,
    bio: `战国时期道家哲学家，与老子并称"老庄"。以寓言、隐喻和诗性语言探讨道的本质、生死的齐一，以及超越世俗是非的逍遥之境。`,
    works: [
      { year: "约 300 BC", titleEN: "Zhuangzi (Inner Chapters)", titleCN: "庄子·内篇", note: "逍遥游、齐物论等七篇，公认为庄子亲作", file: null },
      { year: "约 300 BC", titleEN: "Zhuangzi (Outer Chapters)", titleCN: "庄子·外篇", note: "秋水、至乐等十五篇，或为后学所作", file: null },
    ]
  },

];
