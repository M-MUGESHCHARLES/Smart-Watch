import React from 'react'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";


export default function Login() {
  return (
    <div id="Login-Form">
      <FloatingLabel controlId="floatingInput" label="E-mail" className="mb-3">
        <Form.Control type="email" placeholder="Full-Name" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Passsword"
        className="mb-3"
      >
        <Form.Control type="password" placeholder="Full-Name" />
      </FloatingLabel>

      <div className="form-link">
        <h6>
          Forget Password ? <a href="#signup"> Click Here!</a>
        </h6>
      </div>
      <div className="form-checkbox">
        <Form.Check label="remember me!" />
      </div>

      <br />
      <button type="submit" className="btn btn-warning">
        Login
      </button>
    </div>
  );
}
