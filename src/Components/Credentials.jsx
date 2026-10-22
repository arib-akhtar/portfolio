import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, TRANSITION_EASE } from "../utils/motionVariants";

// Verified credentials, milestones, and professional certificates (all earned in 2026)
const credentialsData = [
  {
    id: "mern-stack",
    title: "Full-Stack MERN Development Certificate",
    organization: "Emancipation Edutech Private Limited",
    issuerBadge: "Comprehensive Web Engineering Program",
    date: "2026",
    type: "Verified Credential",
    image: "/Mern.certificate.jpeg",
    description:
      "Completed rigorous 6-month hands-on immersion in modern JavaScript full-stack development, mastering React.js, Node.js, Express.js, MongoDB schemas, REST API architecture, and JWT authentication.",
    highlights: [
      "Architected backend REST APIs in Node.js and Express with JWT authentication",
      "Modeled normalized MongoDB schemas and aggregation pipelines using Mongoose",
      "Crafted responsive and component-driven user interfaces in React with Tailwind CSS",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
    credentialUrl: "/MERN-CERTIFICATE.pdf",
    isVerified: true,
  },
  {
    id: "simplilearn-cert",
    title: "Simplilearn Professional Certificate",
    organization: "Simplilearn SkillUp",
    issuerBadge: "SkillUp Certified",
    date: "2026",
    type: "Verified Credential",
    image: "/Java.certificate.png",
    description:
      "Foundational object-oriented programming in Java SE, focusing on OOP encapsulation, inheritance hierarchies, polymorphism, interfaces, robust exception handling, and algorithmic logic.",
    highlights: [
      "Mastered core OOP paradigms, class modeling, and inheritance structures",
      "Implemented strict compile-time type safety and custom exception hierarchies",
      "Acquired fundamental knowledge of the Java Virtual Machine (JVM) memory model",
    ],
    skills: ["Java SE", "OOP", "Exception Handling", "Inheritance", "Algorithms"],
    credentialUrl: "https://simpli-web.app.link/e/wZdTNPhug7b",
    isVerified: true,
  },
  {
    id: "python-essentials-1",
    title: "Python Essentials 1",
    organization: "Cisco Networking Academy",
    issuerBadge: "Cisco NetAcad",
    recipientName: "Arib Akhtar",
    date: "2026",
    credentialId: "3dc663c5-80eb-43d5-a017-c6bcb0ef1cb4",
    type: "Verified Credential",
    image: "/Python.certificate.png",
    description:
      "Successfully completed Python Essentials 1 through the Cisco Networking Academy program.",
    highlights: [
      "Mastered core Python syntax, memory models, and exception handling",
      "Constructed modular scripts with reusable custom packages and modules",
      "Achieved credential in algorithmic problem solving and structured logic",
    ],
    skills: ["Python 3", "Data Structures", "Algorithms", "OOP Logic", "Automation"],
    credentialUrl:
      "/Python_Essentials_1_certificate_arib-000789-gmail-com_3dc663c5-80eb-43d5-a017-c6bcb0ef1cb4.pdf",
    isVerified: true,
  },
  {
    id: "python-essentials-2",
    title: "Python Essentials 2",
    organization: "Cisco Networking Academy",
    issuerBadge: "Cisco NetAcad",
    recipientName: "Arib Akhtar",
    date: "2026",
    credentialId: "6560b440-40fa-486e-b674-e826fcb9055b",
    type: "Verified Credential",
    image: "/Python2.certificate.png",
    description:
      "Successfully completed Python Essentials 2 through the Cisco Networking Academy program.",
    highlights: [
      "Mastered advanced OOP paradigms, inheritance hierarchies, and polymorphism in Python",
      "Implemented modular package architectures, pip distributions, and file I/O operations",
      "Constructed robust algorithms utilizing generators, closures, and lambda expressions",
    ],
    skills: ["Python 3", "Advanced OOP", "Packages & Modules", "Generators & Closures", "File I/O"],
    credentialUrl:
      "/Python_Essentials_2_certificate_arib-000789-gmail-com_b560b440-40fa-486e-b674-e826fcb9055b.pdf",
    isVerified: true,
  },
];

const Credentials = () => {
  const [selectedCred, setSelectedCred] = useState(null);

  // Prevent background page from scrolling when modal is open and handle Escape key
  useEffect(() => {
    if (selectedCred) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setSelectedCred(null);
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedCred]);

  return (
    <section
      id="certifications"
      className="relative z-10 scroll-mt-[72px] w-full overflow-hidden pt-6 sm:pt-8 md:pt-10 pb-10 sm:pb-12 md:pb-14 bg-black"
      style={{ backgroundColor: "#000000", scrollMarginTop: "72px" }}
    >
      {/* Backward-compatibility and anchor sync for #achievements */}
      <div id="achievements" className="absolute top-0 opacity-0 pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* ==============================================================
            1. CENTERED EDITORIAL HEADER STYLING
        ============================================================== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative z-20 flex flex-col items-center justify-center text-center w-full mx-auto"
        >
          {/* Centered 3D Title Image strictly "Certifications" */}
          <div className="flex items-center justify-center select-none leading-none mx-auto">
            <img
              src="/certifications.webp"
              alt="Certifications"
              width="2172"
              height="724"
              loading="lazy"
              decoding="async"
              className="h-14 sm:h-18 md:h-24 lg:h-28 xl:h-32 w-auto max-w-[94vw] sm:max-w-none object-contain select-none shrink-0"
            />
          </div>

          {/* Centered Editorial Subtitle */}
          <div className="mt-0.5 sm:-mt-1 md:-mt-2.5 lg:-mt-3.5 flex items-center justify-center gap-3 font-mono text-xs tracking-[0.25em] text-purple-400 text-center mx-auto">
            <span className="h-px w-6 sm:w-8 bg-white" />
            <span className="uppercase">
              Verified <span className="text-white font-medium">&</span> Professional Certifications
            </span>
            <span className="h-px w-6 sm:w-8 bg-white" />
          </div>

          {/* Clean Descriptive Subtitle */}
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto text-center leading-relaxed">
            Verified technical credentials, professional certificates, and continuous learning
          </p>
        </motion.div>

        {/* ==============================================================
            2. 4-COLUMN PROFESSIONAL HUMAN-CRAFTED CARDS
            - Clean 4-column layout on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6)
            - Landscape preview image ratio at top (aspect-[16/10])
            - Solid black box background (bg-black)
            - Sleek "View Certificate" action button
        ============================================================== */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentialsData.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                ease: TRANSITION_EASE,
                delay: idx * 0.08,
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.1] bg-black p-4 sm:p-5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_16px_36px_rgba(0,0,0,0.8),0_0_25px_rgba(168,85,247,0.15)]"
            >
              {/* Subtle top edge purple sheen */}
              <div className="pointer-events-none absolute top-0 inset-x-6 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent group-hover:via-purple-400/60 transition-all duration-300" />

              <div className="flex flex-col flex-1">
                {/* Landscape Preview Image (aspect-[16/10] with full uncropped display) */}
                <div
                  onClick={() => setSelectedCred(item)}
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#08080d] border border-white/[0.08] cursor-pointer group-hover:border-purple-400/30 transition-all duration-300 flex items-center justify-center p-1.5"
                  title="Click to enlarge"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    width="1045"
                    height="737"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain rounded-lg transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Hover Inspect Pill */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/45 backdrop-blur-[1px] rounded-xl">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-600/90 px-3 py-1 font-mono text-[11px] font-semibold text-white shadow-lg">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>Enlarge</span>
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="mt-4 flex flex-col flex-1">
                  {/* Organization & Date Row */}
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-purple-400 truncate">
                      {item.organization}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400 shrink-0">
                      {item.date}
                    </span>
                  </div>

                  {/* Bold Title */}
                  <h3 className="mt-2 text-base font-bold tracking-tight text-white group-hover:text-purple-200 transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Issuer Subtitle Badge */}
                  <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[11px] text-zinc-400 font-mono">
                    <span className="h-1 w-1 rounded-full bg-purple-400" />
                    <span>{item.issuerBadge}</span>
                    {item.recipientName && (
                      <>
                        <span className="text-zinc-600">&bull;</span>
                        <span className="text-zinc-300">{item.recipientName}</span>
                      </>
                    )}
                  </div>

                  {item.credentialId && (
                    <div className="mt-1 text-[10px] font-mono text-zinc-400 truncate">
                      Cert ID: <span className="text-purple-300">{item.credentialId}</span>
                    </div>
                  )}

                  {/* Short Description */}
                  <p className="mt-2.5 text-xs text-zinc-400 leading-relaxed line-clamp-3 flex-1">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Sleek "View Certificate" Action Button */}
              <div className="mt-5 pt-3 border-t border-white/[0.06]">
                <a
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-zinc-200 transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-600 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] group/btn"
                  aria-label={`View certificate for ${item.title}`}
                >
                  <span>View Certificate</span>
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* ==============================================================
          3. FULLY CENTERED CREDENTIAL PREVIEW MODAL (NOT CUT OFF)
          - z-[100] above fixed navbar (z-50)
          - pt-16 sm:pt-20 clearance avoids navbar overlap
          - Sticky top header ensures close "X" button is always visible & clickable
          - Full certificate display with object-contain (no cropping)
      ============================================================== */}
      <AnimatePresence>
        {selectedCred && (
          <div className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain flex items-center justify-center p-4 pt-16 sm:pt-20 pb-8 sm:pb-12 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCred(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ duration: 0.25, ease: TRANSITION_EASE }}
              className="relative my-auto max-h-[88vh] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-3xl border border-white/20 bg-black p-5 sm:p-8 text-left shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(168,85,247,0.25)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Top Header with Always-Visible Close Button */}
              <div className="sticky top-0 z-30 flex items-center justify-between pb-3 bg-black/95 backdrop-blur-md -mx-2 px-2 pt-1 border-b border-white/[0.08] mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold">
                    {selectedCred.organization}
                  </span>
                  <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-purple-400" />
                  <span className="hidden sm:inline-block font-mono text-[11px] text-zinc-400">
                    {selectedCred.date}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCred(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 border border-white/20 text-white shadow-xl hover:bg-purple-600 hover:border-purple-400 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 shrink-0"
                  aria-label="Close dialog"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Certificate Image Frame (Full uncropped display with object-contain) */}
              <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 bg-[#07070b] w-full flex items-center justify-center p-2">
                <img
                  src={selectedCred.image}
                  alt={selectedCred.title}
                  width="1045"
                  height="737"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-h-[52vh] object-contain rounded-xl block"
                />
              </div>

              {/* Metadata & Title */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-purple-400 font-semibold">
                  {selectedCred.organization}
                </span>
                <span className="rounded-full bg-purple-500/10 px-3 py-1 font-mono text-xs text-purple-300 border border-purple-500/20">
                  {selectedCred.type} &bull; {selectedCred.date}
                </span>
              </div>

              <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                {selectedCred.title}
              </h3>

              {selectedCred.recipientName && (
                <div className="mt-2 text-xs font-mono text-zinc-400 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span>
                    Recipient: <span className="text-white font-medium">{selectedCred.recipientName}</span>
                  </span>
                  {selectedCred.credentialId && (
                    <span className="text-zinc-400 text-[11px]">
                      Cert ID: <span className="text-purple-300 font-mono">{selectedCred.credentialId}</span>
                    </span>
                  )}
                </div>
              )}

              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                {selectedCred.description}
              </p>

              {/* Highlights */}
              {selectedCred.highlights && selectedCred.highlights.length > 0 && (
                <div className="mt-5 space-y-2 rounded-2xl border border-white/10 bg-zinc-950 p-4 text-xs sm:text-sm">
                  <span className="font-mono text-xs font-semibold text-purple-400 block mb-2">
                    Key Focus Areas &amp; Accomplishments:
                  </span>
                  <ul className="space-y-1.5 text-zinc-300 list-disc list-inside">
                    {selectedCred.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills */}
              <div className="mt-5">
                <span className="font-mono text-xs text-zinc-400 block mb-2">
                  Skills &amp; Technologies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCred.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="rounded-lg border border-purple-400/20 bg-purple-950/30 px-3 py-1 font-mono text-xs text-purple-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedCred(null)}
                  className="rounded-full border border-white/10 px-5 py-2 text-xs font-semibold text-zinc-300 hover:bg-white/5 transition-all cursor-pointer"
                >
                  Close
                </button>
                {selectedCred.credentialUrl && (
                  <a
                    href={selectedCred.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-gradient-to-r from-purple-600 to-violet-600 px-5 py-2 text-xs font-semibold text-white shadow-[0_4px_16px_rgba(168,85,247,0.3)] hover:scale-105 transition-all"
                  >
                    <span>Open Certificate in New Tab</span>
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <br />
      <br />
      <br />
    </section>
  );
};

export default Credentials;
