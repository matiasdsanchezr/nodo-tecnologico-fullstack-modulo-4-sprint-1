export const slideInFromSide = (delay) => {
  return {
    initial: {
      transform: "translateZ(0px) translateY(0px)",
    },
    animate: {
      transform: "translateZ(32px) translateY(-20px)",
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
    whileHover: { scale: 1.2 },
  };
};
