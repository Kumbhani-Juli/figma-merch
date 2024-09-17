import React, { useState } from 'react'
import setionIcon1 from '../../assets/images/shopImgs/bottomSectionImgs/sectionIcon1.svg'
import setionIcon2 from '../../assets/images/shopImgs/bottomSectionImgs/sectionIcon2.svg'
import setionIcon3 from '../../assets/images/shopImgs/bottomSectionImgs/sectionIcon3.svg'
import setionIcon4 from '../../assets/images/shopImgs/bottomSectionImgs/sectionIcon4.svg'
import setionIcon5 from '../../assets/images/shopImgs/bottomSectionImgs/sectionIcon5.svg'
import setionIcon6 from '../../assets/images/shopImgs/bottomSectionImgs/sectionIcon6.svg'
import setionIcon7 from '../../assets/images/shopImgs/bottomSectionImgs/sectionIcon7.svg'
import setionIcon8 from '../../assets/images/shopImgs/bottomSectionImgs/sectionIcon8.svg'
import '../../assets/css/shopPageCSS/bottomSection.css'
import shopBottomSectionData from '../../data/ShopBottomSectionData'

const BottomSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // Track which index is hovered

    return (
        <>
            <div className='shop-page-bottom-section-container'>
                <div className='shop-page-bottom-section-container-title'>
                    <h1>
                        Figma's <img src={setionIcon1} className='img-fluid' alt='section-icon' />  Collection <img src={setionIcon2} className='img-fluid' alt='section-icon' /> Of
                        Layers <img src={setionIcon3} className='img-fluid' alt='section-icon' />  And <img src={setionIcon4} className='img-fluid' alt='section-icon' />  Components <img src={setionIcon5} className='img-fluid' alt='section-icon' /> For you <img src={setionIcon6} className='img-fluid' alt='section-icon' /> and <img src={setionIcon7} className='img-fluid' alt='section-icon' /> your <img src={setionIcon8} className='img-fluid' alt='section-icon' /> friends
                    </h1>
                </div>
                <div className='shop-page-bottom-section-content'>
                    {
                        shopBottomSectionData?.map((data, index) => (
                            <div className='shop-page-bottom-section-content-boxs'
                                key={index} // Add key here
                                onMouseEnter={() => setHoveredIndex(index)} // Set the hovered index
                                onMouseLeave={() => setHoveredIndex(null)} // Reset the hover index
                                style={{
                                    gridColumn: data?.gridColumnSpan,
                                    gridRow: data?.gridRowSpan,
                                }}
                            >
                                <div className={`shop-page-bottom-section-content-boxs-img ${data?.gridRowSpan === 'span 2' ? 'shop-page-bottom-section-content-boxs-img-height' : ''}`}
                                    style={{
                                        backgroundImage: data?.sectionBgImg
                                            ? `url(${data.sectionBgImg})` : 'none',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                >
                                    {
                                        hoveredIndex === index ? (
                                            data?.sectionHoverImg && <img src={data?.sectionHoverImg} className='img-fluid' alt='section-img' />
                                        ) : (
                                            data?.sectionDefaultImg && <img src={data?.sectionDefaultImg} className='img-fluid' alt='section-img' />
                                        )
                                    }
                                </div>
                                <div className='shop-page-bottom-section-content-boxs-body'>
                                    <div>
                                        <p>{data?.newRelase}</p>
                                        <h2>{data?.productName}</h2>
                                    </div>
                                    <p>{data?.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default BottomSection
