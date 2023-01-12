import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <main className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
    </main>
  );
}

export default App;
