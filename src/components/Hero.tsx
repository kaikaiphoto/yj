/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowDown, Music, Sparkles } from "lucide-react";
import { BIOGRAPHY_TEXT } from "../data";

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:py-32 overflow-hidden bg-[#4A0505]"
    >
      {/* Decorative Minimal Highlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F7EFE0]/[0.02] rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-[#F7EFE0]/[0.01] rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle Calligraphic Elements Floating in Background */}
      <div className="absolute right-10 top-32 select-none pointer-events-none font-serif text-[12vw] text-[#F7EFE0]/[0.02] font-bold leading-none writing-vertical">
        弦歌雅韵
      </div>
      <div className="absolute left-10 bottom-24 select-none pointer-events-none font-serif text-[8vw] text-[#F7EFE0]/[0.01] font-bold leading-none writing-vertical">
        德艺双馨
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left text column: 5 cols in large screens */}
        <motion.div
          className="lg:col-span-5 flex flex-col items-start text-left order-2 lg:order-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F7EFE0]/5 border border-[#F7EFE0]/10 text-[#F7EFE0]/60 text-[10px] uppercase tracking-[0.3em] mb-6">
            <Sparkles className="w-3 h-3 text-[#F7EFE0]/40" />
            <span>上海民族乐团 · 二胡演奏家</span>
          </div>

          {/* Majestic Chinese Name */}
          <h1 className="font-serif text-5xl md:text-7xl font-light text-[#F7EFE0] tracking-widest leading-none mb-6 relative">
            {BIOGRAPHY_TEXT.name}
            {/* Red Seal decorative graphic */}
            <span className="absolute -right-16 md:-right-20 top-2 font-serif text-xs bg-red-800 border border-white/10 text-stone-100 px-1.5 py-1 tracking-widest font-semibold shadow-md transform rotate-6">
              二级演奏员
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="font-serif text-lg md:text-xl text-[#F7EFE0]/60 tracking-[0.4em] mb-6 uppercase">
            前上海民族乐团乐队首席
          </h2>

          <div className="w-20 h-[1px] bg-[#F7EFE0]/20 mb-8" />

          {/* Evocative Description */}
          <p className="font-serif text-[#F7EFE0]/60 text-sm md:text-base leading-relaxed tracking-wider mb-10 max-w-lg text-justify border-l border-[#F7EFE0]/10 pl-6">
            “弦音清雅，指底波澜。” 苑杰先生深得二胡巨匠项祖英教授真传，并师从指挥大师夏飞云教授。他的演奏将丝竹风雅的温婉精妙与大乐团管弦的宏大格局完美相融，弓弦开合间，写尽中华风骨。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <button
              onClick={onExploreClick}
              className="px-8 py-4 bg-[#F7EFE0] text-[#4A0505] text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#F7EFE0]/90 active:scale-95 flex items-center gap-2 group cursor-pointer"
            >
              <span>探寻音乐传奇</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-300" />
            </button>
            <a
              href="#repertoire"
              className="px-8 py-4 bg-transparent border border-[#F7EFE0]/10 text-[#F7EFE0]/50 hover:text-[#F7EFE0] hover:border-[#F7EFE0]/30 text-[11px] uppercase tracking-[0.2em] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
            >
              <Music className="w-3.5 h-3.5 text-[#F7EFE0]/40" />
              <span>聆听经典曲目</span>
            </a>
          </div>
        </motion.div>

        {/* Right column: Artist Portrait (7 cols in large screens) */}
        <motion.div
          className="lg:col-span-7 flex justify-center lg:justify-end order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-md md:max-w-lg aspect-[4/5] rounded-none group">
            {/* Elegant Background Glow & Frame Layers */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#F7EFE0]/[0.02] to-transparent rounded-none blur-2xl transition-all duration-700"></div>
            
            {/* Gilded Double Borders - Outer */}
            <div className="absolute -inset-1.5 border border-[#F7EFE0]/10 rounded-none pointer-events-none group-hover:border-[#F7EFE0]/20 transition-all duration-500"></div>
            
            {/* Corner Gilded Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#F7EFE0]/20 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#F7EFE0]/20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#F7EFE0]/20 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#F7EFE0]/20 pointer-events-none"></div>

            {/* Inner frame containing image */}
            <div className="relative w-full h-full overflow-hidden bg-[#3D0202] border border-[#F7EFE0]/10 p-2.5">
              <img
                src={BIOGRAPHY_TEXT.avatarUrl}
                alt="苑杰先生肖像"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-1000 ease-out"
              />
              
              {/* Aesthetic Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Caption Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="font-serif text-[9px] tracking-[0.2em] text-white/40 uppercase font-medium">
                    National Class II Performer
                  </span>
                  <span className="font-serif text-lg text-white tracking-widest font-light mt-1">
                    国家二级演奏员 · 苑杰
                  </span>
                </div>
                <div className="w-10 h-10 border border-white/10 bg-[#4A0505]/80 backdrop-blur-sm flex items-center justify-center rounded-none shadow-inner">
                  <Music className="w-4 h-4 text-white/40" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20">
        <span className="font-serif text-[9px] tracking-[0.3em] text-[#F7EFE0]/30 uppercase font-medium">
          SCROLL FOR DEPTH
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#F7EFE0]/30" />
        </motion.div>
      </div>
    </section>
  );
}
