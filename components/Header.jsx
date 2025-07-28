import React from 'react'
import { useMediaQuery } from 'react-responsive'
import './Header.css'
const Header = () => {
  // 예: 화면 너비가 768px 이상이면 true
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  // 예: 화면 너비가 768px 이하이면 true
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const rootElement = document.getElementById('root');

  const width = rootElement.clientWidth;
  const height = rootElement.clientHeight;

  console.log('React 루트 엘리먼트 너비:', width);
  console.log('React 루트 엘리먼트 높이:', height);

  console.log("isMobile : ", isMobile);
  console.log("isDesktop : ", isDesktop);
  return (
    <header className="header">
      <div className="icon">
        <img src="icon.png" alt="아이콘" />
      </div>
      {isDesktop && <nav className="menu-list">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          {/* <!-- 메뉴 아이템을 자유롭게 추가 --> */}
        </ul>
      </nav>}
      {isMobile || isDesktop && <div className="hamburger-menu">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>}
    </header>
  )
}

export default Header