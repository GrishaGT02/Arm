import React from 'react';
import './Header.css';
import logoImage from '../../assec/шашлык ка LOGO 1.png';
import image4 from '../../assec/загруженное (32).png';
import image2 from '../../assec/загруженное (28).png';
import image3 from '../../assec/загруженное (28) (1).png';
import image1 from '../../assec/загруженное (14).png';

const Header = () => {
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
          <div style={{marginRight: '50px'}} className="icon-wrapper">
            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.64062 10.051L9.59323 16.5822C9.83272 16.8072 9.95247 16.9197 10.0937 16.9474C10.1572 16.9599 10.2226 16.9599 10.2862 16.9474C10.4274 16.9197 10.5472 16.8072 10.7867 16.5822L17.7393 10.051C19.6954 8.21335 19.933 5.18936 18.2878 3.06883L17.9784 2.6701C16.0102 0.133341 12.0596 0.558775 10.6766 3.45641C10.4813 3.86572 9.89863 3.86572 9.70327 3.45641C8.32031 0.558775 4.36966 0.133345 2.40148 2.67011L2.09213 3.06883C0.446889 5.18936 0.684439 8.21335 2.64062 10.051Z" stroke="white" strokeOpacity="0.41" strokeWidth="2"/>
            </svg>
          </div>
          <div style={{marginRight: '10px'}} className="price-display">
            <span className="price-value">0</span>
            <span className="price-currency"> ₽</span>
          </div>
          <div className="icon-wrapper">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.95703 8.95715L8.95703 7.83751C8.95703 5.36407 10.9622 3.35894 13.4356 3.35894C15.909 3.35894 17.9142 5.36406 17.9142 7.83751L17.9142 8.95715" stroke="white" strokeOpacity="0.41" strokeWidth="2.23929" strokeLinecap="round"/>
              <path d="M16.7944 15.675V13.4357" stroke="white" strokeOpacity="0.41" strokeWidth="2.23929" strokeLinecap="round"/>
              <path d="M10.0767 15.675V13.4357" stroke="white" strokeOpacity="0.41" strokeWidth="2.23929" strokeLinecap="round"/>
              <path d="M4.47852 13.4357C4.47852 11.3245 4.47852 10.2689 5.13439 9.61302C5.79026 8.95715 6.84587 8.95715 8.95709 8.95715H17.9142C20.0254 8.95715 21.0811 8.95715 21.7369 9.61302C22.3928 10.2689 22.3928 11.3245 22.3928 13.4357V14.5554C22.3928 18.7778 22.3928 20.889 21.0811 22.2008C19.7693 23.5125 17.6581 23.5125 13.4357 23.5125C9.21322 23.5125 7.102 23.5125 5.79026 22.2008C4.47852 20.889 4.47852 18.7778 4.47852 14.5554V13.4357Z" stroke="white" strokeOpacity="0.41" strokeWidth="2.23929"/>
            </svg>
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
            <div className="photo-box photo-box-top-right">
                <img src={image2} alt="Grilled meat on coals" className="photo-image" />
            </div>
            <div className="bottom-row">
              <div className="photo-box photo-box-bottom-1">
                <img src={image1} alt="Grilled meat on coals" className="photo-image" />
              </div>
              <div className="photo-box photo-box-bottom-2">
                <img src={image3} alt="Grilled meat on coals" className="photo-image" />
              </div>
              <div className="photo-box photo-box-bottom-3 delivery-panel">
                <p className="delivery-text">с доставкой на дом</p>
                <button className="order-button">
                  <span>Заказать</span>
                  <div className="order-icon">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="17.5" cy="17.5" r="17.5" fill="#F58837"/>
                      <path d="M17.5 12V23M12 18L17.5 23L23 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header;

