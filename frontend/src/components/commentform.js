import { useRef, useState } from "react"
import "../static/commentsection.css"
// import {useSelector} from "react-redux"
import {FaChevronDown,FaChevronRight} from "react-icons/fa"
import { sendingComment,publicRequest,headers} from "../utility/apicalls"

const CommentForm = ()=>{

    const [data,setdata] = useState({})
    const [openComment,setopenComment] = useState(false)
    const[errors,seterrors] = useState({})
    const errorRef = useRef()
    const handleChange = (e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const toggleComment =()=>{
        setopenComment(!openComment)
        window.scroll(0,document.body.scrollHeight)
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
        <>
        <div className="comment-toggle-container">
            <button className="comment-toggle-btn" onClick={toggleComment}>Make a comment {!openComment?<FaChevronRight style={{"color":"white"}}/>:<FaChevronDown style={{"color":"white"}}/>}</button>
        </div>
        <div className={` ${!openComment? "close-comment":"comment-form-container"}`}>
            <p>It is extremely important to us what our customers thinks about our services,share with us how your user experience have been.</p>
            <div className="comment-form-container-min">
                <form onSubmit={postComment}>
                    <div className="comment-error-container comment-error-container-hide" ref={errorRef}>
                    </div>
                    <div className="form-group-comment">
                        <input type="text" name="name" 
                        onChange={(e)=>handleChange(e)}
                        value={data.name || ""}
                        placeholder="Name" autoComplete="off" />
                        <input type="email" name="email" 
                        onChange={(e)=>handleChange(e)}
                        value={data.email || ""}
                        placeholder="Email" autoComplete="off" />
                    </div>
                    <div className="comment-form-container-min-form-input">
                            <textarea name="comments" 
                            cols="80"
                            value={data.comments || ""} 
                            onChange={(e)=>handleChange(e)}
                            placeholder="Leave a comment"
                            rows="8">
                            </textarea>
                    </div>
                    <button type="submit" className="comment-btn">post comment</button>
                </form>
            </div>
        </div>
        </>
    );
}
export default CommentForm