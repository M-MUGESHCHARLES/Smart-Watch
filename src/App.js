import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/HomePage/HomePage.js";
import Register from "./components/pages/Register/Register.js";
import Shop from "./components/pages/Shop/Shop.js";

const App = () => {
  return (
    <>

        <BrowserRouter>
        <Routes>
          <Route path="/" element={< HomePage/>} />
          <Route path="/Register" element={ <Register />} />
          <Route path="/Shop" element={ <Shop /> } />
        </Routes>
      </BrowserRouter> 



    </>
  );
};

export default App;
