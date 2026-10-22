import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/portfolioData";
import { fadeInUp, TRANSITION_EASE } from "../utils/motionVariants";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  // Lock background scroll when project modal is open and handle Escape key
  useEffect(() => {
    if (selectedProject) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setSelectedProject(null);
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedProject]);

  const categories = ["All", "Frontend Web App", "Full-Stack Web App", "E-Commerce Web App"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative z-10 scroll-mt-[72px] w-full overflow-hidden pt-6 sm:pt-8 md:pt-10 pb-20 md:pb-28 bg-black"
      style={{ backgroundColor: "#000000", scrollMarginTop: "72px" }}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* ==============================================================
            1. CENTERED PROJECTS HEADING & SUBTITLE
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
              src="/projects.webp"
              alt="Projects"
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
              Real-World <span className="text-white font-medium">&</span> Deployments
            </span>
            <span className="h-px w-6 sm:w-8 bg-white" />
          </div>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: TRANSITION_EASE }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                  : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ==============================================================
            2. HUMAN-CRAFTED PROJECT CARDS GRID
            - Clean, non-bulky layout without artificial AI boxes
            - Full screenshot aspect ratio with object-contain (no cropping)
            - Crisp typography, solid black background, subtle purple accents
        ============================================================== */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                ease: TRANSITION_EASE,
                delay: idx * 0.08,
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/80 bg-black p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(168,85,247,0.12)]"
            >
              {/* Top Hairline Sheen */}
              <div className="pointer-events-none absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-purple-400/25 to-transparent group-hover:via-purple-400/60 transition-all duration-300" />

              <div className="flex flex-col flex-1">
                {/* Full Screenshot Preview Frame (aspect-[16/10] with full uncropped object-contain) */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-[#08080c] border border-white/[0.08] cursor-pointer group/img transition-all duration-300 group-hover:border-purple-400/30 flex items-center justify-center p-1"
                  title="Click to view details"
                >
                  <img
                    src={project.image || "/project.main.png"}
                    alt={project.title}
                    width="1672"
                    height="941"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain block transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />

                  {/* Subtle hover overlay with View Details pill */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-black/45 backdrop-blur-[1px]">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-600/90 px-3.5 py-1.5 font-mono text-xs font-semibold text-white shadow-lg">
                      <span>View Details</span>
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Metadata & Title */}
                <div className="mt-5 flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-purple-400">
                    {project.category}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-400 rounded bg-white/[0.04] px-2 py-0.5 border border-white/[0.06]">
                    {project.stats.metrics}
                  </span>
                </div>

                <h3 className="mt-2.5 text-xl font-bold tracking-tight text-white group-hover:text-purple-200 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm font-medium text-zinc-400">
                  {project.subtitle}
                </p>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-300 line-clamp-3 flex-1">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                  aria-label={`View details for ${project.title}`}
                >
                  <span>Case Study &amp; Details</span>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-zinc-200 hover:border-purple-400/40 hover:text-white transition-all"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <span>Code</span>
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>

                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-gradient-to-r from-purple-600 to-violet-500 px-4 py-1.5 text-xs font-semibold text-white shadow-[0_2px_12px_rgba(139,92,246,0.25)] hover:scale-105 transition-all"
                    aria-label={`View ${project.title} live deployment`}
                  >
                    <span>{project.links.live?.includes("github.com") ? "View API" : "Live Demo"}</span>
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* ==============================================================
          3. FULLY VISIBLE PROJECT DETAILS MODAL
          - pt-16 sm:pt-20 clearance avoids any navbar cutoff
          - Sticky top header ensures close button is always visible
          - Full project screenshot with object-contain (no cropping)
      ============================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain flex items-center justify-center p-4 pt-16 sm:pt-20 pb-8 sm:pb-12 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: TRANSITION_EASE }}
              className="relative my-auto max-h-[88vh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-3xl border border-white/20 bg-black p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(168,85,247,0.2)] text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Top Header with Always-Visible Close Button */}
              <div className="sticky top-0 z-30 flex items-center justify-between pb-3 bg-black/95 backdrop-blur-md -mx-2 px-2 pt-1 border-b border-white/[0.08] mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold">
                  {selectedProject.category}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 border border-white/20 text-white shadow-xl hover:bg-purple-600 hover:border-purple-400 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 shrink-0"
                  aria-label="Close dialog"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Project Modal Preview Image (Full fit without cropping) */}
              {selectedProject.image && (
                <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 bg-[#07070b] w-full flex items-center justify-center p-1">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    width="1672"
                    height="941"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto max-h-[46vh] object-contain rounded-xl block"
                  />
                </div>
              )}

              <h3 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-zinc-300">
                {selectedProject.subtitle}
              </p>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-300">
                <div>
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-purple-300">
                    Overview
                  </h4>
                  <p className="mt-1 text-zinc-400">{selectedProject.description}</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-zinc-950 p-4">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-purple-300">
                    Technical Challenge
                  </h4>
                  <p className="mt-1 text-zinc-300">{selectedProject.challenge}</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-zinc-950 p-4">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-purple-300">
                    Architectural Contribution
                  </h4>
                  <p className="mt-1 text-zinc-300">{selectedProject.contribution}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-purple-400/20 bg-purple-950/30 px-3 py-1 font-mono text-xs text-purple-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-end gap-3 border-t border-white/10 pt-4">
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 bg-black px-5 py-2.5 text-xs font-medium text-zinc-200 hover:border-purple-400/40 hover:text-white transition-all"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-6 py-2.5 text-xs font-semibold text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] hover:scale-105 transition-all"
                >
                  {selectedProject.links.live?.includes("github.com") ? "View API / Repo" : "Open Live Demo"}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
