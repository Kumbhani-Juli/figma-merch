import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import shopBottomSectionData from '../data/ShopBottomSectionData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import '../assets/css/figmaDetailPage.css'

const FigmaDetailPage = () => {
    const { slugs } = useParams()
    const data = shopBottomSectionData.find(index => index.slugs === slugs)
    const sizeData = [
        {
            size: 'S',
        },
        {
            size: 'M',
        },
        {
            size: 'L',
        },
        {
            size: 'XL',
        },
        {
            size: '2XL',
        },
    ]

    const [showImg, setShowImg] = useState(data?.detailSectionData?.sectionImgData[0]?.sectionImg)
    const [size, setSize] = useState(sizeData[0].size)

    return (
        <>
            <div className='figma-detail-page-section-container'>
                <div className='row mx-0 figma-detail-page-section-content'>
                    <div className='col-md-1 figma-detail-page-section-thumbnail-content'>
                        <div className='figma-detail-page-section-thumbnail-imgs'>
                            {
                                data?.detailSectionData?.sectionImgData?.map((imgData, index) => (
                                    <div key={index}>
                                        <img src={imgData?.sectionImg} className='img-fluid' alt='thumbnail-imgs' onClick={() => setShowImg(imgData?.sectionImg)}
                                            style={{
                                                border: imgData?.sectionImg === showImg ? '2px solid #000' : 'none'
                                            }}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='col-md-6 figma-detail-page-section-img-content'>
                        <img src={showImg} className='img-fluid' alt='section-imgs' />
                    </div>
                    <div className='col-md-5 figma-detail-page-section-detail-content'>
                        <div className='figma-detail-page-section-detail-content-badge-box'
                            style={{
                                backgroundColor: data?.detailSectionData?.badgeBgColor ?? data.detailSectionData.badgeBgColor,
                                color: data?.detailSectionData?.color ?? data.detailSectionData.color
                            }}
                        >
                            <p>{data?.detailSectionData?.badgeData?.toUpperCase()}</p>
                        </div>
                        <h1>{data?.productName}</h1>
                        {
                            data?.detailSectionData?.sizeGuide && <div className='figma-detail-page-section-detail-content-size-detail'>
                                <p className='size-guide-title'>Size guide</p>
                                <div className='figma-detail-page-section-detail-content-size-detail-list'>
                                    {
                                        sizeData?.map((sizeData, index) => (
                                            <div className='size-detail-list-box' key={index}
                                                onClick={() => setSize(sizeData?.size)}
                                                style={{
                                                    backgroundColor: sizeData?.size === size ? '#000' : '#fff',
                                                    color: sizeData?.size === size ? '#fff' : '#000'
                                                }}
                                            >
                                                <p>{sizeData?.size}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        }
                        <div className='figma-detail-page-qty-section'>
                            <FontAwesomeIcon icon={faCircleMinus} className='figma-detail-page-qty-minus' />
                            <small>1</small>
                            <FontAwesomeIcon icon={faCirclePlus} className='figma-detail-page-qty-plus' />
                        </div>
                        <div className='figma-detail-page-add-cart-button'>
                            <button>ADD {data?.price}</button>
                        </div>
                        <div className='figma-detail-page-content-section'>
                            <p>{data?.detailSectionData?.content}</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default FigmaDetailPage
