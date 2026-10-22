import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import AestheticBanner from "./Components/AestheticBanner";
import Credentials from "./Components/Credentials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

// Code splitting: dynamically import ResumeViewer to optimize initial page bundle
const ResumeViewer = lazy(() => import("./Components/ResumeViewer"));

const PortfolioHome = () => {
  return (
    <>
      {/* Existing Navbar completely preserved */}
      <Navbar />

      {/* Main Content flow matching user's exact personal sections */}
      <main id="main-content" className="flex-1 w-full px-3 sm:px-6 md:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Credentials />
        <AestheticBanner />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Transition #root from initial hidden state once DOM and React are mounted
    const rootEl = document.getElementById("root");
    if (rootEl) {
      rootEl.classList.remove("app-loading");
      rootEl.classList.add("app-ready");
    }
    const raf = requestAnimationFrame(() => {
      setIsReady(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className={`relative min-h-screen flex flex-col bg-black text-zinc-100 selection:bg-purple-600/30 selection:text-purple-200 transition-opacity duration-300 ${
        isReady ? "opacity-100 visibility-visible" : "opacity-0 visibility-hidden"
      }`}
      style={{
        backgroundColor: "#000000",
        opacity: isReady ? 1 : 0,
        visibility: isReady ? "visible" : "hidden",
      }}
    >
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route
          path="/resume"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen w-full bg-black flex items-center justify-center">
                  <div className="h-9 w-9 animate-spin rounded-full border-2 border-purple-500 border-t-transparent shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                </div>
              }
            >
              <ResumeViewer />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;