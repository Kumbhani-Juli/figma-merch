import React from 'react'
import '../../assets/css/shopPageCSS/circle.css'
import circularImg from '../../assets/images/shopImgs/topSectionImgs/circulerImg.svg'
import handImg from '../../assets/images/shopImgs/topSectionImgs/hand.svg'
import { Link } from 'react-router-dom'

const Circle = ({circleClass}) => {
    return (
        <>
            <div className="circle-container">
                <Link to='/about'>
                    <img src={circularImg} alt="Circular" className={`${circleClass}-center-image`} />
                    <img src={handImg} alt="Hand" className={`${circleClass}-hand-img`} />
                </Link>
            </div>
        </>
    )
}

export default Circle
