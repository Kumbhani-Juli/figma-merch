import React from 'react'
import '../assets/css/cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
      <div className='cart-page-section-container'>
        <div className='cart-page-top-section-content'>
          <h3>0 items in Cart</h3>
        </div>
        <div className='cart-page-middle-section-content'>
          <h1>EMPTY CART, AAACKKK</h1>
        </div>
        <div className='cart-page-bottom-section-button'>
          <Link to='/'>
            <button>SEE ALL PRODUCTS</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Cart
