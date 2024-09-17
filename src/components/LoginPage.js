import React from 'react'
import '../assets/css/loginPage.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <>
            <div className='login-page-section-container'>
                <div className='login-page-content-title'>
                    <h1>WELCOME BACK</h1>
                </div>
                <div className='login-page-form-section'>
                    <div className='login-page-email-field-section'>
                        <p>Your Email</p>
                        <input type='email' className='login-email-input-field' placeholder='Enter your email address' />
                    </div>
                    <div className='login-page-email-field-section'>
                        <p>Your Password</p>
                        <input type='password' className='login-password-input-field' placeholder='Enter your password' />
                    </div>
                    <div className='login-page-forgot-link-section'>
                        <a href='#'>Forgot password?</a>
                    </div>
                    <div className='login-page-button-section'>
                        <button>SIGN IN</button>
                    </div>
                </div>
                <div className='login-page-create-account-section'>
                    <p>New to The Figma Store?</p>
                    <Link to='/register'>
                        <button>CREATE AN ACCOUNT</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LoginPage
