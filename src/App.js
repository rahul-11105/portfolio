import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router } from "react-router-dom";
import Intro from "./components/Into/Intro";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <div className="App">
      <Router>
            <Navbar/>
            <Intro/>
            <Skills/>
      </Router>
      
    </div>
  );
}

export default App;
