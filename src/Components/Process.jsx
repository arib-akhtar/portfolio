import { motion } from "framer-motion";
import { processStages } from "../data/portfolioData";
import { TRANSITION_EASE } from "../utils/motionVariants";

const Process = () => {
  return (
    <section
      id="process"
      className="relative w-full overflow-hidden py-24 md:py-32"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-purple-400">
          <span>04</span>
          <span className="h-px w-8 bg-purple-500/30" />
          <span className="uppercase">Working Methodology</span>
        </div>

        <div className="mt-4 max-w-3xl">
          <h2 className="font-extrabold tracking-tight text-white [font-size:clamp(2rem,4vw,3.2rem)] leading-tight">
            How I approach every project.
          </h2>
          <p className="mt-3 text-sm md:text-base text-zinc-400">
            A deliberate five-phase engineering process designed to eliminate guesswork, keep architectures maintainable, and deliver high-polish web experiences on schedule.
          </p>
        </div>

        {/* 5-Step Connected Timeline Track */}
        <div className="relative mt-16 space-y-6 md:space-y-8">
          {/* Subtle Vertical Track Line (Hidden on small mobile) */}
          <div className="pointer-events-none absolute left-6 top-6 bottom-6 hidden w-px bg-gradient-to-b from-purple-500/40 via-violet-500/20 to-transparent md:block" />

          {processStages.map((stage, idx) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: TRANSITION_EASE,
                delay: idx * 0.1,
              }}
              whileHover={{ x: 4 }}
              className="group relative flex flex-col md:flex-row md:items-start gap-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.04]"
            >
              {/* Top Hairline Glow */}
              <div className="pointer-events-none absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              {/* Number Indicator Pill */}
              <div className="flex items-center gap-4 md:flex-col md:items-center">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-950/40 font-mono text-sm font-bold text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:border-purple-400/60 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all">
                  {stage.number}
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-purple-400 md:hidden">
                  Phase 0{idx + 1}
                </span>
              </div>

              {/* Content Details */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                    {stage.phase}
                  </h3>
                  <span className="font-mono text-xs text-zinc-500">
                    Step 0{idx + 1} of 05
                  </span>
                </div>

                <p className="mt-2 text-sm font-medium text-purple-200/90">
                  {stage.summary}
                </p>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">
                  {stage.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
