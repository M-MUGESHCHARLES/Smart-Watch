import React from "react";

// images
import smartWatchCategoriesBanner from "../../../images/categories/smart-watches-categories.webp";
import wirelessTWSCategoriesBanner from "../../../images/categories/wireless-categories.webp";
import accessoriesCategoriesBanner from "../../../images/categories/accessories-categories.webp";
import soundBarsCategoriesBanner from "../../../images/categories/soundbar-categories.webp";

export const ProductCategory = () => {
  return (
    <div id="ExploreCategories" className="pt-4 pb-3">
      <div className="container mb-4">
        <h2 className="Shop-Heading"> Explore Categories</h2>
      </div>

      <div className="container p-0 px-md-4 px-5 mb-4">
        <div className="row mx-auto justify-content-center">
          <div className="container col-12 col-md-6 m-0 p-0 pb-2 pb-md-0 pe-md-2">
            <div className="image-wrapper h-100 w-100">
              <img
                src={smartWatchCategoriesBanner}
                alt=""
                className="shadow categoryBackgroundImage"
                height="auto"
                width="100%"
              />
              <span className="image-text fw-bold p-2 "> SMART WATCHES </span>
            </div>
          </div>
          <div className="container col-12 col-md-6 m-0 p-0 pt-2 pt-md-0 ps-md-2 ">
            <div className="row container m-0 p-0 pb-2 ">
              <div className="col-6 p-0 m-0 pe-2">
                <div className="image-wrapper h-100 w-100">
                  <img
                    src={wirelessTWSCategoriesBanner}
                    alt=""
                    className="shadow categoryBackgroundImage"
                  />
                  <span className="image-text fw-bold p-2"> WIRELESS TWS </span>
                </div>
              </div>
              <div className="col-6 m-0 p-0 ps-2">
                <div className="image-wrapper h-100 w-100">
                  <img
                    src={accessoriesCategoriesBanner}
                    alt=""
                    className="shadow categoryBackgroundImage "
                  />
                  <span className="image-text fw-bold p-2"> ACCESSORIES </span>
                </div>
              </div>
            </div>
            <div className="col container m-0 p-0 pt-2">
              <div className="image-wrapper h-100 w-100">
                <img
                  src={soundBarsCategoriesBanner}
                  alt=""
                  className="shadow categoryBackgroundImage "
                />
                <span className="image-text fw-bold p-2"> SOUND BARS </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="light-bg-hr">
        <hr />
      </div>
    </div>
  );
};
