import React from "react";
import TopHeader from "./components/TopHeader";
import HeroSection from "./components/herosection";
import Nav from "./components/navbar";
import Categories from "./components/categories";
import Product from "./components/Product";
import FlashSales from "./components/FlashSales";
import Music from "./components/music";
import OurProduct from "./components/OurProduct";
import Footer from "./components/footer";
import Arrival from "./components/Arrival";

export default function Home() {
  return (
    <div>
      <TopHeader />
      <Nav />
      <HeroSection />
      <FlashSales />
     <Categories/>
     <Product/>
     <Music/>
     <OurProduct />
     <Arrival/>
     <Footer/>
    </div>
  );
}
