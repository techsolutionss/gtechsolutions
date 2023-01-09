import { useRef, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../static/contact.css"
import {checkLength,checkEmail, checkPhone,displayError} from "../utility/validationFunction";
import {publicRequest,headers,sendingEmail} from "../utility/fetchcalls";

const Contact = ()=>{

    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [phone,setphone] = useState("")
    const [message,setmessage] = useState("")

    const errorRef = useRef()
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const messageRef = useRef()

    const clearForm = ()=>{
        setemail("")
        setname("")
        setmessage("")
        setphone("")    
        nameRef.current.value = ""
        emailRef.current.value = ""
        phoneRef.current.value = ""
        messageRef.current.value = ""
    }



    const submitForm = async(e)=>{
        e.preventDefault()
        if(!name){
            displayError(nameRef,"name fields cannot be empty ")
            return 
        }else if(name.length < 6){
            return
        }else if(!email){
            displayError(emailRef,"email fields cannot be empty")
            return
        }else if(!phone){
            displayError(phoneRef,"phone fields cannot be empty")
            return
        }else if(phone.length < 11){
            return
        }else if(isNaN(phone)){
            return
        }else if(!message){
            displayErrorRef("message fields cannot be empty")
            clearErrorRef()
            return
        }
        
        alert("successfully submitted")
        var emailData={
            name:name,
            email:email,
            phone:phone,
            message:message
        }

        const sentMail = await sendingEmail(publicRequest,emailData,headers)
        displayErrorRef(sentMail)
        clearErrorRef()
        clearForm()

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
                                        onInput={(e)=>checkLength(e.target)}
                                        onChange={(e)=>setname(e.target.value)}
                                        placeholder="name" autoComplete="off"/>
                                    <small></small>
                                </div>
                                <div className="form-input">
                                    <input type="email" name="email"
                                        ref={emailRef}
                                        onInput={(e)=>checkEmail(e.target)}
                                        onChange={(e)=>setemail(e.target.value)} 
                                        placeholder="email" autoComplete="off"/>
                                    <small></small>
                                </div>
                                <div className="form-input">
                                    <small></small>
                                    <input type="text" name="phone"
                                        ref={phoneRef} 
                                        onInput={(e)=>checkPhone(e.target)}
                                        onChange={(e)=>setphone(e.target.value)}
                                        placeholder="phone" autoComplete="off"/>
                                </div>
                            </div>
                            <div className="column-container column-container-2">
                                <textarea name="message" id="message" 
                                ref={messageRef}
                                cols="30" rows="10"
                                onChange={(e)=>setmessage(e.target.value)}
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