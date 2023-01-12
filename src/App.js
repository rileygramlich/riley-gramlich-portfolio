import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <main className="App">
      <Navbar />
      <div className="main-pages">
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  );
}

export default App;
