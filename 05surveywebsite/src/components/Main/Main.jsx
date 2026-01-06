import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import survey from '../../assets/survey.png'


function Main() {
    return (
        <div className='relative min-h-screen md:bg-none bg-[#f8f8fa]'>
            {/* Background split */}
            <div className='md:absolute md:inset-0 md:grid md:grid-cols-2'>
                <div className='bg-black'></div>
                <div className='bg-[#f8f8fa]'></div>
            </div>

            {/* Content */}
            <div className='flex flex-col md:relative md:grid md:grid-cols-2 md:gap-16 md:min-h-screen'>
                {/* Main Content */}
                <div className='flex flex-col gap-6 order-1 md:order-none p-5 md:p-32'>
                    <p className="mt-2 text-3xl md:text-5xl font-extrabold font-sans text-black md:text-white leading-tight">
                        Share your opinion.<br />
                        Earn money.<br />
                        Shape the news.
                    </p>

                    <h3 className='text-lg text-gray-500 font-semibold'>
                        Join millions of others in sharing your opinion on politics, sport, entertainment and more
                    </h3>
                    <p className='text-white text-sm hidden md:block'>
                        Be part of a growing community of users sharing their thoughts on everything from politics and sports to entertainment and everyday products. By completing short surveys, you can have your voice heard, contribute to important decisions, and earn rewards for your participation. Every opinion matters, and together we help shape the services, content, and products that affect people’s daily lives.
                    </p>
                    <Link
                        to="/signup"
                        className="px-4 py-2 border border-gray-500 rounded-full hover:bg-gray-800 hover:text-white text-blue-800  transition font-bold w-fit"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Image - order-2 on mobile, no order on desktop */}
                <div className='flex items-center justify-center p-8 order-2 md:order-none'>
                    <img src={survey} alt="Survey illustration" className='max-w-full h-auto' />
                </div>

                {/* Bottom Content */}
                <div className='md:text-white text-black flex flex-col p-5 md:p-32 order-3 md:order-none md:justify-end'>
                    <div>
                        <h3 className='text-md mb-2'>Looking for enterprise solutions?</h3>
                        <Link to="/business" className="inline-block mb-8">
                            <h3 className="font-extrabold text-xl">
                                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-transparent bg-clip-text hover:underline hover:underline-offset-4 hover:decoration-purple-600">
                                    OpenOpinion for Business
                                </span> 🚀
                            </h3>
                        </Link>

                        <div className="flex items-center text-sm text-gray-400 gap-6">
                            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>

                            <span className="text-gray-500 text-xs">|</span>

                            <Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link>

                            <span className="text-gray-500 text-xs">|</span>

                            <Link to="/csr" className="hover:text-white transition">CSR Policy</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main