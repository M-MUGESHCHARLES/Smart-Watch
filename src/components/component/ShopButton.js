import React from 'react'
import { Link } from 'react-router-dom';

export default function ShopButton() {
  return (
    <>
      <Link to="/Shop">
          <button type="button" className="btn btn-secondary me-2 zoom-effect">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="Header-Button">&nbsp; Shop</span>
          </button>
      </Link>
    </>
  );
}
