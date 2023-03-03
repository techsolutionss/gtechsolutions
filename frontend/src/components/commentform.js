import { useRef, useState } from "react"
import "../static/commentsection.css"
import {useSelector} from "react-redux"
import { sendingComment,publicRequest,headers} from "../utility/apicalls"

const CommentForm = ()=>{


    const [data,setdata] = useState({})
    const[errors,seterrors] = useState({})
    const errorRef = useRef()
    const handleChange = (e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const postComment = async(e)=>{
        e.preventDefault()
        if(!data.name){
            seterrors({"name":["name field is required"]})
            errorRef.current.innerHTML = errors.name[0]
            errorRef.current.classList.remove("comment-error-container-hide")
            return
        }
        if(!data.email){
            seterrors({"email":["email field is required"]})
            errorRef.current.innerHTML = errors.email[0]
            errorRef.current.classList.remove("comment-error-container-hide")
            return
        }
        if(!data.comments){
            seterrors({"comments":["comment field is required"]})
            errorRef.current.innerHTML = errors.comment[0]
            errorRef.current.classList.remove("comment-error-container-hide")
            return
        }

        const sendComment = await sendingComment(publicRequest,data,headers)
        if(sendComment.status === 201){
            errorRef.current.classList.add("comment-error-container-hide")
            setdata({})
            seterrors({})
            alert("you have successfully posted a comment")
            window.location.reload()        
        }
        if(sendComment.status === 400){
            seterrors(sendComment.data)
            console.log(sendComment.data)
            alert("failed")
        }
        
    }

    return(
        <div className="comment-form-container">
            <p>As a client-friendly team we like to know what our customers thinks about our services</p>
            <div className="comment-form-container-min">
                <form onSubmit={postComment}>
                    <div className="comment-error-container comment-error-container-hide" ref={errorRef}>
                    </div>
                    <div className="form-group-comment">
                        <input type="text" name="name" 
                        onChange={(e)=>handleChange(e)}
                        value={data.name || ""}
                        placeholder="name" autoComplete="off" />
                        <input type="email" name="email" 
                        onChange={(e)=>handleChange(e)}
                        value={data.email || ""}
                        placeholder="email" autoComplete="off" />
                    </div>
                    <div className="comment-form-container-min-form-input">
                            <textarea name="comments" 
                            cols="80"
                            value={data.comments || ""} 
                            onChange={(e)=>handleChange(e)}
                            placeholder="leave a comment"
                            rows="8">
                            </textarea>
                    </div>
                    <button type="submit" className="comment-btn">post comment</button>
                </form>
            </div>
        </div>
    );
}
export default CommentForm