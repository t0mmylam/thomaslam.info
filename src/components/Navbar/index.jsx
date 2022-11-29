import React from 'react'
import './index.css'

function Navbar() {
	return (
		<div className="navbar">
			<div className="home">
				<a className='nav-title underline-hover-effect' href="/">THOMAS LAM</a>
			</div>
			<div className='nav-menu'>
				<a className='nav-links underline-hover-effect' href="/about">About</a>
				<a className='nav-links underline-hover-effect' href="/experience">Experience</a>
				<a className='nav-links underline-hover-effect' href="/projects">Projects</a>
				<a id='contact' className='nav-links underline-hover-effect' href="/contact">Contact</a>
			</div>
		</div>
	)
}

export default Navbar