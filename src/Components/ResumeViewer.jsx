import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RESUME_FILE_NAME = "Arib_Akhtar_Resume_Final (1).pdf";
const RESUME_FILE_PATH = `/${encodeURIComponent(RESUME_FILE_NAME)}`;

const ResumeViewer = () => {
  const [zoom, setZoom] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [downloadState, setDownloadState] = useState("idle"); // "idle" | "requesting" | "ready"

  useEffect(() => {
    window.scrollTo(0, 0);
    // Smooth loading indicator clear
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 850);
    return () => clearTimeout(timer);
  }, []);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(Number((prev + 0.15).toFixed(2)), 2.0));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(Number((prev - 0.15).toFixed(2)), 0.6));
  };

  const handleFitWidth = () => {
    setZoom(1);
  };

  const handleDownloadClick = () => {
    setDownloadState("requesting");
    setTimeout(() => {
      setDownloadState("ready");
      setTimeout(() => {
        setDownloadState("idle");
      }, 3500);
    }, 700);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen w-full bg-black text-zinc-100 flex flex-col selection:bg-purple-600/30 selection:text-purple-200"
      style={{ backgroundColor: "#000000" }}
    >
      {/* ==============================================================
          1. STICKY TOP NAVIGATION BAR ("Back to Portfolio")
      ============================================================== */}
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-black/90 backdrop-blur-xl px-4 sm:px-6 md:px-8 py-3.5 transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          
          {/* Top Left: Clean "Back to Portfolio" Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs sm:text-sm font-medium text-zinc-200 hover:border-purple-400/50 hover:bg-white/[0.08] hover:text-white transition-all shadow-sm group cursor-pointer"
            aria-label="Back to Portfolio"
          >
            <svg
              className="h-4 w-4 transition-transform group-hover:-translate-x-1 text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Portfolio</span>
          </Link>

          {/* Top Right: Status / External link */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Document Verified
            </span>
            <a
              href={RESUME_FILE_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-400 hover:border-purple-400/40 hover:text-white transition-all cursor-pointer"
              title="Open raw PDF in full tab"
            >
              <span className="inline-block text-[11px] sm:text-xs">Open in Tab</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>
      </header>

      {/* ==============================================================
          2. MAIN CONTENT AREA
      ============================================================== */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex flex-col gap-6">
        
        {/* ==============================================================
            A. PROMINENT TITLE SECTION (Matching Reference)
        ============================================================== */}
        <div className="w-full flex flex-col items-start border-b border-white/[0.06] pb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/25 px-3 py-1 shadow-[0_0_15px_rgba(168,85,247,0.15)] mb-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px] font-semibold tracking-widest text-purple-200 uppercase">
              PROFESSIONAL DOCUMENT
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Resume Viewer
          </h1>

          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            You can view the resume below. To download a copy, submit a request.
          </p>
        </div>

        {/* ==============================================================
            B. CLEAN SECONDARY TOOLBAR (Right Above PDF Container)
        ============================================================== */}
        <div className="w-full rounded-2xl border border-white/10 bg-[#0c0c14]/95 backdrop-blur-xl px-4 py-3 sm:px-5 sm:py-3.5 flex flex-wrap items-center justify-between gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.85)]">
          
          {/* Left Side: Badge/Text "ARIB AKHTAR — RESUME" */}
          <div className="flex items-center gap-2.5">
            <div className="inline-flex items-center gap-2 rounded-lg border border-purple-500/20 bg-purple-950/20 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-zinc-100 uppercase">
                ARIB AKHTAR &mdash; RESUME
              </span>
            </div>
          </div>

          {/* Center/Right Controls Group */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            
            {/* View Only Toggle / Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300 shadow-sm">
              <svg className="h-3.5 w-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>View Only</span>
            </span>

            {/* Page Indicator with Navigation Chevrons */}
            <div className="hidden sm:flex items-center rounded-xl border border-white/10 bg-white/[0.04] p-0.5 shadow-sm">
              <button
                type="button"
                disabled
                title="Previous Page"
                className="rounded-lg p-1.5 text-zinc-600 cursor-not-allowed opacity-40 transition-colors"
                aria-label="Previous Page"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="px-2.5 font-mono text-xs font-medium text-zinc-200">
                Page 1 / 1
              </span>
              <button
                type="button"
                disabled
                title="Next Page"
                className="rounded-lg p-1.5 text-zinc-600 cursor-not-allowed opacity-40 transition-colors"
                aria-label="Next Page"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Zoom Controls: -, percentage, + */}
            <div className="flex items-center rounded-xl border border-white/10 bg-white/[0.04] p-0.5 shadow-sm">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoom <= 0.6}
                title="Zoom Out"
                className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                aria-label="Zoom Out"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                </svg>
              </button>

              <span className="px-2.5 font-mono text-xs font-semibold text-purple-300 min-w-[50px] text-center">
                {Math.round(zoom * 100)}%
              </span>

              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoom >= 2.0}
                title="Zoom In"
                className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                aria-label="Zoom In"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>

            {/* Fit Width Button */}
            <button
              type="button"
              onClick={handleFitWidth}
              title="Fit to Width"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300 hover:border-purple-400/40 hover:bg-white/[0.08] hover:text-white transition-all cursor-pointer shadow-sm"
            >
              <svg className="h-3.5 w-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span>Fit Width</span>
            </button>

            {/* Far Right Action Button: Glowing Purple "Request Download" */}
            <a
              href={RESUME_FILE_PATH}
              download={RESUME_FILE_NAME}
              onClick={handleDownloadClick}
              className="inline-flex items-center gap-2 rounded-full border border-purple-400/50 bg-gradient-to-r from-purple-600 via-purple-500 to-violet-500 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-105 active:scale-95 hover:border-purple-300 transition-all cursor-pointer shrink-0"
              title="Request and Download Resume PDF"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>
                {downloadState === "requesting"
                  ? "Requesting..."
                  : downloadState === "ready"
                  ? "Downloaded ✓"
                  : "Request Download"}
              </span>
            </a>

          </div>
        </div>

        {/* ==============================================================
            C. UNIVERSAL SAFE IMAGE VIEWER (Consistent across all devices & viewports)
        ============================================================== */}
        <div className="relative w-full rounded-2xl border border-white/10 bg-[#07070b] shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden">
          {/* Elegant Loading State */}
          {isLoading && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm gap-3">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-purple-500 border-t-transparent shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
              <p className="font-mono text-xs uppercase tracking-wider text-purple-300 animate-pulse">
                Rendering Document Preview...
              </p>
            </div>
          )}

          {/* Universal Scrollable Document Canvas */}
          <div className="relative w-full max-h-[78vh] md:max-h-[82vh] overflow-y-auto overflow-x-auto p-3 sm:p-5 md:p-6 flex flex-col items-center">
            <div
              className="transition-all duration-200 flex justify-center shrink-0"
              style={{
                width: `${Math.round(zoom * 100)}%`,
                maxWidth: `${Math.round(896 * zoom)}px`,
              }}
            >
              <img
                src="/resume-preview.webp"
                alt="Arib Akhtar - Resume Document"
                className="w-full h-auto rounded-xl shadow-2xl object-contain border border-white/10"
                loading="eager"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>
        </div>


        {/* ==============================================================
            D. BOTTOM DOCUMENT COLOPHON & METADATA
        ============================================================== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500 w-full px-2 pt-2 border-t border-white/[0.05]">
          <span>Official Curriculum Vitae &bull; Arib Akhtar</span>
          <span>Verified MERN Stack &bull; PDF Format (15.4 KB) &bull; 2026</span>
        </div>

      </main>
    </motion.div>
  );
};

export default ResumeViewer;
