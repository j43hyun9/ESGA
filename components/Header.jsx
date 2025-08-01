import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
    <header className="header">
      <div className="logo">
        <a href="/">
          <div className="imgFoot">
            <img src="/images/foot.png" alt="로고" width="40" />
            </div>
            <span style={{color:'#EEDC52'}} className="logo-text">PAW </span>
            <span style={{color:'#30CDB0'}} className="logo-text">PAW </span>

          </a>
        </div>
        <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>
      {/* <div className="header-background"></div> */}
      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#" onClick={toggleMenu}>Menu 1</a></li>
            <li><a href="#" onClick={toggleMenu}>Menu 2</a></li>
            <li><a href="#" onClick={toggleMenu}>Menu 3</a></li>
          </ul>
        </nav>
        </div>
  );
}

export default Header;