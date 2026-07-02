/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, Award, Send, CheckCircle2, User, BookOpen } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "performance",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        category: "performance",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const categories = [
    { id: "performance", label: "演出与重奏邀请" },
    { id: "academic", label: "学术讲座与评委" },
    { id: "teaching", label: "二胡教学与研讨" },
    { id: "general", label: "艺术交流与致敬" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#4A0505] relative overflow-hidden border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#F7EFE0]/[0.01] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="font-serif text-xs tracking-[0.3em] text-white/40 uppercase mb-3">
            ARTISTIC CORRESPONDENCE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-widest relative pb-4">
            艺术联络与交流
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-white/10"></div>
          </h2>
          <p className="font-serif text-white/40 text-sm mt-4 tracking-widest max-w-lg">
            雅音共赏 · 诚邀各界音乐合作、学术探讨与演出交流
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Traditional Address & Credentials (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-[#3D0202] border border-white/10 p-8 rounded-none relative">
              <h3 className="font-serif text-base font-light text-white tracking-widest mb-6 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-white/40" />
                苑杰 艺术工作室
              </h3>
              
              <p className="font-serif text-white/50 text-sm leading-relaxed tracking-wider text-justify mb-8">
                苑杰先生作为上海民族乐团的骨干二级演奏员、中国民族管弦乐学会理事，长期致力于弘扬华夏琴乐之美。如有海内外音乐会、管弦乐团合作、教材研讨、公益授课或民乐普及赛事邀请，均可通过本站工作室通道取得联系。
              </p>

              {/* Contact parameters list */}
              <div className="flex flex-col gap-5 border-t border-white/5 pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white/40" />
                  </div>
                  <div>
                    <span className="font-serif text-[9px] text-white/30 tracking-[0.2em] block uppercase">
                      艺术驻地 Address
                    </span>
                    <span className="font-serif text-xs md:text-sm text-white/80">
                      上海市长宁区新华路336号 上海民族乐团
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-white/40" />
                  </div>
                  <div>
                    <span className="font-serif text-[9px] text-white/30 tracking-[0.2em] block uppercase">
                      电子信箱 Email
                    </span>
                    <span className="font-serif text-xs md:text-sm text-white/80 hover:text-white transition-colors">
                      yuanjie_erhu@orchestra-sh.org
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4 text-white/40" />
                  </div>
                  <div>
                    <span className="font-serif text-[9px] text-white/30 tracking-[0.2em] block uppercase">
                      社会任职 Positions
                    </span>
                    <span className="font-serif text-xs md:text-sm text-white/60">
                      中国民族管弦乐学会会员、兼任理事
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Red traditional ink stamp decoration */}
            <div className="flex items-center gap-4 px-6 py-4 bg-[#3D0202] border border-white/10 rounded-none">
              <div className="w-12 h-12 bg-red-800 border border-white/10 text-stone-100 flex items-center justify-center font-serif font-black text-lg shadow-md shrink-0 rounded-none">
                雅
              </div>
              <p className="font-serif text-xs text-white/40 leading-relaxed text-left">
                “雅音永续，德艺双馨。” 苑杰先生倡导琴乐之高洁，拒绝一切庸俗商业炒作，专致于严肃高雅民乐艺术的探索。
              </p>
            </div>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#3D0202] border border-white/10 p-8 md:p-10 rounded-none relative">
            <div className="absolute top-0 right-10 w-[1px] h-10 bg-white/10"></div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  id="contact-form"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col items-start gap-2">
                      <label htmlFor="name" className="font-serif text-[10px] text-white/40 tracking-[0.2em] uppercase">
                        您的尊称 / Name
                      </label>
                      <div className="relative w-full">
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#4A0505] border border-white/10 hover:border-white/20 focus:border-white focus:outline-none py-3 pl-10 pr-4 text-xs font-serif text-white tracking-wide rounded-none transition-colors"
                          placeholder="请输入您的姓名"
                        />
                        <User className="w-3.5 h-3.5 text-white/20 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-start gap-2">
                      <label htmlFor="email" className="font-serif text-[10px] text-white/40 tracking-[0.2em] uppercase">
                        电子邮箱 / Email
                      </label>
                      <div className="relative w-full">
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#4A0505] border border-white/10 hover:border-white/20 focus:border-white focus:outline-none py-3 pl-10 pr-4 text-xs font-serif text-white tracking-wide rounded-none transition-colors"
                          placeholder="name@example.com"
                        />
                        <Mail className="w-3.5 h-3.5 text-white/20 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* Collaboration Category Selector */}
                  <div className="flex flex-col items-start gap-2">
                    <span className="font-serif text-[10px] text-white/40 tracking-[0.2em] uppercase">
                      联络主题类别 / Topic
                    </span>
                    <div className="grid grid-cols-2 gap-3 w-full">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, category: cat.id })}
                          className={`p-3 border text-left rounded-none font-serif text-xs tracking-wider transition-all duration-300 ${
                            formData.category === cat.id
                              ? "bg-white/10 border-white text-white"
                              : "bg-[#4A0505] border-white/10 text-white/40 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="subject" className="font-serif text-[10px] text-white/40 tracking-[0.2em] uppercase">
                      事由概要 / Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#4A0505] border border-white/10 hover:border-white/20 focus:border-white focus:outline-none py-3 px-4 text-xs font-serif text-white tracking-wide rounded-none transition-colors"
                      placeholder="例如：关于2026秋季国乐音乐重奏邀请"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="message" className="font-serif text-[10px] text-white/40 tracking-[0.2em] uppercase">
                      详细内容 / Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#4A0505] border border-white/10 hover:border-white/20 focus:border-white focus:outline-none py-3 px-4 text-xs font-serif text-white tracking-wide rounded-none transition-colors resize-none leading-relaxed"
                      placeholder="请详细描述您的合作意向 or 交流寄语..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-white text-[#4A0505] text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white/90 active:scale-95 rounded-none disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    {isLoading ? (
                      <span className="w-5 h-5 rounded-full border-2 border-[#4A0505] border-t-transparent animate-spin"></span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>递交艺术信笺</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  className="flex flex-col items-center justify-center text-center py-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  id="success-message"
                >
                  <div className="w-16 h-16 rounded-none bg-white/5 border border-white/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-white animate-pulse" />
                  </div>
                  
                  <h4 className="font-serif text-2xl font-light text-white tracking-widest mb-4">
                    信笺递交成功
                  </h4>
                  
                  <p className="font-serif text-white/60 text-sm max-w-md leading-relaxed tracking-wider mb-8">
                    苑杰先生艺术工作室已收到您的联络。我们将秉持诚挚之心，尽快审阅您的来信并与您取得联系。共奏雅音，共谱华章。
                  </p>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-transparent border border-white/10 hover:border-white/30 text-white/60 hover:text-white font-serif text-[10px] tracking-[0.2em] uppercase rounded-none transition-all duration-300"
                  >
                    再次发送
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
