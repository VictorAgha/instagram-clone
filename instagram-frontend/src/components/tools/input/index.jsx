import React from 'react';
import './style.css';

const Input = ({ type, placeholder = '', onChange }) => {
    return (
        <div className='input'>
            <input type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    );
};

export default Input;