import React from "react";
import { GlobalStyles } from "@mui/material";
import { Route, Routes, ScrollRestoration } from "react-router-dom";
import Header from "../components/Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const App: React.FC = () => {
  return (
    <div className="app">
      <GlobalStyles styles={{}} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollRestoration />
    </div>
  );
};

export default App;
