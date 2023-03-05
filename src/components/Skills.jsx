import React from 'react'
import node from '../assets/node.png'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import github from '../assets/github.png'
import mongo from '../assets/mongo.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'

const Skills = () => {
    return (
        <div name='skills' className='py-10 w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>

            <div className="max-w-screen-lg p-4 mx-auto my-auto flex flex-col justify-center w-full h-full">

                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8 py-10">
                        <p className="text-4xl font-bold inline border-b-4 border-green-500">
                            My Skills
                        </p>
                        <br></br>
                    </div>
                    <p>These are the technologies I've worked with</p>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-4  gap-4 text-center mt-10'>
                        <div className='shadow-md shadow-[#85df64] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto animate-pulse' src={node} alt="HTML icon" />
                            <p className='my-4'>NodeJS</p>
                        </div>
                        <div className='shadow-md shadow-[#00FFFF] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto animate-pulse' src={react} alt="HTML icon" />
                            <p className='my-4'>React</p>
                        </div>
                        <div className='shadow-md shadow-[#FFBF00] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto animate-pulse' src={javascript} alt="HTML icon" />
                            <p className='my-4'>Javascript</p>
                        </div>
                        <div className='shadow-md shadow-[#85df64] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto animate-pulse' src={mongo} alt="HTML icon" />
                            <p className='my-4'>MongoDB</p>
                        </div>
                        <div className='shadow-md shadow-[#FF5733] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto animate-pulse' src={Html} alt="HTML icon" />
                            <p className='my-4'>HTML</p>
                        </div>
                        <div className='shadow-md shadow-[#0096FF] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto animate-pulse' src={Css} alt="HTML icon" />
                            <p className='my-4'>CSS</p>
                        </div>
                        <div className='shadow-md shadow-[#ffffff] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto animate-pulse' src={github} alt="HTML icon" />
                            <p className='my-4'>Github</p>
                        </div>
                        <div className='shadow-md shadow-[#00acc1] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto animate-pulse' src={tailwind} alt="HTML icon" />
                            <p className='my-4'>Tailwind</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
