'use client'
import React from 'react'
import { CiBookmark } from "react-icons/ci";

function QuestionArray({showQuestions}) {
  return (
    <div className='w-[70vw] overflow-x-hidden'>   

        {
            showQuestions && showQuestions.map((questionObj , index)=>{

                const question = questionObj.question;

                return (
                    <div key={index} className='grid grid-cols-10'>
                        <div className='col-span-1 text-blue-500 hover:text-blue-700'><CiBookmark /></div>
                        <p className=' col-span-3'>{question.title}</p>
                        <p className='col-span-1'>{question.difficulty === 'Easy' ? 5 : (question.difficulty === 'Hard' ? 20 : 10)}</p>
                        <p className={`${question.difficulty.toLowerCase()} col-span-1`}>{question.difficulty}</p>
                        <div>
                            {/* Add company logo login, all are inside -> question.company ([])  */}
                        </div>
                    </div>
                )


            })
        }
      
    </div>
  )
}

export default QuestionArray
