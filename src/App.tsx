import "./App.css";
import About from "./Component/About";
import Nav from "./Component/Nav";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";

function App() {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className=" max-w-[900px] bg-white shadow">
        <Nav />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
