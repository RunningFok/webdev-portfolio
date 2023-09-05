import "../style.scss";
import Title from "./components/Title";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Title />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
