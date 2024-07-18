import React from 'react'
import { Link } from "react-router-dom";


export default function RegisterButton() {
  return (
    <>
    <Link to="/Register" >
      <button type="button" className="btn btn-outline-secondary zoom-effect">
        <span className="Header-Button">Sign-up </span>
      </button>
    </Link>
    </>
  );
}
