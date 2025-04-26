import React, { useState } from "react";
import "../styles/ProductCard.css";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="product-card">
      <img src={product.image} alt="Product" />
      <h3>{product.name}</h3>
      <div className="product-description">
        <p>{product.description}</p>
        <button className="heart" onClick={() => setLike(!like)}>
          {like ? <FaHeart /> : <CiHeart />}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
