import React, { useState } from 'react';
import './Header.css';
import logoImage from '../../assec/шашлык ка LOGO 1.png';
import image4 from '../../assec/загруженное (32).png';
import image2 from '../../assec/загруженное (28).png';
import image1 from '../../assec/загруженное (14).png';
import image3 from '../../assec/загруженное (28) (1).png';

const Header = ({ cartItemsCount = 0, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <img src={logoImage} alt="Шашлык КА Logo" className="logo-image" />
          </div>
          <div className="brand-name">
            <span className="brand-text-white">Шашлык</span>
            <span className="brand-text-orange"> КА</span>
          </div>
        </div>

        <nav className="header-menu">
          <a href="/menu1" className="menu-item">Меню 1</a>
          <a href="/menu2" className="menu-item">Меню 2</a>
          <a href="/menu2" className="menu-item">Меню 2</a>
          <a href="/menu2" className="menu-item">Меню 2</a>
          <a href="/menu2" className="menu-item">Меню 2</a>
        </nav>

        <div className="header-right">
          <div className={`burger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <button className="login-button">
            <span>Войти</span>
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.3994 20.0566L23.9903 20.6476L24.5813 20.0566L23.9903 19.4657L23.3994 20.0566ZM8.35694 19.2209C7.8954 19.2209 7.52124 19.5951 7.52124 20.0566C7.52124 20.5182 7.8954 20.8923 8.35694 20.8923V20.0566V19.2209ZM15.0425 28.4136L15.6334 29.0045L23.9903 20.6476L23.3994 20.0566L22.8085 19.4657L14.4516 27.8227L15.0425 28.4136ZM23.3994 20.0566L23.9903 19.4657L15.6334 11.1088L15.0425 11.6997L14.4516 12.2906L22.8085 20.6476L23.3994 20.0566ZM23.3994 20.0566V19.2209H8.35694V20.0566V20.8923H23.3994V20.0566Z" fill="#F58837"/>
              <path d="M26.7422 31.7563L28.4136 31.7563C30.2597 31.7563 31.7563 30.2597 31.7563 28.4136L31.7564 11.6997C31.7564 9.85355 30.2597 8.35694 28.4136 8.35694L26.7422 8.35694" stroke="#F58837" strokeWidth="1.67139"/>
            </svg>
          </button>
          <div style={{marginRight: '50px'}} className="icon-wrapper like-icon">
            <svg width="26" height="26" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.64062 10.051L9.59323 16.5822C9.83272 16.8072 9.95247 16.9197 10.0937 16.9474C10.1572 16.9599 10.2226 16.9599 10.2862 16.9474C10.4274 16.9197 10.5472 16.8072 10.7867 16.5822L17.7393 10.051C19.6954 8.21335 19.933 5.18936 18.2878 3.06883L17.9784 2.6701C16.0102 0.133341 12.0596 0.558775 10.6766 3.45641C10.4813 3.86572 9.89863 3.86572 9.70327 3.45641C8.32031 0.558775 4.36966 0.133345 2.40148 2.67011L2.09213 3.06883C0.446889 5.18936 0.684439 8.21335 2.64062 10.051Z" stroke="#112121BF" strokeWidth="2"/>
            </svg>
          </div>
          <div style={{marginRight: '10px'}} className="price-display">
            <span className="price-value">0</span>
            <span className="price-currency"> ₽</span>
          </div>
          <div className="icon-wrapper" onClick={onCartClick} style={{cursor: 'pointer'}}>
            <svg width="26" height="26" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.95703 8.95715L8.95703 7.83751C8.95703 5.36407 10.9622 3.35894 13.4356 3.35894C15.909 3.35894 17.9142 5.36406 17.9142 7.83751L17.9142 8.95715" stroke="#112121BF" strokeWidth="2.23929" strokeLinecap="round"/>
              <path d="M16.7944 15.675V13.4357" stroke="#112121BF" strokeWidth="2.23929" strokeLinecap="round"/>
              <path d="M10.0767 15.675V13.4357" stroke="#112121BF" strokeWidth="2.23929" strokeLinecap="round"/>
              <path d="M4.47852 13.4357C4.47852 11.3245 4.47852 10.2689 5.13439 9.61302C5.79026 8.95715 6.84587 8.95715 8.95709 8.95715H17.9142C20.0254 8.95715 21.0811 8.95715 21.7369 9.61302C22.3928 10.2689 22.3928 11.3245 22.3928 13.4357V14.5554C22.3928 18.7778 22.3928 20.889 21.0811 22.2008C19.7693 23.5125 17.6581 23.5125 13.4357 23.5125C9.21322 23.5125 7.102 23.5125 5.79026 22.2008C4.47852 20.889 4.47852 18.7778 4.47852 14.5554V13.4357Z" stroke="#112121BF" strokeWidth="2.23929"/>
            </svg>
            {cartItemsCount > 0 && (
              <span className="cart-badge">{cartItemsCount}</span>
            )}
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
          <button className="mobile-menu-close" onClick={closeMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="#112121BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <nav className="mobile-menu-nav">
            <a href="/menu1" className="mobile-menu-item" onClick={closeMenu}>Меню 1</a>
            <a href="/menu2" className="mobile-menu-item" onClick={closeMenu}>Меню 2</a>
            <a href="/menu2" className="mobile-menu-item" onClick={closeMenu}>Меню 2</a>
            <a href="/menu2" className="mobile-menu-item" onClick={closeMenu}>Меню 2</a>
            <a href="/menu2" className="mobile-menu-item" onClick={closeMenu}>Меню 2</a>
          </nav>
          <div className="mobile-menu-actions">
            <button className="mobile-login-button">
              <span>Войти</span>
              <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.3994 20.0566L23.9903 20.6476L24.5813 20.0566L23.9903 19.4657L23.3994 20.0566ZM8.35694 19.2209C7.8954 19.2209 7.52124 19.5951 7.52124 20.0566C7.52124 20.5182 7.8954 20.8923 8.35694 20.8923V20.0566V19.2209ZM15.0425 28.4136L15.6334 29.0045L23.9903 20.6476L23.3994 20.0566L22.8085 19.4657L14.4516 27.8227L15.0425 28.4136ZM23.3994 20.0566L23.9903 19.4657L15.6334 11.1088L15.0425 11.6997L14.4516 12.2906L22.8085 20.6476L23.3994 20.0566ZM23.3994 20.0566V19.2209H8.35694V20.0566V20.8923H23.3994V20.0566Z" fill="#F58837"/>
                <path d="M26.7422 31.7563L28.4136 31.7563C30.2597 31.7563 31.7563 30.2597 31.7563 28.4136L31.7564 11.6997C31.7564 9.85355 30.2597 8.35694 28.4136 8.35694L26.7422 8.35694" stroke="#F58837" strokeWidth="1.67139"/>
              </svg>
            </button>
            <div className="mobile-menu-icons">
              <div className="mobile-icon-wrapper">
                <svg width="26" height="26" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.64062 10.051L9.59323 16.5822C9.83272 16.8072 9.95247 16.9197 10.0937 16.9474C10.1572 16.9599 10.2226 16.9599 10.2862 16.9474C10.4274 16.9197 10.5472 16.8072 10.7867 16.5822L17.7393 10.051C19.6954 8.21335 19.933 5.18936 18.2878 3.06883L17.9784 2.6701C16.0102 0.133341 12.0596 0.558775 10.6766 3.45641C10.4813 3.86572 9.89863 3.86572 9.70327 3.45641C8.32031 0.558775 4.36966 0.133345 2.40148 2.67011L2.09213 3.06883C0.446889 5.18936 0.684439 8.21335 2.64062 10.051Z" stroke="#112121BF" strokeWidth="2"/>
                </svg>
              </div>
              <div className="mobile-price-display">
                <span className="price-value">0</span>
                <span className="price-currency"> ₽</span>
              </div>
              <div className="mobile-icon-wrapper">
                <svg width="26" height="26" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.95703 8.95715L8.95703 7.83751C8.95703 5.36407 10.9622 3.35894 13.4356 3.35894C15.909 3.35894 17.9142 5.36406 17.9142 7.83751L17.9142 8.95715" stroke="#112121BF" strokeWidth="2.23929" strokeLinecap="round"/>
                  <path d="M16.7944 15.675V13.4357" stroke="#112121BF" strokeWidth="2.23929" strokeLinecap="round"/>
                  <path d="M10.0767 15.675V13.4357" stroke="#112121BF" strokeWidth="2.23929" strokeLinecap="round"/>
                  <path d="M4.47852 13.4357C4.47852 11.3245 4.47852 10.2689 5.13439 9.61302C5.79026 8.95715 6.84587 8.95715 8.95709 8.95715H17.9142C20.0254 8.95715 21.0811 8.95715 21.7369 9.61302C22.3928 10.2689 22.3928 11.3245 22.3928 13.4357V14.5554C22.3928 18.7778 22.3928 20.889 21.0811 22.2008C19.7693 23.5125 17.6581 23.5125 13.4357 23.5125C9.21322 23.5125 7.102 23.5125 5.79026 22.2008C4.47852 20.889 4.47852 18.7778 4.47852 14.5554V13.4357Z" stroke="#112121BF" strokeWidth="2.23929"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='border-container'>
        <div className='border'></div>
      </div>
        <div className='header-sleng-container'>
            <div className='header-sleng-text'>Вкуснейшее <span className='header-sleng-text-orange'>мясо</span> на углях</div>
        </div>
        <div className='content-container'>
          <div className="content-grid">
            <div className="photo-box photo-box-left">
              <img src={image4} alt="Grilled meat on coals" className="photo-image" />
            </div>
            <div className="right-column">
              <div className="photo-box photo-box-top-right">
                <img src={image2} alt="Grilled meat on coals" className="photo-image" />
              </div>
              <div className="bottom-row">
                <div className="photo-box photo-box-bottom-left">
                  <img src={image1} alt="Grilled meat on coals" className="photo-image" />
                </div>
                <div className="photo-box delivery-panel">
                  <div className="delivery-panel-left">
                    <img src={image3} alt="Grilled meat on coals" className="delivery-image" />
                  </div>
                  <div className="delivery-content">
                    <h2 className="delivery-title">Вам будет очень вкусно!</h2>
                    <p className="delivery-text">Доставим вкуснейший и сочнейший шашлык прямо на дом.</p>
                      <button className="order-button">
                        <span style={{marginRight: '35px'}}>Заказать</span>
                        <div className="order-icon">
                          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 0C27.165 0 35 7.64814 35 17.083C35 26.5179 27.165 34.166 17.5 34.166C7.83521 34.1658 0 26.5177 0 17.083C1.40196e-07 13.0744 1.41512 9.38866 3.7832 6.47461L16.2139 18.6094L6.28223 18.6094L6.28223 20.584L19.668 20.584L19.668 7.5166L17.6445 7.5166L17.6445 17.2119L5.13184 4.99707C8.29814 1.90916 12.6708 0.000113201 17.5 0Z" fill="#F58837"/>
                          </svg>
                        </div>
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header;

