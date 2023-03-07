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
        if(!data.name){
            seterror({"name":["name field cannot be left empty"]})
            return
        }
        if(!data.email){
            seterror({"email":["email field cannot be left empty"]})
            return
        }
        if(!data.phone){
            seterror({"phone":["phone field cannot be left empty"]})
            return
        }    
        if(!data.message){
            seterror({"message":["message field cannot be left empty"]})
            return
        }    
        alert("successfully submitted")
        const sentMail = await sendingEmail(publicRequest,data,headers)
        if (sentMail.status === 202){
            setdata({})
            seterror({})
            errorRef.current.style.visibility = "visible"
            errorRef.current.style.border = "1px solid green"
            errorRef.current.style.color = "green"
            errorRef.current.innerHTML = sentMail.data.message
            clearErrorRef()
        }

        if(sentMail.status === 400){
            seterror(sentMail.data)
            console.log(sentMail)
        }
    }
    

    const clearErrorRef = ()=>{
        setTimeout(()=>{
            errorRef.current.style.visibility = "hidden"
        },5000)
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
                <h2 className="contact-header">Get in touch with us today</h2>
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={submitForm}>
                        <div className="error-container min-container-1"  ref={errorRef}></div>
                        <div className="input-container">
                            <div className="form-input">
                                <input type="text"name="name" 
                                    value={data.name || ""} 
                                    onChange={(e)=>handleDataChange(e)}
                                    className={`form-input-input ${error.name && "form-input-error"}`}
                                    placeholder="Name" autoComplete="off"/>
                                    {error.name && <small>{error.name[0]}</small>} 
                            </div>
                            <div className="form-input">
                                <input type="email" name="email"
                                    value={data.email || ""}
                                    className={`form-input-input ${error.email && "form-input-error"}`}
                                    onChange={(e)=>handleDataChange(e)} 
                                    placeholder="Email" autoComplete="off"/>
                                    {error.email && <small>{error.email[0]}</small>}
                                <small></small>
                            </div>
                            <div className="form-input">
                                <small></small>
                                <input type="text" name="phone"
                                    value={data.phone || ""} 
                                    onChange={(e)=>handleDataChange(e)}
                                    className={`form-input-input ${error.phone && "form-input-error"}`}
                                    placeholder="Phone" autoComplete="off"/>
                                    {error.phone && <small>{error.phone[0]}</small>}
                            </div>
                            <div className="text-input-container">
                                <textarea name="message" id="message"
                                className={`${!error.message ? "normal-height":"reduced-height form-input-error"}`}
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