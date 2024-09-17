import React from 'react'
import '../assets/css/privacyPolicy.css'
import privacyPolicyData from '../data/PrivacyPolicyData'

const PrivacyPolicy = () => {
  return (
    <>
      <div className='privacy-policy-page-section-container'>
        <div className='privacy-policy-page-section-title'>
          <h3>PRIVACY POLICY</h3>
        </div>
        <div className='privacy-policy-page-section-content'>
          <p><b>Effective Date:</b> August 31, 2023</p>
          <div className='privacy-policy-page-section-content-details'>
            {
              privacyPolicyData?.map((data, index) => (
                <div key={index}>
                  <h2>{data?.mainTitle}</h2>
                  {
                    data?.contentData?.map((contentData, index) => (
                      <div key={index}>
                        <h2>{contentData?.contentTitle}</h2>
                        <p className='fw-bold mb-0'>{contentData?.contentInnerTitle}</p>
                        <p>{contentData?.content}</p>
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
