
const ChiildComment = ({ id, content, timestamp ,replies ,handleChange }) => {
    
    return (
        <>
            <div className="reply ml-4 flex flex-col mt-2">
                <div className="block px-2 text-lg text-base-300 ">
                  {content}
                </div>
                <div className="flex">
                    <div className="block px-2 text-sm italic text-base-400">
                        {timestamp}
                    </div>
                    <button value={id} onClick={e => handleChange(e) } name="parent" className="block px-2 cursor-pointer text-sm italic text-base-400">
                        Reply
                    </button>
                </div>
                <div className="reply-reply ml-4 flex flex-col">
                    {replies.length > 0 
                    && replies.map((item,i) => {
                        return <ChiildComment 
                                    key={i}        
                                    content={item.content}
                                    handleChange={handleChange}
                                    timestamp={item.timestamp}
                                    id={item.id}
                                    replies={item.replies} />
                    })                    
                    }
                </div>
            </div>
        </>
    )
}

export default ChiildComment
