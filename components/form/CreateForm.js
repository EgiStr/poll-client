import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from '../../utils/axios'
import DataPicker from './Datepicker'
import InputAnswer from './InfinytyInput'
const CreateForm = () => {
    const router = useRouter()
    const [state,setState] = useState({
        title:'',
        desc:' ',
        deadline:null,
        private:false,
        result_private:false,
        answerL:null,
        answerR:null,
    })
    
    const [answerPlus,setAnswerPlus] = useState(1)
    const [deadlineShow,setDeadlineShow] = useState(false)
    const [error ,setError] = useState('')
    
    const handleChange = e => {
        const { value, name } = e.target
        setState(prev => ({
            ...prev,
            [name]:value
        }))
    }
    
    const handleCheckBox = e => {
        const { id, checked } = e.target
        setState(prev => ({
            ...prev,
            [id]:checked
        }))
    }
    const handleDeadline = e => {
        setState(prev => ({...prev,deadline:e}))
    }

    const handleSubmit = () => {
        if(!deadlineShow) setState(prev => ({...prev,deadline:null}))
        let answer = []
        let data = {}
        for(let key in state){
            if(key.substring(0,6) === 'answer'){
                answer.push(state[key]) 
            }else{
                data[key] = state[key]
            }
        }
        data['choice'] = answer
        axios.post('/api/create/',data)
            .then(res => {
                router.push(`${res.data.slug}`)
            })
            .catch(err => setError(JSON.parse(err.request.response).error))
        
    }

    return (
        <>
           
            <div className="bg-gradient-to-r from-bgseccond to-bgseccond2 shadow-md rounded p-8 m-4 w-screen sm:w-3/5 mx-auto ">
                <h1 className="block text-center mb-4 sm:text-3xl">Create Poll</h1>
                <div className="flex flex-col w-full"> 
                    <div className="field-group mb-4 flex flex-col">
                        <label htmlFor="title" name="title" className="field-labe">Title</label>                            
                        <input id="title" onChange={e => handleChange(e)} name="title" className="field md:mr-2 bg-base-900 placeholder-gray-500 h-10 mt-2 transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin focus:ring-basefont-500 focus:ring border-gray-300 border rounded px-4" placeholder="type your question here ..." />
                    </div>
                    <div className="field-group mb-4 flex flex-col">
                        <label htmlFor="desc" name="desc"  className="field-labe">Description (optional)</label>                            
                        <textarea id="desc" name="desc" onChange={e => handleChange(e)} className="field md:mr-2 bg-base-900 placeholder-gray-500 h-14 mt-2 transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin focus:ring-basefont-500 focus:ring border-gray-300 border rounded px-4 pt-2" placeholder="type your Description question ..." />
                    </div>
                    <div className="field-group mb-4 flex flex-col">
                        <label className="field-labe">Answers</label>                            
                        <input name="answerL" onChange={e => handleChange(e)} className="field md:mr-2 bg-base-900 placeholder-gray-500 h-10 mt-2 transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin focus:ring-basefont-500 focus:ring border-gray-300 border rounded px-4" placeholder="type choose answer ..." required />
                        <input name="answerR" onChange={e => handleChange(e)} className="field md:mr-2 bg-base-900 placeholder-gray-500 h-10 mt-2 transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin focus:ring-basefont-500 focus:ring border-gray-300 border rounded px-4" placeholder="type choose answer ..." required />
                        <InputAnswer answerPlus={answerPlus} setAnswerPlus={setAnswerPlus} handleChange={handleChange} />
                    </div>
                    <div className="field-group mb-4 flex flex-col">
                        <span className="field-labe">settings</span>                            
                        <div className="flex mt-4">
                            <input id='private' onChange={e => handleCheckBox(e)}  type="checkbox" className="form-checkbox h-5 w-5 text-base-700" /><label htmlFor="private" className="ml-2 text-base-400">Private ( vote only via link )</label>
                        </div>
                        <div className="flex mt-4">
                            <input id='result_private' onChange={e => handleCheckBox(e)} type="checkbox" className="form-checkbox h-5 w-5 text-base-700" /><label htmlFor="result_private" className="ml-2 text-base-400">Private result( only you can in result )</label>
                        </div>
                        <div className="flex mt-4">
                            <input id='deadline'onChange={e => setDeadlineShow(e.target.checked)} checked={deadlineShow} type="checkbox" className="form-checkbox h-5 w-5 text-base-700" /><label htmlFor="deadline" className="ml-2 text-base-400">Deadline ( Vote will close, optional )</label>
                        </div>
                        {deadlineShow && <DataPicker handleChange={handleDeadline} />}
                    </div>
                    {error &&
                        <div className="text-2xl text-red-600 italic border-2 border-white p-2 inline-flex justify-items-center justify-center">
                            {error}
                        </div>}
                    <div className="flex mt-2">
                        <button onClick={() => handleSubmit()} className="transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-blue-700 rounded w-full ">
                            Create Poll
                        </button>
                    </div>
                </div>
            </div>  
        </>      
    )
}

export default CreateForm
