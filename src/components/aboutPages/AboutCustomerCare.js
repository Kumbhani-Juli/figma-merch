import React from 'react'
import sectionIcon1 from '../../assets/images/aboutImgs/customerCareSectionImgs/sectionIcon1.png'
import sectionIcon2 from '../../assets/images/aboutImgs/customerCareSectionImgs/sectionIcon2.png'
import sectionIcon3 from '../../assets/images/aboutImgs/customerCareSectionImgs/sectionIcon3.png'

const AboutCustomerCare = () => {
    const customerCareData = [
        {
            sectionIcon: sectionIcon1,
            sectionTitle: "Shipping",
            sectionContentData: [
                {
                    sectionContent: "Once you’ve made a purchase, an e-mail confirmation will be sent to the e-mail address you provided. This e-mail acts as an invoice and includes your order number.",
                },
                {
                    sectionContent: "Once your order is placed, it’ll ship from our warehouse within 2-5 business days. Orders placed after 11:00 AM(EST) may be processed the next business day, and orders placed on weekends and holidays will be processed the following business day starting at 8:00 AM(EST). During peak periods, processing times may exceed 2 business days.",
                },
                {
                    sectionContent: "Depending on your location, your order will be shipping from the United Kingdom, Ireland, or the United States. You will not need to pay customs on your orders. Once your order has been shipped, you will receive an e-mail with your shipment’s tracking information, allowing you to keep tabs on the progress of your delivery.",
                },
            ]
        },
        {
            sectionIcon: sectionIcon2,
            sectionTitle: "Returns",
            sectionContentData: [
                {
                    sectionContent: "We currently do not accept returns and are unable to edit your order once placed. If you would like to cancel your order and replace it with a new one before it has shipped, please connect with thefigmastore@harperandscott.com.",
                },
            ]
        },
        {
            sectionIcon: sectionIcon3,
            sectionTitle: "Contact Us",
            targetId: 'contact',
            sectionContentData: [
                {
                    sectionContent: "You can contact support by emailing thefigmastore@harperandscott.com. ",
                },
            ]
        },
    ]
    return (
        <>
            <div className='about-faq-section-container'>
                <div className='row mx-0 about-faq-section-content'>
                    <div className='col-md-6 about-faq-section-left-content'>
                        <h1>Customer Care</h1>
                    </div>
                    <div className='col-md-6 about-faq-section-right-content'>
                        {
                            customerCareData?.map((data, index) => (
                                <div className='about-faq-section-right-content-detail-box' key={index} id={data?.targetId}>
                                    <div className='about-faq-section-right-content-detail-box-title'>
                                        <img src={data?.sectionIcon} className='img-fluid' alt='title-icon' />
                                        <h3>{data?.sectionTitle}</h3>
                                    </div>
                                    {
                                        data?.sectionContentData?.map((contentData, index) => (
                                            <div key={index}>
                                                <p>{contentData?.sectionContent}</p>
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

export default AboutCustomerCare
