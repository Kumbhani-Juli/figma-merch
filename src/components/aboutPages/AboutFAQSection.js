import React from 'react'
import '../../assets/css/aboutPageCSS/aboutFAQSection.css'
import FAQSectionData from '../../data/FAQSectionData'

const AboutFAQSection = () => {
    return (
        <>
            <div className='about-faq-section-container'>
                <div className='row mx-0 about-faq-section-content'>
                    <div className='col-md-6 about-faq-section-left-content'>
                        <h1>FAQ</h1>
                    </div>
                    <div className='col-md-6 about-faq-section-right-content'>
                        {
                            FAQSectionData?.map((data, index) => (
                                <div className='about-faq-section-right-content-detail-box' key={index}>
                                    <div className='about-faq-section-right-content-detail-box-title'>
                                        <img src={data?.sectionIcon} className='img-fluid' alt='title-icon' />
                                        <h3>{data?.sectionTitle}</h3>
                                    </div>
                                    {
                                        data?.sectionContentData?.map((contentData, index) => (
                                            <div key={index}>
                                                <p>{contentData?.sectionContent}</p>
                                                {
                                                    contentData?.contentList?.map((listData,index)=>(
                                                        <div key={index}>
                                                            <li>{listData?.listTitle}</li>
                                                        </div>
                                                    ))
                                                }
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

export default AboutFAQSection
