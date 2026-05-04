import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import React, { useEffect, useState } from "react";

function App() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <main className="App">
            <Navbar />
            <div className="main-pages">
                <Home />
                <Services />
                <Projects />
                <About />
                <Clients />
                <Contact />
            </div>
            <Footer />
            <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
            >
                {theme === "dark" ? "Light mode" : "Dark mode"}
            </button>
        </main>
    );
}

export default App;
