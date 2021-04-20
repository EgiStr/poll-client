import RadioButton from './RadioButton'
import Dropdown from './Dropdown'

const Detail = () => {
    return (
        <>
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
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="poll-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 ml-3 mt-1"><path fill="currentColor" d="M448 432V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48zM112 192c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h128c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16H112zm0 96c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16H112zm0 96c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h64c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16h-64z"></path></svg>
                        <span>Result</span>
                    </button>
                    <button className="transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin bg-blue-300 hover:bg-blue-700 w-1/2 border sm:w-1/4 sm:min-h-full  border-blue-500 text-gray-800 font-bold py-2 px-4 inline-flex items-center justify-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 ml-3"><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z" ></path></svg>
                        <span>Share</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Detail