import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Clients from "./components/Clients/Clients";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import React from "react";

function App() {
    return (
        <main className="App">
            <Navbar />
            <div className="main-pages">
                <Home />
                <Services />
                <Clients />
                <Projects />
                <About />
                <Contact />
            </div>
            <Footer />
        </main>
    );
}

export default App;
