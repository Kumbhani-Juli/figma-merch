import { faUser, faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import '../assets/css/header.css';
import { Link } from 'react-router-dom';

const Header = ({ backgroundColor }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showSearchBar, SetShowSearchBar] = useState(false);

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      // Retrieve the cart from localStorage
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(storedCart);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className={`the-figma-store-header-searchbar-container ${showSearchBar ? 'show' : ''}`}>
                <input type='text' className='the-figma-store-header-searchbar-input' placeholder='Search' />
            </div>
            <div className='the-figma-store-header-container' id='top'
                style={{
                    backgroundColor: backgroundColor ? backgroundColor : '#fff',
                }}
            >
                <div className="the-figma-store-header-menu-toggle" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} onClick={() => SetShowSearchBar(false)} />
                </div>
                <div className={`${isMenuOpen ? 'the-figma-store-header-left-content mobile-hidden' : 'the-figma-store-header-left-content'}`}>
                    <Link to='/'>
                        <button onClick={() => setIsMenuOpen(false)}>SHOP</button>
                    </Link>
                    <Link to='/about'>
                        <button onClick={() => setIsMenuOpen(false)}>ABOUT</button>
                    </Link>
                    {
                        isMenuOpen && <div className='header-other-links-container'>
                            <Link to='/faqs' className='footer-router-link' onClick={() => setIsMenuOpen(false)}>
                                <li>FAQ</li>
                            </Link>
                            <Link to='/about#contact' className='footer-router-link' onClick={() => setIsMenuOpen(false)}>
                                <li>Contact Us</li>
                            </Link>
                            <Link to='/privacy-policy' className='footer-router-link' onClick={() => setIsMenuOpen(false)}>
                                <li>Privacy Policy</li>
                            </Link>
                            <Link to='/terms-of-service' className='footer-router-link' onClick={() => setIsMenuOpen(false)}>
                                <li>Terms of Service</li>
                            </Link>
                            <Link to='/login' className='footer-router-link' onClick={() => setIsMenuOpen(false)}>
                                <li>Account</li>
                            </Link>
                        </div>
                    }
                    <div className='the-figma-store-header-search-button'>
                        <FontAwesomeIcon icon={faSearch} className='the-figma-header-search-icon' onClick={() => SetShowSearchBar(!showSearchBar)} />
                    </div>
                </div>
                <div className='the-figma-store-header-mobile-search-button'>
                    <FontAwesomeIcon icon={faSearch} className='the-figma-header-mobile-search-icon' onClick={() => { SetShowSearchBar(!showSearchBar); setIsMenuOpen(false) }} />
                </div>
                <div className='the-figma-store-header-title-section'>
                    <Link to='/' className='router-link'><h3>THE FIGMA STORE</h3></Link>
                </div>
                <div className='the-figma-store-header-right-content'>
                    <Link to='/login' className='router-link'>
                        <FontAwesomeIcon icon={faUser} className='the-figma-store-header-user-icon' />
                    </Link>
                    <Link to='/cart' className='router-link'>
                        <button>CART {cartItems.length}</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;
