import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { usePointContext } from '../context/Pointcontext';

function Survey() {
    const navigate = useNavigate()
    const point = usePointContext()

    const questions = [
        {
            id: 0,
            question:
                "Which type of device do you primarily use for most of your daily online activities such as browsing, streaming, studying, or work?",
            options: [
                "Smartphone",
                "Laptop",
                "Desktop PC",
                "Tablet",
                "Smart TV or Streaming Device"
            ]
        },

        {
            id: 1,
            question:
                "How many hours per day do you typically spend using any digital device such as a phone, laptop, or computer?",
            options: [
                "Less than 1 hour",
                "1-3 hours",
                "3-5 hours",
                "5-8 hours",
                "More than 8 hours"
            ]
        },

        {
            id: 2,
            question:
                "How important is technology in your daily life in terms of productivity, entertainment, learning, and staying connected with others?",
            options: [
                "Not important at all",
                "Slightly important",
                "Moderately important",
                "Very important",
                "Absolutely essential"
            ]
        },

        {
            id: 3,
            question:
                "Which technology trend excites you the most and you think will have the biggest impact in the next 5-10 years?",
            options: [
                "Artificial Intelligence and Machine Learning",
                "Blockchain and Cryptocurrency",
                "Virtual Reality / Augmented Reality (Metaverse)",
                "Automation & Robotics",
                "5G / Next-Gen Internet Connectivity"
            ]
        },

        {
            id: 4,
            question:
                "How concerned are you about data privacy and security when using apps, websites, and online services?",
            options: [
                "Not concerned at all",
                "Slightly concerned",
                "Somewhat concerned",
                "Very concerned",
                "Extremely concerned"
            ]
        }
    ];

    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState("");
    const [error, setError] = useState("");

    const handleNext = () => {
        if (!selected) {
            setError("Please Select atleast one option")
            return
        }

        setError("")
        const prev = JSON.parse(localStorage.getItem("data")) || [];

        prev[index] = {
            id: questions[index].id,
            question: questions[index].question,
            selected: selected
        }
        localStorage.setItem("data", JSON.stringify(prev))
        setSelected("")
        setIndex(index + 1);


    }
    const handleCompleted = () =>{
        if(index >= questions.length){
            point.addPoints(1000)
            navigate('/home')
        }
    }

    if (index >= questions.length) {
        return (
            <div className="w-full min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-3xl font-semibold mb-2 ">Thank You 🎉</h1>
                <p className="text-lg">  Your responses have been recorded.</p>
                <button className='p-2 mt-10 bg-gray-200 w-28 border-2 rounded-full hover:text-white hover:transition-all hover:bg-black' onClick={handleCompleted}>OK</button>
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col min-h-max p-14">
            <h2 className="text-xl font-serif mb-12">
                Q{index + 1}. {questions[index].question}
            </h2>

            {questions[index].options.map((op, i) => (
                <label key={i} className='text-lg font-serif ml-6 p-2' style={{ display: "block" }}>
                    <input
                        type="radio"
                        value={op}
                        checked={selected === op}
                        onChange={(e) => setSelected(e.target.value)}
                    />
                    <span> </span>
                    {op}
                </label>
            ))}
            {error && 
                <div className='p-2 m-2 text-gray-500 font-serif'>{error}</div>
            }
            <button
                className="p-2 mt-10 self-center bg-gray-200 w-28 border-2 rounded-full hover:text-white hover:transition-all hover:bg-black"
                onClick={handleNext}
            >
                Next
            </button>
        </div>
    );

}

export default Survey