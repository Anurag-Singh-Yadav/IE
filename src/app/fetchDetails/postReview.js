import axios from 'axios';

export const postReview = async({details})=>{
    try{
        const {token, description,rating} = details;
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_REVIEW_MY_WEBSITE}`,{
            token,
            description,
            rating
        },{
            headers:{
                Authorization: `Bearer ${details.token}`
            }
        });
        return res;
    }catch(e){
        return e;
    }
}