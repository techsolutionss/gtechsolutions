import { useRef, useState } from "react"
import "../static/signin.css"
import {Link} from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { loginFailure,loginStart,loginSuccess } from "../store/userslice/userslice"
import { loginUser,publicRequest,headers} from "../utility/apicalls"

const SignIn = ()=>{

    var dispatch = useDispatch()
    const [data,setdata] = useState({})
    const [errors,seterrors] = useState({})
    const errorRef = useRef()

    const signIn = async (e)=>{
        e.preventDefault()
        if(!data.username){
            seterrors({"username":["this field is required"]})
            return
        }
        if(!data.password){
            seterrors({"password":["this field is required"]})
            return
        }
        
        dispatch(loginStart())
        var sendCredentials = await loginUser(publicRequest,data,headers)
        if(sendCredentials.status === 202){
            seterrors({})
            setdata(({}))
            errorRef.current.classList.add("sign-in-error-div-hide")
            alert("login successful")
            dispatch(loginSuccess(sendCredentials.data.user))
        }if(sendCredentials.status === 400){
            seterrors(sendCredentials.data)
            dispatch(loginFailure())
        }
        if(sendCredentials.status === 401){
            seterrors({})
            dispatch(loginFailure())
            errorRef.current.innerHTML = sendCredentials.data.message
            errorRef.current.classList.remove("sign-in-error-div-hide")
        }
        if(sendCredentials.status === 403){
            seterrors({})
            dispatch(loginFailure())
            errorRef.current.innerHTML = sendCredentials.data.message
            errorRef.current.classList.remove("sign-in-error-div-hide")
        }
        
    }

    const handleData = (e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }

    return(
        <div className="signin-container">
             <div className="signin-form-container">
             <h3>sign in to access our service</h3>
             <div className="sign-in-error-div-hide sign-in-error-div-show" ref={errorRef}></div>
                <form onSubmit={signIn}>
                    <div className="form-group-signup">
                            <label htmlFor="username">username*</label>
                            <div className="form-input-signin form-input-signup">
                                <input type="text" 
                                    autoComplete="off"
                                    value={data.username || ""}
                                    onChange={(e)=> handleData(e)}
                                    name="username" />
                            </div>
                            {
                                errors.username &&(
                                    <small className="show-errors">{errors.username[0]}</small>
                                )
                                
                            }
                            
                    </div>
                    <div className="form-group-signup">
                            <label htmlFor="password">password*</label>
                            <div className="form-input-signin form-input-signup">
                                <input type="text" 
                                    autoComplete="off"
                                    value={data.password || ""}
                                    onChange={(e)=> handleData(e)}
                                    name="password" />
                            </div>
                            {
                                errors.password &&(
                                    <small className="show-errors">{errors.password[0]}</small>
                                )
                                
                            }
                    </div>
                    <p className="signup-form-text">don't have an account <Link className="signup-form-text-link" to="/signup">Sign up</Link></p>
                    <div className="signup-form-btn-container">
                        <button className="signup-form-btn" type="submit">Sign in</button>
                    </div>
                </form>
             </div>
        </div>
    );
}
export default SignIn