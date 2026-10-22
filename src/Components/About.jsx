import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, TRANSITION_EASE } from "../utils/motionVariants";

// Timeline Data for Experience & Education tabs
const timelineData = {
  experience: [
    {
      id: "exp-1",
      role: "Full Stack Web Developer",
      organization: "Aivon Tech & Independent Projects",
      period: "2026",
      location: "Ranchi, Jharkhand, India (Remote)",
      badge: "Agency & Personal Projects",
      description:
        "Architecting and delivering complete full-stack web applications, dynamic digital platforms, and responsive interfaces with React, Node.js, Express, MongoDB, and Tailwind CSS.",
      highlights: [
        "Built and launched the official agency web platform for Aivon Tech (theaivontech.netlify.app) featuring custom micro-animations and an interactive AI chat inquiry widget.",
        "Engineered an end-to-end MERN Job Portal with distinct candidate and recruiter portals, JWT authentication, and live CRUD listings deployed on Vercel.",
        "Authored modular, component-driven client architectures and structured secure REST APIs with error-handling middleware.",
      ],
    },
    {
      id: "exp-2",
      role: "6-Month Intensive MERN Stack Training",
      organization: "Comprehensive Web Engineering Program",
      period: "2026",
      location: "Formal Certificate of Completion",
      badge: "Technical Immersion",
      description:
        "Completed rigorous 6-month hands-on immersion in modern JavaScript full-stack development, mastering full lifecycle engineering from REST API architecture to production deployment.",
      highlights: [
        "Architected scalable backend REST APIs in Node.js and Express with JWT authentication, custom middleware, and bcrypt encryption.",
        "Modeled normalized MongoDB schemas and aggregation pipelines using Mongoose ORM.",
        "Crafted responsive, accessible user interfaces in React with Tailwind CSS and fluid Framer Motion animations.",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      role: "Bachelor of Computer Applications (BCA)",
      organization: "Doranda College, Ranchi",
      period: "2026 — 2029",
      location: "Ranchi, Jharkhand, India",
      badge: "Currently Pursuing 1st Year",
      description:
        "Formal undergraduate degree program bridging commerce, business applications, and software engineering fundamentals, focusing on practical programming and enterprise solutions.",
      highlights: [
        "Core curriculum covering Computer Applications Fundamentals, Object-Oriented Programming (OOP), and Data Structures & Algorithms (DSA).",
        "In-depth study of Database Management Systems (DBMS), Relational Database modeling, and SQL queries.",
        "Directly translating academic business and technical concepts into robust full-stack software development projects.",
      ],
    },
    {
      id: "edu-2",
      role: "Higher Secondary Education (10+2)",
      organization: "Lawrence Inter College, Ranchi",
      period: "Completed",
      location: "Ranchi, Jharkhand, India",
      badge: "Academic Foundation",
      description:
        "Completed higher secondary education with a strong focus on Commerce and Mathematics, cultivating core analytical reasoning and problem-solving skills.",
      highlights: [
        "Cultivated rigorous analytical reasoning, mathematical modeling, and algorithmic logic.",
        "Developed a strong foundational mindset bridging commerce principles with logical thinking that catalyzed entry into full-stack web engineering.",
      ],
    },
  ],
};

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [portraitLoaded, setPortraitLoaded] = useState(false);
  const portraitRef = useRef(null);

  useEffect(() => {
    if (portraitRef.current?.complete) {
      setPortraitLoaded(true);
    }
  }, []);

  return (
    <section
      id="about"
      className="relative z-10 scroll-mt-[72px] w-full overflow-hidden pt-6 sm:pt-8 md:pt-10 pb-20 md:pb-28 bg-black"
      style={{ backgroundColor: "#000000", scrollMarginTop: "72px" }}
    >
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* ==============================================================
            1. HEADING SECTION ("About Me")
            - /about.png followed immediately by /me.png side-by-side
            - Aligned on same baseline, matching in height and line length
            - Immediately below: "PERSONAL & ENGINEERING IDENTITY"
            - Clean solid black background, NO glow or lighting effects
        ============================================================== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative z-20 flex flex-col items-center justify-center text-center w-full mx-auto"
        >
          {/* Side-by-Side 3D Title Images forming "About Me" */}
          <div className="flex items-end justify-center gap-1 sm:gap-1.5 md:gap-2 select-none leading-none mx-auto">
            <img
              src="/about.webp"
              alt="About"
              width="2170"
              height="725"
              loading="lazy"
              decoding="async"
              className="h-11 sm:h-14 md:h-18 lg:h-22 w-auto object-contain select-none shrink-0"
            />
            <img
              src="/me.webp"
              alt="Me"
              width="1774"
              height="887"
              loading="lazy"
              decoding="async"
              className="h-11 sm:h-14 md:h-18 lg:h-22 w-auto object-contain select-none shrink-0 mb-0.5"
            />
          </div>

          {/* Subtitle text immediately below heading */}
          <div className="mt-3 sm:mt-4 flex items-center justify-center gap-3 font-mono text-xs tracking-[0.25em] text-purple-400 text-center mx-auto">
            <span className="h-px w-6 sm:w-8 bg-white" />
            <span className="uppercase">
              Personal <span className="text-white font-medium">&</span> Engineering Identity
            </span>
            <span className="h-px w-6 sm:w-8 bg-white" />
          </div>
        </motion.div>

        {/* ==============================================================
            MAIN CONTENT LAYOUT
            Left: Clean ID-Card Portrait | Right: Bio & Interactive Tabs
        ============================================================== */}
        <div className="relative z-20 mt-10 md:mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          
          {/* ==============================================================
              2. LEFT SIDE: CLEAN ID-CARD STYLE PORTRAIT (/aribmain.png)
              Clean, sleek card container with subtle border, dark background,
              and professional padding — without artificial clutter.
          ============================================================== */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="w-full lg:col-span-5 xl:col-span-4"
          >
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none rounded-3xl border border-white/[0.1] bg-black p-5 sm:p-6 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-purple-500/30">
              {/* Hairline sheen at top edge */}
              <div className="pointer-events-none absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              {/* ID Portrait Image Frame */}
<div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#08080f]">
  <img
    ref={portraitRef}
    src="/aribmain.webp"
    alt="Arib Akhtar - Portrait"
    width="1012"
    height="1164"
    loading="lazy"
    decoding="async"
    onLoad={() => setPortraitLoaded(true)}
    className={`h-full w-full object-cover object-center transform scale-[1.08] transition-opacity duration-500 ml-2 ${
      portraitLoaded ? "opacity-100" : "opacity-0"
    }`}
  />
</div>

              {/* Profile Details */}
              <div className="mt-5">
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-center">
                  Arib Akhtar
                </h3>
                <p className="font-mono text-xs sm:text-sm text-purple-400 mt-1">
                  Full-Stack Web Developer &bull; BCA Student
                </p>
                <div className="mt-3 flex items-center gap-2 font-mono text-xs text-zinc-400 border-t border-white/[0.06] pt-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                  <span className="truncate">Doranda College • Ranchi, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ==============================================================
              3. RIGHT SIDE: BIO TEXT & INTERACTIVE TABS
          ============================================================== */}
          <div className="flex flex-col lg:col-span-7 xl:col-span-8">
            
            {/* Introductory Professional Bio Text strictly matching specifications */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-4 sm:space-y-5 text-sm sm:text-base leading-relaxed text-zinc-300"
            >
              <p>
                Hey, I'm Arib Akhtar from Jharkhand. I am a first-year Bachelor of Computer Applications (BCA) student at Doranda College, Ranchi, and a MERN Stack Developer. My journey into web engineering started with curiosity about how real-world applications handle data, user authentication, and fluid interactions.
              </p>
              <p>
                Through formal 6-month intensive training and hands-on project development, I have developed complete full-stack web applications — from architecting backend REST APIs in Node.js and Express to designing responsive, component-driven user interfaces in React with Tailwind CSS and Framer Motion.
              </p>
              <p className="text-zinc-400">
                I believe great software isn't about unnecessary complexity or flashy effects; it's about solving real problems with reliable code, thoughtful usability, and maintainable structure.
              </p>
            </motion.div>

            {/* ==============================================================
                4. INTERACTIVE EXPERIENCE & EDUCATION TABS
            ============================================================== */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="mt-8 sm:mt-10 border-t border-white/[0.08] pt-8"
            >
              {/* Tab Selector Buttons */}
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <div className="flex items-center p-1 rounded-2xl border border-white/[0.1] bg-black backdrop-blur-xl">
                  {/* Experience Tab Button */}
                  <button
                    onClick={() => setActiveTab("experience")}
                    className={`relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      activeTab === "experience"
                        ? "text-white"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {activeTab === "experience" && (
                      <motion.div
                        layoutId="aboutActiveTab"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <svg
                      className="relative z-10 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="relative z-10">Experience</span>
                  </button>

                  {/* Education Tab Button */}
                  <button
                    onClick={() => setActiveTab("education")}
                    className={`relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      activeTab === "education"
                        ? "text-white"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {activeTab === "education" && (
                      <motion.div
                        layoutId="aboutActiveTab"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <svg
                      className="relative z-10 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                    <span className="relative z-10">Education</span>
                  </button>
                </div>

                {/* Subtitle indicator */}
                <span className="font-mono text-xs text-zinc-500">
                  {activeTab === "experience"
                    ? "2 Milestones • Development & Agency Projects"
                    : "Undergraduate Education • Doranda College"}
                </span>
              </div>

              {/* Dynamic Tabbed Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: TRANSITION_EASE }}
                  className="space-y-5"
                >
                  {timelineData[activeTab].map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1, ease: TRANSITION_EASE }}
                      className="group relative rounded-2xl border border-white/[0.08] bg-black p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/35 hover:bg-black shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                    >
                      {/* Hairline reflection */}
                      <div className="pointer-events-none absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                            <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                              {item.role}
                            </h4>
                          </div>
                          <p className="font-mono text-xs sm:text-sm text-purple-400 mt-1">
                            {item.organization}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                          <span className="rounded-full border border-purple-400/30 bg-purple-950/40 px-3 py-1 text-purple-300 font-medium">
                            {item.period}
                          </span>
                          <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-zinc-400">
                            {item.badge}
                          </span>
                        </div>
                      </div>

                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-300">
                        {item.description}
                      </p>

                      {/* Bullet Highlights */}
                      <ul className="mt-4 space-y-2 border-t border-white/[0.06] pt-3.5 text-xs sm:text-sm text-zinc-400">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400/80 shadow-[0_0_6px_rgba(168,85,247,0.7)]" />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
