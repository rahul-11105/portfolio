import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router } from "react-router-dom";
import Intro from "./components/Into/Intro";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
            <Navbar/>
            <Intro/>
            <Skills/>
            <Work/>
            <Contact/>
            <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
