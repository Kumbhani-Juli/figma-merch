import React, { useState } from 'react';
import '../../assets/css/shopPageCSS/topSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import Circle from './Circle';
import { Link } from 'react-router-dom';

const sliderData = [
    {
        id: 1,
        imgSrc: require('../../assets/images/shopImgs/topSectionImgs/coverImg1.webp'),
        title: "Figma Doodle Socks",
        slugs: "figma-doodle-socks",
    },
    {
        id: 2,
        imgSrc: require('../../assets/images/shopImgs/topSectionImgs/coverImg2.webp'),
        slugs: "chunky-glyph-tee",
        title: "Chunky Glyph Tee"
    },
    {
        id: 3,
        imgSrc: require('../../assets/images/shopImgs/topSectionImgs/coverImg3.webp'),
        slugs: "chunky-glyph-cap",
        title: "Chunky Glyph Cap"
    },
    {
        id: 4,
        imgSrc: require('../../assets/images/shopImgs/topSectionImgs/coverImg4.webp'),
        slugs: "butterfly-tote",
        title: "Butterfly Tote"
    },
    {
        id: 5,
        imgSrc: require('../../assets/images/shopImgs/topSectionImgs/coverImg5.webp'),
        title: "Tidy Up Crewneck",
        slugs: "tidy-up-crewneck",
    },
    {
        id: 6,
        imgSrc: require('../../assets/images/shopImgs/topSectionImgs/coverImg6.webp'),
        slugs: "all-smile-nalgene",
        title: "All Smiles Nalgene"
    },
    {
        id: 7,
        imgSrc: require('../../assets/images/shopImgs/topSectionImgs/coverImg7.webp'),
        slugs: "inkblot-tee",
        title: "Inkblot Tee"
    },
    {
        id: 8,
        imgSrc: require('../../assets/images/shopImgs/topSectionImgs/coverImg8.webp'),
        slugs: "tidy-up-crewneck",
        title: "Tidy Up Crewneck"
    },
    {
        id: 9,
        imgSrc: require('../../assets/images/shopImgs/topSectionImgs/coverImg9.webp'),
        slugs: "local-styles-crewneck",
        title: "Local Styles Crewneck"
    },
];

const TopSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null); // Maintain hovered index
    const itemsPerSlide = 3; // Number of items per slide
    const totalSlides = Math.ceil(sliderData.length / itemsPerSlide); // Total number of slides

    // Calculate the width of each slide
    const slideWidth = 300; // Width of each item
    const containerWidth = slideWidth * itemsPerSlide; // Width of each slide

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => {
            if (prevSlide < totalSlides - 1) {
                return prevSlide + 1;
            } else {
                return 0; // Loop back to the first slide
            }
        });
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => {
            if (prevSlide > 0) {
                return prevSlide - 1;
            } else {
                return totalSlides - 1; // Loop back to the last slide
            }
        });
    };

    return (
        <>
            <div className='shop-top-slider-section-container'>
                <div className='shop-top-slider-section-content'>
                    <div
                        className='shop-top-slider-section-content-inner'
                        style={{
                            transform: `translateX(-${currentSlide * containerWidth}px)`,
                            width: `${containerWidth * totalSlides}px`,
                            display: 'flex',
                        }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div
                                key={slideIndex}
                                className='shop-top-slider-section-slide'
                                style={{ width: `${containerWidth}px`, display: 'flex' }}
                            >
                                {sliderData.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((slide) => (
                                    <div
                                        key={slide.id}
                                        className='shop-top-slider-section-content-box'
                                        style={{ backgroundImage: `url(${slide.imgSrc})` }}
                                        onMouseEnter={() => setHoveredIndex(slide.id)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <Link to={`/products/${slide?.slugs}`} className='router-link'>
                                            {hoveredIndex === slide.id && (
                                                <div className='shop-top-slider-section-content-box-span'>
                                                    <h3>{slide.title}</h3>
                                                </div>
                                            )}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Slider navigation buttons */}
                <div className="shop-slider-navigation">
                    <button className="prev" onClick={prevSlide}><FontAwesomeIcon icon={faCircleArrowLeft} /></button>
                    <button className="next" onClick={nextSlide}><FontAwesomeIcon icon={faCircleArrowRight} /></button>
                </div>
            </div>
            <Circle circleClass='shop-top-section-circle' />
        </>
    );
};

export default TopSection;
