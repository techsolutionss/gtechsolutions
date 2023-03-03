import "../static/commentsection.css"
import Comment from "../components/comment";
import CommentForm from "../components/commentform";
import { useEffect, useState } from "react";
import { publicRequest } from "../utility/apicalls";

const CommentSection = ()=>{
    
    const[comments,setcomments] = useState([])
    
    useEffect(()=>{
        const fetchComments = async()=>{
            try {
                const response = await publicRequest.get("/api/comments/")
                if(response.status === 200){
                    setcomments(response.data)
                }
                    
            } catch (error) {
                console.log(error.response)
            };
            
        }
        fetchComments()
    },[])
    return(
        <div className="comment-section-container">
            <h2 className="comment-section-container-header">
                What our client are saying about us
            </h2>
            <div className="comment-section-min-container">
                {comments.length?  
                    comments.map((comment)=>
                        <Comment key={comment.id} comments ={comment}/> 
                    ): <div className="empty-comment-container"><h2>there are no comments to show</h2></div>      
                }
                    
            </div>
            <CommentForm/>
        </div>
    );
}

export default CommentSection