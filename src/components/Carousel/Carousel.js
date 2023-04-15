import React, { useState } from 'react';
import './Carousel.css';
import Img1 from '../../assets/q1w.png';
import Img2 from '../../assets/ElectricGuitar.png';

function Carousel({ images }) {

  const imagess = [
    Img1,
    Img2,
  ];

  images = imagess;

  const [index, setIndex] = useState(0);

  function handlePrev() {
    setIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }

  function handleNext() {
    setIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }

  return (
    <div className="Carousel">
      <img src={images[index]} alt={`Image ${index + 1}`} />
      <div className='btn'>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Carousel;
