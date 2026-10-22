import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { fadeInUp, TRANSITION_EASE } from "../utils/motionVariants";

const ResumeSection = () => {
  const resumePdfPath = "/Arib_Akhtar_Resume_Final%20(1).pdf";
  const certificateDriveUrl = "https://drive.google.com/file/d/1GqOKbEX4BbXv7caRzufTovqih2FbonNQ/view";

  return (
    <section id="resume" className="relative scroll-mt-[72px] py-20 md:py-28" style={{ scrollMarginTop: "72px" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-purple-400"
        >
          <span>RESUME</span>
          <span className="h-px w-8 bg-purple-500/30" />
          <span className="uppercase">Formal Curriculum Vitae</span>
        </motion.div>

        <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="font-extrabold tracking-tight text-white [font-size:clamp(2rem,3.8vw,3rem)] leading-tight">
              My verified resume.
            </h2>
            <p className="mt-3 max-w-xl text-sm md:text-base text-zinc-400">
              A comprehensive summary of my BCA coursework, 6-month intensive MERN stack training, project portfolio, and technical proficiencies.
            </p>
          </div>

          {/* Direct Document Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-gradient-to-r from-purple-600 to-violet-500 px-5 py-2.5 text-xs font-semibold text-white shadow-[0_4px_20px_rgba(139,92,246,0.25)] hover:scale-105 transition-all"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>View Full PDF</span>
            </Link>

            <a
              href={resumePdfPath}
              download="Arib_Akhtar_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 text-xs font-medium text-zinc-200 hover:border-purple-400/40 hover:bg-white/[0.1] hover:text-white transition-all"
            >
              <svg className="h-4 w-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Structured Resume Snapshot Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: TRANSITION_EASE }}
          className="relative mt-10 overflow-hidden rounded-3xl border border-white/[0.12] bg-[#0c0c14]/90 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          {/* Top hairline reflection */}
          <div className="pointer-events-none absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          {/* Header block */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/[0.08] pb-6 gap-4">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                {personalInfo.name}
              </h3>
              <p className="mt-1 font-mono text-sm text-purple-400">
                {personalInfo.role}
              </p>
              <p className="mt-1 text-xs text-zinc-400">
                {personalInfo.location} &bull; {personalInfo.email} &bull; {personalInfo.phone}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={certificateDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-purple-400/20 bg-purple-950/30 px-3.5 py-2 font-mono text-xs text-purple-300 hover:border-purple-400/50 hover:bg-purple-950/50 transition-all"
              >
                <span>View 6-Month Certificate</span>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* 3-Column Summary */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Column 1: Education */}
            <div className="space-y-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-purple-400">
                01 &bull; Education
              </span>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <h4 className="text-sm font-bold text-white">BCA (Bachelor of Computer Applications)</h4>
                <p className="text-xs text-purple-300 mt-0.5">Doranda College, Ranchi</p>
                <p className="font-mono text-[11px] text-zinc-400 mt-1">2026 – 2029 (Currently in 1st Year)</p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  Focused on computer science fundamentals, data structures, algorithms, and application development.
                </p>
              </div>
            </div>

            {/* Column 2: Certification & Training */}
            <div className="space-y-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-purple-400">
                02 &bull; Certification
              </span>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <h4 className="text-sm font-bold text-white">MERN Stack Development</h4>
                <p className="text-xs text-purple-300 mt-0.5">6-Month Comprehensive Training</p>
                <p className="font-mono text-[11px] text-zinc-400 mt-1">Certificate of Completion</p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  Full-stack engineering with React, Node.js, Express, MongoDB, JWT auth, and REST APIs.
                </p>
              </div>
            </div>

            {/* Column 3: Verified Projects */}
            <div className="space-y-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-purple-400">
                03 &bull; Key Deployments
              </span>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 space-y-3">
                <div>
                  <h4 className="text-sm font-bold text-white">Job Portal (MERN Stack)</h4>
                  <p className="text-xs text-zinc-400">Role-based job seeker & recruiter platform with JWT.</p>
                </div>
                <div className="border-t border-white/[0.06] pt-2">
                  <h4 className="text-sm font-bold text-white">Aivon Tech Agency Platform</h4>
                  <p className="text-xs text-zinc-400">Official site with Framer Motion & automated AI chat.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
