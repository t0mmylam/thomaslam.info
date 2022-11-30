import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Logo from '../Logo'
import './index.css'

function Navbar() {
	return (
		<header>
			<Logo />
			<div className='nav'>
			<Link className='nav-links underline-hover-effect' to="/experience">About</Link>
				<Link className='nav-links underline-hover-effect' to="/experience">Experience</Link>
				<Link className='nav-links underline-hover-effect' to="/projects">Projects</Link>
					<Link className='icons underline-hover-effect nav-links' to="https://github.com/t0mmylam/">
						<FaGithub />
					</Link>
					<Link className='icons underline-hover-effect nav-links' to="https://linkedin.com/in/thslam/">
						<FaLinkedin />
					</Link>
			</div>
		</header>
	)
}

export default Navbar