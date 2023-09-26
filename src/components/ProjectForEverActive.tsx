import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import "./project.scss";
import {
  GraphQL,
  Hydrogen,
  Remix,
  Shopify,
  Tailwind,
  Typescript,
} from "./ProgramIcons";

const titleVariants: Variants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 0.4,
      damping: 10,
      delay: 0.5,
      duration: 0.5,
    },
  },
};

const descriptionVariants: Variants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 0.4,
      damping: 10,
      delay: 0.6,
      duration: 0.5,
    },
  },
};
const techsVariants: Variants = {
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
      delay: 0.8,
      duration: 0.5,
    },
  },
};

export default function ProjectForEverActive() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });

  const titleControl = useAnimation();
  const descriptiontControl = useAnimation();
  const techControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      titleControl.start("visible");
      descriptiontControl.start("visible");
      techControl.start("visible");
    }
  }, [isInView]);

  return (
    <section>
      <div className="project" id="forEver">
        <motion.a
          ref={textRef}
          className="project-head"
          initial={"hidden"}
          animate={titleControl}
          variants={titleVariants}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="project-name">#4 FOR-EVER Active</h1>
        </motion.a>
        <div className="project-contents">
          <div className="project-left">
            <motion.p
              className="project-description"
              variants={descriptionVariants}
              initial={"hidden"}
              animate={descriptiontControl}
            >
              Ultra Soft Activewear Coming Soon!
            </motion.p>
            <motion.div
              variants={techsVariants}
              initial={"hidden"}
              animate={techControl}
            >
              <h1 className="techs-used">Techs Used</h1>
              <div className="project-techs">
                <Typescript />
                <Remix />
                <Hydrogen />
                <GraphQL />
                <Shopify />
                <Tailwind />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
