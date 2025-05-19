import React from 'react';
import { useState, useEffect } from 'react';

export function Carousel({images}) {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrent(prev => (prev + 1) % images.length);
        }, 15000);
    
        return () => clearInterval(intervalId);
      }, [images.length]);
  
    return (
    <div className="carousel">
        <div className="carousel__wrapper">
            {images.map((image, index) => {
                return (
                    <div className={index == current ? "carousel__card carousel__card--active" : "carousel__card"} key={index}>
                        <img src={image.img} alt={image.alt} />
                    </div>
                )
            })}
        </div>
    </div>
  );
}