import "./App.css";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Nav from "./Component/Nav";
import PhoneNav from "./Component/PhoneNav";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";

function App() {
  return (
    <div className="bg-white ">
      <Nav />
      <PhoneNav />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
