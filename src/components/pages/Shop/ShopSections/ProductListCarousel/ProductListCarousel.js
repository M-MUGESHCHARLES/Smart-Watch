import React from "react";
import Slider from "react-slick";
import '../../Shop.css';

import { Item } from "../Item/Item";

// icons
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoIosArrowDropright } from "react-icons/io";



function SampleNextArrow (props) {
  const { className, style, onClick } = props;
  return (
    <IoArrowForwardCircleOutline
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow (props) {
  const { className, style, onClick } = props;
  return (
    <IoArrowBackCircleOutline
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function ProductListCarousel({ title, product_list }) {
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.2,
    slidesToScroll: 1,
    arrows: true,
    rows: 1,
    swipeToSlide: true,
    swipe: true,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3.8,
          rows:1
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
        },
      },
      // Using the break down below may change the view of the slides in mobile screens 

      // {
      //   breakpoint: 400,
      //   settings: {
      //     slidesToShow: 1,
      //   },
      // },
    ],
  };

  return (
    <div className="pt-4 pb-3" id="ProductListCarousel">
      <div className="container mb-4 d-flex flex-row justify-content-between">
        <h2 className="Shop-Heading"> {title}</h2>
        <span className="icon-link icon-link-hover align-self-end fw-medium viewall ">          
          View all <IoIosArrowDropright className="bi fs-5" />
        </span>
      </div>

      <div className="slider-container px-4 mx-auto pb-3">
        <Slider {...settings}>

          {product_list.map((item, i) => {
            return (
              <div key={i}>
                <Item
                  name={item.name}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                  old_price={item.old_price}
                  bestseller={item.bestseller}
                  colors={item.colors}
                />
              </div>
            );
          })}

        </Slider>
      </div>

      <div className="light-bg-hr">
        <hr />
      </div>
    </div>
  );
}

export default ProductListCarousel;
