import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import React, {useRef, useEffect} from "react";
import useElementInView from "./hooks/useElementInView";

// import * from "react-intersection-observer"

function App() {
  const targetRef = useRef(null);
  const isVisible = useElementInView({
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  }, targetRef)

  // const myRef = useRef()
  // useEffect(() => {
  //   console.log('myRef', myRef.current)
  // }, [])

  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       console.log('removing show');
  //       entry.target.classList.add("show");
  //     } else {
  //       console.log('removing show');
  //       entry.target.classList.remove("show");
  //     }
  //   });
  // });

  // useEffect(() => {
  //   console.log('changing class to .show')
  // })


  // setHiddenElements(document.querySelectorAll(".hidden"))
  // hiddenElements.forEach((el) => observer.observe(el));

  return (
    <main className="App">
      <Navbar />
      <div className="main-pages">
        <Home />
        <Projects/>
        <About />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

export default App;
