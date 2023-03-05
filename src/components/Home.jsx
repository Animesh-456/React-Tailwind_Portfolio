import React from 'react'
import fork from '../assets/fork.gif'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-scroll";
import Projects from './Projects';

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className='flex flex-col justify-center h-full'>
                    <div>
                        <h2 className='mt-20 text-4xl sm:text-5xl font-bold text-green-500'>
                            Hi, I am Animesh, Full Stack Developer
                        </h2>
                        <p className='text-white py-4 max-w-md'>
                            I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.
                        </p>
                    </div>
                    <div>
                        <Link
                            to="project"
                            smooth
                            duration={500}
                            className="cursor-pointer group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-lime-400 to-green-500"
                        >
                            Projects
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={fork} alt="joh" className="mx-auto w-2/3 md:w-full  md:flex" />
                </div>
            </div>
        </div>
    )
}

export default Home
