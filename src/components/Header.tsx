/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, Music, Mail, Award, BookOpen } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isPlayingMusic: boolean;
  setIsPlayingMusic: (playing: boolean) => void;
}

export default function Header({
  activeSection,
  setActiveSection,
  isPlayingMusic,
  setIsPlayingMusic,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "雅音起航", icon: Music },
    { id: "about", label: "艺术传奇", icon: BookOpen },
    { id: "artistry", label: "演奏艺术", icon: Award },
    { id: "repertoire", label: "经典曲目", icon: Music },
    { id: "contact", label: "艺术联络", icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#4A0505]/90 backdrop-blur-md border-b border-[#F7EFE0]/10 py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Seal Logo */}
        <div 
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3 cursor-pointer group"
          id="logo-container"
        >
          {/* Traditional Chinese Red Seal (印章) */}
          <div className="relative w-10 h-10 bg-red-800 border border-white/10 flex items-center justify-center rounded-sm shadow-md group-hover:bg-red-700 transition-colors duration-300">
            <span className="font-serif text-white font-extrabold text-xl tracking-widest leading-none select-none">
              苑
            </span>
            <div className="absolute inset-0.5 border border-white/20 pointer-events-none"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-widest text-[#F7EFE0] group-hover:text-[#F7EFE0]/80 transition-colors duration-300">
              苑 杰
            </span>
            <span className="font-serif text-[10px] tracking-[0.2em] text-[#F7EFE0]/40 font-medium">
              YUAN JIE · ERHU ARTIST
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-serif text-[13px] uppercase tracking-[0.3em] relative py-2 px-1 transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? "text-[#F7EFE0] font-medium"
                    : "text-[#F7EFE0]/50 hover:text-[#F7EFE0]"
                }`}
              >
                <Icon className={`w-3 h-3 ${isActive ? "text-[#F7EFE0]" : "text-[#F7EFE0]/30"}`} />
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#F7EFE0]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4" id="header-actions">
          {/* Simulated Music Player Controller */}
          <button
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
            className={`flex items-center gap-2 px-4 py-2 rounded-none border text-[10px] font-serif uppercase tracking-[0.2em] transition-all duration-500 ${
              isPlayingMusic
                ? "bg-[#F7EFE0]/10 border-[#F7EFE0]/30 text-[#F7EFE0] animate-pulse"
                : "bg-transparent border-[#F7EFE0]/10 text-[#F7EFE0]/50 hover:text-[#F7EFE0] hover:border-[#F7EFE0]/30"
            }`}
            title={isPlayingMusic ? "静音背景乐" : "播放背景乐"}
          >
            <Music className={`w-3 h-3 ${isPlayingMusic ? "animate-spin-slow" : ""}`} />
            <span>{isPlayingMusic ? "乐音: 凝神" : "原音试听"}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          {/* Music player shortcut */}
          <button
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
            className={`p-2 rounded-none border ${
              isPlayingMusic
                ? "bg-[#F7EFE0]/10 border-[#F7EFE0]/30 text-[#F7EFE0]"
                : "bg-transparent border-[#F7EFE0]/10 text-[#F7EFE0]/50"
            }`}
          >
            <Music className={`w-3.5 h-3.5 ${isPlayingMusic ? "animate-bounce" : ""}`} />
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#F7EFE0]/60 hover:text-[#F7EFE0] p-1.5"
            id="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#4A0505]/95 backdrop-blur-lg border-b border-[#F7EFE0]/10 absolute top-full left-0 right-0 py-6 px-8 flex flex-col gap-5 shadow-2xl animate-fade-in">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-serif text-sm tracking-[0.3em] text-left py-2 flex items-center gap-3 border-b border-[#F7EFE0]/5 pb-3 last:border-0 ${
                  isActive ? "text-[#F7EFE0] font-semibold" : "text-[#F7EFE0]/50"
                }`}
              >
                <item.icon className="w-3.5 h-3.5 text-[#F7EFE0]/40" />
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
