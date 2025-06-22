import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({
  id,
  image,
  name,
  price,
  discount,
  originalPrice,
  badge,
  reviews,
}) {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <div className="image-wrap">
          <img src={image} alt={name} className="product-image" />
          {badge && (
            <span className={`badge ${badge.type}`}>{badge.text}</span>
          )}
        </div>
      </Link>

      <div className="product-name">{name}</div>

      <div className="product-prices">
        {discount && <span className="discount">{discount}%</span>}
        <span className="price">{Number(price).toLocaleString()}원</span>
      </div>

      {originalPrice && (
        <div className="original-price">
          {Number(originalPrice).toLocaleString()}원
        </div>
      )}

      <button className="add-to-cart">🛒담기</button>

      {reviews && <div className="reviews">🗨️ {reviews.toLocaleString()}</div>}
    </div>
  );
}
