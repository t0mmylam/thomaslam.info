import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Navbar() {
	return (
		<header>
			<div className="home">
				<Link className='nav-title underline-hover-effect' to="/">Your Spotify Stats</Link>
			</div>
			<div className='nav'>
				<Link className='nav-links underline-hover-effect' to="/about">About</Link>
				<Link className='nav-links underline-hover-effect' to="/experience">Experience</Link>
				<Link className='nav-links underline-hover-effect' to="/projects">Projects</Link>
				<Link id='contact' className='nav-links underline-hover-effect' to="/contact">Contact</Link>
			</div>
		</header>
	)
}

export default Navbar