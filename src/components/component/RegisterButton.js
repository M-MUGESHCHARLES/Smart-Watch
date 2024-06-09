import React from 'react'
import { Link } from "react-router-dom";


export default function RegisterButton() {
  return (
    <>
    <Link to="/Register" >
      <button type="button" className="btn btn-secondary">
        <i className="fa-solid fa-user-tie"></i>
        <span className="Header-Button">&nbsp; Register</span>
      </button>
    </Link>
    </>
  );
}
