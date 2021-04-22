import { useState } from 'react'
import ChildComment from './ChiildComment'

const Rootcomment = ({content ,timestamp , replies}) => {
    return (
        <>
            <div className="commet flex flex-col mt-4 pb-4 border-b border-gray-500">
                <div className="block px-2 text-lg text-base-300 ">
                    {content}
                </div>
                <div className="flex">
                    <div className="block px-2 text-sm italic text-base-400">
                        {timestamp}
                    </div>
                    <button className="block px-2 cursor-pointer text-sm italic text-base-400">
                        Reply
                    </button>
                </div>
                {replies.map((item,i) => {
                    return <ChildComment 
                                    key={i}
                                    id={item.id}
                                    content={item.content}
                                    timestamp={item.timestamp}
                                    replies={item.replies}
                                     />
                })}
                
            </div>
        </>
    )
}

export default Rootcomment
