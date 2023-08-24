import "./about.scss";
import "./ProgramIcons";
import { useEffect, useRef } from "react";
// import { useInView } from "react-intersection-observer";

import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  Variants,
  color,
} from "framer-motion";

import {
  Typescript,
  Javascript,
  Python,
  React,
  Vite,
  Nextjs,
  Firebase,
  MySQL,
  MongoDB,
  Tailwind,
  Sass,
  Solidity,
  GoogleCloud,
  // PostgreSQL,
  Prisma,
  Vercel,
  Stripe,
} from "./ProgramIcons";

const aboutVariants3: Variants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const aboutVariants: Variants = {
  hidden: {
    x: "50vw",
    y: 0,
    opacity: 0,
    width: "0%",
  },
  visible: {
    x: "0vw",
    y: 75,
    opacity: 1,
    width: "80vw",
    transition: {
      type: "all",
      bounce: 0.4,
      duration: 2,
      delay: 0.5,
    },
  },
};

const aboutVariants2: Variants = {
  hidden: { left: 0 },
  visible: { left: "100%" },
};
export default function About() {
  const programList = [
    <Typescript />,
    <Javascript />,
    <Python />,
    <Solidity />,
    <React />,
    <Vite />,
    <Nextjs />,
    <GoogleCloud />,
    <Vercel />,
    <Firebase />,
    <Prisma />,
    <MongoDB />,
    <MySQL />,
    <Stripe />,
    <Sass />,
    <Tailwind />,
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControl = useAnimation();
  const animationControl2 = useAnimation();
  const animationControl3 = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControl.start("visible");
      animationControl2.start("visible");
      animationControl3.start("visible");
    }
  }, [isInView]);

  return (
    <div className="container">
      <motion.div
        ref={ref}
        variants={aboutVariants}
        initial={"hidden"}
        animate={animationControl}
        transition={{
          type: "all",
          bounce: 0.4,
          duration: 2,
          delay: 0.5,
        }}
        style={{ position: "relative" }}
      >
        {/* <motion.div
        ref={ref}
        variants={aboutVariants3}
        initial={"hidden"}
        animate={animationControl3}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{ position: "relative", overflow: "hidden" }}
      > */}
        <h1 id="about">About</h1>

        <div id="description">
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
        </div>
        <div className="programs">
          <h1 id="program-title">List of techs used </h1>
          <div className="program-list">{programList}</div>
          <div className="program-list">{programList}</div>
        </div>
      </motion.div>
      {/* <motion.div
        variants={aboutVariants2}
        initial={"hidden"}
        animate={animationControl2}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#102c57",
          zIndex: 20,
        }}
      /> */}
    </div>
  );
}
