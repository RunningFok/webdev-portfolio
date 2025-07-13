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
  NodeJS,
  Github,
  Vite,
  Nextjs,
  Remix,
  Hydrogen,
  Firebase,
  MySQL,
  MongoDB,
  GraphQL,
  Tailwind,
  Sass,
  Solidity,
  GoogleCloud,
  // PostgreSQL,
  Prisma,
  Vercel,
  Netlify,
  Shopify,
  Stripe,
  Hardhat,
  FramerMotion,
  HTML,
  CSS,
  PHP,
  Laravel,
  Docker,
  Postman
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
    <GoogleCloud />,
    <Postman />,
    <Docker />,
    <Github />,
    <Vercel />,
    <Netlify />,
    <Typescript />,
    <Javascript />,
    <PHP />,
    <Python />,
    <Solidity />,
    <HTML />,
    <CSS />,
    <Sass />,
    <Tailwind />,
    <FramerMotion />,
    <React />,
    <Vite />,
    <Nextjs />,
    <Remix />,
    <Hydrogen />,
    <NodeJS />,
    <Laravel />,
    <Hardhat />,
    <MySQL />,
    <MongoDB />,
    <Firebase />,
    <GraphQL />,
    <Prisma />,
    <Shopify />,

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
        I am a software developer based in Hong Kong, specializing in creating robust and user-friendly web and mobile applications,
        leveraging a diverse skill set that includes frontend and backend development, client management, and e-commerce solutions.
        Having worked across various sectors including e-commerce, insurance, F&B, and government, I understand the unique challenges different sectors present.
        <br />
        <br/>
        Having transitioned from a unique background of competing and coaching in combat sports professionally for over 10 years, 
        I bring a strong sense of discipline and work ethic into every project. 
        These experiences have given me valuable skills in communication, relationship building, and adaptability. 
        <br />
        <br />
        I am driven to use these qualities, alongside my growing technical expertise, to build impactful software solutions and contribute meaningfully to dynamic development teams.      </motion.p>
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
        <h1 id="program-title">Techs Used </h1>
        <div className="program-list">{programList}</div>
        <div className="program-list">{programList}</div>
      </motion.div>
    </div>
  );
}
