import { useState } from "react"
import "../static/commentsection.css"

const CommentForm = ()=>{

    const user = false
    const [comment,setcomment] = useState("")
    const postComment = (e)=>{
        e.preventDefault()
        if (!user){
            alert("login to make comments")
            return
        } 
        alert(comment)
        setcomment("")
    }

    return(
        <div className="comment-form-container">
            <p>As a client-friendly team we like to know what our customers thinks about our services</p>
            <div className="comment-form-container-min">
                <form onSubmit={postComment}>
                    <div className="comment-form-container-min-form-input">
                            <textarea name="comment" 
                            cols="80"
                            value={comment} 
                            onChange={(e)=>setcomment(e.target.value)}
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