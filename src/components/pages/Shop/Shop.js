import React from 'react';
import "./Shop.css";
import Spinner from '../../component/Spinner';
import Header2 from '../../sections/header/Header2';
import Footer from '../../sections/footer/Footer.js';

export default function Shop() {

    
  return (
    <>
      <Header2 />

      <div id="Shop">
        <h1 className=""> Site Under Construction</h1>

        <div className="mt-5 mb-4">
          <Spinner />
        </div>
        <div className="Roboto">
          <p>
            Please forgive the inconvenience. <br />
            We are currently initializing our brand new site.
          </p>
          <p>It's okay, we're excited too!</p>
        </div>

        <h6 className="mt-5 ">
          " Stay Connected, Stay Active: Your Life, Your Smart Watch "
        </h6>

        <div className="light-bg-hr mt-5" >
          <hr />
        </div>
      </div>

      <Footer />
    </>
  );
}
