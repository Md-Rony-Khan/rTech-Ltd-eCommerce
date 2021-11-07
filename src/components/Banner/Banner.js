import { CssBaseline } from '@material-ui/core';
import React from 'react';
import banner from '../../Assets/banner.png';
import './Banner.css';

export default function Banner() {
    return (
        <>
            <CssBaseline />
            <div className="header">
                <img alt="Banner" src={banner} className="hero-img" />

                <div className="hero-content">
                    <h2>
                        <span className="discount">70% </span> SALE OFF
                    </h2>
                    <h1>
                        <span>Summer Vibes</span>
                        <span>mode on</span>
                    </h1>
                    <button type="button" className="btn">
                        shop now
                    </button>
                </div>
            </div>
        </>
    );
}
