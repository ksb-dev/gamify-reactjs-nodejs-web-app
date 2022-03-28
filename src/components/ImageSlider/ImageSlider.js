import React, { useState, useEffect } from 'react'

import BtnSlider from './BtnSlider'

import './ImageSlider.css'

const ImageSlider = ({ screen, getShadow, smallImage, game }) => {
  const [slideIndex, setSlideIndex] = useState(1)
  //const [start, setStart] = useState(false)

  const nextSlide = () => {
    if (slideIndex !== screen.results.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === screen.results.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(screen.results.length)
    }
  }

  const moveDot = index => {
    setSlideIndex(index)
  }

  return (
    <div className='container-slider'>
      {screen.results.map((screen, index) => {
        return (
          <div
            className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
            key={index}
          >
            <img
              key={screen.id}
              className={getShadow(game.rating)}
              src={smallImage(screen.image, 1280)}
              alt={screen.image}
            />
          </div>
        )
      })}

      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />

      <div className='container-dots'>
        {Array.from({ length: screen.results.length }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
