import React from "react";
import { GlobalStyles } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "./Home";

const App: React.FC = () => {
  return (
    <div className="app">
      <GlobalStyles styles={{}} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </div>
  );
};

export default App;
