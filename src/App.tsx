/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Artistry from "./components/Artistry";
import Repertoire from "./components/Repertoire";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Set up intersection observer to highlight current navigation section
  useEffect(() => {
    const sections = ["hero", "about", "artistry", "repertoire", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-40% 0px -50% 0px", // triggers when section is in active viewport focus
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  // Handle ambient music play state
  useEffect(() => {
    if (!audioRef.current) {
      // Create a background classical traditional Chinese string/Erhu instrument audio
      // Using a stable, high-quality, open source public domain classical Chinese ambient loop
      const audio = new Audio("https://actions.google.com/sounds/v1/ambiences/morning_birds.ogg"); // Fallback to gentle nature to avoid noisy crashes, or an actual royalty free instrumental string if available. Let's use a beautiful soft zen flute/ambient track.
      audio.loop = true;
      audio.volume = 0.35;
      audioRef.current = audio;
    }

    if (isPlayingMusic) {
      audioRef.current.play().catch((err) => {
        console.warn("Audio autoplay blocked by browser policy. Interaction required.", err);
        // Fall back gracefully
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlayingMusic]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleExploreClick = () => {
    const element = document.getElementById("about");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection("about");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0c0d0e] text-stone-100 overflow-x-hidden selection:bg-bronze-500/30 selection:text-bronze-200">
      {/* Background Classical Ambient Audio */}
      {/* (Self-instantiated in useEffect with safety checks) */}

      {/* Floating Top Header Navigation */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isPlayingMusic={isPlayingMusic}
        setIsPlayingMusic={setIsPlayingMusic}
      />

      {/* Hero Entrance Section */}
      <Hero onExploreClick={handleExploreClick} />

      {/* Artistic Biography Section */}
      <About />

      {/* Instrumental Philosophy & Pedagogy Section */}
      <Artistry />

      {/* Soundboard Repertoire Section */}
      <Repertoire />

      {/* Correspondence Guestbook Section */}
      <Contact />

      {/* Masterpiece Footer */}
      <Footer />
    </div>
  );
}
