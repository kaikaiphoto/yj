/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Music, Star, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#3D0202] border-t border-white/5 py-12 md:py-16 relative overflow-hidden">
      {/* Absolute background element */}
      <div className="absolute right-[-5%] bottom-[-5%] font-serif text-[18vw] text-white/[0.02] font-bold leading-none pointer-events-none select-none">
        琴
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Brand with red seal */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-red-800 border border-white/10 text-stone-50 flex items-center justify-center font-serif font-black text-xl shadow-lg rounded-none transform -rotate-3">
            苑
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-lg font-light text-white tracking-widest">
              苑 杰
            </span>
            <span className="font-serif text-[10px] text-white/40 tracking-wider">
              国家二级演奏员 · 前上海民族乐团乐队首席
            </span>
          </div>
        </div>

        {/* Center: Traditional wisdom quote */}
        <div className="hidden lg:block text-center">
          <p className="font-serif text-xs text-white/30 tracking-widest italic">
            “大音希声，扫尽俗氛，使人心平意静，德音雅乐，万古流长。”
          </p>
        </div>

        {/* Right Side: Back to top and copyrights */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-none border border-white/10 hover:border-white text-white/40 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md group cursor-pointer"
            title="返回顶部"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
          
          <div className="text-center md:text-right">
            <p className="font-serif text-[10px] tracking-widest text-white/30">
              © 2026 苑杰个人演奏艺术官方网站. ALL RIGHTS RESERVED.
            </p>
            <p className="font-serif text-[9px] tracking-widest text-white/20 mt-1">
              由 国家二级演奏员 · 苑杰先生 授权版权保护与展示
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
