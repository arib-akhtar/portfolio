export const TRANSITION_EASE = [0.22, 1, 0.36, 1];

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: TRANSITION_EASE,
      delay: typeof custom === "number" ? custom * 0.08 : 0,
    },
  }),
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: TRANSITION_EASE,
      delay: typeof custom === "number" ? custom * 0.08 : 0,
    },
  }),
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const scaleUp = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: TRANSITION_EASE,
    },
  },
};

export const cardHover = {
  rest: {
    y: 0,
    borderColor: "rgba(255, 255, 255, 0.12)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
  },
  hover: {
    y: -4,
    borderColor: "rgba(168, 85, 247, 0.4)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(168, 85, 247, 0.15)",
    transition: {
      duration: 0.3,
      ease: TRANSITION_EASE,
    },
  },
};
