import React from 'react'
import survey from '../../assets/survey.png'

function About() {
  return (
    <div className='p-6 flex flex-col items-center md:gap-16'>
      <div className='p-6 flex flex-row items-center gap-4'>
        <hr className="border-black border-2 w-12" />
        <span className='text-lg'>About Us</span>
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
            History of Open<span className='text-orange-500'>Opinions</span>
          </h1>
          <p className='text-black  '>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio sint voluptate voluptatem atque iure, laboriosam explicabo aliquam reiciendis ad, eius necessitatibus modi, obcaecati repellendus? Possimus quae quas repellendus eos inventore.
            Error ex, esse dolores quo tenetur consectetur, optio ipsam dolorem praesentium deleniti ad. Dolore sint rerum molestias, porro recusandae nostrum magnam odio totam cum, dignissimos praesentium perspiciatis aperiam repellat similique?
          </p>
          <br />
          <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi blanditiis, repellat itaque non harum aliquid nemo perferendis ducimus voluptatibus corporis omnis possimus pariatur, labore a dolorum facilis sequi recusandae accusamus.</p>

          <button className='rounded-lg text-orange-500 font-semibold border-2 border-orange-500 bg-transparent w-fit p-2 mt-4'>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default About