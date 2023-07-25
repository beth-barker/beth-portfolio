import React from 'react';

function Work(props) {
    return (
        <div className='flex flex-col items-start'>
            <h1>See My Work</h1>

            <p>Bucket List Tracker</p>
            <div className='m-10 flex'>
            <iframe className='border border-lig' width="681" height="409" src="https://www.youtube.com/embed/dd_s40TiSVo" title="F37 Bucket List Capstone" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className='w-6/12'>
            <p className='mx-20'>My Bucket list tracker was created with JavaScript, HTML, CSS, Node.js, Express, axios, and PostgreSQL. I wanted to create a simple website where a user can add and delete items to and from their bucket list. After a list item is completed they can then mark the item complete and add it to their completed list as well as enter some details about completing that item to look back on. 
            This was my first JavaScript project and it was a fun challenge to do the front end and back end to get, post, and delete data from my bit.io database.</p>
            </div>
            </div>
            <p>Scuba Dive Log</p>
        <div className='m-10 flex justify-evenly'>
            <iframe  className='border border-lig' width="681" height="409" src="https://www.youtube.com/embed/EftWH2G8z9Q" title="Suba Dive Log App" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>My Scuba Log Dive App stack</p>
        </div>
        </div>
    );
}

export default Work;