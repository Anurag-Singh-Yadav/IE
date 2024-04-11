import axios from 'axios'


export const getDashboardData = async (property , user) => {
    try{
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.GET_DASHBOARD_DATA}`);
        if(res.data){
            return res.data[property];
        }
        else throw new Error('Error while fetching details');
    }catch(err){    
        throw new Error(err.message);
    }
}