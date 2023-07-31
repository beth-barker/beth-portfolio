import React from 'react';
import { NavLink } from 'react-router-dom';

function header() {
    return (
        <div className='flex h-14 justify-center bg-dark-g items-end text-lg text-lig font-body w-screen'>
        <div className='flex items-end'>
        <nav className='flex m-2'>
            <NavLink className='mx-2 hover:text-lime hover:underline' to='/'>Home</NavLink>
            <p>|</p>
            <NavLink className='mx-2 hover:text-lime hover:underline' to='/work'>My Work</NavLink>
            <p>|</p>
            <NavLink className='mx-2 hover:text-lime hover:underline' to='/resume'>Resume</NavLink>
        </nav>
        </div>
        </div>
    );
}

export default header;