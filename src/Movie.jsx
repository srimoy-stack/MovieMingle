import React from 'react'
import './App.css';
const Movie = ({ title,url,overview,ratings}) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return (
        <div className='box'>
            <img src={IMGPATH+url} alt="" />
            <div className="overlay">
                <div className="title">
                    <h2> {title}  </h2>
                    <span> {ratings} </span>
                    </div>
                        <h3>Overview:</h3>
                        <p>
                        {overview}
                        </p>
                </div></div>
            )
}

            export default Movie