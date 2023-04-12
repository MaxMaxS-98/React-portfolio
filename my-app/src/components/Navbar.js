import React,{useState} from "react";
import{FaBars, FaTimes,FaGithub} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonFill} from "react-icons/bs";
import Logo from "../assets/react.jpeg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const handleClick = () => setNav (!nav);
    const [nav, setNav] = useState(false);
    return (
        <div className="fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#333] text-white font-extrabold">
            <div>
                <img src={Logo} alt="logo" className="w-40 h-30 hover:scale-90 duration-200 cursor-pointer" />
            </div>
                <ul className="hidden md:flex text-3xl ">
                    
                <NavLink to="/hero"> <li className="hover:text-green-200 hover:scale-125 duration-200"> Home</li> </NavLink>
                    <NavLink to="/about"><li className=" hover:text-green-300 hover:scale-125 duration-200"><a href="./About">About</a></li></NavLink>
                    <NavLink to="/projects"> <li className=" hover:text-green-400 hover:scale-125 duration-200">Projects</li></NavLink>
                    <li className=" hover:text-green-500 hover:scale-125 duration-200">Skills</li>
                    <li className=" hover:text-green-600 hover:scale-125 duration-200">Contact</li>
                </ul>
            

            <div onClick={handleClick} className="md:hidden">
                <FaBars />
            </div>

            <div className ='flex fixed flex-row top-[35%] '>
                <ul>
                    <li className="flex justify-between w-[150px] h-[70px] hover:bg-black hover:translate-x-6 duration-500">  <a className="flex justify-between items-center w-full text-white" href="https://github.com/MaxMaxS-98" rel="github">GitHub<FaGithub size={40}/></a></li>
                    <li className="flex justify-between w-[150px] h-[70px] hover:bg-red-400 hover:translate-x-6 duration-500">  <a className="flex justify-between items-center w-full text-white" href="https://maxambraci@gmail.com" rel="email"> Email < HiOutlineMail size={40}/></a></li>
                    <li className="flex justify-between w-[150px] h-[70px] hover:bg-blue-400 hover:translate-x-6 duration-500 ">  <a className="flex justify-between items-center w-full text-white" href="https://docs.google.com/document/d/1DVPwmykmMN4oQDdApcYFg-JlPladkbtYofbjocOgYtY/edit" rel="resume">Resume<BsFillPersonFill size={40}/></a></li>
                </ul>
                
            </div>

        </div>

    )
}

export default Navbar;