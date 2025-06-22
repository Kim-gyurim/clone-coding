import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // 현재 경로 확인
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="header">
      {/* 상단 링크 */}
      <div className="top-nav">
        <div className="top-links">
          <span>회원가입</span>
          <span>로그인</span>
          <span>고객센터 ▾</span>
        </div>
      </div>

      {/* 로고, 검색창, 아이콘 */}
      <div className="header-inner">
        <div className="left-section">
          <img src="/logo.png" alt="Kurly Logo" className="logo-img" />

          {/* 마켓컬리 / 뷰티컬리 탭 */}
          <nav className="nav-links">
            <Link
              to="/"
              className={currentPath === "/" ? "active" : ""}
              style={{ textDecoration: "none" }}
            >
              마켓컬리
            </Link>
            <span className="divider">|</span>
            <Link
              to="/beauty"
              className={currentPath === "/beauty" ? "active" : ""}
              style={{ textDecoration: "none" }}
            >
              뷰티컬리
            </Link>
          </nav>
        </div>

        {/* 검색창 */}
        <div className="search-container">
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            className="search-input"
          />
          <button className="search-btn">
            <img src="/search.png" alt="search" />
          </button>
        </div>

        {/* 오른쪽 아이콘 메뉴 */}
        <div className="icon-menu">
          <img src="/location.png" alt="location" />
          <img src="/heart.png" alt="heart" />
          <img src="/cart.png" alt="cart" />
        </div>
      </div>

      {/* 카테고리 + 주요 메뉴 */}
      <div className="gnb">
        <div
          className="category-menu"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span>☰</span>
          <span>카테고리</span>
          {isDropdownOpen && (
            <div className="category-dropdown">
              <ul>
                <li>채소</li>
                <li>과일·견과·쌀</li>
                <li>수산·해산·건어물</li>
                <li>정육·가공육·달걀</li>
                <li>국·반찬·메인요리</li>
                <li>샐러드·간편식</li>
                <li>면·양념·오일</li>
                <li>생수·음료·우유</li>
                <li>간식·과자·떡</li>
                <li>베이커리</li>
                <li>유제품</li>
                <li>건강식품</li>
                <li>와인·위스키·칵테일</li>
                <li>전통주</li>
                <li>주방용품</li>
              </ul>
            </div>
          )}
        </div>

        <nav className="main-links">
          <span>신상품</span>
          <span>베스트</span>
          <span>알뜰쇼핑</span>
          <span>특가/혜택</span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
