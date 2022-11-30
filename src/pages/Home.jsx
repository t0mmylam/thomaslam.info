import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='home-wrapper'>
        <h1>
          Your Spotify asdStats
        </h1>
        <span className='tw'>
          <Typewriter
            options={{
              strings: ['Developer', 'Student'],
              autoStart: true,
              loop: true,
              cursor: '_'
            }}
          />
        </span>
      </div>
    </div>
  );
}

export default Home;
