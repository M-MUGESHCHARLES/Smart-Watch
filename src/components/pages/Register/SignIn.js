import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../Firebase/firebase-config";

export default function SignIn({ changeKey }) {
  // navigate hook
  const navigate = useNavigate();

  // useState hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {

      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful");
      navigate("/UserRegistrationForm");

    } catch (error) {

      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(`Error-code: ${errorCode}`);
      console.log(` Error-Message : ${errorMessage}`);

      alert(`Error-Message: ${errorMessage}`);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {

      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      alert("Google sign-in successful");

      // console.log(`token : ${token}`);
      console.log(`user : ${user}`);

      navigate("/Shop");

    } catch (error) {

      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);

    }
  };

  return (
    <form id="Login-Form" onSubmit={handleLogin}>

      <FloatingLabel controlId="login-email" label="E-mail" className="mb-3">
        <Form.Control type="email" placeholder="Email" value={email} required
          onChange={(e) => setEmail(e.target.value)}
        />
      </FloatingLabel>

      <FloatingLabel controlId="login-password" label="Password" className="mb-3"> 
        <Form.Control type="password" placeholder="Password" autoComplete="current-password" value={password} required
          onChange={(e) => setPassword(e.target.value)}
        />
      </FloatingLabel>

      <div className="form-link">

        <h6 className="font-size-small"> Forgot Password? &nbsp;
          <Link to="#"
            onClick={(e) => {
              e.preventDefault();
              changeKey();
            }}
          >
            SignUp here!
          </Link>
        </h6>

      </div>
      
      <div className="form-checkbox">
        <Form.Check label="Remember me!" defaultChecked />
      </div>

      <br />

      <button type="submit" className="btn btn-warning"> Login </button>

      <br />

      <div className="mt-3 hr-for-or text-center mx-auto">
        <hr /> &nbsp; <span className="align-top"> or </span> &nbsp; <hr />
      </div>

      <button type="button" className="login-with-google-btn"  onClick={handleGoogleSignIn} > Sign in with Google </button>
      
    </form>
  );
}
