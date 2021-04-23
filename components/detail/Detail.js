import { useState } from 'react'
import { copyToClipboard } from '../../utils/copyClipbord'
import { shareurl } from '../../utils/baseUrl'
import axios from '../../utils/axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import RadioButton from './RadioButton'
import Dropdown from './Dropdown'

const Detail = ({
    id,
    author,
    desc, 
    title , 
    deadline ,
    deadlineAnswer ,
    create_at ,
    slug  ,
    choice 
}) => {
    const router = useRouter()
    const [value, setValue] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({error:false,respon:null})
    
    
    const handleVote = async() => {

        setLoading(true)
        let form = new FormData()
            form.append('question',id)
            form.append('choice',Number(value))
        
        axios.post('/api/vote/',form)
            .then(res => {
                setLoading(false)
                setError({error:true,respon:'Success Vote question ! ..'})
            })
            .catch(err => {
                const message = JSON.parse(err.request.response)
                setLoading(false)
                setError({error:true,respon:message.error})
            })
    }
    
    return (
        <>
            <div className="flex sm:justify-center">
                <div className="flex flex-col">
                    <h1 className="text-2xl sm:text-4x1 mb-2">{title}</h1>
                    <p className="antialiased text-opacity-80 text-base-400 italic text-xs sm:text-base ">Start about {create_at}</p>
                </div>
            </div>
            <div className="absolute right-2 sm:right-10 top-3">
                <Dropdown author={author} id={id} slug={slug} />
            </div>
            <div className="desc text-base-500 font-thin text-lg italic sm:ml-7 my-3">
                <blockquote>
                    " {desc}
                </blockquote> 
            </div>
         
            <div className="ml-2 sm:ml4">
                <p className=" text-2xl capitalize font-thin mb-4">Vote you answer</p>
                {choice.map((item,i) => {
                    return <RadioButton key={i} name={item.text} setValue={setValue} value={item.id} />
                })}
            </div>
            {deadline &&
                        <div className="ml-2 sm:ml4">
                            <p className="mb-4 text-base-500 text-lg italic">{deadline}</p>
                        </div> }
            {error.error &&
                        <div className="ml-2 sm:ml4">
                            <p className="mb-4 text-red-700 text-lg italic">{error.respon}</p>
                        </div> }
            
            <div className="flex flex-col sm:flex-row sm:justify-between">
                   {deadlineAnswer ? 
                    <button disabled className="transition relative duration-300 ease-in-out opacity-40 cursor-not-allowed bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-blue-700 rounded w-full sm:w-3/12">
                        {loading ? 
                        <div className="spinner">
                        </div> : 'VOTE'}
                    </button>
                :
                    <button onClick={() => handleVote()} className={`${loading && 'cursor-not-allowed'} transition relative duration-300 ease-in-out focus:outline-none focus:shadow-outlin bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-blue-700 rounded w-full sm:w-3/12`}>
                        {loading ? 
                        <div className="spinner">
                        </div> : 'VOTE'}
                    </button>
                }
                <div className="flex justify-center sm:flex-grow sm:inline-flex sm:justify-end">
                    <Link href={`/${slug}/result`}>
                    <button className="transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin bg-blue-300 hover:bg-blue-700 w-1/2 sm:w-1/4 sm:min-h-full border-blue-500 text-gray-800 font-bold py-2 px-4 inline-flex justify-center">
                        <span className="cursor-pointer">Result</span>
                    </button>
                    </Link>
                    <button onClick={() => copyToClipboard(shareurl(router.asPath))} className="transition duration-300shado ease-in-out focus:outline-none focus:w-outlin bg-blue-300 hover:bg-blue-700 w-1/2 border sm:w-1/4 sm:min-h-full  border-blue-500 text-gray-800 font-bold py-2 px-4 inline-flex items-center justify-center">
                        <span>Share</span>
                    </button>
                </div>
            </div>
           
        </>
    )
}

export default Detail