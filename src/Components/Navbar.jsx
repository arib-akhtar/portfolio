import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const mobileNavItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "/resume", isRoute: true },
];

// Editable link for Resume / CV
const RESUME_URL = "https://drive.google.com/file/d/1GqOKbEX4BbXv7caRzufTovqih2FbonNQ/view";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isClickingRef = useRef(false);
  const clickTimeoutRef = useRef(null);

  // Lock body scroll and close on Escape key when mobile sidebar drawer is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    let ticking = false;

    const updateScrollSpy = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 30);

      // If a nav click triggered programmatic scrolling, preserve the clicked active item
      if (isClickingRef.current) {
        ticking = false;
        return;
      }

      // 1. If near the bottom of the page, activate Contact
      const isAtBottom =
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        setActive("Contact");
        ticking = false;
        return;
      }

      // Dynamic focal line: comfortable reading eye-level (~38% of viewport, clamped between 220px and 340px)
      const focalY = Math.max(Math.min(window.innerHeight * 0.38, 340), 220);

      // Section ID lookup helper with dual synchronization for certifications/achievements
      const getSectionElement = (id) => {
        let el = document.getElementById(id);
        if (!el) {
          if (id === "certifications") el = document.getElementById("achievements");
          else if (id === "achievements") el = document.getElementById("certifications");
        }
        return el;
      };

      // 2. If above the first section (About / in Hero area)
      const aboutEl = getSectionElement("about");
      if (aboutEl && aboutEl.getBoundingClientRect().top > focalY) {
        setActive("");
        ticking = false;
        return;
      }

      // 3. Reverse iteration: detect currently active section in viewport
      let currentActive = "";
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const sectionId = item.href.replace("#", "");
        const el = getSectionElement(sectionId);

        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focalY) {
            currentActive = item.name;
            break;
          }
        }
      }

      if (currentActive) {
        setActive(currentActive);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollSpy);
        ticking = true;
      }
    };

    // Run on initial mount to sync active state
    updateScrollSpy();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (name) => {
    setActive(name);
    setIsOpen(false);
    isClickingRef.current = true;
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = setTimeout(() => {
      isClickingRef.current = false;
    }, 850);
  };

  // Normal gray text: slides UP on hover
  const textVariants = {
    initial: {
      y: "0%",
    },
    hover: {
      y: "-100%",
    },
  };

  // Purple text: slides in from bottom to top
  const purpleTextVariants = {
    initial: {
      y: "100%",
    },
    hover: {
      y: "0%",
    },
  };

  return (
    <motion.nav
      initial={{
        y: -70,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed top-0 left-0 z-50 w-full bg-black border-b border-white/[0.08] transition-all duration-300 ${
        scrolled ? "py-3 shadow-[0_4px_30px_rgba(0,0,0,0.95)]" : "py-3.5 sm:py-4"
      }`}
      style={{ backgroundColor: "#000000" }}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* ==============================================================
            MAIN NAVBAR CONTAINER: BALANCED 3-SECTION LAYOUT
            - Left: Logo ("Arib.") exactly in its original position
            - Center: Navigation links strictly centered
            - Right: "Resume" button on the right
        ============================================================== */}
        <div className="relative flex items-center justify-between">
          {/* =========================================
              1. BRAND / LOGO (Left Side)
          ========================================== */}
          <motion.a
            href="#home"
            onClick={() => handleNavClick("")}
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
            className="relative flex items-center shrink-0"
            aria-label="Home"
          >
            <img
              src="/image.webp"
              alt="Logo"
              width="1774"
              height="887"
              loading="eager"
              decoding="async"
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </motion.a>

          {/* =========================================
              2. CENTER NAVIGATION LINKS
              - Strictly centered in the navbar
              - Exact text-[15px] sm:text-base typography
              - Smooth purple hover & active underline
          ========================================== */}
          <div className="hidden items-center gap-1.5 md:flex md:gap-3 lg:gap-6 xl:gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                initial="initial"
                whileHover="hover"
                className="relative px-2 py-1.5 text-[15px] sm:text-base font-medium tracking-wide transition-colors"
              >
                {/* Text Viewport Wrapper (h-[26px] gives generous room without clipping) */}
                <span className="relative block h-[26px] overflow-hidden">
                  {/* Normal Text: slides up on hover */}
                  <motion.span
                    variants={textVariants}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`block whitespace-nowrap transition-colors duration-200 ${
                      active === item.name ? "text-white font-semibold" : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </motion.span>

                  {/* Purple Hover Text: slides in from bottom */}
                  <motion.span
                    variants={purpleTextVariants}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-0 top-0 block whitespace-nowrap font-medium text-purple-400"
                  >
                    {item.name}
                  </motion.span>
                </span>

                {/* Dynamic Active Indicator Underline */}
                {active === item.name && (
                  <motion.span
                    layoutId="activeNav"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 30,
                    }}
                    className="absolute -bottom-1 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.85)]"
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* =========================================
              3. RESUME CTA BUTTON (Right Side)
              - Exact text-[15px] sm:text-base typography
              - Right-aligned with proper margin
          ========================================== */}
          <div className="hidden md:block shrink-0">
            <Link to="/resume" className="inline-block">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -1,
                  boxShadow: "0 8px 30px rgba(139, 92, 246, 0.35)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-purple-400/25
                  bg-gradient-to-r
                  from-purple-600
                  to-violet-500
                  px-5
                  py-2.5
                  text-[15px]
                  sm:text-base
                  font-semibold
                  tracking-wide
                  text-white
                  shadow-[0_4px_20px_rgba(139,92,246,0.2)]
                  hover:border-purple-300
                  transition-all
                  duration-300
                  cursor-pointer
                "
              >
                <span>Resume</span>
                <svg
                  className="h-4 w-4 opacity-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.div>
            </Link>
          </div>

          {/* =========================================
              4. MOBILE HAMBURGER BUTTON
          ========================================== */}
          <motion.button
            onClick={() => setIsOpen(true)}
            whileTap={{
              scale: 0.9,
            }}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] md:hidden cursor-pointer"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            <div className="relative h-4 w-5 flex flex-col justify-between">
              <span className="h-[2px] w-5 rounded-full bg-white" />
              <span className="h-[2px] w-5 rounded-full bg-white" />
              <span className="h-[2px] w-5 rounded-full bg-white" />
            </div>
          </motion.button>
        </div>

        {/* =========================================
            5. MOBILE RESPONSIVE SIDEBAR DRAWER (SLIDE RIGHT TO LEFT)
        ========================================== */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Dark Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm md:hidden"
                aria-hidden="true"
              />

              {/* Sidebar Drawer Container (Slide Right to Left) */}
              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 300,
                  mass: 0.85,
                }}
                className="
                  fixed
                  top-0
                  right-0
                  bottom-0
                  z-[70]
                  h-full
                  w-[85vw]
                  max-w-[330px]
                  bg-[#0a0a0f]
                  border-l
                  border-white/[0.12]
                  p-5
                  shadow-[-20px_0_50px_rgba(0,0,0,0.95),0_0_35px_rgba(168,85,247,0.18)]
                  flex
                  flex-col
                  justify-between
                  overflow-y-auto
                  overscroll-contain
                  md:hidden
                "
                style={{ backgroundColor: "#0a0a0f" }}
                aria-label="Mobile navigation drawer"
              >
                {/* Header Profile Section */}
                <div className="relative flex items-center justify-between pb-4 border-b border-white/[0.08] gap-3">
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 flex-1">
                    <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-full border border-purple-600">
                      <img
                        src="/arib-coat.webp"
                        alt="Arib Akhtar"
                        width="128"
                        height="128"
                        loading="eager"
                        className="h-full w-full object-cover object-[center_45%] rounded-full scale-118"
                      />
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                      <span className="text-base sm:text-lg font-bold text-white tracking-tight truncate">
                        Arib Akhtar
                      </span>
                      <span className="mt-0.5 text-xs text-purple-400 font-mono tracking-wide truncate">
                        Full Stack Developer
                      </span>
                    </div>
                  </div>

                  {/* Single Clean Close Button */}
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/[0.06] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 hover:border-purple-400/40 transition-all cursor-pointer shrink-0 self-start mt-0.5"
                    aria-label="Close menu"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links List */}
                <div className="mt-4 flex flex-col gap-1.5 flex-1">
                  {mobileNavItems.map((item) => {
                    const isHome = item.name === "Home";
                    const isResume = item.name === "Resume";
                    const isActive = isResume
                      ? (active === "Resume" || location.pathname === "/resume")
                      : isHome
                      ? (location.pathname === "/" && (active === "" || active === "Home"))
                      : (active === item.name && location.pathname === "/");

                    if (item.isRoute) {
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => {
                            setActive("Resume");
                            setIsOpen(false);
                          }}
                          className={`group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
                            isActive
                              ? "bg-purple-600/15 border border-purple-500/35 text-white font-semibold shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                              : "text-zinc-300 hover:bg-white/[0.05] hover:text-white border border-transparent"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`h-1.5 w-1.5 rounded-full transition-all ${
                                isActive
                                  ? "bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]"
                                  : "bg-transparent group-hover:bg-zinc-600"
                              }`}
                            />
                            <span>{item.name}</span>
                          </div>
                          <span className="inline-flex items-center gap-1 rounded-md bg-purple-500/20 px-2 py-0.5 font-mono text-[11px] font-medium text-purple-300 border border-purple-500/30">
                            <span>CV</span>
                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </span>
                        </Link>
                      );
                    }

                    const targetHref = location.pathname === "/" ? item.href : `/${item.href}`;

                    return (
                      <motion.a
                        key={item.name}
                        href={targetHref}
                        onClick={(e) => {
                          if (isHome && location.pathname === "/") {
                            e.preventDefault();
                            const homeEl = document.getElementById("home");
                            if (homeEl) {
                              homeEl.scrollIntoView({ behavior: "smooth" });
                            } else {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                          }
                          handleNavClick(item.name);
                        }}
                        whileTap={{ scale: 0.98 }}
                        className={`group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-purple-600/15 border border-purple-500/35 text-white font-semibold shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                            : "text-zinc-300 hover:bg-white/[0.05] hover:text-white border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`h-1.5 w-1.5 rounded-full transition-all ${
                              isActive
                                ? "bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]"
                                : "bg-transparent group-hover:bg-zinc-600"
                            }`}
                          />
                          <span>{item.name}</span>
                        </div>
                        <svg
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isActive
                              ? "text-purple-400"
                              : "text-zinc-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Bottom Social Icons */}
                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-center gap-6.5 sm:gap-4 px-1">
                  {/* 1. Instagram */}
                  <a
                    href={personalInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-[#8a2be2] bg-black text-[#8a2be2] hover:scale-110 hover:border-[#9d4edd] hover:text-[#9d4edd] hover:bg-purple-950/25 active:scale-95 transition-all duration-300 shrink-0"
                  >
                    <svg className="h-[21px] w-[21px] transition-transform duration-300 group-hover:scale-105" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* 2. LinkedIn */}
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-[#8a2be2] bg-black text-[#8a2be2] hover:scale-110 hover:border-[#9d4edd] hover:text-[#9d4edd] hover:bg-purple-950/25 active:scale-95 transition-all duration-300 shrink-0"
                  >
                    <svg className="h-[21px] w-[21px] transition-transform duration-300 group-hover:scale-105" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34m1.4 9.74V9.93H5.06v8.57h2.8z" />
                    </svg>
                  </a>

                  {/* 3. GitHub */}
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-[#8a2be2] bg-black text-[#8a2be2] hover:scale-110 hover:border-[#9d4edd] hover:text-[#9d4edd] hover:bg-purple-950/25 active:scale-95 transition-all duration-300 shrink-0"
                  >
                    <svg className="h-[21px] w-[21px] transition-transform duration-300 group-hover:scale-105" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>

                  {/* 4. Email */}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    aria-label="Send Email"
                    className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-[#8a2be2] bg-black text-[#8a2be2] hover:scale-110 hover:border-[#9d4edd] hover:text-[#9d4edd] hover:bg-purple-950/25 active:scale-95 transition-all duration-300 shrink-0"
                  >
                    <svg className="h-[21px] w-[21px] transition-transform duration-300 group-hover:scale-105" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </a>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;