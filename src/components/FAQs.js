import React from 'react'
import FAQSectionData from '../data/FAQSectionData'
import '../assets/css/FAQSection.css'

const FAQs = () => {
  return (
    <>
      <div className='faq-page-section-container'>
        <div className='faq-page-section-title'>
          <h3>FAQ</h3>
        </div>
        <div className='faq-page-section-right-content'>
          {
            FAQSectionData?.map((data, index) => (
              <div className='faq-page-section-right-content-detail-box' key={index}>
                <div className='faq-page-section-right-content-detail-box-title'>
                  <img src={data?.sectionIcon} className='img-fluid' alt='title-icon' />
                  <h3>{data?.sectionTitle}</h3>
                </div>
                {
                  data?.sectionContentData?.map((contentData, index) => (
                    <div key={index}>
                      <p>{contentData?.sectionContent}</p>
                      {
                        contentData?.contentList?.map((listData, index) => (
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
    </>
  )
}

export default FAQs
