// This is the Skills component
// this will import react, the logos and the NavLink
import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png"
// this is a functional component
const Skills = () => {
    return (
        // this is the JSX code
        // this is the div that will contain the skills
        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30%  to-emerald-500 to-90% w-full h-screen">
            <div className="max-w-[1000px] h-full mx-auto px-3 flex flex-col justify-center text-[40px]">
                <header className="text-5xl text-gray-700 font-bold flex justify-center items-center pb-[30px]" > I have skills with these thechnologies:</header>
                <div> 
                    <div className="flex flex-row pt-[10px] border-s-orange-50 bg-blue-500 ">
                        <img className="w-20 mx-auto" src={html} alt="html logo"/>
                        <img className="w-20 mx-auto" src={css} alt="css logo"/>
                        <img className="w-20 mx-auto" src={js} alt="js logo"/>
                        <img className="w-20 mx-auto" src={react} alt="react logo"/>
                        <img className="w-20 mx-auto" src={tailwind} alt="tailwind logo"/>
                        <img className="w-20 mx-auto" src={github} alt="github logo"/>
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
export default Skills;