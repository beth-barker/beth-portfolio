import React from "react";

function Work(props) {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col">
        <p className="text-xl mt-7 mb-3 underline">BUCKET LIST TRACKER</p>
        <div className="m-10  flex">
          <div className="w-6/12 flex flex-col items-center text-left border bg-dark-g rounded-3xl p-3 mr-4">
            <p className="text-left font-bold  w-8/12">Stack Used:</p>
            <p className="mb-5 ">
              JavaScript, HTML, CSS, Node.js, Express, axios, and
              PostgresSql
            </p>
            <div className="text-left mb-5 w-8/12">
              <p className="text-left font-bold">Key Features:</p>
              <li className="mb-2">
                User can add a new list item to their bucket list - axios POST
              </li>
              <li className="mb-2">
                User can delete an item from the bucket list - axios DELETE
              </li>
              <li className="mb-2">
                User can "accomplish an item" and move that item to the
                accomplished container  - axios POST
              </li>
              <li className="mb-2">User can view details from accomplished items - axios GET</li>
            </div>

            <p className="mx-20 text-left">
              This simple bucket list tracker application was my first project
              that I completed on my own. I wanted it to be a tracker and
              journal for bucket list items. I was able to accomplish that by
              having containers for the bucket list and the accomplished list as
              well as having a section that displays the details of the item
              completed. I was able to connect my website to a database in
              bit.io and use axios to pull data from the DB. I loved using
              sequlize to create the tables and queries.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="m-5">View my Bucket List <a target="_blank" className="text-lime underline" href="https://github.com/beth-barker/bucket-list">GitHub Repo</a></p>
            <iframe
                className=""
                width="681"
                height="409"
                src="https://www.youtube.com/embed/dd_s40TiSVo"
                title="F37 Bucket List Capstone"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
            <p className="text-xl mt-7 mb-3 underline">SCUBA DIVE LOG</p>
            <div className="flex m-10">
                <div className="flex flex-col items-center">
                    <p className="m-5">View my Scuba Dive Log <a target="_blank" className="text-lime underline" href="https://github.com/beth-barker/suba-log-capstone">GitHub Repo</a></p>
                    <div className="flex flex-col items-center">
                        <iframe
                        className=""
                        width="681"
                        height="409"
                        src="https://www.youtube.com/embed/EftWH2G8z9Q"
                        title="Suba Dive Log App"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                        ></iframe>
                    </div>

                </div>
            <div className="w-6/12 flex flex-col items-center text-left border bg-dark-g rounded-3xl p-3 ml-4">
            <p className="text-left font-bold  w-8/12">Stack Used:</p>
            <p className="mb-5 ">
              React, Express, axios,  Node.js, Tailwind, and PostgreSQL
            </p>
            <div className="text-left mb-5 w-8/12">
              <p className="text-left font-bold">Key Features:</p>
              <li className="mb-2">
                User can register and login - Authentication
              </li>
              <li className="mb-2">
                User can add a log to their dive book - axios POST
              </li>
              <li className="mb-2">
                User can see a preview of their logged dives - axios GET
              </li>
              <li>
                User can click on a specific dive and see all details previosuly entered - axios GET
              </li>
              <li className="mb-2">User can filter dives by country</li>
            </div>

            <p className="mx-20 text-left">
              My Scuba Log Dive application was my first React project. I love to scuba dive and wanted it to be a useful site where users could log their dives in their own profiles. The dive details page shows a preview of each dive completed by the diver, showing dive spot, location, and date completed. By adding this and the country search filter, it is easy to look back on specific dives and dive spots. This was a feature that I really wanted to add in beacuse it's something I think most log books are lacking. I enjoyed using DataTypes in sequilize to create the tables and filter data in my DB. I also challenged myself to learn Tailwind for the design and really liked how functional and precise it is. 
            </p>
          </div>
            </div>
      </div>
    </div>
  );
}

export default Work;
