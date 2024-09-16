import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../assets/css/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='the-figma-store-header-container'>
                <div className='the-figma-store-header-left-content'>
                    <Link to='/'>
                        <button>SHOP</button>
                    </Link>
                    <Link to='/about'>
                        <button>ABOUT</button>
                    </Link>
                </div>
                <div className='the-figma-store-header-title-section'>
                    <Link to='/' className='router-link'><h3>THE FIGMA STORE</h3></Link>
                </div>
                <div className='the-figma-store-header-right-content'>
                    <FontAwesomeIcon icon={faUser} className='the-figma-store-header-user-icon' />
                    <button>CART</button>
                </div>
            </div>
        </>
    )
}

export default Header
