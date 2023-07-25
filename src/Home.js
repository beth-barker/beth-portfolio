import React from 'react';
import Beth from './images/bethface.jpeg'

function Home(props) {
    return (
        <div className='flex flex-col items-center'>
        <div className='bg-dg text-black text-3xl rounded-b-full w-2/4 flex flex-col'>
            <p className='pt-5 pb-2'>Beth Barker</p>
            <p className='pb-5'>Web Developer & Data Analyst</p>
        </div>
        <div className='flex justify-center my-10'>
            <img src={Beth} alt="beth" className='w-8/12 rounded-full border border-lig'/>
        </div>
        <div>
            <p>Welcome to my portfolio.</p>
            <p>I'm a web developer with a degree in information systems.</p>
            <h1 className='mt-5 text-lg'>SKILLS</h1>
            <div className='mt-1'>
                <ul className='flex space-evenly'>
                <li className='mx-3'>React</li>
                <li>|</li>
                <li className='mx-3'>JavaScript</li>
                <li>|</li>
                <li className='mx-3'>Node.js</li>
                <li>|</li>
                <li className='mx-3'>Express</li>
                <li>|</li>
                <li className='mx-3'>SQL</li>
                <li>|</li>
                <li className='mx-3'>HTML</li>
                <li>|</li>
                <li className='mx-3'>CSS</li>
                </ul>
            </div>
        </div>
        </div>
    );
}

export default Home;