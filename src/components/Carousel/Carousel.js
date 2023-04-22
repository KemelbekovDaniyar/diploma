import React, { useState } from 'react';
import './Carousel.css';
import Img1 from '../../assets/q1w.png';
import Img2 from '../../assets/ElectricGuitar.png';

function Carousel({ image }) {

  const imagess = [
    Img1,
    Img2,
  ];

  image = imagess;

  const [index, setIndex] = useState(0);

  function handlePrev() {
    setIndex(prevIndex => (prevIndex === 0 ? image.length - 1 : prevIndex - 1));
  }

  function handleNext() {
    setIndex(prevIndex => (prevIndex === image.length - 1 ? 0 : prevIndex + 1));
  }

  return (
    <div className="Carousel">
      <img src={image[index]} alt="carousel" />
      <div className='btn'>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Carousel;
