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

const aboutVariants: Variants = {
  hidden: {
    x: "50vw",
    // y: 0,
    opacity: 0,
    width: "0%",
  },
  visible: {
    x: "0vw",
    // y: 75,
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

const contentVariants: Variants = {
  hidden: {
    x: "50vw",
    // y: 0,
    opacity: 0,
    width: "0%",
  },
  visible: {
    x: "0vw",
    // y: 75,
    opacity: 1,
    width: "80vw",
    transition: {
      type: "all",
      bounce: 0.4,
      duration: 2,
    },
  },
};

const techVariants: Variants = {
  hidden: {
    x: "50vw",
    // y: 0,
    opacity: 0,
    width: "0%",
  },
  visible: {
    x: "0vw",
    // y: 75,
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

export default function About() {
  const programList = [
    <Stripe />,
    <Sass />,
    <Tailwind />,
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
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControl = useAnimation();
  const contentControl = useAnimation();
  const techControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControl.start("visible");
      contentControl.start("visible");
      techControl.start("visible");
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
          when: "beforeChildren",
          type: "all",
          bounce: 0.4,
          duration: 2,
          delayChildren: 0.5,
          staggerDirection: -1,
        }}
      >
        <h1 id="about">Hello</h1>

        <motion.div
          id="description"
          variants={contentVariants}
          initial={"hidden"}
          animate={contentControl}
          transition={{
            type: "all",
            bounce: 0.4,
            duration: 2,
          }}
        >
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
        </motion.div>
        <motion.div
          className="programs"
          variants={techVariants}
          initial={"hidden"}
          animate={techControl}
          transition={{
            type: "all",
            bounce: 0.4,
            duration: 1,
          }}
        >
          <h1 id="program-title">List of techs used </h1>
          <div className="program-list">{programList}</div>
          <div className="program-list">{programList}</div>
        </motion.div>
      </motion.div>
    </div>
  );
}
