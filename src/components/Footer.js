import React, { useEffect, useState } from 'react';
import footerLogo1 from '../assets/images/footerImgs/footerLogo1.svg';
import footerLogo2 from '../assets/images/footerImgs/footerLogo2.svg';
import footerLogo3 from '../assets/images/footerImgs/footerLogo3.svg';
import footerLogo4 from '../assets/images/footerImgs/footerLogo4.svg';
import '../assets/css/footer.css'

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

  return (
    <>
      <div
        className='the-figma-store-footer-container'
        style={{ backgroundColor: bgColor }} // Dynamically set background color
      >
        <div className='the-figma-store-footer-left-content'>
          <img src={footerLogo} className='img-fluid' alt='footer-logo' />
        </div>
        <div className='the-figma-store-footer-second-content'>
            <h2>OBJECTS THAT INSPIRE.</h2>
        </div>
        <div className='the-figma-store-footer-middle-content'>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
        </div>
        <div className='the-figma-store-footer-right-content'>
            <p>This site is powered by  Harper + Scott, a Certified B-Corporation. For more information read Harper + Scott's CSR policy.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
