import React from 'react'
import { Link } from 'react-router-dom'
import survey from '../../assets/survey.png'


function Main() {
    return (
        <div className='relative min-h-screen'>
            {/* Background split */}
            <div className='absolute inset-0 grid grid-cols-2'>
                <div className='bg-black'></div>
                <div className='bg-[#f8f8fa]'></div>
            </div>

            {/* Content */}
            <div className='relative grid grid-cols-2 gap-16 min-h-screen'>
                <div className='flex flex-col justify-between w-full p-32'>
                    {/* Main Content */}
                    <div className='flex flex-col gap-6'>
                        <p className='text-5xl font-extrabold font-sans text-white leading-tight'>
                            Share your opinion.<br />
                            Earn money.<br />
                            Shape the news.
                        </p>
                        <h3 className='text-lg text-gray-300 font-semibold'>
                            Join millions of others in sharing your opinion on politics, sport, entertainment and more
                        </h3>
                    </div>

                    {/* Bottom Content */}
                    <div className='text-white'>
                        <h3 className='text-md mb-2'>Looking for enterprise solutions?</h3>
                        <Link to="/business" className="inline-block mb-8">
                            <h3 className="font-extrabold text-xl">
                                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-transparent bg-clip-text hover:underline hover:underline-offset-4 hover:decoration-purple-600">
                                    OpenOpinion for Business
                                </span> 🚀
                            </h3>
                        </Link>

                        <div className='flex gap-6 text-sm text-gray-400'>
                            <Link to="/privacy" className='hover:text-white transition'>
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className='hover:text-white transition'>
                                Terms & Conditions
                            </Link>
                            <Link to="/csr" className='hover:text-white transition'>
                                CSR Policy
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center p-8'>
                    <img src={survey} alt="Survey illustration" className='max-w-full h-auto' />
                </div>
            </div>
        </div>
    )
}

export default Main