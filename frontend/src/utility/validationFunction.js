import phnoeInput,{isPossiblePhoneNumber} from "react-phone-number-input"


export const checkLength =(input)=>{
    if(input.value.length < 6){
        input.style.borderColor = "red"
        input.parentElement.querySelector("small").innerHTML = "input must not be less than six characters!" 
    }else{
        input.style.borderColor = "green"
        input.parentElement.querySelector("small").innerHTML = ""
    }
}

export const checkEmail = (input)=>{
    var dotpos = input.value.lastIndexOf(".")
    var atpos = input.value.indexOf("@")
    if(atpos < 1 || dotpos - atpos < 2 || input.value.length - dotpos < 4){
        input.style.borderColor = "red"
        input.parentElement.querySelector("small").innerHTML = "please enter a valid email"
    }
    else{
        input.style.borderColor = "green"
        input.parentElement.querySelector("small").innerHTML = ""
    }
}
export const checkPhone = (input)=>{

    if(!isPossiblePhoneNumber(input.value)){
        input.style.borderColor = "red"
        input.parentElement.querySelector("small").innerHTML = "please enter a valid phone number"
    }
    else{
        input.style.borderColor = "green"
        input.parentElement.querySelector("small").innerHTML = ""

    }
        
   } 
export const checkMessageLength = (input)=>{
    if(input.value.length < 20){
        input.style.borderColor = "red"
        input.parentElement.querySelector("small").innerHTML = "input must not be less than 20 characters!" 
    }else{
        input.style.borderColor = "green"
        input.parentElement.querySelector("small").innerHTML = ""
    }   
}

export const displayError = (reference,message)=>{
    reference.current.focus()
    reference.current.parentElement.querySelector("small").innerHTML= message
}