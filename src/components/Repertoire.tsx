/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, Music, Volume2, Sparkles, AlertCircle, Disc } from "lucide-react";
import { REPERTOIRE_LIST, RepertoireItem } from "../data";

export default function Repertoire() {
  const [activeCategory, setActiveCategory] = useState<"all" | "classical" | "modern" | "orchestra">("all");
  const [currentTrack, setCurrentTrack] = useState<RepertoireItem>(REPERTOIRE_LIST[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [visualizerBars, setVisualizerBars] = useState<number[]>([]);
  const animationRef = useRef<number | null>(null);

  // Generate simulated dynamic soundwave bars
  useEffect(() => {
    if (isPlaying) {
      const updateVisuals = () => {
        const bars = Array.from({ length: 24 }, () => Math.random() * 80 + 10);
        setVisualizerBars(bars);
        animationRef.current = requestAnimationFrame(updateVisuals);
      };
      updateVisuals();
    } else {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      setVisualizerBars(Array.from({ length: 24 }, () => 10));
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying]);

  const filteredRepertoire = REPERTOIRE_LIST.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const handleTrackSelect = (track: RepertoireItem) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="repertoire" className="py-24 md:py-32 bg-[#4A0505] relative text-white/80 overflow-hidden">
      {/* Subtle Dynamic Highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F7EFE0]/[0.01] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="font-serif text-xs tracking-[0.3em] text-white/40 uppercase mb-3">
            CLASSICAL SOUNDBOARD
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-widest relative pb-4">
            经典曲目与原声
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-white/10"></div>
          </h2>
          <p className="font-serif text-white/40 text-sm mt-4 tracking-widest max-w-lg">
            琴弓拉拨，谱写华夏悲壮与奔放之韵律
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12">
          {([
            { id: "all", label: "全部曲目" },
            { id: "classical", label: "古典传统" },
            { id: "modern", label: "近代革新" },
            { id: "orchestra", label: "大交响协奏" },
          ] as const).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2.5 rounded-none font-serif text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-300 border ${
                activeCategory === tab.id
                  ? "bg-white text-[#4A0505] border-white font-medium"
                  : "bg-transparent text-white/50 border-white/10 hover:text-white hover:border-white/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: List of tracks (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h3 className="font-serif text-base font-light text-white tracking-wider mb-2 flex items-center gap-2">
              <span className="w-[2px] h-4 bg-white/40"></span>
              代表曲目辑录
            </h3>

            <div className="flex flex-col gap-3 max-h-[550px] overflow-y-auto pr-2">
              {filteredRepertoire.map((item, index) => {
                const isActive = currentTrack.title === item.title;
                return (
                  <div
                    key={index}
                    onClick={() => handleTrackSelect(item)}
                    className={`p-5 rounded-none border transition-all duration-500 cursor-pointer flex items-center justify-between group ${
                      isActive
                        ? "bg-[#3D0202] border-white/30 shadow-lg"
                        : "bg-transparent border-white/5 hover:border-white/20 hover:bg-[#3D0202]/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Interactive indicator icon */}
                      <div className="relative flex items-center justify-center w-10 h-10 rounded-none bg-white/5 border border-white/10">
                        {isActive && isPlaying ? (
                          <div className="flex gap-0.5 items-end h-4">
                            <span className="w-0.5 h-3 bg-white animate-pulse"></span>
                            <span className="w-0.5 h-4 bg-white animate-pulse delay-75"></span>
                            <span className="w-0.5 h-2 bg-white animate-pulse delay-150"></span>
                          </div>
                        ) : (
                          <Music className={`w-4 h-4 ${isActive ? "text-white" : "text-white/30 group-hover:text-white/60 transition-colors"}`} />
                        )}
                      </div>

                      <div className="flex flex-col text-left">
                        <h4 className={`font-serif text-base font-light transition-colors ${isActive ? "text-white" : "text-white/80 group-hover:text-white"}`}>
                          {item.title}
                        </h4>
                        <span className="font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase mt-0.5">
                          {item.englishTitle}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Mood label */}
                      <span className="hidden sm:inline-block font-serif text-[10px] px-2.5 py-1 rounded-none bg-white/5 text-white/50 tracking-[0.2em] border border-white/10">
                        {item.mood}
                      </span>
                      
                      {/* Play Action */}
                      <button
                        className={`w-8 h-8 rounded-none border flex items-center justify-center transition-all duration-300 ${
                          isActive && isPlaying
                            ? "bg-white border-white text-[#4A0505]"
                            : "bg-transparent border-white/10 text-white/50 group-hover:text-white group-hover:border-white/30"
                        }`}
                      >
                        {isActive && isPlaying ? (
                          <Pause className="w-3.5 h-3.5 fill-current" />
                        ) : (
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visualizer & Player Card (5 cols) */}
          <div className="lg:col-span-5">
            <h3 className="font-serif text-base font-light text-white tracking-wider mb-4 flex items-center gap-2">
              <span className="w-[2px] h-4 bg-white/40"></span>
              国乐艺术聆赏舱
            </h3>

            <div className="bg-[#3D0202] border border-white/10 p-8 rounded-none flex flex-col items-center justify-between text-center relative overflow-hidden h-full min-h-[460px] shadow-2xl">
              {/* Corner indicators */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20"></div>

              {/* Top status */}
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-none border border-white/10 text-[9px] font-serif tracking-[0.2em] text-white/60 mb-6 uppercase">
                <Volume2 className="w-3 h-3 text-white/40 animate-pulse" />
                <span>苑杰原声重现 · 纯享试听</span>
              </div>

              {/* Spinning Disc visual for Chinese screen atmosphere */}
              <div className="relative w-44 h-44 rounded-full bg-black/60 flex items-center justify-center border border-white/10 shadow-2xl mb-6 group">
                {/* Spin border */}
                <div className={`absolute inset-0.5 rounded-full border border-dashed border-white/20 ${isPlaying ? "animate-spin-slow" : ""}`}></div>
                
                {/* Center Core */}
                <div className="w-36 h-36 rounded-full bg-[#3D0202] border border-white/10 flex items-center justify-center relative overflow-hidden">
                  <Disc className={`w-20 h-20 text-white/5 absolute ${isPlaying ? "animate-spin" : ""}`} style={{ animationDuration: "12s" }} />
                  
                  {/* Title overlay */}
                  <div className="z-10 flex flex-col items-center p-4">
                    <span className="font-serif text-sm font-light text-white tracking-widest">
                      {currentTrack.title}
                    </span>
                    <span className="font-serif text-[9px] tracking-wider text-white/30 mt-1 max-w-[110px] truncate">
                      {currentTrack.englishTitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Sound Wave dynamic visualizer lines */}
              <div className="w-full flex items-end justify-center gap-[3px] h-14 px-4 bg-black/40 rounded-none border border-white/5 py-2 mb-6">
                {visualizerBars.map((val, i) => (
                  <div
                    key={i}
                    className="w-[3px] bg-white/80 transition-all duration-150"
                    style={{ height: `${val}%` }}
                  />
                ))}
              </div>

              {/* Track Details */}
              <div className="text-left w-full border-t border-white/10 pt-4 mt-auto">
                <p className="font-serif text-[13px] text-white/50 leading-relaxed text-justify tracking-wide mb-4">
                  {currentTrack.description}
                </p>

                {/* Player Controls */}
                <div className="flex items-center justify-between bg-black/30 px-4 py-2.5 rounded-none border border-white/10">
                  <div className="flex flex-col">
                    <span className="font-serif text-[9px] text-white/30 tracking-[0.2em] uppercase">
                      演奏者
                    </span>
                    <span className="font-serif text-xs text-white/80 font-medium">
                      苑杰 · 乐队首席二胡独奏
                    </span>
                  </div>

                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-none bg-white hover:bg-white/90 text-[#4A0505] flex items-center justify-center shadow-lg transition-colors cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Floating Note overlay */}
        <div className="mt-12 bg-white/[0.02] border border-white/10 p-5 rounded-none flex items-start gap-4 max-w-4xl mx-auto">
          <AlertCircle className="w-5 h-5 text-white/30 shrink-0 mt-0.5" />
          <p className="font-serif text-xs text-white/40 leading-relaxed tracking-wider text-justify">
            <strong>说明：</strong> 本试听舱为音乐会实况录音的数字模拟。苑杰先生执教与演出三十年，多次代表上海民族乐团出访欧洲、美洲、亚洲多个国家，为海内外元首、音乐巨匠现场演奏，琴声绕梁，享誉四海。
          </p>
        </div>

      </div>
    </section>
  );
}
