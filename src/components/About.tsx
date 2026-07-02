/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, Calendar, ShieldAlert, Star, TrendingUp, Users } from "lucide-react";
import { BIOGRAPHY_TEXT, TIMELINE_EVENTS, MUSICIAN_STATS } from "../data";

export default function About() {
  // Stagger animation helpers
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-[#4A0505] relative overflow-hidden">
      {/* Background Texture & Shadows */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(247,239,224,0.015)_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      
      {/* Decorative vertical line on left */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-[1px] bg-[#F7EFE0]/5"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="font-serif text-xs tracking-[0.3em] text-[#F7EFE0]/40 uppercase mb-3">
            ARTISTIC JOURNEY
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#F7EFE0] tracking-widest relative pb-4">
            艺术传奇与华章
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-[#F7EFE0]/10"></div>
          </h2>
          <p className="font-serif text-[#F7EFE0]/40 text-xs mt-4 tracking-[0.2em] uppercase">
            弦管三十载 · 传承国乐精髓
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Stats and Classic Statement (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div
              className="bg-[#3D0202] border border-[#F7EFE0]/10 p-8 rounded-none relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              {/* Thin border accents */}
              <div className="absolute top-0 left-0 w-4 h-[1px] bg-[#F7EFE0]/30"></div>
              <div className="absolute top-0 left-0 w-[1px] h-4 bg-[#F7EFE0]/30"></div>
              <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-[#F7EFE0]/30"></div>
              <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-[#F7EFE0]/30"></div>

              <h3 className="font-serif text-xl font-light text-[#F7EFE0] tracking-widest mb-4">
                国乐巨擘 · 薪火相传
              </h3>
              <p className="font-serif text-[#F7EFE0]/60 text-sm md:text-base leading-relaxed tracking-wider text-justify mb-6">
                “苑杰先生生于艺术世家，少时即展现出非凡的国乐悟性。1988年考入上海音乐学院民乐系，深得二胡宗师项祖英教授衣钵，琴技入神。在学有余力之余，随指挥泰斗夏飞云教授修习指挥副科，融汇了宏大的乐队交响意识。自1992年毕业进入上海民族乐团，一腔赤诚守望丝竹之魂，终成一代名家。”
              </p>
              
              <div className="border-t border-[#F7EFE0]/5 pt-4 flex items-center justify-between">
                <span className="font-serif text-[10px] text-[#F7EFE0]/30 tracking-[0.2em] uppercase">
                  SHANGHAI CHINESE ORCHESTRA
                </span>
                <span className="font-serif text-xs text-[#F7EFE0]/80 tracking-wider font-light">
                  长期担任乐队首席
                </span>
              </div>
            </motion.div>

            {/* Performance Statistics Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {MUSICIAN_STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-[#3D0202] border border-[#F7EFE0]/5 p-6 flex flex-col justify-center items-center rounded-none text-center hover:bg-[#5C0C0C]/40 hover:border-[#F7EFE0]/20 transition-all duration-300 group"
                  variants={itemVariants}
                >
                  <span className="font-serif text-[10px] text-[#F7EFE0]/30 tracking-[0.2em] uppercase mb-1 group-hover:text-[#F7EFE0]/50 transition-colors">
                    {stat.label}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-3xl font-extralight text-[#F7EFE0] group-hover:text-[#F7EFE0] transition-colors">
                      {stat.value}
                    </span>
                    <span className="font-serif text-[10px] text-[#F7EFE0]/40 uppercase">
                      {stat.suffix}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Timeline Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 relative pl-4 md:pl-8">
            {/* Timeline center line */}
            <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-[#F7EFE0]/10"></div>

            {TIMELINE_EVENTS.map((event, index) => {
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline point indicator */}
                  <div className="absolute -left-4 md:-left-8 top-6 -translate-x-1/2 w-3.5 h-3.5 rounded-none border border-[#F7EFE0]/20 bg-[#4A0505] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 bg-[#F7EFE0]/40 group-hover:bg-[#F7EFE0]"></div>
                  </div>

                  {/* Card Content */}
                  <div className="bg-[#3D0202]/40 hover:bg-[#3D0202] border border-[#F7EFE0]/5 hover:border-[#F7EFE0]/20 p-6 md:p-8 rounded-none transition-all duration-500 relative overflow-hidden shadow-md">
                    {/* Hover light bar */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-transparent group-hover:bg-[#F7EFE0]/30 transition-all duration-500"></div>
                    
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-serif text-xl md:text-2xl font-light text-[#F7EFE0] tracking-widest">
                          {event.year}
                        </span>
                        <span className="px-2 py-0.5 bg-[#F7EFE0]/5 text-[9px] font-serif tracking-[0.25em] text-[#F7EFE0]/60 uppercase">
                          {event.tag}
                        </span>
                      </div>
                      <Calendar className="w-3.5 h-3.5 text-[#F7EFE0]/20 group-hover:text-[#F7EFE0]/40 transition-colors" />
                    </div>

                    <h4 className="font-serif text-base font-light text-[#F7EFE0] tracking-wider mb-3">
                      {event.title}
                    </h4>
                    
                    <p className="font-serif text-[#F7EFE0]/50 text-sm leading-relaxed tracking-wider text-justify group-hover:text-[#F7EFE0]/70 transition-colors">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
