import React, { useState } from 'react';
import './App.scss';

import image1 from './images/image1.jpeg';
import image2 from './images/image2.jpeg';
import image3 from './images/image3.jpeg';
import image4 from './images/image4.jpeg';
import image5 from './images/image5.jpeg';

const images: string[] = [image1, image2, image3, image4, image5];

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [width, setWidth] = useState<number>(300);

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextImage = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="gallery">
      <div className="gallery__controls">
        <button className="gallery__arrow" onClick={prevImage}>←</button>
        <div className="gallery__image-wrapper">
          <img
            src={images[currentIndex]}
            style={{ width: width + 'px' }}
            alt="gallery"
          />
        </div>
        <button className="gallery__arrow" onClick={nextImage}>→</button>
      </div>
      <div className="gallery__slider">
        <input
          type="range"
          min={50}
          max={800}
          step={1}
          value={width}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWidth(Number(e.target.value))}
        />
        <span>{width}px</span>
      </div>
    </div>
  );
}

export default App;
