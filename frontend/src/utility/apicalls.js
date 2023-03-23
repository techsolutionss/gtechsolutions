import axios from "axios";

export const publicRequest = axios.create({
    // baseURL:"http://localhost:8000",
    baseURL:"https://gtechsolutions.org",
    // timeout:15000
})

export const headers ={
    "Accept":"application/json",
    "content-Type":"application/json"
}

export const sendingEmail = async(endPoint,datas,configurations)=>{
    try {
        const response = await endPoint.post("/api/mailing/",datas,configurations)
        return response                      
    } catch (error) {
        return error.response
    }

}

export const sendingComment = async(endPoint,datas,configurations)=>{
    try {
        const response = await endPoint.post("/api/comments/",datas,configurations)
        return response                      
    } catch (error) {
        return error.response
    }

}


// api endpoint for creating in users
export const createUser = async(endPoint,userData,configurations)=>{
    try{
        const response = await endPoint.post("/api/createuser/",userData,configurations)
        return response
    }catch(error){
        return error.response
    }
    
}
// api endpoint for login in users
export const loginUser = async(endPoint,userData,configurations)=>{
    try{
        const response = await endPoint.post("/api/loginuser/",userData,configurations)
        return response
    }catch(error){
        return error.response
    }
    
}
// const countryOptions = {
//     method: 'GET',
//     url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries?limit=25',
//     headers: {
//       'X-RapidAPI-Key': '3ee126e59cmshe4a93f6870138a0p129efejsn6cf00f4bce01',
//       'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
//     }
//   }
  