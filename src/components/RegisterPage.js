import React from 'react'
import '../assets/css/registerPage.css'

const RegisterPage = () => {
    return (
        <>
            <div className='register-page-section-container'>
                <div className='register-page-content-title'>
                    <h1>Create an account</h1>
                </div>
                <div className='register-page-form-section'>
                    <div className='register-page-email-field-section'>
                        <p>First name</p>
                        <input type='text' className='register-firstname-input-field' placeholder='Enter your first name' />
                    </div>
                    <div className='register-page-email-field-section'>
                        <p>Last name</p>
                        <input type='text' className='register-lastname-input-field' placeholder='Enter your last name' />
                    </div>
                    <div className='register-page-email-field-section'>
                        <p>Your Email</p>
                        <input type='email' className='register-email-input-field' placeholder='Enter your email address' />
                    </div>
                    <div className='register-page-email-field-section'>
                        <p>Your Password</p>
                        <input type='password' className='register-password-input-field' placeholder='Enter your password' />
                    </div>
                    <div className='register-page-button-section'>
                        <button>CREATE ACCOUNT</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage
