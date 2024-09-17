import React from 'react'
import '../../assets/css/aboutPageCSS/aboutDonationSection.css'

const AboutDonationSection = () => {
  return (
    <>
      <div className='about-donation-section-container'>
        <div className='row mx-0 about-donaction-section-content'>
            <div className='col-md-6 about-donaction-section-left-content'>
                <h1>100% of proceeds are donated</h1>
            </div>
            <div className='col-md-6 about-donaction-section-right-content'>
                <p>Any and all profits we generate from the store will be used to purchase carbon removal credits via reforestation from TIST (The International Small Group and Tree Planting Program). TIST is an innovative time-tested reforestation program that supports subsistence farmers in Kenya, Uganda, and Tanzania to tackle sustainable development and climate change through education and tree planting.</p>
                <a href='#'>Learn more about TIST ↗</a>
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutDonationSection
