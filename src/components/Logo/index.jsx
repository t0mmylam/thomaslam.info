import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Logo() {
    return (
        <Link href='/' id='logo-link'>
        <span id='tllt'>
            <span id='T0'>
                <span id='T01'></span>
                <span id='T02'></span>
            </span>
            <span id='L0'></span>
            <span id='L1'></span>
            <span id='T1'>
            <span id='T11'></span>
                <span id='T12'></span>
            </span>
        </span>
        </Link>
    )
}

export default Logo;