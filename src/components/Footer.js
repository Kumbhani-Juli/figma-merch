import React, { useEffect, useState } from 'react';
import footerLogo1 from '../assets/images/footerImgs/footerLogo1.svg';
import footerLogo2 from '../assets/images/footerImgs/footerLogo2.svg';
import footerLogo3 from '../assets/images/footerImgs/footerLogo3.svg';
import footerLogo4 from '../assets/images/footerImgs/footerLogo4.svg';
import tickerImg1 from '../assets/images/footerImgs/tickerImg1.svg';
import tickerImg2 from '../assets/images/footerImgs/tickerImg2.svg';
import tickerImg3 from '../assets/images/footerImgs/tickerImg3.svg';
import tickerImg4 from '../assets/images/footerImgs/tickerImg4.svg';
import tickerImg5 from '../assets/images/footerImgs/tickerImg5.svg';
import tickerImg6 from '../assets/images/footerImgs/tickerImg6.svg';
import tickerImg7 from '../assets/images/footerImgs/tickerImg7.svg';
import tickerImg8 from '../assets/images/footerImgs/tickerImg8.svg';
import tickerImg9 from '../assets/images/footerImgs/tickerImg9.svg';
import tickerImg10 from '../assets/images/footerImgs/tickerImg10.svg';
import '../assets/css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [bgColor, setBgColor] = useState('');
    const [footerLogo, setFooterLogo] = useState(null);

    useEffect(() => {
        // Array of colors to cycle through
        const colors = ['rgb(242, 78, 30)', 'rgb(15, 169, 88)', 'rgb(199, 185, 255)', 'rgb(255, 199, 0)'];

        // Get the last index from localStorage or start with 0
        let colorIndex = parseInt(localStorage.getItem('colorIndex')) || 0;

        // Set the background color based on the current index
        const currentColor = colors[colorIndex];
        setBgColor(currentColor);

        // Select footer logo based on the background color
        if (currentColor === 'rgb(242, 78, 30)') {
            setFooterLogo(footerLogo1);
        } else if (currentColor === 'rgb(15, 169, 88)') {
            setFooterLogo(footerLogo2);
        } else if (currentColor === 'rgb(199, 185, 255)') {
            setFooterLogo(footerLogo3);
        } else if (currentColor === 'rgb(255, 199, 0)') {
            setFooterLogo(footerLogo4);
        }

        // Increment the index and loop back to the start if needed
        colorIndex = (colorIndex + 1) % colors.length;

        // Store the updated index in localStorage
        localStorage.setItem('colorIndex', colorIndex);
    }, []); // Runs once when the component is mounted

    const tickerData = [
        {
            word: "Figma's",
            tickerImg: tickerImg1,
        },
        {
            word: "marvelously",
            tickerImg: tickerImg2,
        },
        {
            word: "considered",
            tickerImg: tickerImg3,
        },
        {
            word: "collection",
            tickerImg: tickerImg4,
        },
        {
            word: "of",
            tickerImg: tickerImg5,
        },
        {
            word: "objects",
            tickerImg: tickerImg6,
        },
        {
            word: "for",
            tickerImg: tickerImg7,
        },
        {
            word: "our",
            tickerImg: tickerImg8,
        },
        {
            word: "time",
            tickerImg: tickerImg9,
        },
        {
            word: "on",
            tickerImg: tickerImg10,
        },
    ]
    return (
        <>
            <div
                className='the-figma-store-footer-container'
                style={{ backgroundColor: bgColor }} // Dynamically set background color
            >
                <div className='the-figma-store-footer-content'>
                    <div className='the-figma-store-footer-left-content'>
                        <img src={footerLogo} className='img-fluid' alt='footer-logo' />
                    </div>
                    <div className='the-figma-store-footer-second-content'>
                        <h2>OBJECTS THAT INSPIRE.</h2>
                    </div>
                    <div className='the-figma-store-footer-middle-content'>
                        <Link to='/faqs' className='footer-router-link'>
                            <li>FAQ</li>
                        </Link>
                        <Link to='/about#contact' className='footer-router-link'>
                            <li>Contact Us</li>
                        </Link>
                        <Link to='/privacy-policy' className='footer-router-link'>
                            <li>Privacy Policy</li>
                        </Link>
                        <Link to='/terms-of-service' className='footer-router-link'>
                            <li>Terms of Service</li>
                        </Link>
                    </div>
                    <div className='the-figma-store-footer-right-content'>
                        <p>This site is powered by  Harper + Scott, a Certified B-Corporation. For more information read Harper + Scott's CSR policy.</p>
                    </div>
                </div>
                <div className='the-figma-store-footer-social-media-container'>
                    <div className='the-figma-store-footer-social-media-content'>
                        <h5>FIGMA</h5>
                        <h5>TWITTER</h5>
                        <h5>INSTAGRAM</h5>
                        <h5>YOUTUBE</h5>
                    </div>
                    <div className='the-figma-store-footer-up-arrow'>
                        <a href='#top' className='router-link'>
                            <FontAwesomeIcon icon={faArrowAltCircleUp} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='the-figma-store-footer-ticker-container'
                style={{ backgroundColor: bgColor }}
            >
                <marquee>
                    <h3 className='footer-ticker-content'>
                        {
                            tickerData?.map((data, index) => (
                                <div key={index}>
                                    <span className='word'>{data?.word?.toUpperCase()}</span>
                                    <img src={data?.tickerImg} className='img-fluid' alt='ticker-img' />
                                </div>
                            ))
                        }
                    </h3>
                </marquee>
            </div>
        </>
    );
};

export default Footer;
