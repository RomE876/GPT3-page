import React from 'react';
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';
import './header.css';

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let's Build Something Amazing with GPT-3 OpenAI</h1>
                <p>More information about gpt-3 and ways it can affect us all.</p>

                <div className="gpt3__header-content__input">
                    <input type="email" placeholder='Your Email Address' />
                    <button type="button">Get Started</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1,600 people requested access last 24 hours</p>
                </div>

            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header