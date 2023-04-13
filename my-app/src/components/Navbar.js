// This is the Navbar component
// this will import react, the logo, the icons and the NavLink
import React,{useState} from "react";
import{FaBars,FaGithub} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonFill} from "react-icons/bs";
import Logo from "../assets/react.jpeg";
import { NavLink } from "react-router-dom";
// this is a functional component
const Navbar = () => {
    // this is the function that will handle the click event
    const handleClick = () => setNav (!nav);
    // this is the state that will handle the click event
    const [nav, setNav] = useState(false);
    return (
        // this is the JSX code
        <div className="fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#333] text-white font-extrabold">
            <div>
                <img src={Logo} alt="logo" className="w-40 h-30 hover:scale-90 duration-200 cursor-pointer" />
            </div>
                <ul className="hidden md:flex text-3xl ">
                    {/* // this is the NavLink component to link the pages */}
                <NavLink to="/hero"> <li className="hover:text-green-200 hover:scale-125 duration-200"> Home</li> </NavLink>
                    <NavLink to="/about"><li className=" hover:text-green-300 hover:scale-125 duration-200"><a href="./About">About</a></li></NavLink>
                    <NavLink to="/projects"> <li className=" hover:text-green-400 hover:scale-125 duration-200">Projects</li></NavLink>
                    <NavLink to="/Skills"> <li className=" hover:text-green-500 hover:scale-125 duration-200">Skills</li></NavLink>
                    {/* <li className=" hover:text-green-600 hover:scale-125 duration-200">Contact</li> */}
                </ul>
            
{/* // this is the icon that will be displayed on mobile devices */}
            <div onClick={handleClick} className="md:hidden">
                <FaBars />
            </div>
{/* // this is the div that will be displayed on mobile devices */}
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
// this will export the Navbar component
export default Navbar;