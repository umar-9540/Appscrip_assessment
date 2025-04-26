import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/Products.css";

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

const Products = ({ isFilterOpen, isMobile }) => {
  return (
    <section className="products-section">
      <div
        className={`products-grid ${
          isMobile
            ? "two-columns"
            : isFilterOpen
            ? "three-columns"
            : "four-columns"
        }`}
      >
        {sampleProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Products;
