import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { BsFillCaretDownFill } from "react-icons/bs"

const ScrollToTopButton = () => {
    const handleClick = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <button className="scroll-to-top-button animate-bounce" onClick={handleClick}>

            <BsFillCaretDownFill size={25} className="" />

        </button>
    );
};

export default ScrollToTopButton;
