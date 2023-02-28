import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"users",
    initialState:{
        currentUser:null,
        isFetching:false,
        isfailed:false,
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching = true
        },
        loginSuccess:(state,action)=>{
            state.isFetching = false
        },
        loginFailure:(state)=>{
            state.isfailed = true
        }
    }
})
export const {loginFailure,loginStart,loginSuccess} = userSlice.actions
export default userSlice.reducer