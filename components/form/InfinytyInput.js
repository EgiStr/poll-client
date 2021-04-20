import React from 'react'

const InfinytyInput = ({answerPlus,setAnswerPlus}) => {
    return (
        <>
            {[...Array(answerPlus)].map((item,i) => {
                if( i+1 === [...Array(answerPlus)].length  ){
                    return <input key={i} onFocus={() => setAnswerPlus(prev => prev + 1)} name="answer" className="field md:mr-2 bg-base-900 placeholder-gray-500 h-10 mt-2 transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin focus:ring-basefont-500 focus:ring border-gray-300 border rounded px-4" placeholder="type choose answer ..." />
                }else{
                    return <input key={i}  name="answer" className="field md:mr-2 bg-base-900 placeholder-gray-500 h-10 mt-2 transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin focus:ring-basefont-500 focus:ring border-gray-300 border rounded px-4" placeholder="type choose answer ..." />
                }

            })}
        </>
    )
}

export default InfinytyInput
