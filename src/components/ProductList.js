import ProductCard from "./ProductCard";
import "./ProductList.css"; // 스타일 파일은 따로 분리

const products = [
  {
    id: 1,
    image: "/옥수수.png",
    name: "초당옥수수(노랑이) 5입",
    price: "9990",
    discount: 28,
    originalPrice: "13900",
    badge: { type: "shopping", text: "장보기 특가" },
    reviews: 9999
  },
  {
    id: 2,
    image: "/복숭아.jpg",
    name: "(특)신비 복숭아 700g",
    price: "15900",
    discount: 27,
    originalPrice: "21900",
    reviews: 999
  },
  {
    id: 3,
    image: "/채리.jpg",
    name: "미국산 워싱턴 생체리 300g (10row)",
    price: "8990",
    discount: 30,
    originalPrice: "12900",
    badge: { type: "shopping", text: "장보기 특가" },
    reviews: 9999
  },
  {
    id: 4,
    image: "/돼지고기.jpg",
    name: "[노포기행] 용강동식 돼지 왕구이 1kg",
    price: "8990",
    discount: 30,
    originalPrice: "12900",
    badge: { type: "members", text: "멤버스특가" },
    reviews: 999
  },
];


function ProductList() {
  return (
    <section className="product-section">
      <div className="section-header">
        <h2 className="product-title">
          🛒 지금 가장 많이 담는 특가 <span className="arrow">&gt;</span>
        </h2>
        <p className="product-sub">
          꼭 담아야 할 추천 특가텍 최대 60% OFF
        </p>
      </div>
      <div className="product-list">
        {products.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;