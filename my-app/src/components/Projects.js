// this will import react and the projects component
import React from "react";
import WetherImage from "../assets/Weather.png"
import NotesImage from "../assets/notes.png"
import PortfolioImage from "../assets/port.png"
import TestImage from "../assets/test.png"

// this is a functional component that will return the JSX code
const Projects = () => {
    return(
        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30%  to-emerald-500 to-90% w-full h-screen">
            <div className='max-w-[900px] mx-auto  flex flex-col justify-center w-full h-full'>
            <div className=''>
                <p className='text-7xl text-gray-700'>Projects</p>
                <p className='text-6xl text-gray-700 pb-7'>This are some of my projects</p>
            </div>
        <div className=''>
            {/* // this is the first row of projects linked to the images */}
            <div> 
                        <div className="flex space-x-6 flex-row justify-center items-center space-between pr-[350px] ">
                        <a href="https://maxmaxs-98.github.io/Weather-Dashboard_api/" target="blank">  <img src={WetherImage} alt="Weather App" className="w-[23rem] h-[15rem]  ml-80   hover:scale-75 translate-x-4 skew-y-3 md:transform-none duration-500 " /> </a>
                        <a href="https://note-taker-app-max.herokuapp.com/notes" target="blank"> <img src = {NotesImage} alt="Notes App" className="w-[23rem] h-[15rem] ml-80   hover:scale-75 translate-x-4 skew-y-3 md:transform-none duration-500 " /> </a>
                        <a href="https://maxsciuclin.github.io/TTH-Responsive-Layout-project/" target="blank">  <img src = {PortfolioImage} alt="Portfolio App" className="w-[23rem] h-[15rem] ml-80   hover:scale-75 translate-x-4 skew-y-3 md:transform-none duration-500 " /> </a>
                        <a href="https://maxmaxs-98.github.io/My-Code_Quiz-4/" target="blank"> <img src = {TestImage} alt="Test App" className="w-[23rem] h-[15rem]  ml-80   hover:scale-75 translate-x-4 skew-y-3 md:transform-none duration-500 " />  </a>
                </div>
            </div>

        </div>
        </div>
        {/* // this is the footer */}
            <div className="h-[90px] bg-[#333]">
                <footer className="text-center text-white text-[20px] p-[30px] border-s-orange-100">
                    <p>© 2023 Max Sciuclin. All rights reserved.</p>
                </footer>
            </div>
        </div>
        
    )
}
// this will export the component
export default Projects;