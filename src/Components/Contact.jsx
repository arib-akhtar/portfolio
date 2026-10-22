import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { fadeInUp, TRANSITION_EASE } from "../utils/motionVariants";

const WEB3FORMS_ACCESS_KEY = "26e932d6-41bf-448c-b6d1-23065668cdee";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmittedStatus({
        type: "error",
        message: "Please fill in all required fields marked with *",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmittedStatus({
      type: "loading",
      message: "Sending your message to arib.000789@gmail.com...",
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name.trim(),
          phone: formData.phone.trim() || "N/A",
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          from_name: formData.name.trim() || "Portfolio Contact Form",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmittedStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully to arib.000789@gmail.com.",
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setSubmittedStatus(null), 6000);
      } else {
        setSubmittedStatus({
          type: "error",
          message:
            data.message ||
            "Submission failed. Please check your Web3Forms access key or email directly at arib.000789@gmail.com",
        });
      }
    } catch (err) {
      setSubmittedStatus({
        type: "error",
        message:
          "Network error occurred while sending message. Please try again or email directly at arib.000789@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 scroll-mt-[72px] w-full overflow-hidden pt-6 sm:pt-8 md:pt-10 pb-20 md:pb-28 bg-black"
      style={{ backgroundColor: "#000000", scrollMarginTop: "72px" }}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* ==============================================================
            1. SECTION HEADER STYLING (CENTERED)
            - Centered header at the top of Contact component
            - Public folder images contact.png and me.png side-by-side cleanly
            - Fine-tuned, slightly closer natural gap (gap-1 sm:gap-1.5 md:gap-2)
            - Subheading with white side dashes: GET In TOUCH
            - The word "In" has only 'I' capitalized and 'n' lowercase,
              styled in a thin, elegant italic font
        ============================================================== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative z-20 flex flex-col items-center justify-center text-center w-full mx-auto"
        >
          {/* Side-by-Side 3D Title Images: contact.png and me.png */}
          <div className="flex items-end justify-center gap-1 sm:gap-1.5 md:gap-2 select-none leading-none mx-auto">
            <img
              src="/contact.webp"
              alt="Contact"
              width="2170"
              height="725"
              loading="lazy"
              decoding="async"
              className="h-11.5 sm:h-14.5 md:h-18.5 lg:h-22.5 w-auto object-contain select-none shrink-0"
            />
            <img
              src="/me.webp"
              alt="Me"
              width="1774"
              height="887"
              loading="lazy"
              decoding="async"
              className="h-11 sm:h-14 md:h-18 lg:h-22 w-auto object-contain select-none shrink-0 mb-0.5 sm:mb-1"
            />
          </div>

          {/* Subheading with white side dashes: GET In TOUCH */}
          <div className="mt-3 sm:mt-4 flex items-center justify-center gap-3 font-mono text-xs sm:text-sm tracking-[0.25em] text-purple-400 text-center mx-auto select-none">
            <span className="h-px w-6 sm:w-8 bg-white" />
            <span>
              GET <span className="text-white font-thin italic normal-case tracking-normal">In</span> TOUCH
            </span>
            <span className="h-px w-6 sm:w-8 bg-white" />
          </div>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto text-center leading-relaxed">
            Have a project in mind, an opportunity, or a question? Reach out through any channel below.
          </p>
        </motion.div>

        {/* ==============================================================
            2. SINGLE HORIZONTAL ROW SPREAD PARALLEL TO NAVBAR WIDTH
            - Distributed across full max-w-7xl px-4 sm:px-6 container
            - justify-between ensures Item 1's left edge and Item 4's right edge
              align in parallel with Navbar's Logo and Resume Button
            - Strict single horizontal line with no wrapping into second row
            - Larger solid dark circular icon badges with bolder icons
            - Bold white uppercase titles directly beneath
            - Exact details directly beneath with zero heavy card box borders
        ============================================================== */}
        <div className="mt-14 sm:mt-20 w-full flex flex-row flex-nowrap justify-between items-start gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
          
          {/* Item 1: ADDRESS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: TRANSITION_EASE, delay: 0.05 }}
            className="group flex flex-col items-center text-center shrink-0 min-w-max sm:min-w-0"
          >
            {/* Solid Vibrant Deep Purple Circular Module (No Glow, Clean & Sharp) */}
            <div className="mb-3.5 sm:mb-5 flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full border-2 sm:border-[2.5px] border-[#8a2be2] bg-black text-[#8a2be2] group-hover:scale-105 group-hover:border-[#9d4edd] group-hover:text-[#9d4edd] transition-all duration-300 shrink-0">
              <svg className="h-7 w-7 sm:h-9 sm:w-9 md:h-11 md:w-11 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" />
              </svg>
            </div>

            {/* Bold White Uppercase Title */}
            <h4 className="font-mono text-xs sm:text-sm md:text-base font-bold text-white tracking-wider uppercase mb-1 sm:mb-1.5 group-hover:text-purple-200 transition-colors">
              ADDRESS
            </h4>

            {/* Clean Text Details */}
            <p className="text-[11px] sm:text-xs md:text-sm text-zinc-400 font-medium">
              Ranchi, Jharkhand
            </p>
          </motion.div>

          {/* Item 2: CONTACT NUMBER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: TRANSITION_EASE, delay: 0.1 }}
            className="group flex flex-col items-center text-center shrink-0 min-w-max sm:min-w-0"
          >
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex flex-col items-center justify-center text-center"
            >
              {/* Solid Vibrant Deep Purple Circular Module (No Glow, Clean & Sharp) */}
              <div className="mb-3.5 sm:mb-5 flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full border-2 sm:border-[2.5px] border-[#8a2be2] bg-black text-[#8a2be2] group-hover:scale-105 group-hover:border-[#9d4edd] group-hover:text-[#9d4edd] transition-all duration-300 shrink-0">
                <svg className="h-7 w-7 sm:h-9 sm:w-9 md:h-11 md:w-11 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />
                </svg>
              </div>

              {/* Bold White Uppercase Title */}
              <h4 className="font-mono text-xs sm:text-sm md:text-base font-bold text-white tracking-wider uppercase mb-1 sm:mb-1.5 group-hover:text-purple-200 transition-colors">
                CONTACT NUMBER
              </h4>

              {/* Clean Text Details */}
              <p className="text-[11px] sm:text-xs md:text-sm font-mono text-zinc-400 font-medium group-hover:text-purple-300 transition-colors">
                {personalInfo.phone}
              </p>
            </a>
          </motion.div>

          {/* Item 3: EMAIL ADDRESS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: TRANSITION_EASE, delay: 0.15 }}
            className="group flex flex-col items-center text-center shrink-0 min-w-max sm:min-w-0"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex flex-col items-center justify-center text-center"
            >
              {/* Solid Vibrant Deep Purple Circular Module (No Glow, Clean & Sharp) */}
              <div className="mb-3.5 sm:mb-5 flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full border-2 sm:border-[2.5px] border-[#8a2be2] bg-black text-[#8a2be2] group-hover:scale-105 group-hover:border-[#9d4edd] group-hover:text-[#9d4edd] transition-all duration-300 shrink-0">
                <svg className="h-7 w-7 sm:h-9 sm:w-9 md:h-11 md:w-11 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>

              {/* Bold White Uppercase Title */}
              <h4 className="font-mono text-xs sm:text-sm md:text-base font-bold text-white tracking-wider uppercase mb-1 sm:mb-1.5 group-hover:text-purple-200 transition-colors">
                EMAIL ADDRESS
              </h4>

              {/* Clean Text Details */}
              <p className="text-[11px] sm:text-xs md:text-sm font-mono text-zinc-400 font-medium break-all group-hover:text-purple-300 transition-colors">
                {personalInfo.email}
              </p>
            </a>
          </motion.div>

          {/* Item 4: GITHUB PROFILE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: TRANSITION_EASE, delay: 0.2 }}
            className="group flex flex-col items-center text-center shrink-0 min-w-max sm:min-w-0"
          >
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center text-center"
            >
              {/* Solid Vibrant Deep Purple Circular Module (No Glow, Clean & Sharp) */}
              <div className="mb-3.5 sm:mb-5 flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full border-2 sm:border-[2.5px] border-[#8a2be2] bg-black text-[#8a2be2] group-hover:scale-105 group-hover:border-[#9d4edd] group-hover:text-[#9d4edd] transition-all duration-300 shrink-0">
                <svg className="h-7 w-7 sm:h-9 sm:w-9 md:h-11 md:w-11 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>

              {/* Bold White Uppercase Title */}
              <h4 className="font-mono text-xs sm:text-sm md:text-base font-bold text-white tracking-wider uppercase mb-1 sm:mb-1.5 group-hover:text-purple-200 transition-colors">
                GITHUB PROFILE
              </h4>

              {/* Clean Text Details */}
              <p className="text-[11px] sm:text-xs md:text-sm font-mono text-zinc-400 font-medium group-hover:text-purple-300 transition-colors">
                github.com/arib-akhtar
              </p>
            </a>
          </motion.div>

        </div>

        {/* ==============================================================
            3. CONTACT FORM
            - Retain dark background for section
            - Row 1: "Full Name *" (single wide white field)
            - Row 2: "Email *" (left white field) and "Phone Number" (right white field)
            - Row 3: "Subject *" (single wide white field)
            - Row 4: "Message *" (large, multi-line white field)
            - Solid white backgrounds, black text, clean borders
            - Field labels above fields in white text with red asterisk (*)
            - Prominent solid purple button: "SEND MESSAGE" centered below
        ============================================================== */}
        {/* ==============================================================
            3. CONTACT FORM (PERFECTLY CENTERED)
        ============================================================== */}
        <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center mt-12 sm:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: TRANSITION_EASE, delay: 0.12 }}
            className="w-full max-w-xl mx-auto flex flex-col items-center"
          >
            {/* Form sitting directly on the dark section background (borderless, no container box) */}
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleFormSubmit}
              className="w-full max-w-xl mx-auto space-y-4 sm:space-y-4.5"
            >
              <br /><br />
              <span className="flex justify-center text-3xl sm:text-2xl md:text-4xl lg:text-4xl  font-semibold">Have a Question?</span> <br /> <br />
              {/* Web3Forms Hidden Configuration Fields */}
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />

              {/* Row 1: Full Name * (single wide white field) */}
              <div className="w-full">
                <label htmlFor="contact-name" className="block w-full text-xs sm:text-sm font-medium text-white mb-1.5 text-center">
                  Full Name <span className="text-red-500 font-bold ml-0.5">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-md border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all shadow-sm"
                />
              </div>

              {/* Row 2: Email * (with envelope icon) and Phone Number (with phone icon) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full">
                {/* Email * */}
                <div className="w-full">
                  <label htmlFor="contact-email" className="block w-full text-xs sm:text-sm font-medium text-white mb-1.5 text-center">
                    Email <span className="text-red-500 font-bold ml-0.5">*</span>
                  </label>
                  <div className="relative w-full">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full rounded-md border border-zinc-200 bg-white pl-9 sm:pl-9.5 pr-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="w-full">
                  <label htmlFor="contact-phone" className="block w-full text-xs sm:text-sm font-medium text-white mb-1.5 text-center">
                    Phone Number <span className="text-red-500 font-bold ml-0.5">*</span>
                  </label>
                  <div className="relative w-full">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full rounded-md border border-zinc-200 bg-white pl-9 sm:pl-9.5 pr-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Subject * (single wide white field) */}
              <div className="w-full">
                <label htmlFor="contact-subject" className="block w-full text-xs sm:text-sm font-medium text-white mb-1.5 text-center">
                  Subject <span className="text-red-500 font-bold ml-0.5">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject"
                  className="w-full rounded-md border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all shadow-sm"
                />
              </div>

              {/* Row 4: Message * (large multi-line white field) */}
              <div className="w-full">
                <label htmlFor="contact-message" className="block w-full text-xs sm:text-sm font-medium text-white mb-1.5 text-center">
                  Message <span className="text-red-500 font-bold ml-0.5">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full rounded-md border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all resize-y shadow-sm"
                />
              </div>

              {/* Status Notice */}
              {submittedStatus && (
                <div
                  className={`rounded-lg border px-3.5 py-2.5 font-mono text-xs flex items-center justify-center gap-2 w-full text-center ${
                    submittedStatus.type === "error"
                      ? "border-rose-500/40 bg-rose-500/10 text-rose-300"
                      : submittedStatus.type === "success"
                      ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                      : "border-purple-500/40 bg-purple-500/10 text-purple-300 animate-pulse"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                  <span>{submittedStatus.message}</span>
                </div>
              )}

              {/* Central Solid Purple Theme Button */}
              <div className="pt-2 sm:pt-3 flex justify-center items-center w-full mx-auto">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="w-full sm:w-auto min-w-[180px] sm:min-w-[200px] rounded-md bg-[#7e22ce] hover:bg-[#6b21a8] px-8 py-2.5 sm:px-10 sm:py-3 text-xs sm:text-sm font-bold text-white uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center shadow-md hover:shadow-lg hover:shadow-purple-700/30 disabled:opacity-60 disabled:cursor-not-allowed mx-auto"
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </motion.button>
              </div>

            </form>
          </motion.div>
        </div>

        {/* ==============================================================
            4. "FIND ME ON" SOCIAL LINKS SECTION
            - Proportionate, elegant "Find me on" text label
            - Balanced circular icon buttons for LinkedIn & Instagram
            - Clean inline row, text followed closely by icons
            - Styled with clean true-black background and purple accent theme
        ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease: TRANSITION_EASE, delay: 0.1 }}
          className="mt-14 sm:mt-16 flex flex-row items-center justify-center gap-3.5 sm:gap-4 text-center w-full mx-auto"
        >
          <span className="font-mono text-sm sm:text-base font-semibold text-zinc-300 tracking-wide select-none">
            Find me on
          </span>

          <div className="flex items-center gap-3">
            {/* LinkedIn Circular Icon Button */}
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-[#8a2be2] bg-black text-[#8a2be2] hover:scale-110 hover:border-[#9d4edd] hover:text-[#9d4edd] transition-all duration-300 shrink-0"
            >
              <svg className="h-[21.5px] w-[21.5px] transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34m1.4 9.74V9.93H5.06v8.57h2.8z" />
              </svg>
            </a>

            {/* Instagram Circular Icon Button */}
            <a
              href="https://www.instagram.com/arib___007/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-[#8a2be2] bg-black text-[#8a2be2] hover:scale-110 hover:border-[#9d4edd] hover:text-[#9d4edd] transition-all duration-300 shrink-0"
            >
              <svg className="h-[21.5px] w-[21.5px] transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
