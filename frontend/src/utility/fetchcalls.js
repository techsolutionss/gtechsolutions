import axios from "axios";

export const publicRequest = axios.create({
    baseURL:"http://localhost:8000"
})

export const headers ={
    "Accept":"application/json",
    "content-Type":"application/json",
    "connection":"keep-alive"
}

export const sendingEmail = async(request,datas,configure)=>{
    try {
        const {data,status} = await request.post("/mailing/",datas,configure)
         if(status === 202){
            return data.message
         }                     
    } catch (error) {
        return "email sending failed"
    }

}
    
const countryOptions = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries?limit=25',
    headers: {
      'X-RapidAPI-Key': '3ee126e59cmshe4a93f6870138a0p129efejsn6cf00f4bce01',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  }
  