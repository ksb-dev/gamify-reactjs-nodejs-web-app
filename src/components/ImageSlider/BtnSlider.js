import React from 'react'
import './ImageSlider.css'
import leftArrow from './icons/left-arrow.svg'
import rightArrow from './icons/right-arrow.svg'

export default function BtnSlider ({ direction, moveSlide }) {
  console.log(direction, moveSlide)
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      {/*<img src={direction === 'next' ? rightArrow : leftArrow} alt='' />*/}
      {direction === 'next' ? (
        <i class='fa-solid fa-angle-right fa-2x'></i>
      ) : (
        <i class='fa-solid fa-angle-left fa-2x'></i>
      )}
    </button>
  )
}
