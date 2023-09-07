import "./about.scss";
import "./ProgramIcons";
import { useEffect, useRef } from "react";
// import { useInView } from "react-intersection-observer";

import { motion, useAnimation, useInView, Variants } from "framer-motion";

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
  Netlify,
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
    width: "85vw",
    transition: {
      type: "all",
      bounce: 0.4,
      duration: 1,
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "50vw",
    // width: "0%",
  },
  visible: {
    opacity: 1,
    x: "0vw",
    // y: 75,
    // width: "85vw",
    transition: {
      type: "all",
      bounce: 0.4,
      duration: 1,
      delay: 0.2,
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
    width: "85vw",
    transition: {
      type: "all",
      bounce: 0.4,
      duration: 1,
      delay: 0.4,
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
    <Netlify />,
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
    <div className="container" id="about">
      <motion.div
        ref={ref}
        variants={aboutVariants}
        initial={"hidden"}
        animate={animationControl}
      >
        <h1 id="hello">Hello</h1>
      </motion.div>
      <motion.p
        id="description"
        variants={contentVariants}
        initial={"hidden"}
        animate={contentControl}
      >
        I build websites that provide a solution for a challenge.
        <br />
        As a developer, I am self-taught and specialize in constructing
        interactive websites that operate seamlessly on multiple platforms and
        devices.
        <br />
        The prospect of undertaking new projects is appealing as there is always
        new problems to solve and new skills to learn.
        <br />
        Having had the opportunity to work with people and atheletic expierence
        in a team has allowed me to gain insight into the needs of individuals
        and how to effectively work towards shared objectives.
        <br />
        <br />
        Hello 👋🏼 Yukiko Kanna, who is my sweet babaye and not an imaginary monkey 🐒.
      </motion.p>
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
        <h1 id="program-title">List of techs </h1>
        <div className="program-list">{programList}</div>
        <div className="program-list">{programList}</div>
      </motion.div>
    </div>
  );
}
