import "../static/commentsection.css"
import {FaUser,FaThumbsUp} from "react-icons/fa"

const Comment = ({comments:{name,date,comment}})=>{
    return(
        <div className="comment-container">
            <div className="comment-container-header">
                <h4><FaUser className="user-icon"/> <p>{name}</p></h4>
                <FaThumbsUp className="thumbs-up-icon"/>
            </div>
            <div className="comment-container-body">
                <p>
                    {comment}
                </p>
            </div>
            <div className="comment-container-footer">
                <p>{date}</p>
            </div>
        </div>
    );
}
export default Comment