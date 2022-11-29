import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='home-wrapper'>
        <div className='home-title'>
          Thomas Lam
        </div>
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
        <div className='links'>
          <Link className='home-link' to='/about'>About</Link>
          <Link className='home-link' to='/experience'>Experience</Link>
          <Link className='home-link' to='/projects'>Projects</Link>
          <Link className='home-link' to='/contact'>Contact</Link>
          <div className='icons'>
            <a className='home-icons' href="https://github.com/t0mmylam/">
              <FaGithub />
            </a>
            <a className='home-icons' href="https://linkedin.com/in/thslam/">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
