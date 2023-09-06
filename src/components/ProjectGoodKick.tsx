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
  Stripe,
  Firebase,
  GoogleCloud,
  Nextjs,
  Vercel,
  ArrowLink,
} from "./ProgramIcons";
import "./project.scss";
import monitorLanding from "../assets/goodkick-monitor-landing.png";
import laptopDetail from "../assets/goodKick-laptop-detail.png";
import mobileSearch from "../assets/goodKick-mobile-search.png";

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

export default function ProjectGoodKick() {
  const kickRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: kickRef,
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
          <img src={laptopDetail} alt="Laptop" className="laptop" />
        </div>
        <div className="screenshot-container">
          <p className="resolution-tag">mobile</p>
          <img src={mobileSearch} alt="Mobile" className="mobile" />{" "}
        </div>
      </motion.div>
    );
  };

  return (
    <section>
      <div className="project">
        <motion.div
          ref={textRef}
          className="project-head"
          initial={"hidden"}
          animate={titleControl}
          variants={titleVariants}
        >
          <h1 className="project-name">#1 GoodKick</h1>
        </motion.div>
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
              GoodKick is a StockX and Amazon inspired E-Commerce site. Users
              are able to login, search for products, purchase products, pay for
              orders and view previous orders. This is a responsive site written
              with Typescript on NextJS and hosted on Vercel. It fetches product
              data off an API and store with client order information on
              Firestore.
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
                <Firebase />
                <GoogleCloud />
                <Stripe />
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
                Users are able to login with preset email "test@test.com" with
                password "123456". <br />
                To finish with payment, provide imaginary email and address,
                using the following test credit card number: "4242 4242 4242
                4242", month: "04/24", cvc :"424"
              </p>
            </motion.div>
            <motion.div
              variants={linksVariants}
              initial={"hidden"}
              animate={linksControl}
            >
              <motion.a
                href="https://goodkick-azure.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowLink />
              </motion.a>
            </motion.div>
          </div>
          <div className="project-right" ref={kickRef}>
            <ScreenshotsSection y={ImageY} />
          </div>
        </div>
      </div>
    </section>
  );
}
