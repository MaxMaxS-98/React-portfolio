import React from "react";

const Hero = () => {
    return (  
        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30%  to-emerald-500 to-90% w-full h-screen">
            <div className="max-w-[1000px] h-full mx-auto px-3 flex flex-col justify-center text-[40px]">
                <h1 className="text-8xl text-gray-700 font-bold">Hi! My name is Max.</h1>
                <h2 className="text-4xl text-gray-600 font-semibold">I'm currently studying to become a Full Stack Developer!</h2>
            </div>
            <div className="h-[90px] bg-[#333]">
                <footer className="text-center text-white text-[20px] p-[30px] border-s-orange-100">
                    <p>© 2023 Max Sciuclin. All rights reserved.</p>
                </footer>
            </div>
    </div>
    )
}

export default Hero; 