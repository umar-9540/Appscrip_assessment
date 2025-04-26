"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FilterSidebar from "./components/FilterSidebar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./styles/globals.css";
import { MdKeyboardArrowLeft } from "react-icons/md";

const sampleProducts = [
  {
    id: 1,
    image: "/images/first.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 2,
    image: "/images/second.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 3,
    image: "/images/third.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 4,
    image: "/images/fourth.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 5,
    image: "/images/fifth.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 6,
    image: "/images/sixth.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 7,
    image: "/images/seven.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 8,
    image: "/images/eight.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 9,
    image: "/images/nine.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 10,
    image: "/images/ten.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 11,
    image: "/images/eleven.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 12,
    image: "/images/twelve.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 13,
    image: "/images/first.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 14,
    image: "/images/second.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 15,
    image: "/images/third.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 16,
    image: "/images/fourth.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 17,
    image: "/images/fifth.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 18,
    image: "/images/sixth.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 19,
    image: "/images/seven.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 20,
    image: "/images/eight.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 21,
    image: "/images/nine.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 22,
    image: "/images/ten.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 23,
    image: "/images/eleven.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
  {
    id: 24,
    image: "/images/twelve.jpg",
    name: "Product Name",
    description: "Sign in or Create an account to see pricing",
  },
];

export default function Home() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const [isSidebarVisibleMobile, setIsSidebarVisibleMobile] = useState(false);
  const [sort, setSort] = useState("Recommended");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // This code runs only on the client side
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="page-container">
      <Navbar />
      <Hero />
      <div className="page-header">
        <div className="side-header">
          {!isMobile && (
            <div className="results">{sampleProducts.length} Results</div>
          )}
          {!isMobile && (
            <button
              className="toggle-sidebar-button"
              onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            >
              <MdKeyboardArrowLeft />
              {isSidebarVisible ? "Hide Filters" : "Show Filters"}
            </button>
          )}
          {isMobile && (
            <button
              className="mobile-filter-button"
              onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            >
              FILTER
            </button>
          )}
        </div>

        <div className="products-header">
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE: HIGH TO LOW</option>
            <option>PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>
      <div className="main-content">
        {<FilterSidebar isSidebarVisible={isSidebarVisible} />}
        <Products isFilterOpen={isSidebarVisible} isMobile={isMobile} />
      </div>
      <Footer />
    </div>
  );
}
