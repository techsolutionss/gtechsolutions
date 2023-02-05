import "../static/commentsection.css"
import Comment from "../components/comment";
import CommentForm from "../components/commentform";
const CommentSection = ()=>{
    return(
        
        <div className="comment-section-container">
            <h2 className="comment-section-container-header">
                What our client are saying about us
            </h2>
            <div className="comment-section-min-container">
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
            <CommentForm/>
        </div>
    );
}

export default CommentSection