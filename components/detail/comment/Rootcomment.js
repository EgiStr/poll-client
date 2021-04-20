import { useState } from 'react'
import ChildComment from './ChiildComment'

const Rootcomment = () => {
   
    return (
        <>
            <div className="commet flex flex-col mt-4 pb-4 border-b border-gray-500">
                <div className="block px-2 text-lg text-base-300 ">
                    the hell bro
                </div>
                <div className="flex">
                    <div className="block px-2 text-sm italic text-base-400">
                        21 day agoes
                    </div>
                    <button className="block px-2 cursor-pointer text-sm italic text-base-400">
                        Reply
                    </button>
                </div>
                <ChildComment />
            </div>
        </>
    )
}

export default Rootcomment
