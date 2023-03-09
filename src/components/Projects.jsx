import React from 'react'
import tailwind from '../assets/c&w.png'
import corona from '../assets/corona.png'
import { VscGithubInverted } from "react-icons/vsc"
const projects = [
    {
        title: "Celery & Wings",
        subtitle: "Based on NodeJs",
        image: tailwind,
        description:
            "A project on restaurant application where users can order food online before they reach restaurant. Totally based on Node.js, Express.js, MongoDB Atlas and EJS.",
        link: "https://github.com/Animesh-456/Restaurant-Application",
    },
    {
        title: "Coronavirus Live Data Website",
        subtitle: "Covid status",
        image: corona,
        description: "simple web application where we can see the data of every country accordingly",
        link: "https://animesh-456.github.io/Coronavirus-Live-Data-Website/"
    },
    {
        title: "TwiGo",
        subtitle: "A project on vehicle Rental System",
        image: corona,
        description: "Final year graduation project based on vehicle rental sytem",
        link: "https://github.com/Animesh-456/Twigo"
    },
    {
        title: "Knight Tour",
        subtitle: "Finding knight's position",
        description: "Finding knight's all possible moves by giving the input position",
        link: "https://github.com/Animesh-456/Knight-tour"
    },
    {
        title: "Passport Auth",
        subtitle: "Based on NodeJs Rest Api",
        description: "Based on node.js which includes user authentication using passport.js in MongoDB Atlas.",
        link: "https://github.com/Animesh-456/Passport_Auth"
    },
    {
        title: "NodeJS-CRUD-REST-API",
        subtitle: "Typescript NodeJS-CRUD-REST-API using swagger docs",
        description: "Rest Api endpoints based on NodeJS using Typescript, Swagger UI and NodeJS.",
        link: "https://github.com/Animesh-456/NodeJS-CRUD-REST-API"
    },
    {
        title: "Address Book",
        subtitle: "Rest Api endpoints to implement Address Book",
        description: "Based on Nodejs and MongoDB Atlas to fetch, delete, update and edit data through respective api endpoints",
        link: "https://github.com/Animesh-456/Address-Book"
    }
]

const Projects = () => {
    return (
        <div name="project" className="py-10 w-full bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto my-auto flex flex-col justify-center w-full h-full">
                <div className='px-5 pb-8'>
                    <p className="text-4xl font-bold inline border-b-4 border-green-500">
                        My Works
                    </p>
                </div>
                <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-5 sm:px-0">
                    {projects.map((project) => (
                        <a href={project.link} className="hover:shadow-md hover:shadow-[#85df64] duration-500 hover:scale-105 hover:duration-500" target="none">
                            <div className="rounded-md object-cover object-center h-full px-8 py-8 relative z-10 w-full border-4 border-gray-800 bg-transparent">
                                <VscGithubInverted size={30} className="text-green-500" />
                                <br></br>
                                <h2 className="tracking-widest flex items-center text-sm title-font font-medium text-green-400 mb-1">
                                    {project.subtitle}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {project.title}
                                </h1>
                                <p className="leading-relaxed">{project.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Projects
