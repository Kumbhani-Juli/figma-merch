import React, { useState } from 'react'
import '../assets/css/loginPage.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const [showRecoverySection, setShowRecoverySection] = useState(false)
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
                        <p onClick={()=>setShowRecoverySection(!showRecoverySection)}>Forgot password?</p>
                    </div>
                    <div className='login-page-button-section'>
                        <button>SIGN IN</button>
                    </div>
                </div>
                {
                    showRecoverySection && <>
                        <div className='login-page-recovery-content-title'>
                            <h3>Recover your password</h3>
                        </div>
                        <div className='login-page-recovery-form-section'>
                            <div className='login-page-email-field-section'>
                                <p>Your Email</p>
                                <input type='email' className='login-email-input-field' placeholder='Enter your email address' />
                            </div>
                            <div className='login-page-button-section'>
                                <button>Send Recovery Email</button>
                            </div>
                        </div>
                    </>
                }
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
