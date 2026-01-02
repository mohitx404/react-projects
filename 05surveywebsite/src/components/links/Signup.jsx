import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import survey from '../../assets/survey.png'
import SplitBackground from '../SplitBackground';

function Signup() {
  return (
    <div className='relative flex flex-col p-8 w-full min-h-screen md:grid md:grid-cols-2 md:gap-16'>
      {/* Background split */}  
      <SplitBackground  leftColor="bg-black" rightColor="bg-[#f8f8fa]"/>
      
      {/* Left column - needs relative to appear above background */}
      <div className='relative md:p-20'>
        <Link
          to="/"
          className="border-2 rounded-full w-12 h-12 flex justify-center items-center mb-5 bg-gray-200 hover:bg-gray-300 transition"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </Link>

        <h1 className='text-3xl font-bold text-black md:text-white'>Sign up</h1>
        <h2 className='mt-4 text-gray-500 md:text-gray-300 leading-tight'>
          Please enter the e-mail address and password for Sign up
        </h2>
        
        <form className='mt-8 flex flex-col' action="#">
          <label className='text-black md:text-white font-medium' htmlFor="email">
            Email address
          </label>
          <input 
            id="email"
            className='border-gray-500 border-2 p-2 mt-2 rounded' 
            placeholder='Email' 
            type="email" 
            
          />
          
          <label className='mt-6 text-black md:text-white font-medium' htmlFor="password">
            Password
          </label>
          <input 
            id="password"
            className='border-gray-500 border-2 p-2 mt-2 rounded' 
            placeholder='Password' 
            type="password" 
          />
          
          <button 
            type="submit"
            className='border-2 border-black p-2 mt-8 w-28 rounded bg-white md:bg-white font-bold hover:bg-black hover:text-white transition'
          >
            Sign up
          </button>
        </form>
      </div>

      {/* Right column - image */}
      <div className='relative p-8 md:flex items-center justify-center hidden'>
        <img src={survey} alt="Survey illustration" className='max-w-full h-auto' />
      </div>
    </div>
  )
}

export default Signup