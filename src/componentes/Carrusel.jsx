import React, { useState, useEffect } from "react";
import "../index.css";
import "./estilosComponentes/carrusel.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Carrusel({ arrayOfImages }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function goLeft() {
    setCurrentImageIndex((prevIndex) => {
      return prevIndex === 0 ? arrayOfImages.length - 1 : prevIndex - 1;
    });
  }

  function goRight() {
    setCurrentImageIndex((prevIndex) => {
      return prevIndex === arrayOfImages.length - 1 ? 0 : prevIndex + 1;
    });
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === arrayOfImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [arrayOfImages.length, 3000]);

  return (
    <div className="carousel">
      <button onClick={goLeft} className="button-before">
        <IoIosArrowBack />
      </button>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {arrayOfImages.map((image, index) => (
          <img key={index} src={image.url} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <button onClick={goRight} className="button-forward">
        <IoIosArrowForward />
      </button>
    </div>
  );
}
