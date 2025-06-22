import React from "react";
import Footer from "./Footer";
import "./Beauty.css"; // 스타일 파일 연결

function BeautyHome() {
  return (
    <div>
      <div className="beauty-image-wrapper">
        <img
          src="/뷰티.png" // 실제 이미지 경로에 맞게 수정
          alt="Beauty Main"
          className="beauty-main-image"
        />
      </div>
      <Footer />
    </div>
  );
}

export default BeautyHome;
