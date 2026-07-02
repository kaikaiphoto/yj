/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  tag?: string;
}

export interface RepertoireItem {
  title: string;
  englishTitle: string;
  category: "classical" | "modern" | "orchestra";
  description: string;
  duration?: string;
  mood?: string;
}

export interface ArticleQuote {
  text: string;
  author?: string;
  source?: string;
}

export const BIOGRAPHY_TEXT = {
  name: "苑杰",
  title: "二级演奏员 / 著名二胡演奏家",
  avatarUrl: "https://photos.1804078.xyz/42hu/yj.webp",
  summary: "苑杰先生，国家二级演奏员，著名二胡演奏家。1988年以优异成绩考入上海音乐学院民乐系，深造二胡演奏，并涉猎乐团指挥。自1992年毕业加入上海民族乐团以来，长期担任乐团乐队首席。在数十年的艺术生涯中，他将精湛的传统功底与现代管弦乐理念相融合，为推动中国民族音乐走向世界做出了杰出贡献。",
  intro: "苑杰，二级演奏员。1988年考入上海音乐学院民乐系，师从著名二胡教育家、演奏家项祖英教授，并随著名指挥家夏飞云教授学习指挥副科。1992年毕业进入上海民族乐团工作至今。中国民族管弦乐学会会员、兼任理事。曾担任上海民族乐团乐队首席。",
};

export const ARTISTRY_PHILOSOPHY = {
  quote: "弦歌不辍，雅音永传。二胡两根弦，一弓一拨，便能勾勒出山河万象，倾诉出千古衷肠。",
  details: [
    {
      title: "承古启新",
      content: "师从二胡巨匠项祖英教授，继承了纯正的江南丝竹与传统二胡学派精髓。同时，在夏飞云教授门下修习指挥，使其演奏不仅具备独奏家的细腻情感，更拥有指挥家宏观的乐团视野与声部敏锐度。"
    },
    {
      title: "首席之道",
      content: "作为上海民族乐团长期以来的乐队首席，他致力于将独奏乐器的‘个性’转化为乐团声部的‘共性’。在管弦乐化的民乐合奏中，起到了承上启下、凝聚声部合力的关键作用。"
    },
    {
      title: "弦意人生",
      content: "二胡不仅是乐器，更是中国传统文化的缩影。琴筒的共鸣，琴皮的震动，不仅是对乐谱的再现，更是在浮躁尘世中对宁静、高雅精神境界的追求与守望。"
    }
  ]
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "1988",
    title: "考入上海音乐学院民乐系",
    description: "以拔尖成绩考入我国最高音乐学府之一的上海音乐学院民乐系。师从著名二胡教育家、演奏家项祖英教授。深造期间，秉承学院派严谨扎实的演奏技艺。并师从著名指挥家夏飞云教授学习指挥副科，拓宽了其宏大的音乐视界与多维的指挥学养。",
    tag: "学术起航"
  },
  {
    year: "1992",
    title: "加入上海民族乐团",
    description: "毕业后直接进入中国最早建立的现代大型民族乐团——上海民族乐团。自此，在专业的艺术殿堂中担任核心骨干，在海内外无数重大演出中承担二胡独奏、重奏与领奏，将东方丝弦的韵味带向全球。",
    tag: "职业生涯"
  },
  {
    year: "历任",
    title: "上海民族乐团乐队首席",
    description: "曾长期担任上海民族乐团乐队首席（Concertmaster）。首席不仅是演奏技巧的行业标杆，更是连接指挥与乐团全体演奏员的桥梁。他以出众的乐感和高超的协调能力，带领乐团完成了百余场高水准的乐季演出与外事出访任务。",
    tag: "乐团灵魂"
  },
  {
    year: "荣誉",
    title: "国家二级演奏员 / 学会理事",
    description: "因其卓越的艺术成就被评为国家二级演奏员。同时，作为中国民族管弦乐学会会员、兼任理事，他积极参与民乐教育普及工作，担任多项全国民乐赛事的评委，为国家民族音乐的发展建言献策、培育后昆。",
    tag: "行业领军"
  }
];

export const REPERTOIRE_LIST: RepertoireItem[] = [
  {
    title: "二泉映月",
    englishTitle: "The Moon Over a Fountain",
    category: "classical",
    description: "阿炳（华彦钧）代表作。苑杰先生的演绎哀而不伤，运弓深沉委婉，琴音如泉水般在夜色中静静流淌，直抵人心，展现了极高的音乐控制力与中国文人的精神气骨。",
    mood: "深沉 苍凉 禅意"
  },
  {
    title: "江河水",
    englishTitle: "River Waters",
    category: "classical",
    description: "传统二胡名曲。演奏中运用了压揉、重揉等极富戏剧张力的技巧，描绘了江河奔腾、命运坎坷的悲怆画面。苑杰先生以独特的指法，使琴声如泣如诉，极具震撼力。",
    mood: "悲怆 澎湃 扣人心弦"
  },
  {
    title: "赛马",
    englishTitle: "Horse Racing",
    category: "modern",
    description: "展现内蒙古草原的热烈与欢腾。全曲充满跳跃的节奏与华丽的拨弦技巧，苑杰先生在担任首席期间，多次领奏此曲，以精妙的热烈气场感染全场，展现了无与伦比的技术熟练度。",
    mood: "欢快 奔放 热烈"
  },
  {
    title: "三门峡畅想曲",
    englishTitle: "Sanmenxia Capriccio",
    category: "modern",
    description: "高难度的二胡现代作品。描绘了建设者征服三门峡天险的豪迈景象。乐曲包含了极速音阶、大幅度跳音与高难度的换区。对演奏者的体力、技巧和音乐宏观掌控能力有着极高要求。",
    mood: "豪迈 激昂 绚丽"
  },
  {
    title: "春江花月夜 (二胡与乐团)",
    englishTitle: "Blossoms on a Spring Moonlit Night",
    category: "orchestra",
    description: "作为乐队首席，领衔声部与大乐队的完美交融。将江南丝竹的优雅细腻融入管弦乐宏大的织体，钟鼓齐鸣中，二胡之音凌空飞跃，宛如清风明月拂过江面。",
    mood: "典雅 唯美 诗意"
  }
];

export const MUSICIAN_STATS = [
  { label: "乐团资历", value: "30+", suffix: "载" },
  { label: "合奏与独奏", value: "1000+", suffix: "场" },
  { label: "出访国家/地区", value: "20+", suffix: "个" },
  { label: "学术研究与理事", value: "1", suffix: "席" },
];
