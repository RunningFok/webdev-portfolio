import "./navbar.scss";
import { motion } from "framer-motion";

const navbarVariants = {
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 0.4,
      damping: 10,
      delay: 1.8,
      duration: 0.3,
    },
  },
  hidden: { y: -100 },
};

const linkVariants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export default function Navbar() {
  return (
    <section>
      <div className="nav-container">
        <motion.nav
          className="nav-bar"
          variants={navbarVariants}
          initial={"hidden"}
          animate={"visible"}
        >
          <ul className="links">
            <motion.a
              className="link"
              variants={linkVariants}
              whileHover={"hover"}
              href="#home"
            >
              "/"
            </motion.a>
            <motion.a
              className="link"
              variants={linkVariants}
              whileHover={"hover"}
              href="#about"
            >
              About
            </motion.a>
            <motion.a
              className="link"
              variants={linkVariants}
              whileHover={"hover"}
              href="#projects"
            >
              Projects
            </motion.a>
            <motion.a
              className="link"
              variants={linkVariants}
              whileHover={"hover"}
              href="#contact"

            >
              Contact
            </motion.a>
          </ul>
        </motion.nav>
      </div>
    </section>
  );
}
