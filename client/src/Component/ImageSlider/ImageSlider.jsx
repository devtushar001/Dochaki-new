import React, { useEffect, useState } from "react";
import "./ImageSlider.css";
import { imageData } from "../../assets/dochakiData";

const ImageSlider = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

   const images = [
      imageData.slide_one,
      imageData.slide_two,
      imageData.slide_three,
      imageData.slide_four,
      imageData.slide_five,
   ];

   const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
   };

   const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
   };

   // ✅ Correct useEffect for autoplay
   useEffect(() => {
      const timer = setInterval(() => {
         nextImage();
      }, 5000);

      // ✅ Cleanup function to prevent memory leaks
      return () => clearInterval(timer);
   }, []);

   return (
      <div className="slider-container">
         <button className="scroll-button left" onClick={prevImage}>
            &larr;
         </button>

         <div className="image-wrapper">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
         </div>

         <button className="scroll-button right" onClick={nextImage}>
            &rarr;
         </button>
      </div>
   );
};

export default ImageSlider;
