// ══════════════════════════════════════════
//  语录库 — 在这里自由添加 / 删除，无需改动 index.html
//  格式：{ text: "语录正文", author: "作者", source: "出处（没有就写 null）" }
// ══════════════════════════════════════════
const quotes = [
  {
    text: "文明的根基并非经济，而是道德与思想\n The roots of civilization are not economic; they are moral and intellectual.",
    author: "罗素·柯克/ Russell Kirk",
    source: "The Conservative Mind"
  },
  {
    text: "保守主义不是一种意识形态，而是一种看待文明社会秩序的方式 \n Conservatism is not an ideology, but a way of looking at the civil social order.",
    author: "罗素·柯克/ Russell Kirk",
    source: "The Politics of Prudence"
  },
  {
    text: "个人可能是愚昧的，但人类世代积累的智慧却是睿智的 \n The individual is foolish, but the species is wise.",
    author: "伯克/Edmund Burke",
    source: "Edmund Burke"
  },
  {
    text: "在目前的危机中,政府并不是我们问题的解决办法,政府本身才是问题所在。\n In this present crisis, government is not the solution to our problem; government is the problem",
    author: "里根总统/Ronald Reagan",
    source: "里根总统就职演说"
  },
    {
    text: "政府的首要职责是保护人民，而不是管理他们的生活 \n Government's first duty is to protect the people, not run their lives.",
    author: "里根总统/Ronald Reagan",
    source: "里根总统演讲"
  },
  {
    text: "个人自由与经济自由不可分割。你不能拥有其中一个而失去另一个。你失去一个，就失去另一个 \n Personal freedom and economic freedom are indivisible. You can't have one without the other. You can't lose one without losing the other.",
    author: "撒切尔夫人/Margaret Thatcher",
    source: "撒切尔夫人 1976"
  },
  {
    text: "政府存在的目的是服务人民的自由，而不是限制它 \n Governments are there to serve the liberties of the people, not to restrict them.",
    author: "撒切尔夫人/Margaret Thatcher",
    source: "撒切尔夫人演讲"
  },
  {
    text: "政府的首要职责是保护人民，而不是管理他们的生活 \n Government's first duty is to protect the people, not run their lives.",
    author: "撒切尔夫人/Margaret Thatcher",
    source: "撒切尔夫人演讲"
  },
    {
    text: "通往地狱之路往往由善意铺成 \n The road to hell is paved with good intentions.",
    author: "冯·哈耶克/Friedrich August von Hayek",
    source: "The Road to Serfdom"
  },
  {
    text: "已经集中起来的权力，不会因为创造它的人的善意而变得无害 \n Concentrated power is not rendered harmless by the good intentions of those who create it.",
    author: "米尔顿·弗里德曼/Milton Friedman",
    source: "资本主义与自由/ Capitalism and Freedom"
  },
    {
    text: "自由市场最重要的一个事实是：只有双方都受益，交换才会发生 \n The most important single central fact about a free market is that no exchange takes place unless both parties benefit.",
    author: "米尔顿·弗里德曼/Milton Friedman",
    source: "资本主义与自由/ Capitalism and Freedom"
  },
   {
    text: "没有人会像花自己的钱那样谨慎地花别人的钱 \n Nobody spends somebody else's money as carefully as he spends his own.",
    author: "米尔顿·弗里德曼/Milton Friedman",
    source: "资本主义与自由/ Capitalism and Freedom"
  },
     {
    text: "一个把平等置于自由之前的社会，最终既得不到平等，也得不到自由；一个把自由置于平等之前的社会，却能同时获得高度的自由和平等 \n A society that puts equality before freedom will get neither. A society that puts freedom before equality will get a high degree of both.",
    author: "米尔顿·弗里德曼/Milton Friedman",
    source: "资本主义与自由/ Capitalism and Freedom"
  },
     {
    text: "判断政策和计划的最大错误之一，是根据它们的意图而不是结果来评判 \n One of the great mistakes is to judge policies and programs by their intentions rather than their results.",
    author: "米尔顿·弗里德曼/Milton Friedman",
    source: "资本主义与自由/ Capitalism and Freedom"
  },
     {
    text: "政府解决问题的办法，通常和问题本身一样糟糕 \n The government solution to a problem is usually as bad as the problem.",
    author: "米尔顿·弗里德曼/Milton Friedman",
    source: "资本主义与自由/ Capitalism and Freedom"
  },
     {
    text: "如果让联邦政府管理撒哈拉沙漠，五年内就会出现沙子短缺 \n If you put the federal government in charge of the Sahara Desert, in five years there'd be a shortage of sand.",
    author: "米尔顿·弗里德曼/Milton Friedman",
    source: "资本主义与自由/ Capitalism and Freedom"
  },
   {
    text: "对劳动所得征税相当于强迫劳动 \n Taxation of earnings from labor is on a par with forced labor.",
    author: "罗伯特·诺齐克/Robert Nozik",
    source: "无政府、国家与乌托邦/Anarchy, State, and Utopia"
  },
  {
    text: "市场经济不仅是一种经济制度，更是一种人类自由的制度 \n The market economy is not merely an economic arrangement. It is a system of human freedom.",
    author: "瓦兹拉夫·克劳斯/Václav Klaus",
    source: "克劳斯个人演讲"
  },
{
    text: "中央计划摧毁责任感、主动性和创造力 \n Central planning destroys responsibility, initiative and creativity.",
    author: "瓦兹拉夫·克劳斯/Václav Klaus",
    source: "克劳斯个人演讲"
 },
 {
    text: "政府干预通常制造的问题比解决的问题更多 \n Government intervention usually creates more problems than it solves.",
    author: "瓦兹拉夫·克劳斯/Václav Klaus",
    source: "克劳斯个人演讲"
 },
  {
    text: "变革与改革若未经审慎考量，往往成为毁灭而非复兴的工具 \n Change and reform, unless carefully considered, may be the instruments of destruction rather than renewal.",
    author: "罗素·柯克/Russell Kirk",
    source: "The Politics of Prudence"
 },
   {
    text: "审慎是政治家的首要美德 \n Prudence is the first virtue of statesmen.",
    author: "伯克/Edmund Buker",
    source: "The Politics of Prudence"
 },
];
