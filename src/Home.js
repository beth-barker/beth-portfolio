import React from 'react';
import Beth from './images/bethface.jpeg'

function Home(props) {
    return (
        <div className='flex flex-col items-center'>
        <div className='bg-dg text-black text-3xl rounded-b-full w-2/4 flex flex-col'>
            <p className='pt-5 pb-2'>Beth Barker</p>
            <p className='pb-5'>Web Developer & Data Analyst</p>
        </div>
    
            <div className='flex  items-center m-10 justify-center items-end text-lig'>
                <div className='flex justify-center '>
                    <img src={Beth} alt="beth" className='w-8/12 rounded-full border border-lig'/>
                </div>
                <div className='flex flex-col items-start w-3/12'>
                    <p className='mb-5 font-bold'>About Me:</p>
                    <p className='text-left mb-5'>Hi, I'm Beth! I'm a recent coding bootcamp grad. I focused on Web Development, especially React. I also graduated with of Bachelor of Science in Information Systems in 2020. I'm passionate about data, development, and problem solving. I love working with a team or individually to solve problems effeciently. </p>
                    <p className='text-left'>I'm based in Salt Lake City. I'm adventurous and love to try new things. I love to travel and have visted 40 countries. I like to do anything outdoors especially camping, hiking, and paddleboarding. </p>
                    
                </div>
        </div>

        <div>
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
                <li>|</li>
                <li className='mx-3'>Git</li>
                </ul>
            </div>
        </div>
        </div>
    );
}

export default Home;