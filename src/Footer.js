import React from "react";
import linked from "./images/linkedin.png";
import github from "./images/github.png";
import {HiOutlineMail} from 'react-icons/hi'
import {BiPhoneCall} from 'react-icons/bi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'


function Footer() {
  return (
    <div className="flex justify-between  h-12 bg-dark-g text-gw w-full">
      <div className="flex justify-between">
        <div className="flex m-5 items-center">
        <HiOutlineMail/>
        <p className="mx-3">barker.k.elizabeth@gmail.com</p>
        </div>
        <div className="flex m-5 items-center">
        <BiPhoneCall/>
        <p className="m-3">801-857-9886</p>
        </div>
      </div>
      <div className="flex items-center mx-10">
        <a href="https://www.linkedin.com/in/beth-barker-29892887/" target="_blank"><AiOutlineLinkedin className="mx-5 w-12/12"/></a>
        <a href="https://github.com/beth-barker" target="_blank"><AiOutlineGithub/></a>
      </div>
    </div>
  );
}

export default Footer;
