import React from 'react'
import RadioButton from '../../components/RadioButton'
import Modal from '../../components/modal'
import Dropdown from '../../components/Dropdown'
const index = () => {
    return (
        <>

        <div className="container mx-auto my-20 bg-gradient-to-r from-bgseccond to-bgseccond2 relative sm:w-5/6 w-screen p-8 rounded">
            <div className="flex sm:justify-center">
                <div className="flex flex-col">
                    <h1 className="text-2xl sm:text-4x1 mb-2">title yang onajang tadidi</h1>
                    <p className="antialiased text-opacity-80 text-base-400 italic sm:ml-8">about beberapa bulan lalu</p>
                </div>
            </div>
            <div className="absolute right-2 sm:right-10 top-3">
                <Dropdown />
            </div>
            <div className="desc text-base-500 text-lg italic sm:ml-7 my-3">
                <blockquote>
                    " kamu tau kan kalo ini tuh ada
                </blockquote> 
            </div>
            <div className="ml-2 sm:ml4">
                <p className="text-2xl mb-4">Vote you answer</p>
                <RadioButton />
                <RadioButton />
                <RadioButton />
                <RadioButton />
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
            <button className="transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-blue-700 rounded w-full sm:w-3/12">
                VOTE
            </button>
            <div className="flex justify-center sm:flex-grow sm:inline-flex sm:justify-end">
            <button className="transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin bg-blue-300 hover:bg-blue-700 w-1/2 sm:w-1/4 sm:min-h-full border-blue-500 text-gray-800 font-bold py-2 px-4 inline-flex justify-center">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Result</span>
            </button>
            <button className="transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin bg-blue-300 hover:bg-blue-700 w-1/2 border sm:w-1/4 sm:min-h-full  border-blue-500 text-gray-800 font-bold py-2 px-4 inline-flex items-center justify-center">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Share</span>
            </button>
            </div>
            </div>

        </div>
        </>
    )
}

export default index
