import { useEffect, useRef } from "react";

import { motion, useAnimation, useInView, Variants } from "framer-motion";
import ProjectChewout from "./ProjectChewout";
import ProjectGoodKick from "./ProjectGoodKick";
import ProjectKannaKitchen from "./ProjectKannaKitchen";
import "./projects.scss";

const projectsTitleVariants: Variants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 0.4,
      damping: 10,
      when: "beforeChildren",
      delay: 0.3,
      duration: 0.5,
    },
  },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControl.start("visible");
    }
  }, [isInView]);

  return (
    <div className="container" id="projects">
      <motion.h1
        ref={ref}
        id="projects-title"
        initial={"hidden"}
        animate={animationControl}
        variants={projectsTitleVariants}
      >
        Projects
      </motion.h1>
      <ProjectGoodKick />
      <ProjectChewout />
      <ProjectKannaKitchen />
    </div>
  );
}
