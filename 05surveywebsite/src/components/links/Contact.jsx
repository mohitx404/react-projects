import React from 'react'
import survey from '../../assets/survey.png'

function About() {
    return (
        <div className='p-6 flex flex-col items-center md:gap-16'>
            <div className='p-6 flex flex-row items-center gap-4'>
                <hr className="border-black border-2 w-12" />
                <span className='text-lg'>Contact Us</span>
                <hr className="border-black border-2 w-12" />
            </div>

            <div className=' flex md:flex-row flex-col gap-4'>
                <div className='md:w-1/2'>
                    <div className='flex items-center justify-center p-8'>
                        <img src={survey} alt="Survey illustration" className='md:w-1/2 h-auto shadow-xl shadow-slate-300 rounded-md' />
                    </div>
                </div>
                <div className='md:w-1/2 p-4'>
                    <h1 className='text-xl md:text-3xl font-bold mb-4'>
                        Contact Details Open<span className='text-orange-500'>Opinions</span>
                    </h1>
                    <p className='text-gray-700'>
                        Have questions or want to learn more? <br />
                        We'd love to hear from you! <br />
                        Reach us at <a href="mailto:contact@openopinion.com" className='text-blue-600 underline'>contact@openopinion.com</a> or
                        call us at <a href="tel:+1234567890" className='text-blue-600'>+1 (234) 567-890</a>.<br />
                        Our support team is available Monday through Friday, 9 AM to 6 PM EST.
                    </p>

                    <button className='rounded-lg text-orange-500 font-semibold border-2 border-orange-500 bg-transparent w-fit p-2 mt-4'>Read more</button>
                </div>
            </div>
        </div>
    )
}

export default About