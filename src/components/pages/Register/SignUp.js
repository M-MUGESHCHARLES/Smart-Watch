import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export default function SignUp({ changeKey }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div id="SignUp-Form">
      <FloatingLabel
        controlId="floatingInput"
        label="Full Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Full-Name" required/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        label="Password"
        className="mb-3"
      >
        <Form.Control
          type={showPassword ? "text" : "password"}
          placeholder="password"
        />
      </FloatingLabel>
      <div className="form-link">
        <h6>
          Already an User?
          <a href="#signin" onClick={changeKey}>
            Click Here!
          </a>
        </h6>
      </div>
      <div className="form-checkbox">
        <Form.Check
          label="show password"
          onChange={(e) => setShowPassword(e.target.checked)}
        />
      </div>
      <br />
      <button type="submit" className="btn btn-warning">
        Sign-Up
      </button>
    </div>
  );
}
