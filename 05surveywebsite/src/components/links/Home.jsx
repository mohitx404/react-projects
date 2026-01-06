import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellConcierge } from "@fortawesome/free-solid-svg-icons";
import Pointscard from '../Points/Pointscard';
import Points from '../Points/Points';
import { useFirebase } from '../context/Firebase';

export default function Home() {
    const firebase = useFirebase()

    return (
        <div className='flex flex-col min-h-screen'>
            <div className='flex-grow'>
                <div className='p-8 w-full md:px-24'>
                        <h1 className='text-xl md:text-3xl'>Hi <span className='underline underline-offset-2'>Mohit!</span></h1>

                        <Pointscard />
                  

                    <h1 className='font-bold text-xl md:text-4xl mt-4'>Tasks</h1>

                    <div className="flex flex-col items-start  p-4 w-fit rounded-lg mt-8 bg-gradient-to-br from-violet-600 to-orange-500 outline-none mb-12 overflow-hidden" id='survey-card' >
                        <FontAwesomeIcon className='text-white' icon={faBellConcierge} />
                        <div className='mt-2 mb-2'>
                            <h1 className='text-xl text-white font-semibold'>Research survey</h1>
                            <p className='text-white'>Earn points for taking this research survey</p>
                        </div>
                        <div className='mt-6 mb-6'>
                            <Link
                               
                                to={'/survey'}
                                className='border-2 text-white rounded-full p-2 px-6 hover:bg-white hover:text-black'>
                                Start now
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='bg-gray-200'>
                    <div className='p-8 md:px-24 py-8 md:py-12'>
                        <Points id='gift-cards' />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className='bg-white mt-12'>
                <div className='max-w-7xl mx-auto px-8 py-12'>
                    {/* Main Content */}
                    <div className='text-center md:text-left mb-8'>
                        <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
                            At the heart of our company is a global online community, where millions of people and thousands of political, cultural and commercial organisations engage in a continuous conversation about their beliefs, behaviours and brands.
                        </p>
                    </div>

                    {/* Grey Line Separator */}
                    <div className='border-t border-gray-300 my-6'></div>

                    {/* Links and Copyright */}
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        {/* Links */}
                        <div className='flex gap-6 text-sm items-center'>
                            <Link to='/privacy' className='text-gray-600 hover:text-gray-900 transition-colors'>
                                Privacy policy
                            </Link>
                            <span className='text-gray-400'>|</span>
                            <Link to='/terms' className='text-gray-600 hover:text-gray-900 transition-colors'>
                                Terms and conditions
                            </Link>
                        </div>

                        {/* Copyright */}
                        <p className='text-gray-600 text-sm'>
                            Copyright &copy; 2026 OpenOpinion . All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}