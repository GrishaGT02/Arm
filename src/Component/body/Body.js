import React, { useState } from 'react';
import './Body.css';
import productImage from '../../assec/Фото.png';

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={productImage} alt={product.title} className="product-image" />
      </div>
      
      <div className="product-info">
        <div className="product-title-row">
          <h3 className="product-title">{product.title}</h3>
          <span className="product-weight">{product.weight}</span>
        </div>
        <p className="product-description">
          {product.description}
        </p>
      </div>

      <div className="product-actions">
        <div className="product-price">
          <span className="price-value-1">{product.price}</span>
          <span className="price-currency"> ₽</span>
        </div>
        <div className="product-actions-right">
          <div className="quantity-selector">
            <button className="quantity-btn" onClick={handleDecrease}>-</button>
            <input 
              type="number" 
              className="quantity-input" 
              value={quantity} 
              readOnly
            />
            <button className="quantity-btn" onClick={handleIncrease}>+</button>
          </div>
          <button 
            className="add-to-cart-btn" 
            onClick={() => onAddToCart({ ...product, quantity, image: productImage })}
          >
            В корзину
          </button>
          <button className="favorite-btn">
            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.64062 10.051L9.59323 16.5822C9.83272 16.8072 9.95247 16.9197 10.0937 16.9474C10.1572 16.9599 10.2226 16.9599 10.2862 16.9474C10.4274 16.9197 10.5472 16.8072 10.7867 16.5822L17.7393 10.051C19.6954 8.21335 19.933 5.18936 18.2878 3.06883L17.9784 2.6701C16.0102 0.133341 12.0596 0.558775 10.6766 3.45641C10.4813 3.86572 9.89863 3.86572 9.70327 3.45641C8.32031 0.558775 4.36966 0.133345 2.40148 2.67011L2.09213 3.06883C0.446889 5.18936 0.684439 8.21335 2.64062 10.051Z" stroke="#F58837" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const Body = ({ onAddToCart }) => {
  const products = [
    {
      id: 1,
      title: 'Шашлык из свинины',
      weight: '250г',
      description: 'Идеальный баланс мяса и нежного жирка. Сочная, тающая во рту, с золотистой корочкой.',
      price: 180
    },
    {
      id: 2,
      title: 'Шашлык из баранины',
      weight: '250г',
      description: 'Нежное мясо с ароматом специй. Идеально прожаренное на углях.',
      price: 220
    },
    {
      id: 3,
      title: 'Шашлык из курицы',
      weight: '250г',
      description: 'Сочное куриное мясо с золотистой корочкой. Легкое и питательное.',
      price: 150
    },
    {
      id: 4,
      title: 'Люля-кебаб',
      weight: '200г',
      description: 'Традиционный кебаб из рубленого мяса с ароматными специями.',
      price: 190
    },
    {
      id: 5,
      title: 'Шаурма',
      weight: '300г',
      description: 'Свежая шаурма с нежным мясом, овощами и соусом.',
      price: 200
    },
    {
      id: 6,
      title: 'Гарнир на углях',
      weight: '200г',
      description: 'Овощи, запеченные на углях с ароматом дыма.',
      price: 120
    },
    {
      id: 7,
      title: 'Шашлык из свинины',
      weight: '300г',
      description: 'Большая порция сочного шашлыка из свинины.',
      price: 220
    },
    {
      id: 8,
      title: 'Шашлык из баранины',
      weight: '300г',
      description: 'Большая порция ароматного шашлыка из баранины.',
      price: 260
    }
  ];

  return (
    <div className="body">
      <div className="body-header">
        <div className="body-brand-name">
          <span className="body-brand-text-orange">Наше</span>
          <span className="body-brand-text-black">меню</span>
        </div>

        <nav className="body-menu">
          <a href="#all" className="body-menu-item">
            Все меню
            <svg className="menu-arrow-icon" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 0C27.165 0 35 7.64814 35 17.083C35 26.5179 27.165 34.166 17.5 34.166C7.83521 34.1658 0 26.5177 0 17.083C1.40196e-07 13.0744 1.41512 9.38866 3.7832 6.47461L16.2139 18.6094L6.28223 18.6094L6.28223 20.584L19.668 20.584L19.668 7.5166L17.6445 7.5166L17.6445 17.2119L5.13184 4.99707C8.29814 1.90916 12.6708 0.000113201 17.5 0Z" fill="#F58837"/>
            </svg>
          </a>
          <a href="#sets" className="body-menu-item">
            Сеты
            <svg className="menu-arrow-icon" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 0C27.165 0 35 7.64814 35 17.083C35 26.5179 27.165 34.166 17.5 34.166C7.83521 34.1658 0 26.5177 0 17.083C1.40196e-07 13.0744 1.41512 9.38866 3.7832 6.47461L16.2139 18.6094L6.28223 18.6094L6.28223 20.584L19.668 20.584L19.668 7.5166L17.6445 7.5166L17.6445 17.2119L5.13184 4.99707C8.29814 1.90916 12.6708 0.000113201 17.5 0Z" fill="#F58837"/>
            </svg>
          </a>
          <a href="#pork" className="body-menu-item">
            Шашлык из свинины
            <svg className="menu-arrow-icon" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 0C27.165 0 35 7.64814 35 17.083C35 26.5179 27.165 34.166 17.5 34.166C7.83521 34.1658 0 26.5177 0 17.083C1.40196e-07 13.0744 1.41512 9.38866 3.7832 6.47461L16.2139 18.6094L6.28223 18.6094L6.28223 20.584L19.668 20.584L19.668 7.5166L17.6445 7.5166L17.6445 17.2119L5.13184 4.99707C8.29814 1.90916 12.6708 0.000113201 17.5 0Z" fill="#F58837"/>
            </svg>
          </a>
          <a href="#lamb" className="body-menu-item">
            Шашлык из баранины
            <svg className="menu-arrow-icon" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 0C27.165 0 35 7.64814 35 17.083C35 26.5179 27.165 34.166 17.5 34.166C7.83521 34.1658 0 26.5177 0 17.083C1.40196e-07 13.0744 1.41512 9.38866 3.7832 6.47461L16.2139 18.6094L6.28223 18.6094L6.28223 20.584L19.668 20.584L19.668 7.5166L17.6445 7.5166L17.6445 17.2119L5.13184 4.99707C8.29814 1.90916 12.6708 0.000113201 17.5 0Z" fill="#F58837"/>
            </svg>
          </a>
          <a href="#chicken" className="body-menu-item">
            Шашлык из курицы
            <svg className="menu-arrow-icon" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 0C27.165 0 35 7.64814 35 17.083C35 26.5179 27.165 34.166 17.5 34.166C7.83521 34.1658 0 26.5177 0 17.083C1.40196e-07 13.0744 1.41512 9.38866 3.7832 6.47461L16.2139 18.6094L6.28223 18.6094L6.28223 20.584L19.668 20.584L19.668 7.5166L17.6445 7.5166L17.6445 17.2119L5.13184 4.99707C8.29814 1.90916 12.6708 0.000113201 17.5 0Z" fill="#F58837"/>
            </svg>
          </a>
          <a href="#lyulya" className="body-menu-item">
            Люля-кебаб
            <svg className="menu-arrow-icon" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 0C27.165 0 35 7.64814 35 17.083C35 26.5179 27.165 34.166 17.5 34.166C7.83521 34.1658 0 26.5177 0 17.083C1.40196e-07 13.0744 1.41512 9.38866 3.7832 6.47461L16.2139 18.6094L6.28223 18.6094L6.28223 20.584L19.668 20.584L19.668 7.5166L17.6445 7.5166L17.6445 17.2119L5.13184 4.99707C8.29814 1.90916 12.6708 0.000113201 17.5 0Z" fill="#F58837"/>
            </svg>
          </a>
          <a href="#shawarma" className="body-menu-item">
            Шаурма
            <svg className="menu-arrow-icon" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 0C27.165 0 35 7.64814 35 17.083C35 26.5179 27.165 34.166 17.5 34.166C7.83521 34.1658 0 26.5177 0 17.083C1.40196e-07 13.0744 1.41512 9.38866 3.7832 6.47461L16.2139 18.6094L6.28223 18.6094L6.28223 20.584L19.668 20.584L19.668 7.5166L17.6445 7.5166L17.6445 17.2119L5.13184 4.99707C8.29814 1.90916 12.6708 0.000113201 17.5 0Z" fill="#F58837"/>
            </svg>
          </a>
          <a href="#garnish" className="body-menu-item">
            Гарнир на углях
            <svg className="menu-arrow-icon" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 0C27.165 0 35 7.64814 35 17.083C35 26.5179 27.165 34.166 17.5 34.166C7.83521 34.1658 0 26.5177 0 17.083C1.40196e-07 13.0744 1.41512 9.38866 3.7832 6.47461L16.2139 18.6094L6.28223 18.6094L6.28223 20.584L19.668 20.584L19.668 7.5166L17.6445 7.5166L17.6445 17.2119L5.13184 4.99707C8.29814 1.90916 12.6708 0.000113201 17.5 0Z" fill="#F58837"/>
            </svg>
          </a>
          <a href="#sauces" className="body-menu-item">
            Соусы
            <svg className="menu-arrow-icon" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 0C27.165 0 35 7.64814 35 17.083C35 26.5179 27.165 34.166 17.5 34.166C7.83521 34.1658 0 26.5177 0 17.083C1.40196e-07 13.0744 1.41512 9.38866 3.7832 6.47461L16.2139 18.6094L6.28223 18.6094L6.28223 20.584L19.668 20.584L19.668 7.5166L17.6445 7.5166L17.6445 17.2119L5.13184 4.99707C8.29814 1.90916 12.6708 0.000113201 17.5 0Z" fill="#F58837"/>
            </svg>
          </a>
          <a href="#drinks" className="body-menu-item">
            Напитки
            <svg className="menu-arrow-icon" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 0C27.165 0 35 7.64814 35 17.083C35 26.5179 27.165 34.166 17.5 34.166C7.83521 34.1658 0 26.5177 0 17.083C1.40196e-07 13.0744 1.41512 9.38866 3.7832 6.47461L16.2139 18.6094L6.28223 18.6094L6.28223 20.584L19.668 20.584L19.668 7.5166L17.6445 7.5166L17.6445 17.2119L5.13184 4.99707C8.29814 1.90916 12.6708 0.000113201 17.5 0Z" fill="#F58837"/>
            </svg>
          </a>
        </nav>
      </div>

      <div className="products-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Body;

