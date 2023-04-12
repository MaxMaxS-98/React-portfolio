import React from "react";


const About = () => {
    return(
        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30%  to-emerald-500 to-90% w-full h-screen">
        <div className="max-w-[1000px] h-full mx-auto px-3 flex flex-col justify-center text-[40px]">
            <header className="text-7xl text-gray-700 font-bold ml-[100px] mb-[30px]">This is about me section!</header>
            
            <p className="text-3xl text-gray-600  ">Hi again! My name is Max, I am 24 years old. 
            I am currently studying to become a Full Stack Developer.Mostly
             I really enjoy making Front-End applications,
             I think It helps me with my creative outlet and helps me express myself. 
             I like working in the Back-End as well, 
             but I belive I need a lot more practice to feel confident in that area!
             Before I started my journey as a Full Stack Developer,
             I was an audio engineer and music producer. I have been working with music for a while now,
             but I decided to change my career path and start something new!
             </p>
        </div>
        <div className="h-[90px] bg-[#333]">
            <footer className="text-center text-white text-[20px] p-[30px] border-s-orange-100">
                <p>© 2023 Max Sciuclin. All rights reserved.</p>
            </footer>
        </div>
</div>
    )
}

export default About;