import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="lead">
      <BrowserRouter>
        <Navbar/>
        <div className = "mt-5 container">
          <Route exact path="/" component = {Home}/>
          <Route exact path ="/about" component = {About}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
