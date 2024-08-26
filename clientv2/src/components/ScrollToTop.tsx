'use client'
import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (document.documentElement.scrollTop > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed top-10 left-[50%] opacity-20 hover:opacity-100 z-50 ${isVisible ? 'block' : 'hidden'}`}>
            <button id='scrollToTopButton' onClick={scrollToTop}><FaArrowAltCircleUp className='size-8' /></button>
        </div>
    );
}