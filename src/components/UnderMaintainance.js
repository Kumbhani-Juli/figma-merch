import React from 'react'
import '../assets/css/undermaintainance.css'
import { Link } from 'react-router-dom'

const UnderMaintainance = ({pageTitle}) => {
    return (
        <>
            <div className='undermaintainance-page-container'>
                <h4>{pageTitle}</h4>
                <h2>This page is Undermaintainance.</h2>
                <p>Page will be comming soon...</p>
                <Link to='/' className='router-link-undermaintance'>Go Back to Home page...</Link>
            </div>
        </>
    )
}

export default UnderMaintainance
