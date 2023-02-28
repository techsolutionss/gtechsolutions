import { useRef, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../static/contact.css"
import {publicRequest,sendingEmail,headers} from "../utility/apicalls";

const Contact = ()=>{

    const [data,setdata] = useState({})
    const [error,seterror] = useState({})
    const errorRef = useRef()
    

    const handleDataChange = (e)=>{
        setdata({...data,[e.target.name] : e.target.value})
    }
    
    const submitForm = async(e)=>{
        e.preventDefault()
                
        alert("successfully submitted")
        const sentMail = await sendingEmail(publicRequest,data,headers)
        if (sentMail.status === 202){
            console.log(sentMail.data)
        }

        if(sentMail.status === 400){
            seterror(sentMail.data)
            console.log(sentMail)
        }
        clearErrorRef()
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
                                        value={data.name || ""} 
                                        onChange={(e)=>handleDataChange(e)}
                                        placeholder="name" autoComplete="off"/>
                                        {error.name && <small>{error.name[0]}</small>}
                                        
                                </div>
                                <div className="form-input">
                                    <input type="email" name="email"
                                        value={data.email || ""}
                                        onChange={(e)=>handleDataChange(e)} 
                                        placeholder="email" autoComplete="off"/>
                                        {error.email && <small>{error.email[0]}</small>}
                                    <small></small>
                                </div>
                                <div className="form-input">
                                    <small></small>
                                    <input type="text" name="phone"
                                        value={data.phone || ""} 
                                        onChange={(e)=>handleDataChange(e)}
                                        placeholder="phone" autoComplete="off"/>
                                        {error.phone && <small>{error.phone[0]}</small>}
                                </div>
                            </div>
                            <div className="column-container column-container-2">
                                <textarea name="message" id="message"
                                className={`${!error.message ? "normal-height":"reduced-height"}`}
                                cols="30" rows="10"
                                value={data.message || ""}
                                onChange={(e)=>handleDataChange(e)}
                                placeholder="write us a message..."></textarea>
                                {error.message && <small>{error.message[0]}</small>}
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