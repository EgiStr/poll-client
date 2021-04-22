import Comments from './Rootcomment'

import axios from '../../../utils/axios'

import { useState } from 'react'

const comment = ({ comments, id, contenttype }) => {
    const [state,setState] = useState({
        content:'',
        parent:null,
    })
    const handleChange = e => {
        const { name, value } = e.target
        setState(prev => ({
            ...prev,
            [name]:value
        }))
        console.log(state)

    }
    const handleSubmit = () => {
        if(state.content !== ''){
            
            const data = {
                content_type:Number(contenttype),
                obj_id:Number(id),
                content:state.content,
                parent:Number(state.parent)
            }
            axios.post(`/comment/create/`,data)
                .then(res => setState({content:'',parent:null}))
                .catch(err => console.log(err.request))
        }
    }
    return (
        <>
            <div className="flex flex-col">
                <p className="text-3xl ">Comments</p>
                <div className="flex flex-col">
                    <div className="flex mt-2">
                        <textarea name="content" onChange={e => handleChange(e)} className="bg-base-900 max-h-10 placeholder-gray-500 h-10 mt-2 transition duration-300 ease-in-out  rounded-r-none rounded-l p-2 w-3/4" placeholder="comment this question ..." />
                        <button onClick={() => handleSubmit()} className="transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-sm h-10 mt-2">Comment</button>
                    </div>
                    {comments.length > 0 
                    ? 
                        comments.map((item,i) => {
                            return <Comments 
                                        key={i}
                                        id={item.id}
                                        handleChange={handleChange}
                                        content={item.content}
                                        timestamp={item.timestamp}
                                        replies={item.replies}
                                         />
                        })
                    :
                        <>
                            <div className="inline-flex justify-center justify-items-center italic text-base-600 font-mono capitalize mt-2">
                                jadilah first comment
                            </div>
                        </>
                    }
                </div>
              
            </div>
        </>
    )
}

export default comment
