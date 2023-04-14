// this will import react 
import React from "react";
// this will import the image
import Image from "../assets/avatar.png"

// this is a functional component 
const Hero = () => {
    return (  
        // this is the JSX code
        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30%  to-emerald-500 to-90% w-full h-screen">
            <div className="max-w-[1000px] h-full mx-auto px-3 flex flex-col justify-center text-[40px]">
            <img src={Image } alt="avatar" className="w-60 h-60 rounded-full mx-auto mr-[410px] mb-[50px] hover:scale-75 translate-x-4 skew-y-3 md:transform-none duration-500 " />
                <header className="text-7xl text-gray-700 font-bold">Hi! My name is Max Sciuclin.</header>
                <h2 className="text-4xl text-gray-600 font-semibold">I'm currently studying to become a Full Stack Developer!</h2>
                <p className="text-3xl text-gray-500  ">This is my first journey of becoming a Full Stack Developer, I'm exited to build cool applications, gain experience and show my skills!</p>
            </div>
            <div className="h-[90px] bg-[#333]">
                <footer className="text-center text-white text-[20px] p-[30px] border-s-orange-100">
                    <p>© 2023 Max Sciuclin. All rights reserved.</p>
                </footer>
            </div>
    </div>
    )
}
// this will export the component
export default Hero; 