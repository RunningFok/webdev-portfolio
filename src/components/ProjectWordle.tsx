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
  GO,
  React,
  Netlify,
  ArrowLink,
  FramerMotion,
} from "./ProgramIcons";
import "./project.scss";
import monitorLanding from "../assets/wordle-monitor-landing.png";
import laptopGame from "../assets/wordle-laptop-game.png";
import mobileGame from "../assets/wordle-mobile-game.png";

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

export default function ProjectWordle() {
  const wordleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wordleRef,
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
      <motion.div style={y} className="screenshots-section top-project">
        <div className="screenshot-container">
          <p className="resolution-tag">monitor</p>
          <img src={monitorLanding} alt="Monitor" className="monitor" />
        </div>
        <div className="screenshot-container">
          <p className="resolution-tag">laptop</p>
          <img src={laptopGame} alt="Laptop" className="laptop" />
        </div>
        <div className="screenshot-container">
          <p className="resolution-tag">mobile</p>
          <img src={mobileGame} alt="Mobile" className="mobile" />{" "}
        </div>
      </motion.div>
    );
  };

  return (
    <section>
      <div className="project" id="wordle">
        <motion.a
          ref={textRef}
          className="project-head"
          initial={"hidden"}
          animate={titleControl}
          variants={titleVariants}
          href="https://adrianfokwordle.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <h1 className="project-name">#1 Wordle</h1>
        </motion.a>
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
              Wordle is a New York Times inspired word game. Players have 6 attempts to guess a 5 letter word.
            </motion.p>
            <motion.div
              variants={techsVariants}
              initial={"hidden"}
              animate={techControl}
            >
              <h1 className="techs-used">Techs Used</h1>
              <div className="project-techs">
                <GO />
                <Typescript />
                <React />
                <Netlify />
                <FramerMotion />
              </div>
            </motion.div>
            <motion.div
              variants={notesVariants}
              initial={"hidden"}
              animate={notesControl}
            >
              <h1 className="project-notes">Notes</h1>
              <p className="notes">
                This is a responsive site written with Typescript on React and GO on Gin-Gonic and
                hosted on Netlify. It fetches word data off an API and stores
                with client guess information on SQLite.
              </p>
            </motion.div>
            <motion.div
              variants={linksVariants}
              initial={"hidden"}
              animate={linksControl}
            >
              <motion.a
                href="https://adrianfokwordle.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowLink />
              </motion.a>
            </motion.div>
          </div>
          <div className="project-right" ref={wordleRef}>
            <ScreenshotsSection y={ImageY} />
          </div>
        </div>
      </div>
    </section>
  );
}
