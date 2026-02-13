import React from "react";
import "./ProductCard.css";

function ProductCard({ title, price, image, inStock }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <h2>{title}</h2>
      <p className="price">₹{price}</p>
      <p className={inStock ? "stock in" : "stock out"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;
