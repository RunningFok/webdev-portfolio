import { useEffect, useRef } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useAnimation,
  useInView,
  Variants,
} from "framer-motion";
import {
  Typescript,
  Tailwind,
  MongoDB,
  Nextjs,
  Vercel,
  Link,
  ArrowLink,
} from "./ProgramIcons";
import "./project.scss";
import monitorLanding from "../assets/kannaKitchen-monitor-landing.png";
import laptopMenu from "../assets/kannaKitchen-laptop-menu.png";
import mobileLanding from "../assets/kannaKitchen-mobile-landing.png";

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
      delay: 0.8,
      duration: 0.5,
    },
  },
};
const notesVariants: Variants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 0.4,
      damping: 10,
      delay: 0.9,
      duration: 0.5,
    },
  },
};

const linksVariants: Variants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 0.4,
      damping: 10,
      delay: 1,
      duration: 1,
    },
  },
};
const mobileScreenVariants: Variants = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 0.4,
      damping: 10,
      delay: 0.8,
      duration: 0.5,
    },
  },
};
export default function ProjectKannaKitchen() {
  const kitchenRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: kitchenRef,
    offset: ["start end", "end end"],
  });
  const ImageY = useTransform(scrollYProgress, [0, 1], ["25vh", "-175vh"]);

  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });
  const titleControl = useAnimation();
  const descriptiontControl = useAnimation();
  const techControl = useAnimation();
  const imageControl = useAnimation();
  const notesControl = useAnimation();
  const linksControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      titleControl.start("visible");
      descriptiontControl.start("visible");
      techControl.start("visible");
      imageControl.start("visible");
      notesControl.start("visible");
      linksControl.start("visible");
    }
  }, [isInView]);

  const ScreenshotsSection = (y: any) => {
    return (
      <motion.div style={y} className="screenshots-section non-top-projects">
        <div className="screenshot-container">
          <p className="resolution-tag">montitor</p>
          <img src={monitorLanding} alt="Monitor" className="monitor" />{" "}
        </div>
        <div className="screenshot-container">
          <p className="resolution-tag">laptop</p>
          <img src={laptopMenu} alt="Laptop" className="laptop" />{" "}
        </div>
        <div className="screenshot-container">
          <p className="resolution-tag">mobile</p>
          <img src={mobileLanding} alt="Mobile" className="mobile" />{" "}
        </div>
      </motion.div>
    );
  };
  return (
    <section>
      <div className="project">
        <motion.h1
          ref={textRef}
          className="project-name"
          initial={"hidden"}
          animate={titleControl}
          variants={titleVariants}
        >
          #2 Kanna Kitchen
        </motion.h1>
        <div className="project-contents">
          <motion.div
            className="project-top"
            variants={mobileScreenVariants}
            initial={"hidden"}
            animate={imageControl}
          >
            <img src={monitorLanding} alt="Monitor" className="monitor" />
          </motion.div>
          <div className="project-left">
            <motion.p
              className="project-description"
              variants={descriptionVariants}
              initial={"hidden"}
              animate={descriptiontControl}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </motion.p>
            <motion.div
              variants={techsVariants}
              initial={"hidden"}
              animate={techControl}
            >
              <h1 className="techs-used">Techs Used</h1>
              <div className="project-techs">
                <Typescript />
                <Nextjs />
                <Vercel />
                <MongoDB />
                <Tailwind />
              </div>
            </motion.div>
            <motion.div
              variants={notesVariants}
              initial={"hidden"}
              animate={notesControl}
            >
              <h1 className="project-notes">Notes</h1>
              <p className="notes">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </motion.div>
            <motion.div
              variants={linksVariants}
              initial={"hidden"}
              animate={linksControl}
            >
              <a
                href="https://kanna-kitchen.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowLink />
              </a>
            </motion.div>
          </div>
          <div className="project-right" ref={kitchenRef}>
            <ScreenshotsSection y={ImageY} />
          </div>
        </div>
      </div>
    </section>
  );
}
