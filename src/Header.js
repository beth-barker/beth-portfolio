import React from 'react';
import { NavLink } from 'react-router-dom';

function header() {
    return (
        <div className='flex h-14 justify-center bg-dark-g items-end text-lg text-lig font-body w-screen'>
        <div className='flex items-end'>
        <nav className='flex m-2'>
            <NavLink className='mx-2' to='/'>Home</NavLink>
            <p>|</p>
            <NavLink className='mx-2' to='/work'>My Work</NavLink>
            <p>|</p>
            <NavLink className='mx-2' to='/about'>About Me</NavLink>
            <p>|</p>
            <NavLink className='mx-2' to='/contact'>Resume</NavLink>
        </nav>
        </div>
        </div>
    );
}

export default header;