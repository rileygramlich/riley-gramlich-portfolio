import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  let target = document.querySelector(".hidden");
  observer.observe(target);

  // the callback we setup for the observer will be executed now for the first time
  // it waits until we assign a target to our observer (even if the target is currently not visible)

  // const hiddenElements = document.querySelectorAll(".hidden");
  // hiddenElements.forEach((el) => observer.observe(el));

  return (
    <main className="App">
      <Navbar />
      <div className="main-pages">
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

export default App;
