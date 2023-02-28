import { useState } from "react"
import "../static/commentsection.css"
import {useSelector} from "react-redux"

const CommentForm = ()=>{


    const [data,setdata] = useState({})
    const[errors,seterrors] = useState({})
    const handleChange = (e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const postComment = (e)=>{
        e.preventDefault()
        
        alert("successful")
    }

    return(
        <div className="comment-form-container">
            <p>As a client-friendly team we like to know what our customers thinks about our services</p>
            <div className="comment-form-container-min">
                <form onSubmit={postComment}>
                    <div className="comment-error-container comment-error-container-hide">
                    </div>
                    <div className="form-group-comment">
                        <input type="text" name="name" 
                        onChange={(e)=>handleChange(e)}
                        placeholder="name" autoComplete="off" />
                        <input type="text" name="email" 
                        onChange={(e)=>handleChange(e)}
                        placeholder="email" autoComplete="off" />
                    </div>
                    <div className="comment-form-container-min-form-input">
                            <textarea name="comment" 
                            cols="80"
                            value={data.comment || ""} 
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