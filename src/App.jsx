import React from "react";
import Food from "./components/food";
import HeadlineCards from "./components/headlineCards";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Category from "./components/category";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food/>
      <Category/>
    </div>
  )
    
}