import React from 'react'
import '../../sections/sections.css'

import Header from '../../sections/header/Header';
import Hero from '../../sections/hero/Hero';
import Explore from "../../sections/Explore/Explore";
import Features from "../../sections/Features/Features";
import ProductDisplay from "../../sections/productDisplay/ProductDisplay";
import FAQ from "../../sections/FAQ/FAQ";
import FeedBack from "../../sections/feedback/FeedBack";
import Footer from "../../sections/footer/Footer";


export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Explore />
      <Features />
      <ProductDisplay />
      <FAQ />
      <FeedBack />
      <Footer />
    </>
  );
}
