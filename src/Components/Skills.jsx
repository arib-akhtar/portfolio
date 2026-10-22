import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "../data/portfolioData";
import { fadeInUp, TRANSITION_EASE } from "../utils/motionVariants";

// Minimalist developer tech-stack SVG icon library
const skillIcons = {
  "React.js": (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  "JavaScript": (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M16 8v8a2 2 0 0 1-2 2h-1" strokeLinecap="round" />
      <path d="M9 15c.5.6 1.2 1 2 1 1 0 1.5-.5 1.5-1s-.5-.8-1.5-1.2C9.5 13.3 8 12.8 8 11s1-2 2.5-2c1.2 0 2 .5 2.5 1.2" strokeLinecap="round" />
    </svg>
  ),
  "HTML5": (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  ),
  "CSS3": (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      <circle cx="8" cy="6" r="1.5" fill="currentColor" />
      <circle cx="16" cy="12" r="1.5" fill="currentColor" />
      <circle cx="10" cy="18" r="1.5" fill="currentColor" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C9.136 13.382 7.775 12 6.001 12z" />
    </svg>
  ),
  "Node.js": (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l8.5-5M12 12v10M12 12L3.5 7" />
    </svg>
  ),
  "Express.js": (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  "REST APIs": (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="2" y="6" width="6" height="12" rx="2" />
      <rect x="16" y="6" width="6" height="12" rx="2" />
      <path strokeLinecap="round" d="M8 12h8M12 9v6" />
    </svg>
  ),
  "JWT Auth": (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  "CRUD Operations": (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  "MongoDB": (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  ),
  "Mongoose ODM": (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path strokeLinecap="round" d="M8.5 8.5l7 7M6 9v9h9" />
    </svg>
  ),
  "Data Validation": (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  "Git": (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="10" r="2.5" />
      <path strokeLinecap="round" d="M6 8.5v7M8 6h5a3 3 0 013 3v0M15.5 10H18" />
    </svg>
  ),
  "GitHub": (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  "Vercel": (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L24 22H0L12 2Z" />
    </svg>
  ),
  "Netlify": (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" y1="2" x2="12" y2="22" />
    </svg>
  ),
  "Vite": (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.64 2.89L10.36 21.11 4.36 9.89l15.28-7z" fillOpacity="0.3" />
      <path d="M10.36 21.11L19.64 2.89l-7.28 1.22-2 17z" />
    </svg>
  ),
};

const renderSkillIcon = (name) => {
  return (
    skillIcons[name] || (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" d="M12 2v3m0 14v3M2 12h3m14 0h3" />
      </svg>
    )
  );
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section
      id="skills"
      className="relative z-10 scroll-mt-[72px] w-full overflow-hidden pt-6 sm:pt-8 md:pt-10 pb-20 md:pb-28 bg-black"
      style={{ backgroundColor: "#000000", scrollMarginTop: "72px" }}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* ==============================================================
            1 & 2. CENTERED SKILLS HEADING & SUBTITLE (UNTOUCHED)
            - Centered 3D glossy purple title image (/skills.png)
            - Centered subtitle: "TECHNICAL & CORE CAPABILITIES"
            - White side dashes/lines and white ampersand (&)
            - Clean, true solid black background (no background glow)
        ============================================================== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative z-20 flex flex-col items-center justify-center text-center w-full mx-auto"
        >
          {/* Centered 3D Title Image */}
          <div className="flex items-center justify-center select-none leading-none mx-auto">
            <img
              src="/skills.webp"
              alt="Skills"
              width="2170"
              height="725"
              loading="lazy"
              decoding="async"
              className="h-11 sm:h-14 md:h-18 lg:h-22 w-auto object-contain select-none shrink-0"
            />
          </div>

          {/* Centered Subtitle immediately below heading */}
          <div className="mt-3 sm:mt-4 flex items-center justify-center gap-3 font-mono text-xs tracking-[0.25em] text-purple-400 text-center mx-auto">
            <span className="h-px w-6 sm:w-8 bg-white" />
            <span className="uppercase">
              Technical <span className="text-white font-medium">&</span> Core Capabilities
            </span>
            <span className="h-px w-6 sm:w-8 bg-white" />
          </div>
        </motion.div>

        {/* ==============================================================
            CATEGORY FILTER TABS
            - Mobile: Clean 2x2 grid (side-by-side pairs)
            - Desktop: Pristine flex-wrap layout
        ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: TRANSITION_EASE }}
          className="mt-10 sm:mt-12 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2 border-b border-white/[0.08] pb-4"
        >
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(idx)}
              className={`relative rounded-xl px-2.5 py-2.5 sm:px-4 sm:py-2.5 text-[11px] sm:text-sm font-medium transition-all duration-300 flex items-center justify-center text-center leading-tight sm:leading-normal min-h-[46px] sm:min-h-0 ${
                selectedCategory === idx
                  ? "bg-white/[0.08] text-white shadow-[0_0_20px_rgba(168,85,247,0.2)] border border-purple-500/30 sm:border-transparent"
                  : "text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-200 border border-white/[0.06] sm:border-transparent"
              }`}
            >
              <span>{cat.name}</span>
              {selectedCategory === idx && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute bottom-0 sm:-bottom-[17px] left-0 right-0 h-0.5 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* ==============================================================
            SELECTED DISCIPLINE HIGHLIGHT BANNER & ENHANCED CARDS
            - High-end editorial dark glassmorphism
            - Minimalist tech icon containers
            - Tech-stack indicator tags (MERN Core, Runtime, Framework, etc.)
            - Subtle purple border glow and smooth elevation hover effect
        ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: TRANSITION_EASE }}
          className="mt-8 rounded-3xl border border-white/[0.1] bg-black p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        >
          {/* Domain Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {skillCategories[selectedCategory].name}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 max-w-2xl leading-relaxed">
                {skillCategories[selectedCategory].description}
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-950/40 px-3.5 py-1.5 font-mono text-xs text-purple-300 w-fit shrink-0">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
              <span>DOMAIN 0{selectedCategory + 1} / 04</span>
            </div>
          </div>

          {/* Enhanced Skill Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: TRANSITION_EASE }}
              className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {skillCategories[selectedCategory].skills.map((skill, sIdx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    ease: TRANSITION_EASE,
                    delay: sIdx * 0.04,
                  }}
                  className="group relative flex items-center justify-between rounded-2xl border border-white/[0.08] bg-black p-3.5 sm:p-4 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:bg-black hover:shadow-[0_10px_25px_-8px_rgba(168,85,247,0.3),0_0_15px_rgba(168,85,247,0.12)] hover:-translate-y-0.5"
                >
                  {/* Subtle top edge sheen */}
                  <div className="pointer-events-none absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-purple-400/30 transition-colors" />

                  {/* Left: Minimalist Icon Container + Skill Title */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-purple-300 shadow-inner group-hover:border-purple-400/40 group-hover:bg-purple-950/40 group-hover:text-purple-200 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.35)] transition-all duration-300">
                      {renderSkillIcon(skill.name)}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors block leading-tight">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] text-purple-400/90 mt-0.5">
                          <span className="h-1 w-1 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
                          Primary Stack
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right: Sleek Tech Indicator Badge */}
                  <span className="rounded-lg border border-purple-400/20 bg-purple-950/30 px-2.5 py-1 font-mono text-[11px] font-medium text-purple-300/90 group-hover:border-purple-400/40 group-hover:bg-purple-900/40 group-hover:text-purple-200 transition-colors shrink-0">
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ==============================================================
            4 CATEGORIES OVERVIEW GRID
            - High-end dark glass cards
            - Domain quick switcher
            - Smooth elevation hover effect
        ============================================================== */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, cIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: cIdx * 0.08,
                ease: TRANSITION_EASE,
              }}
              onClick={() => setSelectedCategory(cIdx)}
              className={`group relative rounded-2xl border p-5 backdrop-blur-xl transition-all duration-300 cursor-pointer ${
                selectedCategory === cIdx
                  ? "border-purple-500/40 bg-[#100f20]/90 shadow-[0_12px_32px_rgba(168,85,247,0.18)]"
                  : "border-white/[0.06] bg-[#090812]/50 hover:border-white/20 hover:bg-[#0d0c18]/70 hover:-translate-y-0.5"
              }`}
            >
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">0{cIdx + 1}</span>
                <span className={`rounded-full px-2 py-0.5 text-[10px] ${
                  selectedCategory === cIdx
                    ? "border border-purple-400/30 bg-purple-950/40 text-purple-300 font-semibold"
                    : "text-zinc-500 group-hover:text-purple-400"
                }`}>
                  {selectedCategory === cIdx ? "Active Domain" : "View"}
                </span>
              </div>
              <h4 className="mt-3 text-sm font-bold text-zinc-100 group-hover:text-white transition-colors">
                {category.name}
              </h4>
              <ul className="mt-4 space-y-2 text-xs text-zinc-400">
                {category.skills.map((s) => (
                  <li key={s.name} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400/70 shadow-[0_0_4px_rgba(168,85,247,0.6)]" />
                    <span className="group-hover:text-zinc-200 transition-colors">{s.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
