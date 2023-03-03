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
            state.isFetching = true;
            state.isfailed = false;
        },
        loginSuccess:(state,action)=>{
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure:(state)=>{
            state.isfailed = true;
            state.isFetching = false;
        },
        logOut:(state)=>{
            state.currentUser = null;
            state.isFetching = false;
            state.isfailed = false;
        }
    }
})
export const {loginFailure,loginStart,loginSuccess,logOut} = userSlice.actions
export default userSlice.reducer