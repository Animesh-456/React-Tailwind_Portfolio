import React from 'react'
import { MdLocationPin, MdMarkEmailUnread, MdPhone } from "react-icons/md"
import world from '../assets/world.svg'

const Contact = () => {
  return (
    <div name='contact' className='py-10 w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
      <div className="max-w-screen-lg p-4 mx-auto my-auto flex flex-col justify-center w-full h-full">
        <div className='px-5 pb-8'>
          <p className="text-4xl font-bold inline border-b-4 border-green-500">
            Contact
          </p>
        </div>
        <div className='mx-3 mt-10'>

          <div className='flex flex-col md:flex-row'>

            <div>

              <div className='mt-10 flex flex-row items-center gap-5'>
                <MdLocationPin size={40} className="text-green-500" />
                <div>
                  <h2 className='text-3xl'>Location</h2>
                  <h3 className='text-green-500'>Barddhaman West Bengal, India</h3>
                </div>
              </div>

              <div className='mt-20 flex flex-row items-center gap-5'>
                <MdMarkEmailUnread size={40} className="text-green-500" />
                <div>
                  <h2 className='text-3xl'>Email</h2>
                  <h3 className='text-green-500'>anim29006@gmail.com</h3>
                </div>
              </div>

              <div className='mt-20 flex flex-row items-center gap-5'>
                <MdPhone size={40} className="text-green-500" />
                <div>
                  <h2 className='text-3xl'>Phone</h2>
                  <h3 className='text-green-500'>+91 7407934219</h3>
                </div>
              </div>

            </div>

            {/* <div className='mx-20'>
              <img src={world} className="ml-1"></img>
              
            </div> */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
