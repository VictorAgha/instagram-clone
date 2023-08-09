import React from 'react';
import './style.css';

const Button = ({ onClick, children }) => {
    return (
        <div className='btn-container'>
            <button type="button" className='btn' onClick={onClick}>
                {children}
            </button>
        </div>
    );
};

export default Button;