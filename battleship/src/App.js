import injectContext from "./store/context";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import GameShowBoard from "./views/Cpu";
import NavBar from "./components/navbar";
import UserBoard from "./views/User";

function App() {
  return (
    <div 
 

    className="bg-white">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gameboard" element={<GameShowBoard />} />
          <Route path="/user" element={<UserBoard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
