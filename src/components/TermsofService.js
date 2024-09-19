import React from 'react'
import '../assets/css/termsofService.css'
import termsofServiceData from '../data/TermsofServiceData'

const TermsofService = () => {
    return (
        <>
            <div className='terms-of-service-page-section-container'>
                <div className='terms-of-service-page-section-title'>
                    <h3>Terms of sale</h3>
                </div>
                <div className='terms-of-service-page-section-content'>
                    {
                        termsofServiceData?.map((data,index)=>(
                            <div key={index}>
                                <h4>{data?.mainTitle}</h4>
                                {
                                    data?.contentData?.map((data,index)=>(
                                        <p>{data?.content}</p>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default TermsofService
