import "./App.css";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Nav from "./Component/Nav";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";

function App() {
  return (
    <div className="bg-white">
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
