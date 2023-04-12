import React from "react";
import Image from "../assets/Weather.png"


const Projects = () => {
    return(
        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30%  to-emerald-500 to-90% w-full h-screen">
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-3xl text-gray-700'>Projects</p>
                <p>This are some of my projects</p>
            </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3'>
            <div className=''>
                <div>
                    <span>
                        <div>
                        <a href="/"></a>
                        </div>
                    </span>
                </div>
            </div>

        </div>
    </div>
</div>
    )
}

export default Projects;