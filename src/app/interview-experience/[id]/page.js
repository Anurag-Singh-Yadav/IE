'use client'
import HtmlToDom from '@/app/Components/templets/HtmlToDom';
import PreRender from '@/app/Components/templets/PreRender';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function InterviewBlog({params}) {

    const {id} = params;

    const [blog , setBlog] = useState(null);

    useEffect(() => {

        const getResponse = async () => {
            console.log(params);
            try{
                const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_INTERVIEW_EXPERIENCE_BY_ID}/${id}`);
                console.log(res);
                setBlog(res.data?.interview);

            } catch (e) {

            }
        }
        getResponse();

    }, [id])
    

  return (
    <div>
        {
            !blog && <PreRender count={7}/>
        }
        {blog && <HtmlToDom htmlContent={blog.blog}/>}
    </div>
  )
}

export default InterviewBlog
