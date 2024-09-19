import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import shopBottomSectionData from '../data/ShopBottomSectionData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import '../assets/css/figmaDetailPage.css'

const FigmaDetailPage = () => {
    const { slugs } = useParams()
    const data = shopBottomSectionData.find(index => index.slugs === slugs)

    const [showImg, setShowImg] = useState(data?.detailSectionData?.sectionImgData[0]?.sectionImg)
    const [size, setSize] = useState(
        data?.detailSectionData?.sizeData?.[0]?.size || null
    );

    const [qty, setQty] = useState(1)

    // Function to handle decreasing quantity
    const handleMinusQty = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    // Function to handle increasing quantity
    const handlePlusQty = () => {
        setQty(qty + 1)
    }

    // Function to handle adding item to cart and storing in localStorage
    const handleAddToCart = () => {
        const cartItem = {
            productName: data?.productName,
            price: data?.price,
            quantity: qty,
            img: showImg,
            size: size
        };

        // Retrieve existing cart from localStorage, if any
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the new item to the existing cart
        const updatedCart = [...existingCart, cartItem];

        // Store the updated cart back into localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <>
            <div className='figma-detail-page-section-container'>
                <div className='row mx-0 figma-detail-page-section-content'>
                    <div className='col-3 col-md-1 figma-detail-page-section-thumbnail-content'>
                        <div className='figma-detail-page-section-thumbnail-imgs'>
                            {data?.detailSectionData?.sectionImgData?.map((imgData, index) => (
                                <div key={index}>
                                    <img
                                        src={imgData?.sectionImg}
                                        className='img-fluid'
                                        alt='thumbnail-imgs'
                                        onClick={() => setShowImg(imgData?.sectionImg)}
                                        style={{
                                            border: imgData?.sectionImg === showImg ? '2px solid #000' : 'none'
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-9 col-md-6 figma-detail-page-section-img-content'>
                        <img src={showImg} className='img-fluid' alt='section-imgs' />
                    </div>
                    <div className='col-md-5 figma-detail-page-section-detail-content'>
                        {data?.detailSectionData?.badgeData && (
                            <div
                                className='figma-detail-page-section-detail-content-badge-box'
                                style={{
                                    backgroundColor: data?.detailSectionData?.badgeBgColor,
                                    color: data?.detailSectionData?.color,
                                }}
                            >
                                <p>{data?.detailSectionData?.badgeData?.toUpperCase()}</p>
                            </div>
                        )}
                        <h1>{data?.productName}</h1>
                        {data?.detailSectionData?.sizeData && (
                            <div className='figma-detail-page-section-detail-content-size-detail'>
                                <Link to='/t-shirt-size-guide' className='router-link'>
                                    <p className='size-guide-title'>Size guide</p>
                                </Link>
                                <div className='figma-detail-page-section-detail-content-size-detail-list'>
                                    {data?.detailSectionData?.sizeData?.map((sizeData, index) => (
                                        <div
                                            className='size-detail-list-box'
                                            key={index}
                                            onClick={() => setSize(sizeData?.size)}
                                            style={{
                                                backgroundColor: sizeData?.size === size ? '#000' : '#fff',
                                                color: sizeData?.size === size ? '#fff' : '#000',
                                            }}
                                        >
                                            <p>{sizeData?.size}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className='figma-detail-page-qty-section'>
                            <FontAwesomeIcon icon={faCircleMinus} className='figma-detail-page-qty-minus' onClick={handleMinusQty} />
                            <small>{qty}</small>
                            <FontAwesomeIcon icon={faCirclePlus} className='figma-detail-page-qty-plus' onClick={handlePlusQty} />
                        </div>
                        <div className='figma-detail-page-add-cart-button'>
                            <Link to='/cart' onClick={handleAddToCart}>
                                <button>ADD RS. {data?.price}</button>
                            </Link>
                        </div>
                        <div className='figma-detail-page-content-section'>
                            <p>{data?.detailSectionData?.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FigmaDetailPage;
