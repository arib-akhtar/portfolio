import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TRANSITION_EASE } from "../utils/motionVariants";

const AestheticBanner = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/project.main.webp";
    if (img.complete) {
      setBgLoaded(true);
    } else {
      img.onload = () => setBgLoaded(true);
    }
  }, []);

  return (
    <div
      className={`relative z-10 -mx-3 sm:-mx-6 md:-mx-8 w-auto max-w-none overflow-hidden py-12 sm:py-16 md:py-20 my-0 bg-black transition-opacity duration-500 ${
        bgLoaded ? "opacity-100" : "opacity-95"
      }`}
      style={{
        backgroundColor: "#000000",
        backgroundImage: "url('/project.main.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Centered Content Block floating cleanly over background */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.55, ease: TRANSITION_EASE }}
        className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center text-center"
      >
        {/* Two Minimalist Stats Boxes Side-by-Side (solid deep black background) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-2xl mx-auto">
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: TRANSITION_EASE }}
            className="rounded-2xl border border-white/20 bg-black p-5 sm:p-6 text-center transition-all duration-300 hover:border-purple-400/60 hover:-translate-y-0.5 shadow-2xl"
          >
            <span className="block font-mono text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-md">
              01+ Year
            </span>
            <span className="block font-mono text-xs sm:text-sm text-purple-200 mt-1.5 leading-snug">
              Continuous Learning & Full-Stack Practice
            </span>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.16, ease: TRANSITION_EASE }}
            className="rounded-2xl border border-white/20 bg-black p-5 sm:p-6 text-center transition-all duration-300 hover:border-purple-400/60 hover:-translate-y-0.5 shadow-2xl"
          >
            <span className="block font-mono text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-md">
              10+ Projects
            </span>
            <span className="block font-mono text-xs sm:text-sm text-purple-200 mt-1.5 leading-snug">
              Full-Stack Apps &amp; Agency Platforms Built
            </span>
          </motion.div>
        </div>

        {/* Typography Statement */}
        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: TRANSITION_EASE }}
          className="mt-8 sm:mt-10 md:mt-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
        >
          Built for Performance.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, delay: 0.25, ease: TRANSITION_EASE }}
          className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-100 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
        >
          Architecting scalable web solutions with clean code, secure APIs, and fluid user interfaces.
        </motion.p>

        {/* Interactive "Explore GitHub" Button */}
        <a
          href="https://github.com/arib-akhtar"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 sm:mt-8 md:mt-10 inline-flex items-center gap-2.5 rounded-full border border-purple-400/50 bg-gradient-to-r from-purple-600 to-violet-600 px-8 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_25px_rgba(0,0,0,0.8),0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_35px_rgba(0,0,0,0.95),0_0_30px_rgba(168,85,247,0.6)] hover:border-purple-300"
        >
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span>Explore GitHub</span>
          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
};

export default AestheticBanner;
