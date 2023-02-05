import { useRef, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../static/contact.css"
import {checkLength,checkEmail, checkPhone,displayError} from "../utility/validationFunction";
import {publicRequest,sendingEmail,headers} from "../utility/apicalls";

const Contact = ()=>{

    
    const errorRef = useRef()
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const messageRef = useRef()

    const [data,setdata] = useState({})
    const [errorMessage,seterrorMessage] = useState({})
    

    const handleDataChange = (e)=>{
        setdata({...data,[e.target.name] : e.target.value})
    }
    
    const submitForm = async(e)=>{
        e.preventDefault()
                
        alert("successfully submitted")
        
        console.log(data)

        const sentMail = await sendingEmail(publicRequest,data,headers)
        if (sentMail.status === 202){
            console.log(sentMail.data)
        }

        if(sentMail.status === 400){
            seterrorMessage(sentMail.data)
            console.log(sentMail)
        }
        clearErrorRef()
        setdata({})

    }
    

    const clearErrorRef = ()=>{
        setTimeout(()=>{
            errorRef.current.style.visibility = "hidden"
        },4000)
    }

    const displayErrorRef = (message)=>{
        setTimeout(()=>{
            errorRef.current.style.visibility = "visible"
            errorRef.current.innerHTML = message
        },1000)
    }
    return(
        <>
            <Navbar/>
            <div className="contact-container">
                <h2 className="contact-header">get in touch with us</h2>
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={submitForm}>
                        <div className="error-container min-container-1"  ref={errorRef}></div>
                        <div className="input-container">
                            <div className="column-container column-container-1">
                                <div className="form-input">
                                    <input type="text"name="name" 
                                        ref={nameRef}
                                        value={data.name || ""} 
                                        // onInput={(e)=>checkLength(e.target)}
                                        onChange={(e)=>handleDataChange(e)}
                                        placeholder="name" autoComplete="off"/>
                                        {errorMessage.name && <small>{errorMessage.name}</small>}
                                        
                                </div>
                                <div className="form-input">
                                    <input type="email" name="email"
                                        ref={emailRef}
                                        value={data.email || ""}
                                        // onInput={(e)=>checkEmail(e.target)}
                                        onChange={(e)=>handleDataChange(e)} 
                                        placeholder="email" autoComplete="off"/>
                                    <small></small>
                                </div>
                                <div className="form-input">
                                    <small></small>
                                    <input type="text" name="phone"
                                        ref={phoneRef}
                                        value={data.phone || ""} 
                                        // onInput={(e)=>checkPhone(e.target)}
                                        onChange={(e)=>handleDataChange(e)}
                                        placeholder="phone" autoComplete="off"/>
                                </div>
                            </div>
                            <div className="column-container column-container-2">
                                <textarea name="message" id="message" 
                                ref={messageRef}
                                cols="30" rows="10"
                                value={data.message || ""}
                                onChange={(e)=>handleDataChange(e)}
                                placeholder="write us a message..."></textarea>
                            </div>
                        </div>
                        <div className="btn-container min-container-1"><button type="submit" >send message</button></div>
                        
                    </form>
                </div>
                <div className="contact-footer">
                    <Footer/>
                </div>
            </div>
        </>
    );
}
export default Contact