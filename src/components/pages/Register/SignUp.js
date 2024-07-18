import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../Firebase/firebase-config";

export default function SignUp({ changeKey }) {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {

       await createUserWithEmailAndPassword(auth,email,password);
      // Signed up
      alert("User created");

      navigate("login");
      
      changeKey();

    } catch (error) {

      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(`Error-code: ${errorCode}` );
      console.log(` Error-Message : ${errorMessage}`);

      alert(`Error-Message: ${errorMessage}`);

    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {

      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      alert("Google sign-in successful");

      console.log(`token : ${token}`);
      console.log(`user : ${user}`);

      navigate("/Shop");

    } catch (error) {

      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);

    }
  };

  return (
    <form id="SignUp-Form" onSubmit={handleSignUp}>

      <FloatingLabel controlId="signup-name" label="Full Name" className="mb-3">
        <Form.Control id="fullname" type="text" placeholder="Full-Name" required />
      </FloatingLabel>

      <FloatingLabel controlId="signup-email" label="Email address" className="mb-3" >
        <Form.Control onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="name@example.com" required />
      </FloatingLabel>

      <FloatingLabel controlId="signup-password" label="Password" className="mb-3" >
        <Form.Control onChange={(e) => setPassword(e.target.value)} id="password" type={showPassword ? "text" : "password"} placeholder="Password" autoComplete="new-password" required />
      </FloatingLabel>

      <div className="form-link">

        <h6 className="font-size-small"> Already a User ?&nbsp;
          <Link to="#" onClick={(e) => {
              e.preventDefault();
              changeKey();
            }}
          >
            Login here!
          </Link>
        </h6>

      </div>

      <div className="form-checkbox">

        <Form.Check label="Show password"
          onChange={(e) => setShowPassword(e.target.checked)}
        />

      </div>

      <br />

      <button type="submit" className="btn btn-warning"> Sign-Up </button>

      <div className="mt-3 hr-for-or mx-auto text-center">
        <hr /> &nbsp; <span className="align-top"> or </span> &nbsp; <hr />
      </div>

      <button type="button" className="login-with-google-btn" onClick={handleGoogleSignUp} > Sign up with Google </button>
      
    </form>
  );
}
