import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { TRANSITION_EASE } from "../utils/motionVariants";

const TITLES = [
  {
    image: "/f.font.webp",
    alt: "F",
    text: "ull-Stack Developer",
    spacingClass: "mr-[1px]",
    marginRight: "1px",
  },
  {
    image: "/m.font.webp",
    alt: "M",
    text: "ERN Stack Developer",
    spacingClass: "-mr-[3.5px]",
    marginRight: "-3.5px",
  },
  {
    image: "/b.font.webp",
    alt: "B",
    text: "ackend Engineer",
    spacingClass: "-mr-[0.5px] mt-0.5",
    marginRight: "-0.5px",
    marginTop: "2px",
  },
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [portraitLoaded, setPortraitLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const portraitRef = useRef(null);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setIsMounted(true);
      if (portraitRef.current?.complete) {
        setPortraitLoaded(true);
      }
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex].text;
    let timeoutId;

    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 45);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 1400);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        }, 25);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % TITLES.length);
        }, 250);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, titleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: TRANSITION_EASE,
      },
    },
  };

  const { scrollY } = useScroll();
  const fixedOpacity = useTransform(scrollY, [0, 850, 1150], [1, 1, 0]);

  return (
    <section
      id="home"
      className="relative flex min-h-[84svh] w-full items-start lg:items-center justify-center overflow-x-hidden lg:overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-24 lg:pb-12 scroll-mt-[72px]"
      style={{ scrollMarginTop: "72px" }}
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        
        {/* ==============================================================
            1. MOBILE & TABLET HERO VIEW (Applied for screens < lg / < 1024px)
            Covers Phones & Tablets (iPad Mini, Air, Pro, etc.) with identical stacked layout
        ============================================================== */}
        <div className="block lg:hidden w-full">
          {/* Top Text Block with higher z-index so text & typing animation stay above photo */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left w-full relative z-30"
          >
            {/* 1. Welcome Badge / Text */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/25 bg-white/[0.04] px-3 py-1 text-xs font-medium tracking-wide text-zinc-300 backdrop-blur-xl shadow-[0_0_10px_rgba(168,85,247,0.12)]"
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple-500" />
              </span>
              <span className="font-mono text-[10px] min-[370px]:text-[11px] uppercase tracking-wider text-purple-300">
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* 2. Greeting & Name Text Block */}
            <motion.h1
              variants={itemVariants}
              className="mt-3 min-[370px]:mt-3.5 flex flex-col items-start justify-start leading-none"
            >
              <div className="flex items-center justify-start gap-2 leading-none">
                <span className="text-xl min-[370px]:text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-none shrink-0">
                  Hi, I'm
                </span>
                <img
                  src="/Arib.webp"
                  alt="Arib"
                  width="1023"
                  height="293"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="inline-block h-7 min-[370px]:h-8 sm:h-9 w-auto object-contain"
                />
              </div>

              <img
                src="/Akhtar.webp"
                alt="Akhtar"
                width="1955"
                height="373"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="block h-7 min-[370px]:h-8 sm:h-9 w-auto object-contain mt-1.5 sm:mt-2"
              />
            </motion.h1>

            {/* Role Subheading */}
            <motion.h2
              variants={itemVariants}
              className="mt-2.5 min-[370px]:mt-3 text-sm min-[370px]:text-base sm:text-lg font-bold tracking-tight text-white inline-flex items-center justify-start min-h-[1.5rem]"
            >
              <img
                src={TITLES[titleIndex].image}
                alt={TITLES[titleIndex].alt}
                width="48"
                height="48"
                loading="eager"
                decoding="async"
                className={`inline-block align-middle h-4 min-[370px]:h-4.5 sm:h-5 w-auto object-contain select-none shrink-0 ${TITLES[titleIndex].spacingClass}`}
                style={{
                  marginRight: TITLES[titleIndex].marginRight,
                  marginTop: TITLES[titleIndex].marginTop || undefined,
                }}
              />
              <span className="text-white">{displayText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="inline-block ml-1 w-[2px] h-[1em] align-middle bg-[#7F00FF] rounded-full shadow-[0_0_8px_rgba(127,0,255,0.8)] shrink-0"
                style={{ backgroundColor: "#7F00FF" }}
                aria-hidden="true"
              />
            </motion.h2>
          </motion.div>

          {/* 3. Centered Portrait Photo (Bigger, perfectly scaled, overlapping upwards with z-10) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: TRANSITION_EASE,
              delay: 0.1,
            }}
            className="w-[88%] min-[360px]:w-[92%] max-w-[380px] mx-auto self-center flex items-center justify-center relative z-10 -mt-10 sm:-mt-12"
          >
            <div className="relative w-full aspect-[1086/1448] flex items-center justify-center">
              <img
                ref={portraitRef}
                src="/arib-coat.webp"
                alt="Arib Akhtar - Full-Stack Developer"
                width="1086"
                height="1448"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                onLoad={() => setPortraitLoaded(true)}
                className={`w-full h-auto object-contain select-none pointer-events-none transition-opacity duration-500 ${
                  portraitLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black via-black/85 to-transparent" />
            </div>
          </motion.div>

          {/* 4. Action Buttons & Social Links */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-3 relative z-30 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5 w-full max-w-xs sm:max-w-none mx-auto self-center"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full border border-purple-400/30 bg-gradient-to-r from-purple-600 to-violet-500 px-5 py-2.5 text-xs min-[370px]:text-sm font-semibold tracking-wide text-white shadow-[0_4px_20px_rgba(139,92,246,0.25)] hover:shadow-[0_6px_30px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all text-center w-full sm:w-auto"
            >
              <span>View My Work</span>
              <svg
                className="h-3.5 w-3.5 min-[370px]:h-4 min-[370px]:w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <Link
              to="/resume"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-2.5 text-xs min-[370px]:text-sm font-medium tracking-wide text-zinc-200 backdrop-blur-xl hover:border-purple-400/40 hover:bg-white/[0.1] hover:text-white transition-all active:scale-[0.98] text-center w-full sm:w-auto"
            >
              <svg className="h-3.5 w-3.5 min-[370px]:h-4 min-[370px]:w-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>View Resume</span>
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-2.5 text-xs min-[370px]:text-sm font-medium tracking-wide text-zinc-200 backdrop-blur-xl hover:border-purple-400/40 hover:bg-white/[0.1] hover:text-white transition-all active:scale-[0.98] text-center w-full sm:w-auto"
            >
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Quick social links row below buttons */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-4 relative z-30 flex items-center justify-center gap-4 text-xs font-mono text-zinc-400 self-center"
          >
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors"
            >
              GitHub
            </a>
            <span className="text-zinc-600">&bull;</span>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-zinc-600">&bull;</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-purple-300 transition-colors"
            >
              Email
            </a>
          </motion.div>
        </div>

        {/* ==============================================================
            2. DESKTOP HERO VIEW (Strictly >= lg / 1024px and above)
            100% IDENTICAL, UNTOUCHED, ORIGINAL STATE
        ============================================================== */}
        <div className="hidden lg:grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          
          {/* Left Column: Personal Introduction & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start lg:col-span-7 relative z-20"
          >
            {/* Status Pill matching reference layout */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium tracking-wide text-zinc-300 backdrop-blur-xl shadow-[0_0_15px_rgba(168,85,247,0.12)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-purple-300">
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Editorial Headline with "Hi, I'm" + Proportional Stacked Wordmark Images */}
            <motion.h1
              variants={itemVariants}
              className="mt-6 flex flex-col items-start"
            >
              {/* Line 1: "Hi, I'm" + Arib Logo */}
              <div className="flex items-center gap-2.5 sm:gap-3.5 md:gap-4 leading-none">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-none shrink-0">
                  Hi, I'm
                </span>
                <img
                  src="/Arib.webp"
                  alt="Arib"
                  width="1023"
                  height="293"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="inline-block h-10 sm:h-12 md:h-16 lg:h-20 w-auto object-contain"
                />
              </div>

              {/* Line 2: Akhtar Logo directly underneath */}
              <img
                src="/Akhtar.webp"
                alt="Akhtar"
                width="1955"
                height="373"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="block h-10 sm:h-12 md:h-16 lg:h-20 w-auto object-contain mt-2 sm:mt-2.5 md:mt-3"
              />
            </motion.h1>

            {/* Role Subheading with Image-Based First Letter & Typing Loop Animation */}
            <motion.h2
              variants={itemVariants}
              className="mt-4 sm:mt-5 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white inline-flex items-center min-h-[1.75rem] sm:min-h-[2rem]"
            >
              <img
                src={TITLES[titleIndex].image}
                alt={TITLES[titleIndex].alt}
                width="48"
                height="48"
                loading="eager"
                decoding="async"
                className={`inline-block align-middle h-5 sm:h-6 md:h-7 w-auto object-contain select-none shrink-0 ${TITLES[titleIndex].spacingClass}`}
                style={{
                  marginRight: TITLES[titleIndex].marginRight,
                  marginTop: TITLES[titleIndex].marginTop || undefined,
                }}
              />
              <span className="text-white">{displayText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="inline-block ml-1.5 w-[2.5px] sm:w-[3px] h-[1em] align-middle bg-[#7F00FF] rounded-full shadow-[0_0_8px_rgba(127,0,255,0.8)]"
                style={{ backgroundColor: "#7F00FF" }}
                aria-hidden="true"
              />
            </motion.h2>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-zinc-400"
            >
              I build modern, scalable, and user-friendly web applications using React, Node.js, Express, MongoDB, and modern frontend technologies.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-gradient-to-r from-purple-600 to-violet-500 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_4px_20px_rgba(139,92,246,0.25)] hover:shadow-[0_6px_30px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View My Work</span>
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <Link
                to="/resume"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-3 text-sm font-medium tracking-wide text-zinc-200 backdrop-blur-xl hover:border-purple-400/40 hover:bg-white/[0.1] hover:text-white transition-all active:scale-[0.98]"
              >
                <svg className="h-4 w-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>View Resume</span>
              </Link>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-3 text-sm font-medium tracking-wide text-zinc-200 backdrop-blur-xl hover:border-purple-400/40 hover:bg-white/[0.1] hover:text-white transition-all active:scale-[0.98]"
              >
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Quick social links row below buttons matching reference */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center gap-4 text-xs font-mono text-zinc-400"
            >
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
              >
                GitHub
              </a>
              <span className="text-zinc-600">&bull;</span>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-zinc-600">&bull;</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-purple-300 transition-colors"
              >
                Email
              </a>
            </motion.div>
          </motion.div>

          {/* Desktop Column: Seamless Borderless Editorial Portrait with Fixed Positioning (>= 1024px) */}
          <div className="hero-portrait-desktop-wrapper hidden lg:flex justify-center lg:col-span-5 lg:justify-end relative">
            <div
              className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[490px] xl:max-w-[530px] aspect-[1086/1448] pointer-events-none invisible"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isMounted ? 1 : 0 }}
              transition={{
                duration: 0.9,
                ease: TRANSITION_EASE,
                delay: 0.2,
              }}
              style={{
                position: "fixed",
                top: "clamp(80px, 11vh, 96px)",
                right: "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))",
                zIndex: 10,
                opacity: isMounted ? fixedOpacity : 0,
                visibility: isMounted ? "visible" : "hidden",
              }}
              className="z-10 w-full max-w-[340px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[490px] xl:max-w-[530px] flex items-center justify-center pointer-events-none"
            >
              <div className="relative w-full aspect-[1086/1448] flex items-center justify-center">
                <img
                  src="/arib-coat.webp"
                  alt="Arib Akhtar - Full-Stack Developer"
                  width="1086"
                  height="1448"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  onLoad={() => setPortraitLoaded(true)}
                  className={`w-full h-auto object-contain select-none pointer-events-none -mt-10 transition-opacity duration-500 ${
                    portraitLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;