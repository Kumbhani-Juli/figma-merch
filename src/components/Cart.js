import React, { useEffect, useState } from 'react';
import '../assets/css/cart.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve the cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + calculateSubtotal(item.price, item.quantity), 0);
  };

  return (
    <>
      <div className='cart-page-section-container'>
        <div className='cart-page-top-section-content'>
          <h3>{cartItems.length} items in Cart</h3>
        </div>
        {cartItems.length > 0 ? (
          <div className='cart-table-container'>
            <table className='cart-table'>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className='cart-item-product'>
                        <FontAwesomeIcon icon={faCircleXmark} className='cart-remove-icon' onClick={() => handleRemoveItem(index)} />
                        <img src={item.img} alt={item.productName} className='cart-item-img' />
                        <div className='cart-product-title'>
                          <h4>{item.productName}</h4>
                          <h4>{item.size}</h4>
                        </div>
                      </div>
                    </td>
                    <td>Rs. {item.price}</td>
                    <td>{item.quantity}</td>
                    <td>Rs. {calculateSubtotal(item.price, item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={4} className='cart-total-row'>
                    <h2>Total*: Rs. {calculateTotal().toFixed(2)}</h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <>
            <div className='cart-page-middle-section-content'>
              <h1>EMPTY CART, AAACKKK</h1>
            </div>
            <div className='cart-page-bottom-section-button'>
              <Link to='/'>
                <button>SEE ALL PRODUCTS</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
