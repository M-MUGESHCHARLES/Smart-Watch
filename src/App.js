import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/HomePage/HomePage.js";
import Register from "./components/pages/Register/Register.js";
import Shop from "./components/pages/Shop/Shop.js";
import SignUp from "./components/pages/Register/SignUp.js";
// import Login from "./components/pages/Register/Login.js";
import SignIn from "./components/pages/Register/SignIn.js";
import UserRegistrationForm from "./components/pages/Register/UserRegistrationForm.js";
import { ShopHeader } from "./components/sections/header/ShopHeader.js";

const App = () => {
  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={< HomePage/>} />
          <Route path="/Register" element={ <Register />}>

             {/* <Route path="signup" element={ <SignUp /> } /> */}
             {/* <Route path="signin" element={ <SignIn /> } /> */}

          </Route>
          <Route path="/UserRegistrationForm" element={ <UserRegistrationForm /> } />        
          <Route path="/Shop" element={ <Shop /> } >

             <Route path="category" element={ <HomePage /> }>

             </Route>  

          </Route>
        </Routes>
      </BrowserRouter> 

    </>
  );
};

export default App;
