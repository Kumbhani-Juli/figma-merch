import React from 'react'
import sectionImg from '../../assets/images/aboutImgs/topSectionImg/sectiionImg.webp'
import '../../assets/css/aboutPageCSS/aboutTopSection.css'
import Circle from '../shopPages/Circle'

const AboutTopSection = () => {
    return (
        <>
            <div className='about-top-section-container'>
                <div className='row mx-0 about-top-section-content'>
                    <div className='col-md-6 about-top-section-left-content'>
                        <img src={sectionImg} className='img-fluid' alt='about-top-section-img' />
                    </div>
                    <div className='col-md-6 about-top-section-right-content'>
                        <h1>About</h1>
                        <p>Welcome to the Figma Store, a collection of Figma apparel (layers) and accessories (components) designed for our community.</p>
                    </div>
                </div>
            </div>
            <div className='about-top-section-circle-container'>
                <Circle circleClass='about-top-section-circle' />
            </div>
        </>
    )
}

export default AboutTopSection
