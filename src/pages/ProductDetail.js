import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../components/Products";
import "./ProductDetail.css"; // css 꼭 import 됐는지 확인

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div>상품을 찾을 수 없습니다.</div>;

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => quantity > 1 && setQuantity((prev) => prev - 1);
  const totalPrice = (quantity * product.price).toLocaleString();

  return (
    <div className="product-detail-wrapper"> {/* << 여기 추가 */}
      <div className="product-detail">
        <div className="left">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="right">
          <h2 className="title">{product.name}</h2>
          <div className="price-row">
            <span className="discount">{product.discount}%</span>
            <span className="price">{product.price.toLocaleString()}원</span>
          </div>
          <div className="original-price">
            {product.originalPrice.toLocaleString()}원
          </div>


          <ul className="info">
            <li>원산지: {product.origin}</li>
            <li>판매자: {product.seller}</li>
            <li>포장타입: {product.packaging}</li>
            <li>판매단위: {product.unit}</li>
            <li>중량/용량: {product.weight}</li>
          </ul>

          <div className="note">{product.notice}</div>

          <div className="buy-section">
            <div className="quantity">
              <button onClick={decreaseQty}>-</button>
              <input type="text" readOnly value={quantity} />
              <button onClick={increaseQty}>+</button>
            </div>
            <button className="add-cart">장바구니 담기</button>
          </div>

          <div className="total">총 상품금액: {totalPrice}원</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
