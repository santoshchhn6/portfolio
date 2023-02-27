import "./App.css";
import About from "./Component/About";
import Nav from "./Component/Nav";
import Skills from "./Component/Skills";

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1080px]  border border-blue-600 px-3">
        <Nav />
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;
