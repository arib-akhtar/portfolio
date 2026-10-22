import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative z-20 mt-auto w-full border-t border-white/[0.08] bg-black py-12 md:py-16 px-3 sm:px-6 md:px-8"
      style={{
        position: "relative",
        zIndex: 20,
        backgroundColor: "#000000",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand Mark matching Navbar */}
          <div className="flex flex-col items-center md:items-start">
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
            >
              {personalInfo.name}
              <span className="text-purple-400">
                .
              </span>
            </a>
            <p className="mt-1 text-xs text-zinc-500">
              Full-Stack Developer &bull; Crafting thoughtful digital experiences
            </p>
          </div>

          {/* Quick Anchor Links matching Navbar */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-zinc-400">
            <a href="#home" className="hover:text-purple-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-purple-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-purple-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-purple-300 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
          </nav>

          {/* Back to Top & Socials */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <span className="text-zinc-600">&bull;</span>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <span className="text-zinc-600">&bull;</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400 hover:border-purple-400/40 hover:text-purple-300 transition-all"
              aria-label="Scroll to top of page"
            >
              <span>Top</span>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="mt-8 border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-600">
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500/80" />
            <span>Built with React, Three.js & Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
