import { useState } from 'react'
import DataPicker from './Datepicker'
const CreateForm = () => {
    const [answerPlus,setAnswerPlus] = useState(1)
    const [deadlineShow,setDeadlineShow] = useState(false)

    return (
        <>
           
            <div className="bg-gradient-to-r from-bgseccond to-bgseccond2 shadow-md rounded p-8 m-4 w-screen sm:w-3/5 mx-auto ">
                <h1 className="block text-center mb-4 sm:text-3xl">Create Poll</h1>
                <div className="flex flex-col w-full">
                    <div className="field-group mb-4 flex flex-col">
                        <label htmlFor="title" name="title" className="field-labe">Title</label>                            
                        <input id="title" name="title" className="field md:mr-2 bg-base-900 placeholder-gray-500 h-10 mt-2 transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin focus:ring-basefont-500 focus:ring border-gray-300 border rounded px-4" placeholder="type your question here ..." />
                    </div>
                    <div className="field-group mb-4 flex flex-col">
                        <label htmlFor="desc" name="desc" className="field-labe">Description (optional)</label>                            
                        <textarea id="desc" name="desc" className="field md:mr-2 bg-base-900 placeholder-gray-500 h-14 mt-2 transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin focus:ring-basefont-500 focus:ring border-gray-300 border rounded px-4 pt-2" placeholder="type your Description question ..." />
                    </div>
                    <div className="field-group mb-4 flex flex-col">
                        <label className="field-labe">Answers</label>                            
                        <input name="answer" className="field md:mr-2 bg-base-900 placeholder-gray-500 h-10 mt-2 transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin focus:ring-basefont-500 focus:ring border-gray-300 border rounded px-4" placeholder="type choose answer ..." required />
                        <input name="answer" className="field md:mr-2 bg-base-900 placeholder-gray-500 h-10 mt-2 transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin focus:ring-basefont-500 focus:ring border-gray-300 border rounded px-4" placeholder="type choose answer ..." required />
                        {[...Array(answerPlus)].map((item,i) => {
                            if( i+1 === [...Array(answerPlus)].length  ){
                                return <input key={i} onFocus={() => setAnswerPlus(prev => prev + 1)} name="answer" className="field md:mr-2 bg-base-900 placeholder-gray-500 h-10 mt-2 transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin focus:ring-basefont-500 focus:ring border-gray-300 border rounded px-4" placeholder="type choose answer ..." />
                            }else{
                                return <input key={i}  name="answer" className="field md:mr-2 bg-base-900 placeholder-gray-500 h-10 mt-2 transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin focus:ring-basefont-500 focus:ring border-gray-300 border rounded px-4" placeholder="type choose answer ..." />
                            }

                        })}
                    </div>
                    <div className="field-group mb-4 flex flex-col">
                        <span className="field-labe">settings</span>                            
                        <div className="flex mt-4">
                            <input id='private' type="checkbox" className="form-checkbox h-5 w-5 text-base-700" /><label htmlFor="private" className="ml-2 text-base-400">Private ( only can in share )</label>
                        </div>
                        <div className="flex mt-4">
                            <input id='private-result' type="checkbox" className="form-checkbox h-5 w-5 text-base-700" /><label htmlFor="private-result" className="ml-2 text-base-400">Private result( only can in result )</label>
                        </div>
                        <div className="flex mt-4">
                            <input id='deadline'onChange={e => setDeadlineShow(e.target.checked)} checked={deadlineShow} type="checkbox" className="form-checkbox h-5 w-5 text-base-700" /><label htmlFor="deadline" className="ml-2 text-base-400">Deadline ( Vote will close, optional )</label>
                        </div>
                        {deadlineShow && <DataPicker/>}
                        
                    </div>

                </div>
            </div>
           
        </>      
    )
}

export default CreateForm
