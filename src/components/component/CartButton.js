import React from 'react'

export const CartButton = () => {
  return (
    <>
      <button type="button" className="btn btn-secondary position-relative zoom-effect">
        <i className="fa-solid fa-cart-shopping"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          0<span class="visually-hidden">items</span>
        </span>
      </button>
    </>
  );
}
