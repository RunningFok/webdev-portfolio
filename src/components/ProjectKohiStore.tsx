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
  PHP,
  Javascript,
  Laravel,
  MySQL,
  Vite,
  Tailwind,
  Vue,
  ArrowLink,
} from "./ProgramIcons";
import "./project.scss";
import monitorLanding from "../assets/kohiStore-monitor-landing.png";
import laptopGame from "../assets/kohiStore-monitor-admin.png";
import mobileGame from "../assets/kohiStore-mobile-order.png";

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

export default function ProjectKohiStore() {
  const kohiStoreRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: kohiStoreRef,
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
      <div className="project" id="kohiStore">
        <motion.a
          ref={textRef}
          className="project-head"
          initial={"hidden"}
          animate={titleControl}
          variants={titleVariants}
          href="https://kohi-store.up.railway.app/"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <h1 className="project-name">#1 kohiSTORE</h1>
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
              kohiSTORE is an e-commerce web application with a customer-facing frontend for browsing and ordering products, and an admin panel where store staff can manage inventory, products, and customer orders.
            </motion.p>
            <motion.div
              variants={techsVariants}
              initial={"hidden"}
              animate={techControl}
            >
              <h1 className="techs-used">Techs Used</h1>
              <div className="project-techs">
                <PHP />
                <Javascript />
                <Laravel />
                <MySQL />
                <Vite />
                <Tailwind />
                <Vue />
              </div>
            </motion.div>
            <motion.div
              variants={notesVariants}
              initial={"hidden"}
              animate={notesControl}
            >
              <h1 className="project-notes">Notes</h1>
              <p className="notes">
                Built with PHP Laravel, Vue.js, and MySQL. Features Laravel queue and scheduler for automated low stock email notifications and daily sales reports. Fully responsive design with Tailwind CSS.
              </p>
            </motion.div>
            <motion.div
              variants={linksVariants}
              initial={"hidden"}
              animate={linksControl}
            >
              <motion.a
                href="https://kohi-store.up.railway.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowLink />
              </motion.a>
            </motion.div>
          </div>
          <div className="project-right" ref={kohiStoreRef}>
            <ScreenshotsSection y={ImageY} />
          </div>
        </div>
      </div>
    </section>
  );
}
