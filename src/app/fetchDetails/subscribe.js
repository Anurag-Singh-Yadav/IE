'use client'
import axios from 'axios'
import Cookies from 'js-cookie'
export const getSubscribe = async (token) =>{
    try{
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_IS_USER_SUBCRIBE  }`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        },{
            token
        })
        return response.data
    }catch(e){
        console.log(e);
        if(e.response?.data?.message == 'invalid token'){
            return "invalid token"
        }
        return 'error'
    }
}

export const getSubscription = async (token,action) =>{
    try{
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_SUBSCRIPTION }`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        },{
            token,
            action
        })
        return response.data
    }catch(e){
        if(e.response?.data?.message == 'invalid token'){
            Cookies.remove('token')
        }
        return 'error'
    }
}