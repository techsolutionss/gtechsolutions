import "../static/signup.css"
import { Link} from "react-router-dom"
import { useState } from "react"
import { createUser,publicRequest,headers} from "../utility/apicalls"

const SignUp = ()=>{

    
    const [data,setdata] = useState({})
    const [errors,seterrors] = useState({})
    
    const handleData = (e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }

    const createAccount = async(event)=>{
        event.preventDefault()

        console.log(data)
        const sendDetails = await createUser(publicRequest,data,headers)
        if(sendDetails.status === 201){
            alert("successful")
        }
        if(sendDetails.status === 400){
            var serverErrors = sendDetails.data
            // for(var rError in serverErrors){
            //     console.log(rError)
            //     Object.
            //     seterrors({...errors,tino:serverErrors[rError][0]})
            // } 
            // Object.entries(serverErrors).forEach(([key,value])=>{
            //     seterrors()
            // })
            console.log(serverErrors)
        }
        
        
    }


    return(
        <>
            <div className="signup-container">
                <div className="signup-form-container">
                    <h3>sign up to access our service</h3>
                    <form onSubmit={createAccount}>
                        <div className="form-group-signup">
                            <label htmlFor="firstname">Firstname</label>
                            <div className="form-input-signup">
                                <input type="text" 
                                    autoComplete="off"
                                    // ref={firstnameRef}
                                    value={data.first_name || ""}
                                    onChange={(e)=> handleData(e)}
                                    name="first_name" />
                            </div>
                            <small></small>
                        </div>
                        <div className="form-group-signup">
                            <label htmlFor="lastname">Lastname</label>
                            <div className="form-input-signup">
                                <input type="text" 
                                    autoComplete="off"
                                    // ref={firstnameRef}
                                    value={data.last_name || ""}
                                    onChange={(e)=> handleData(e)}
                                    name="last_name" />
                            </div>
                            <small></small>
                        </div>
                        <div className="form-group-signup">
                            <label htmlFor="email">Email</label>
                            <div className="form-input-signup">
                                <input type="email" 
                                    autoComplete="off"
                                    // ref={firstnameRef}
                                    value={data.email || ""}
                                    onChange={(e)=> handleData(e)}
                                    name="email" />
                            </div>
                            <small></small>
                        </div>
                        <div className="form-group-signup">
                            <label htmlFor="username">Preffered Username</label>
                            <div className="form-input-signup">
                                <input type="text" 
                                    autoComplete="off"
                                    // ref={firstnameRef}
                                    value={data.username || ""}
                                    onChange={(e)=> handleData(e)}
                                    name="username" />
                            </div>
                            {
                              errors.username && (
                                <small>{errors.username}</small>
                              )  
                            }
                            
                        </div>
                        <div className="form-group-signup">
                            <label htmlFor="password">Password</label>
                            <div className="form-input-signup">
                                <input type="text" 
                                    autoComplete="off"
                                    // ref={firstnameRef}
                                    value={data.password || ""}
                                    onChange={(e)=> handleData(e)}
                                    name="password" />
                            </div>
                            <small></small>
                        </div>
                        <p className="signup-form-text">already have an account <Link className="signup-form-text-link" to="#">Sign in</Link></p>
                        <div className="signup-form-btn-container">
                            <button className="signup-form-btn" type="submit">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
        
}
export default SignUp