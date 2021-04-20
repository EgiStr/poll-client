import Comments from './Rootcomment'
const comment = () => {
    return (
        <>
            <div className="flex flex-col">
                <p className="text-3xl ">Comments</p>
                <div className="flex flex-col">
                    <div className="flex mt-2">
                        <textarea id="asd" name="qwdq" className="bg-base-900 max-h-10 placeholder-gray-500 h-10 mt-2 transition duration-300 ease-in-out  rounded-r-none rounded-l p-2 w-3/4" placeholder="comment this question ..." />
                        <button className="transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-sm h-10 mt-2">Comment</button>
                    </div>
                    <Comments/>
                    <Comments/>
                    <Comments/>
                </div>
              
            </div>
        </>
    )
}

export default comment
