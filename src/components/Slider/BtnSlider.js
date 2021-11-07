/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import React from 'react';
import leftArrow from './icons/left-arrow.svg';
import rightArrow from './icons/right-arrow.svg';
import './Slider.css';

export default function BtnSlider({ direction, moveSlide }) {
    /* console.log(direction, moveSlide); */
    return (
        <button
            onClick={moveSlide}
            className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
        >
            <img src={direction === 'next' ? rightArrow : leftArrow} />
        </button>
    );
}
