/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Award, Compass, Heart, Feather, Sparkles } from "lucide-react";
import { ARTISTRY_PHILOSOPHY } from "../data";

export default function Artistry() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const lineageInfo = [
    {
      role: "二胡宗师正传",
      name: "项祖英 教授",
      tag: "经典传承",
      desc: "著名二胡教育家、演奏家。苑杰先生在项祖英教授门下深造，完整继承了江南丝竹的温雅秀逸，以及学院派科学扎实的指法运弓体系。音色纯美干净、韵味悠长，将传统二胡的骨肉风骨展现得淋漓尽致。",
      icon: Award
    },
    {
      role: "指挥名师指点",
      name: "夏飞云 教授",
      tag: "宏观修养",
      desc: "中国著名指挥家，有“民乐第一棒”之誉。苑杰先生副修指挥，师从夏飞云教授。这使他打破了普通独奏演奏家的单一视角，赋予了他极强的和声感与宏大的多声部协作能力，为他担任上海民族乐团乐队首席奠定了无与伦比的全局格局。",
      icon: Compass
    }
  ];

  const erhuAcousticSecrets = [
    { part: "琴皮 (Python Skin)", detail: "二胡共鸣的灵魂所在。精选野生蟒蛇皮，鳞格整齐、厚薄均匀，在与琴筒共振时发出温润饱满、极富穿透力的人声质感。" },
    { part: "琴筒 (Resonator)", detail: "多采用名贵老红木、紫檀或黑檀木制成，呈六角形或八角形。它不仅是扬声器，更是二胡独特‘鼻音’与儒雅韵味的源头。" },
    { part: "琴弓 (The Bow)", detail: "采用天然优质马尾与优质湘妃竹/苦竹制成。马尾与两根钢弦的摩擦，通过演奏者右手的力道，展现出强弱冷暖、顿挫委婉的无穷细节。" },
    { part: "千斤 (Qianjin)", detail: "控制琴弦振动长度的关键枢纽。由细线缠绕而成，微调高低便可改变音域阻抗，赋予了二胡极强的细腻揉弦与吟音空间。" }
  ];

  return (
    <section id="artistry" className="py-24 md:py-32 parchment-bg relative text-white/80 overflow-hidden">
      {/* Red stamp decorative overlay */}
      <div className="absolute right-12 bottom-12 w-24 h-24 border border-red-800/40 rounded-full flex items-center justify-center pointer-events-none opacity-20 transform rotate-12">
        <span className="font-serif text-red-700 text-xs tracking-widest text-center leading-tight">
          苑杰印信<br />二胡演奏
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="font-serif text-xs tracking-[0.3em] text-white/40 uppercase mb-3">
            ARTISTRY & LINEAGE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-widest relative pb-4">
            独奏风骨 · 首席格局
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-white/10"></div>
          </h2>
          <p className="font-serif text-white/40 text-sm mt-4 tracking-widest max-w-lg">
            融汇“二胡宗师”项祖英之风骨 与 “民乐第一棒”夏飞云之宏图
          </p>
        </div>

        {/* Artistry Philosophy Large Quote block */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            className="border-l-4 border-white/20 pl-6 md:pl-10 py-2 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Calligraphic double quotation mark background */}
            <div className="absolute -left-4 -top-8 text-7xl font-serif text-white/5 pointer-events-none select-none">
              “
            </div>
            <p className="font-serif text-xl md:text-2xl font-light italic text-white/90 tracking-widest leading-relaxed mb-4 text-justify">
              {ARTISTRY_PHILOSOPHY.quote}
            </p>
            <cite className="font-serif text-xs text-white/40 tracking-widest uppercase block text-right font-medium">
              — 苑杰 先生 · 演奏艺术感悟
            </cite>
          </motion.div>
        </div>

        {/* Split Section: Lineage and Acoustic Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Master Lineage (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <h3 className="font-serif text-xl font-light text-white tracking-wider flex items-center gap-3">
              <span className="w-[2px] h-6 bg-white/40"></span>
              明师薪传 · 德才备至
            </h3>
            
            <div className="flex flex-col gap-6">
              {lineageInfo.map((master, index) => {
                const Icon = master.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-[#3D0202] border border-white/10 p-8 rounded-none relative hover:border-white/20 transition-all duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Corner Decoration */}
                    <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
                      <div className="absolute top-[-10px] right-[-10px] w-20 h-20 bg-white/5 rotate-45"></div>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-none bg-white/5 flex items-center justify-center text-white border border-white/10 shadow-inner">
                        <Icon className="w-5 h-5 text-white/60" />
                      </div>
                      <div>
                        <div className="text-[10px] font-serif tracking-[0.2em] text-white/40 uppercase font-bold">
                          {master.role}
                        </div>
                        <h4 className="font-serif text-base font-light text-white">
                          {master.name}
                        </h4>
                      </div>
                      <span className="ml-auto px-2 py-0.5 rounded-none bg-white/5 text-[9px] font-serif tracking-widest text-white/40 border border-white/10">
                        {master.tag}
                      </span>
                    </div>

                    <p className="font-serif text-white/50 text-sm leading-relaxed tracking-wider text-justify">
                      {master.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Instrumental Mystery (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <h3 className="font-serif text-xl font-light text-white tracking-wider flex items-center gap-3">
              <span className="w-[2px] h-6 bg-white/40"></span>
              两弦玄妙 · 琴器解析
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {erhuAcousticSecrets.map((secret, index) => {
                return (
                  <motion.div
                    key={index}
                    className={`p-6 border rounded-none transition-all duration-500 flex flex-col justify-between ${
                      hoveredIndex === index
                        ? "bg-[#3D0202] text-white border-white/30"
                        : "bg-[#4A0505]/40 text-white/70 border-white/10 hover:border-white/20"
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div>
                      <h4 className={`font-serif text-sm font-medium mb-3 transition-colors ${
                        hoveredIndex === index ? "text-white" : "text-white/80"
                      }`}>
                        {secret.part}
                      </h4>
                      <p className={`font-serif text-xs leading-relaxed tracking-wide text-justify transition-colors ${
                        hoveredIndex === index ? "text-white/80" : "text-white/40"
                      }`}>
                        {secret.detail}
                      </p>
                    </div>

                    <div className="flex justify-end mt-4">
                      <Sparkles className={`w-3.5 h-3.5 ${
                        hoveredIndex === index ? "text-white/60" : "text-white/20"
                      }`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Philosophy Cards bento detail */}
            <motion.div
              className="bg-[#3D0202] p-6 rounded-none text-white/80 border border-white/10 flex items-center gap-5 shadow-lg mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-none bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Feather className="w-5 h-5 text-white/40" />
              </div>
              <p className="font-serif text-white/60 text-xs leading-relaxed tracking-wider">
                <strong>乐章寄语：</strong> “二胡之音，最拟人声。它的玄妙不只在于技巧的堆砌，更在于演奏者指尖与琴皮、琴弓产生的微秒气韵交融。苑杰先生执弓三十载，乐随心动，弦即人生。”
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
