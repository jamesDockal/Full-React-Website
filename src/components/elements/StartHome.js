import React from 'react';
import Button from './Button';

import '../styles/home.css';

function StartHome() {
  return (
    <div className='container'>
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <div className='wrapper'>
        <h1>
          Adventure awaits
        </h1>
        <h2>
          What are you waiting for?
        </h2>
        <div className='buttons'>
          <Button
            type='transparent'>
              GET STARTED
          </Button>
          <Button
            type='white'>
              WATCH TRAILER
              <i className="fas fa-play" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default StartHome;