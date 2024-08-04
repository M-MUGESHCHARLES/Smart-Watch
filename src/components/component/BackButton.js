import React from 'react'
import { Link } from 'react-router-dom';
import ScrollToTopLink from './ScrollToTopLink';

export default function BackButton() {
  return (
    <>
    <ScrollToTopLink to="/" > 
      <div className="col-md-3 text-center header-buttons-div ">
        <button type="button" className="btn btn-secondary ms-5 me-3">
          <span className="Header-Button ps-2 pe-2 zoom-effect">
            <i class="fa-solid fa-arrow-left bi "></i> &nbsp; Back
          </span>
        </button>
      </div>
    </ScrollToTopLink>
    </>
  );
}
