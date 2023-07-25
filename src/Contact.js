import React from 'react';

function Contact(props) {
    return (
        <div className='flex flex-col text-lg'>
            <div>
                <h1 className='text-xl m-5'>EDUCATION</h1>
                <hr />
                <div className='flex flex-col items-start mx-5 mt-5'>
                    <p className='font-bold'>Devmountain | Lehi, UT | June 2023</p>
                    <p className='italic'>Web Development Program</p>
                </div>
                <div className='flex flex-col items-start mx-5 mt-5'>
                    <p>Utah Valley University | Orem, UT | Apr 2020</p>
                    <p className='italic'>B.S. Information Systems - Business Intelligence</p>
                </div>
            </div>
            <div>
                <hr />
                <h1 className='text-xl m-5'>EXPERIENCE</h1>
                <hr />
                <div className='flex flex-col items-start mx-5 mt-5'>
                    <p>Pointe Pest Control | Spokane, WA/Remote | Apr 2018 - Aug 2022</p>
                    <p>Lead Office Manager</p>
                        <li>Maintained technician schedules for more than 4,000 appointments in a Pest Control season for a diverse clientele </li>
                        <li>Received and processed payment for over 2 million dollars in revenue supporting various offices</li>
                        <li>Processed licensing for employees in various cities within the continental US to include 6 states, complying with all regulatory requirements and applicable laws</li>
                        <li>Audited client accounts using Pest Routes and Sales Rabbit</li>
                </div>
                <div className='flex flex-col items-start mx-5 mt-5'>
                    <p>BrainStorm, Inc | American Fork, UT | Dec 2019 - Apr 2020</p>
                    <p>Intern</p>
                        <li>Created individual client user reports for the client success team using Microsoft Office</li>
                        <li>Extracted data from company database using Microsoft SQL Server</li>
                        <li>Updated SQL queries to pull cleaner and more accurate data from the database to use for reports</li>
                </div>
                <div className='flex flex-col items-start mx-5 mt-5'>
                    <p>Wandoo Finance | Riga, Latvia | Oct 2017 - Dec 2017</p>
                    <p>Intern</p>
                        <li>Learned PostgreSQL to extract data from both company databases</li>
                        <li>Explored Qlik Sense to create visualizations that represented Wandoo’s data</li>
                        <li>Completed various SQL and data analytic tasks for head FinTech manager</li>
                        <li>Worked with colleagues to more efficiently organize data for over 10,000 clients</li>
                </div>
            </div>
            <p>For a PDF of my full resume, click <a href="">here</a></p>
        </div>
    );
}

export default Contact;