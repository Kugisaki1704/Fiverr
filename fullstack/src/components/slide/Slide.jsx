// Slide.jsx
import React, { useState, useEffect } from 'react';
import './Slide.scss';

const Slide = ({ children, slidesToShow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState([]);

  useEffect(() => {
    const totalSlides = React.Children.count(children);
    const slidesPerPage = slidesToShow || 5;

    // Duplicate the items to create an infinite loop
    const duplicatedItems = React.Children.toArray(children).concat(React.Children.toArray(children));
    
    // Calculate the visible slides based on the current index
    const startIndex = currentSlide % totalSlides;
    const endIndex = startIndex + slidesPerPage;
    const newVisibleSlides = duplicatedItems.slice(startIndex, endIndex);

    setVisibleSlides(newVisibleSlides);
  }, [children, currentSlide, slidesToShow]);

  const totalSlides = React.Children.count(children);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="slide">
      <div className="container">
        <button onClick={prevSlide} className="carousel-prev">
          Prev
        </button>
        <div className="slides-container" style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}>
  {visibleSlides.map((child, index) => (
    <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
      {child}
    </div>
  ))}
</div>

        <button onClick={nextSlide} className="carousel-next">
          Next
        </button>
      </div>
    </div>
  );
};

export default Slide;
