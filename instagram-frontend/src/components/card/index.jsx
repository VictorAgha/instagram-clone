import React from 'react';
import './style.css';


const Card = ({ image_url }) => {
    return (
        <li className="cards__item">
            <div className="card">
                <div className="card__image card__image--fence" style={{ backgroundImage: `url(${image_url})` }}></div>
                <div className="card__content">
                    <div className="card__title">
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Card;