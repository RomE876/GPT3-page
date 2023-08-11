import React from 'react';
import './feature.css';

//title and text retrieved through props below, passed in when called, like in WhatGPT3.jsx component
const Feature = ({ title, text }) => {
    return (
        <div className='gpt3__features-container__feature'>
            <div className="gpt3__features-container__feature-title">
                <div /> {/*space here*/}
                <h1>{title}</h1>
            </div>
            <div className="gpt3__features-container_feature-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature