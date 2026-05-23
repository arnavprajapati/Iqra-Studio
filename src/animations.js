/** Premium cubic-bezier — fast start, silky deceleration */
export const easing = [0.22, 1, 0.36, 1];
export const slowEasing = [0.33, 1, 0.68, 1]; // Even smoother for large elements

export const logoVariants = {
  hidden: { opacity: 0, scale: 1.12, rotateX: 6, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, delay: 0.1, ease: easing },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.5, ease: easing },
  }
};

export const headingVariants = {
  hidden: { opacity: 0, scale: 1.12, rotateX: 10, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.95, delay: 0.28, ease: easing },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    filter: 'blur(4px)',
    transition: { duration: 0.6, ease: easing },
  }
};

export const paragraphVariants = {
  hidden: { opacity: 0, scale: 1.06, rotateX: 6, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, delay: 0.62, ease: easing },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.5, ease: easing },
  }
};

export const ctaVariants = {
  hidden: { opacity: 0, scale: 0.92, rotateX: 8, filter: 'blur(3px)' },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, delay: 0.88, ease: easing },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.4, ease: easing },
  }
};

// --- New Transition Sequence Variants ---

export const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.1 }
  },
  exit: { opacity: 0 }
};

export const giantTextContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    }
  },
  shiftUp: {
    y: "-16vh",
    scale: 0.65,
    transition: {
      duration: 1.5,
      ease: slowEasing,
      delay: 2.8 // wait for intro animation to finish before shifting
    }
  }
};

export const letterVariants = {
  hidden: { opacity: 0, y: 150, rotateX: 30, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.8, ease: slowEasing }
  }
};

export const dotVariants = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: [-200, 0, -20, 0],
    transition: { 
      opacity: { duration: 0.2, delay: 2.2 },
      y: {
        duration: 1.0, 
        delay: 2.2,
        times: [0, 0.5, 0.75, 1],
        ease: ["easeIn", "easeOut", "easeIn"]
      }
    }
  }
};

export const taglineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 0, // initially hidden
  },
  shiftUp: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, delay: 3.2, ease: easing }
  }
};

export const shopContainerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 1.2, 
      delay: 0.1, 
      ease: slowEasing,
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const shopItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easing }
  }
};
