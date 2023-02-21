import React from "react";
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import './App.css';
function App() {
  return (
    <div>
       
    
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </div><br></br>
      <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Contact" element={<Contact/>}/>
              <Route path="/About" element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;
