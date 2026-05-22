
/** Premium cubic-bezier — fast start, silky deceleration */
export const easing = [0.22, 1, 0.36, 1];

export const logoVariants = {
  hidden: { opacity: 0, scale: 1.12, rotateX: 6, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, delay: 0.1, ease: easing },
  },
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
};
