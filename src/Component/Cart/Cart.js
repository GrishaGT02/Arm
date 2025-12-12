import React from 'react';
import './Cart.css';

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const bonusPoints = Math.floor(totalPrice * 0.1);

  return (
    <div className={`cart-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="cart-container" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2 className="cart-title">Корзина</h2>
          <button className="cart-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="#112121BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-illustration">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="50" stroke="#112121BF" strokeWidth="2" strokeDasharray="5 5"/>
                <path d="M40 40L80 80M80 40L40 80" stroke="#112121BF" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="cart-empty-text">Пока тут пусто</p>
            <p className="cart-empty-subtext">Добавьте товары из меню</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image || '/placeholder.png'} alt={item.title} />
                  </div>
                  <div className="cart-item-info">
                    <h3 className="cart-item-title">{item.title}</h3>
                    <div className="cart-item-details">
                      <span className="cart-item-price">{item.price} <span className="price-currency">₽</span></span>
                      <span className="cart-item-separator">|</span>
                      <span className="cart-item-weight">{item.weight}</span>
                    </div>
                  </div>
                  <div className="cart-item-quantity">
                    <button 
                      className="quantity-btn-decrease" 
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button 
                      className="quantity-btn-increase" 
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3 className="cart-summary-title">Итого в корзине:</h3>
              <div className="cart-summary-line-1">
                <span className="cart-summary-line-1-text">{totalItems} товаров на</span>
                <span className="cart-summary-price">{totalPrice.toLocaleString()} <span className="price-currency">₽</span></span>
              </div>
              <div className="cart-summary-line-1">
                <span className="cart-summary-line-1-text">Начислим бонусов:</span>
                <span className="cart-summary-price">{bonusPoints} <span className="price-currency">₽</span></span>
              </div>
              <div className="cart-summary-line-1">
                <span className="cart-summary-line-1-text">Доставка:</span>
                <span className="cart-delivery">Бесплатная</span>
              </div>
              <button className="cart-checkout-btn">
                <span className="cart-checkout-btn-text">К оформлению</span>
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 0C27.165 0 35 7.64814 35 17.083C35 26.5179 27.165 34.166 17.5 34.166C7.83521 34.1658 0 26.5177 0 17.083C1.40196e-07 13.0744 1.41512 9.38866 3.7832 6.47461L16.2139 18.6094L6.28223 18.6094L6.28223 20.584L19.668 20.584L19.668 7.5166L17.6445 7.5166L17.6445 17.2119L5.13184 4.99707C8.29814 1.90916 12.6708 0.000113201 17.5 0Z" fill="white"/>
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

