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
                <RadioButton name="hayu" value=" hayuk"/> 
                <RadioButton name="hayukk" value=" hayuk"/> 
                <RadioButton name="hayukkk" value=" hayuk"/> 
                <RadioButton name="hayukkkk" value=" hayuk"/> 
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
                <button className="transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-blue-700 rounded w-full sm:w-3/12">
                    VOTE
                </button>
                <div className="flex justify-center sm:flex-grow sm:inline-flex sm:justify-end">
                    <button className="transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin bg-blue-300 hover:bg-blue-700 w-1/2 sm:w-1/4 sm:min-h-full border-blue-500 text-gray-800 font-bold py-2 px-4 inline-flex justify-center">
                       
                        <span>Result</span>
                    </button>
                    <button className="transition duration-300shado ease-in-out focus:outline-none focus:w-outlin bg-blue-300 hover:bg-blue-700 w-1/2 border sm:w-1/4 sm:min-h-full  border-blue-500 text-gray-800 font-bold py-2 px-4 inline-flex items-center justify-center">
                       
                        <span>Share</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Detail