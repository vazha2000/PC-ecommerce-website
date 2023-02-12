import React, {useState, useRef, useEffect} from 'react'
import { motion } from "framer-motion";
import bg1 from '../assets/ad1.png'
import bg2 from '../assets/ad2.png'
import bg3 from '../assets/ad3.png'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'

function AdsCarousel() {

  const slideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex])

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % 3);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex + 2) % 3);
  };

  const images = [bg2, bg3, bg1]

  return (
    <div className="relative w-full auto">
      <div className="relative" ref={slideRef}>
        {images.map((image, i) => {
          return <img key={i} src={image} className={`relative inset-0 transition duration-500 ${i !== currentIndex ? 'hidden': ''}`} alt="slider-img" />
        })}    
      </div>
      <button className='hidden lg:block lg:absolute lg:top-[45%] lg:left-5 lg:hover:scale-110 lg:p-3 lg:bg-gray-200 lg:opacity-40 lg:hover:opacity-100 lg:rounded-full' onClick={handlePrev}>
          <FaArrowAltCircleLeft size={20}/>
        </button>
        <button className='hidden lg:block lg:absolute lg:top-[45%] lg:right-5 lg:hover:scale-110 lg:p-3 lg:bg-gray-200 lg:opacity-40 lg:hover:opacity-100 lg:rounded-full' onClick={handleNext}>
          <FaArrowAltCircleRight size={20}/>
        </button>       
    </div>
  );
  
}

export default AdsCarousel