import React from 'react';
import './style.css';
import home from './icons/home.png';
import profile from './icons/profile.png';
import search from './icons/search.png';
import upload from './icons/upload.png';

const Landing = () => {
  return (
    <div className='landingcontainer'>
      <div className='imagecont'>
        <img className='logo' src="https://i.imgur.com/zqpwkLQ.png" alt="Instagram" />
      </div>
      <div className='icon-wrap'>
        <img className='icon' src={home}></img>
        <span className='text'>Home</span>
      </div>
      <div className='icon-wrap'>
        <img className='icon' src={search}></img>
        <span className='text'>Search</span>

      </div >
      <div className='icon-wrap'>
        <img className='icon' src={upload}></img>
        <span className='text'>Upload</span>
      </div>
      <div className='icon-wrap'>
        <img className='icon' src={profile}></img>
        <span className='text'>Logout</span>
      </div>
    </div>

  );
};

export default Landing;