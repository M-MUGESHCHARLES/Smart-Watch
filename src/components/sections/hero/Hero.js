import React from "react";
import Watch1 from "../../images/smart-watch-1.png";
import Watch2 from "../../images/smart-watch-2.png";
import Watch3 from "../../images/smart-watch-3.png";

const Hero = () => {
  return (
    <div id="hero-section">
      <div className="row hero-row">
        <div className="container col-lg-3 col-md-12 hero-container-left">
          <div className="hero-content-left ps-5 pe-5">
            <h2 className="fs-2 fw-bold "> Smart Watch </h2>
            <em className="text-body-secondary">
              <h3 className=""> for Your </h3>
              <h2 className="  fs-3 fw-semibold"> Smart Life </h2>
            </em>
            <div className="buy-now-btn-div justify-content-center ">
              <button
                type="button"
                class="btn btn-warning button1 light-bg-button zoom-effect px-4 text-nowrap "
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="container col-lg-6 col-md-12 text-center hero-container-center">
          <div
            id="carouselExampleIndicators"
            class="carousel slide "
            data-bs-ride="carousel"
            data-bs-interval="10000"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="rings ">
                  <div className="ring3 justify-content-center">
                    <div className="ring2 justify-content-center">
                      <div className="ring1 justify-content-center ">
                        <div className="hero-img justify-content-center">
                          {/* <img src={avatar} alt="hero-img" height="150px" /> */}
                          <img
                            src={Watch1}
                            alt="Hero-Img1"
                            className="Hero-img1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="rings">
                  <div className="ring6 justify-content-center">
                    <div className="ring5 justify-content-center">
                      <div className="ring4 justify-content-center ">
                        <div className="hero-img justify-content-center">
                          {/* <img src={avatar} alt="hero-img" height="150px" /> */}
                          <img
                            src={Watch2}
                            alt="Hero-Img2"
                            className="Hero-img2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="rings">
                  <div className="ring9 justify-content-center">
                    <div className="ring8 justify-content-center">
                      <div className="ring7 justify-content-center ">
                        <div className="hero-img justify-content-center">
                          {/* <img src={avatar} alt="hero-img" height="150px" /> */}
                          <img
                            src={Watch3}
                            alt="Hero-Img3"
                            className="Hero-img3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="container col-lg-3 col-md-12 text-center hero-container-right text-md-center text-start">
          <div className="hero-content-right ps-5 pe-5 ">
            <h2 className="fs-2 fw-bold c1">
              Outfit
              <span className="fw-normal text-body-secondary"> Style </span>
            </h2>
            <br />
            <p className="">
              Many smartwatches come equipped with sensors to monitor fitness{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="light-bg-hr">
        <hr />
      </div>
    </div>
  );
};

export default Hero;
