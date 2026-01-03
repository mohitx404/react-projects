import React from 'react'
import Google from '../../assets/Google-play-Logo.png'
import Bitcoin from '../../assets/bitcoin-logo-by-Vexels.png'
import Levis from '../../assets/Levis-Logo-700x394.png'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Points({ id , className='' }) {

    const data = [
        {
            cardName: 'Google Play Gift',
            img: Google,
            price: '500',
            coins: '500'
        },
        {
            cardName: "Levi's Gift card",
            img: Levis,
            price: '3500',
            coins: '3500'
        },
        {
            cardName: 'Bitcoins Redeem',
            img: Bitcoin,
            price: '5000',
            coins: '10000'
        }
    ];

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '40px'
                }
            }
        ]
    };

    return (
        <div className='w-full'>
            <h1 className='md:text-3xl font-bold text-xl mb-2 ml-2'>Rewards</h1>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className='px-2 py-4'>
                        <div
                            className="group flex flex-col items-start border-2 p-4 rounded-lg outline-none grayscale hover:grayscale-0 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
                            id='survey-card'
                        >
                            <img
                                className='h-32 w-full object-contain rounded-md transition-all duration-300'
                                src={item.img}
                                alt="card-image"
                            />
                            <div className='mt-2 mb-2'>
                                <h1 className='text-xl mt-4 text-black font-semibold'>{item.cardName}</h1>
                            </div>
                            <div className='flex flex-row justify-between w-full'>
                                <div className='text-black'>₹{item.price}</div>
                                <div className='text-black'>{item.coins} coins</div>
                            </div>
                            <div className='mt-6 mb-6'>
                                <Link
                                    to="/"
                                    className='border-2 font-semibold text-black rounded-full p-2 px-6 hover:bg-gray-500 hover:text-white transition-all duration-300'>
                                    Redeem
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Points