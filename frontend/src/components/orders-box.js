import { useEffect, useRef, useState } from "react";
import "../static/order.css"
import { publicRequest,headers } from "../utility/apicalls";
import Modal from "./modal";

const OrderForm =()=>{

    const [hideModal,sethideModal] = useState(false)
    const closeModal = ()=>{
        sethideModal(false)
        
       
    }
    const openModal = ()=>{
        sethideModal(true)
    }

    const errorRef = useRef()
    const firstnameRef = useRef()
    const lastnameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const titleRef = useRef()
    const locationRef = useRef()
    const descriptionRef = useRef()

    const[categorys,setcategorys] = useState([])
    const[firstname,setfirstname] = useState("")
    const[lastname,setlastname] = useState("")
    const[phoneNumber,setphoneNumber] = useState("")
    const[email,setemail] = useState("")
    const[category,setcategory] = useState("")
    const[location,setlocation] = useState("")
    const[description,setdescription] = useState("")

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const {data} = await publicRequest.get("/api/services")
                setcategorys(data)
            } catch (error) {
                console.error(error.message)
            }
        }
        fetchData()
    },[])
    
    

    const submitRequest = async(e)=>{
        e.preventDefault()

        const submitedData = {
            firstname:firstname,
            lastname:lastname,
            email:email,
            phone_no:phoneNumber,
            order_title:category,
            location:location,
            order_description:description
        }
        try {
            const{data,status} = await publicRequest.post("/sendorder/",submitedData,headers)
            if(status === 201){
                openModal()
                clearErrorRef()
                console.log(data)
            }else{
                if(Object.keys(data).length > 1){
                    displayErrorRef("fields must not be empty!")
                    console.log(data)
                }else{
                    var key = Object.keys(data).toString()
                    var message = (data[key].join())
                    if(key === "order_title"){
                        displayErrorRef("you have one more field to fill")
                    }else if(key === "phone_no"){
                        displayErrorRef("phone number field cannot be empty")
                    }else if(key === "location"){
                        displayErrorRef("country field cannot be empty")
                    }else if(key === "order_description"){
                        displayErrorRef("you have one more field to fill")
                    }else if(key ==="non_field_errors"){
                        displayErrorRef(message)
                    }
                    else{
                        displayErrorRef(`${key} field cannot be empty`)
                    }
                     window.scrollTo(20,0)
                    console.log(message)
                }
                
            } 
        } catch (error) {
            console.log(error.message)
            alert("something went wrong")
        }
        
    }
    
    const clearErrorRef = ()=>{
        setTimeout(()=>{
            errorRef.current.style.visibility = "hidden"
        },4000)
    }

    const displayErrorRef = (message)=>{
        
            errorRef.current.style.visibility = "visible"
            errorRef.current.innerHTML = message
        }
    
    return(
        <>
            <div className="order-container">
                <form  onSubmit={submitRequest}>
                <div className="order-error-container" ref={errorRef}></div>
                    <div className="form-group-2">
                        <label htmlFor="firstname">Firstname</label>
                        <input type="text" 
                        autoComplete="off"
                        ref={firstnameRef}
                        onChange={(e)=> setfirstname(e.target.value)}
                        name="firstname" />
                        <small></small>
                    </div>
                    <div className="form-group-2">
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text"
                        autoComplete="off"
                        ref={lastnameRef} 
                        onChange={(e)=> setlastname(e.target.value)}
                        name="lastname" />
                        <small></small>
                    </div>
                    <div className="form-group-2">
                        <label htmlFor="phone number">Phone number</label>
                        <input type="text"
                        autoComplete="off"
                        ref={phoneRef} 
                        onChange={(e)=> setphoneNumber(e.target.value)}
                        name="phone number" />
                        <small></small>
                    </div>
                    <div className="form-group-2">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                        autoComplete="off"
                        ref={emailRef} 
                        onChange={(e)=> setemail(e.target.value)}
                        name="email" />
                        <small></small>
                    </div>
                    <div className="form-group-2">
                        <label htmlFor="country">Country</label>
                        <select name="location"
                        ref={locationRef}
                        onChange={(e)=> setlocation(e.target.value)}
                        >
                            <option value="">select your country</option>
                            <option value="america">america</option>
                            <option value="japan">japan</option>
                            <option value="europe">europe</option>
                        </select>
                        <small></small>
                    </div>
                    <div className="form-group-2">
                        <label htmlFor="service">What services do you need?</label>
                        <select name="category"
                        ref={titleRef}
                        onChange={(e)=> setcategory(e.target.value)}
                        >
                            <option value=""></option>
                            {categorys.map((category)=>{
                                return(
                                        <option key={category.id} value={category.title}>{category.title}</option>
                                );
                            })}
                        </select>
                        <small></small>
                    </div>
                    <div className="form-group-text-2">
                        <label htmlFor="description">Let us know exactly what you want</label>
                        <textarea name="description"
                            ref={descriptionRef}
                            onChange={(e)=> setdescription(e.target.value)}  
                            cols="30" rows="10">
                        </textarea>
                        <small></small>
                    </div>
                    <div className="btn-container-2">
                        <button type="submit" >send request</button>
                    </div>
                </form>
                <Modal hideModal={hideModal} sethideModal={sethideModal} closeModal={closeModal} title="great"/>
            </div>
        </>
    );
}
export default OrderForm