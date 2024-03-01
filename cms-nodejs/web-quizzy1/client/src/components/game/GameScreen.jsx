import React, { useEffect, useState } from 'react'
import { FaExpand, FaUser } from 'react-icons/fa'
import { HiMagnifyingGlassPlus } from 'react-icons/hi2'
import { IoMdSettings } from 'react-icons/io'
import { IoArrowForward } from 'react-icons/io5'
import { TbMusicOff } from 'react-icons/tb'

const GameScreen = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [rightQuestion, setRightQuestion] = useState(0);
    const [showRightQuestion, setShowRightQuestion] = useState(false);
    const [score, setScore] = useState(0);

    //them cau hoi
    const allQuestion = [
        {
            text: 'What is the sum of all the interior angles of a triangle?',
            options: [
                { answerText: '180 degrees', isCorrect: true },
                { answerText: '270 degrees', isCorrect: false },
                { answerText: '360 degrees', isCorrect: false },

            ],
        },
        {
            text: 'What is the formula for finding the circumference of a circle?',
            options: [
                { answerText: 'π x r^2', isCorrect: false },
                { answerText: '4 x π x r/3', isCorrect: false },
                { answerText: '2 x π x r', isCorrect: true },

            ],
        },
        {
            text: 'What is the name of the triangle with three equal sides and angles?',
            options: [
                { answerText: 'Right triangle', isCorrect: false },
                { answerText: 'Equilateral triangle', isCorrect: true },
                { answerText: 'Isosceles triangle', isCorrect: false },

            ],
        },
        {
            text: 'What is the speed of light? ',
            options: [
                { answerText: '300,000,000 m/s', isCorrect: true },
                { answerText: '100,000,000 m/s', isCorrect: false },
                { answerText: '10,000,000 m/s', isCorrect: false },

            ],
        },
        {
            text: 'Which law states that for every action, there is an equal and opposite reaction?',
            options: [
                { answerText: "Newton's Third Law of Motion", isCorrect: true },
                { answerText: "Newton's Second Law of Motion", isCorrect: false },
                { answerText: "Newton's First Law of Motion", isCorrect: false },

            ],
        },
        {
            text: 'What is kinetic energy and what factors does it depend on?',
            options: [
                { answerText: 'Paris', isCorrect: false },
                { answerText: 'London', isCorrect: true },
                { answerText: 'Rome', isCorrect: false },

            ],
        },
        {
            text: 'What is the chemical symbol for gold?',
            options: [
                { answerText: 'Ag', isCorrect: false },
                { answerText: 'Hg', isCorrect: false },
                { answerText: 'Au', isCorrect: true },

            ],
        },
        {
            text: 'What is the name for a group of atoms that form the smallest unit possible in a chemical change?',
            options: [
                { answerText: 'molecule', isCorrect: true },
                { answerText: 'proton', isCorrect: false },
                { answerText: 'neutron', isCorrect: false },
            ],
        },
        {
            text: 'What is the empirical formula for water?',
            options: [
                { answerText: 'H2', isCorrect: false },
                { answerText: 'CO', isCorrect: false },
                { answerText: 'H2O', isCorrect: true },
            ],
        },
        {
            text: 'What is the name for the hard, transparent substance that forms the outer shell of eggs?',
            options: [
                { answerText: 'CaCO3', isCorrect: true },
                { answerText: 'NaCl', isCorrect: false },
                { answerText: 'FeCO4', isCorrect: false },

            ],
        },
    ]

    // tinh diem cau hoi
    const handleAnswerOptions = (isCorrect) => {
        if (isCorrect) {
            setRightQuestion(rightQuestion + 1);
            setScore(score + 100);
        }
        const handleNextQuestion = currentQuestion + 1;
        if (handleNextQuestion < allQuestion.length) {
            setCurrentQuestion(handleNextQuestion);
        } else {
            setShowScore(true);
            setShowRightQuestion(true);
        }
    };

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        if (inputValue) {
            // Perform the desired action when the button is clicked
            console.log('Button clicked!');
        }
    };

    // change color for text
    const [color, setColor] = useState('text-pink-500');
    useEffect(() => {
        const interval = setInterval(() => {
            setColor((prevColor) => (prevColor === 'text-pink-500' ? 'text-blue-500' : 'text-pink-500'));
        }, 500);

        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            {showScore ?
                (
                    <div className='flex flex-col w-full h-screen justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500'>
                        <div className='bg-slate-100 p-12 rounded-lg shadow-2xl w-full max-w-xl text-center'>
                            <div className='text-slate-700 text-xl font-semibold'>
                                <p>You Score {rightQuestion} out of {allQuestion.length}</p>
                                <p className={`${color} bg-opacity-50 transition-colors`}>
                                    YOU GOT {score > 600 ? (`${score} POINT! GOOD JOB!`) : (`${score} POINT. TRY BETTER NEXT TIME!`)}
                                </p>
                            </div>
                            <br />
                            <div className='flex mx-auto justify-center items-center'>
                                <button className='font-bold text-lg m-2 h-12 w-auto p-2 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500' onClick={() => { window.location.reload() }}>
                                    Quiz Again?
                                </button>
                                <button className='font-bold text-lg m-2 h-12 w-auto p-2 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500'>
                                    View High Score
                                </button>
                                <button className='font-bold text-lg m-2 h-12 w-auto p-2 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500'>
                                    Back to Home Page
                                </button>
                            </div>

                        </div>
                    </div>
                ) :
                (
                    <div className='flex flex-col w-full max-h-screen h-screen justify-center items-center'>
                        <div className='h-[15%] w-full bg-black bg-opacity-80 flex justify-between items-center px-4'>
                            <div className='flex gap-3 items-center'>
                                <div className='p-2 bg-gray-400 rounded flex items-center cursor-pointer'>
                                    <IoMdSettings size={16} className='text-white' />
                                </div>
                                <div className='p-2 bg-gray-400 rounded flex items-center cursor-pointer'>
                                    <TbMusicOff size={16} className='text-white' />
                                </div>
                                <div className='p-2 bg-gray-400 rounded flex items-center cursor-pointer' ml-3>
                                    <HiMagnifyingGlassPlus size={16} className='text-white' />
                                </div>
                                <div className='p-2 bg-black border border-gray-400 font-bold rounded-full flex items-center'>
                                    <p className='font-bold text-sm text-white'>Score: {score}</p>
                                    <hr />
                                    <p className='font-bold text-sm text-white'>0</p>
                                </div>
                                <div className='p-2 bg-gray-400 rounded flex items-center font-bold text-sm text-white'>
                                    {/* số câu  */}
                                    <span>Question {currentQuestion + 1}&nbsp;</span>/&nbsp;{allQuestion.length}
                                </div>
                            </div>
                            <div className='flex gap-3 items-center justify-end'>
                                <div className='py-2 bg-transparent flex items-center font-bold text-white'>
                                    RoomID:
                                </div>
                                <div className='py-2 bg-transparent flex items-center font-bold text-white'>
                                    178 780
                                    {/* code */}
                                </div>
                                <div className='p-2 bg-gray-400 rounded flex items-center  cursor-pointer'>
                                    <FaExpand size={16} className='text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[35%] bg-purple-400 flex justify-center items-center'>
                            <p className='font-bold text-3xl text-white'>
                                {/* question */}
                                {allQuestion[currentQuestion].text}
                            </p>

                        </div>
                        <div className='w-full h-[35%] bg-purple-700 flex justify-center items-center'>
                            {
                                allQuestion[currentQuestion].options.map((options) => (
                                    <button
                                        className='m-4 h-[70%] w-[30%] rounded-md bg-slate-200 text-5xl font-semibold hover:bg-red-400 hover:scale-105 hover:shadow-xl transition-all duration-700 ease-in-out'
                                        onClick={() => handleAnswerOptions(options.isCorrect)}>{options.answerText}
                                    </button>
                                ))
                            }
                        </div>
                        <div className='w-full h-[15%] bg-black bg-opacity-80 flex justify-between items-center px-4'>
                            <div className='flex items-center my-5 gap-3 pr-5 border-r-2 border-r-white'>
                                <div className='w-14 h-14 rounded-full bg-gray-400 flex items-center justify-center'>
                                    <FaUser size={20} className='text-white' />
                                </div>
                                <div className='p-2 flex items-center bg-transparent text-white font-bold'>
                                    Username
                                </div>
                            </div>
                            <div className='flex items-center my-5 justify-end pl-5 border-l-2 border-l-white'>
                                <button
                                    onClick={handleClick}
                                    disabled={!inputValue}
                                    className='px-4 py-2 flex items-center justify-center rounded-md hover:border-b-0 hover:translate-y-0.5 disabled:bg-gray-500 disabled:text-opacity-50 enabled:bg-purple-600 enabled:border-b-4 enabled:border-b-purple-950 enabled:shadow-md '>
                                    <div className='flex justify-center items-center gap-2 text-white font-semibold text-lg'>
                                        SUBMIT
                                        <IoArrowForward size={16} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default GameScreen