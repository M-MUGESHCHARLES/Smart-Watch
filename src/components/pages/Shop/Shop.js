import React from 'react';
import "./Shop.css";
// import Spinner from '../../component/Spinner';
import {ShopHeader} from '../../sections/header/ShopHeader.js';
import HeroBanner from './ShopSections/Banners1.js';
import { ProductCategory } from './ShopSections/ProductCategory.js';
import IconsCarousel from './ShopSections/IconsCarousel.js';
import Footer2 from '../../sections/footer/Footer2.js';
import ProductListCarousel from "./ShopSections/ProductListCarousel/ProductListCarousel.js";
import TrendingNowCarousel from './ShopSections/TrendingNowCarousel.js';
import Product_List from '../../Assets/Product_List.js';
import FAQ from '../HomePage/HomePageSections/FAQ/FAQ.js';
import FeedBack from '../HomePage/HomePageSections/feedback/FeedBack.js';
import { BrandPartners } from './ShopSections/BrandPartners.js';
import { ProductDisplay } from './ProductDisplay.js';


function getRandomElementsFromArray(array, startIndex, endIndex) {
  // Get the subarray within the specified range
  const subArray = array.slice(startIndex, endIndex);

  // Shuffle the subarray using the Fisher-Yates algorithm
  for (let i = subArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [subArray[i], subArray[j]] = [subArray[j], subArray[i]];
  }

  return subArray;
};

export default function Shop() {



  const product_list1 = getRandomElementsFromArray(Product_List, 0, 5);

  const product_list2 = getRandomElementsFromArray(Product_List, 5, 10);
    
  return (
    <>
      <ShopHeader />

      <HeroBanner />

      <ProductCategory />

      <IconsCarousel />

      <ProductListCarousel title="New Launches" product_list={product_list1} />

      <TrendingNowCarousel />

      <ProductListCarousel title="Best Sellers" product_list={product_list2} />

      <ProductDisplay />
      
      <BrandPartners />

      <FeedBack />

      <FAQ />

      <Footer2 />  


    </>
  );
}



{/* <div id="Shop">
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
</div> */}