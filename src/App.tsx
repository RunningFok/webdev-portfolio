import "../style.scss";
import Title from "./components/Title";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Title />
      <About />
    </div>
  );
}

export default App;
