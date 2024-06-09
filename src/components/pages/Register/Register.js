import React, { useState } from "react";
import "./Register.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SignUp from "./SignUp";
import Login from "./Login";
import Footer from "../../sections/footer/Footer";
import Header2 from "../../sections/header/Header2";

export default function Register() {
  const [activeKey, setActiveKey] = useState("Sign-Up");

  return (
    <>
      <Header2 />
      {/* <div> */}
        <div id="Register">
          <div className="card">
            <Tabs
              activeKey={activeKey}
              onSelect={(k) => setActiveKey(k)}
              id="uncontrolled-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="Sign-Up" title="Sign-Up" id="signup" >
                <SignUp changeKey={() => setActiveKey("Login")} />
              </Tab>
              <Tab eventKey="Login" title="Login" id="login">
                <Login />
              </Tab>
            </Tabs>
          </div>
          <div className="dark-bg-hr ">
            <hr />
          </div>
        </div>
      {/* </div> */}
      <Footer />
    </>
  );
}
