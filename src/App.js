import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Events from "./routes/Events";
import Members from "./routes/Members";
import SubFamily from "./routes/SubFamily";
import OnlineShop from "./routes/OnlineShop";
import Contact from "./routes/Contact";
import About from "./routes/About";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Events" element={<Events />}/>
        <Route path="/Members" element={<Members />}/>
        <Route path="/SubFamily" element={<SubFamily />}/>
        <Route path="/OnlineShop" element={<OnlineShop />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
    </>
  );
}

export default App;
