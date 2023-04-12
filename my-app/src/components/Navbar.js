import React from "react";
import{FaBars, FaTimes,FaGithub} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonFill} from "react-icons/bs";
import Logo from "../assets/react.jpeg";

const Navbar = () => {
    const handleClick = () => setNav (!nav);
    const [nav, setNav] = React.useState(false);
    return (
        <div className="fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#333] text-white font-extrabold">
            <div>
                <img src={Logo} alt="logo" className="w-40 h-30" />
            </div>
                <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            

            <div onClick={handleClick} className="md:hidden">
                <FaBars />
            </div>

            <div className ='flex fixed flex-row top-[35%] '>
                <ul>
                    <li className="flex justify-between w-[150px] h-[70px] hover:bg-black  ">  <a className="flex justify-between items-center w-full text-white" href="https://github.com/MaxMaxS-98" rel="github">GitHub<FaGithub size={40}/></a></li>
                    <li className="flex justify-between w-[150px] h-[70px] hover:bg-red-400  ">  <a className="flex justify-between items-center w-full text-white" href="https://maxambraci@gmail.com" rel="email"> Email < HiOutlineMail size={40}/></a></li>
                    <li className="flex justify-between w-[150px] h-[70px] hover:bg-blue-400  ">  <a className="flex justify-between items-center w-full text-white" href="https://docs.google.com/document/d/1DVPwmykmMN4oQDdApcYFg-JlPladkbtYofbjocOgYtY/edit" rel="resume">Resume<BsFillPersonFill size={40}/></a></li>
                </ul>
                
            </div>

        </div>

    )
}

export default Navbar;