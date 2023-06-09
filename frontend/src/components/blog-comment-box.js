import "../static/blog.css"
import {FaUserCircle} from "react-icons/fa";

const BlogCommentBox = ({comments:{name,image_url,comment}})=>{
    return(
        <>
            <div className="blog-comment-box-container">
                <div className="blog-comment-box-container-min-1">
                    {image_url? 
                        <img src={image_url} alt=""/>:<FaUserCircle className="fa-user-circle"/>
                    }
                </div>
                <div className="blog-comment-box-container-min-2">
                    <h2>{name}</h2>
                    <p>{comment}</p>
                </div>
            </div>
        </>
    );
}
export default BlogCommentBox