import "../static/blog.css"
import imaging from "../assets/images/blue-shirt-man.jpg"
import {Link} from "react-router-dom"
import { FaThumbsUp } from "react-icons/fa";

const BlogBox = ({title,author,body,thumbnail,created_at,slug})=>{

    return(
        <div className="blog-box-container">
            <div className="blog-box-container-min-1">
                <img src={thumbnail} alt="" className="blog-box-image"/>
                {/* <div className="blog-box-overlay"></div> */}
                <div className="blog-box-time">
                    <p>{created_at}</p>
                </div>
            </div>
            <div className="blog-box-container-min-2">
                <div className="blog-box-container-min-2-1">
                    <h2>{title}</h2>
                </div>
                <div className="blog-box-container-min-2-2">
                    <p>{(body.split(" ")).slice(0,30).join(" ")}...</p>
                </div>
                <div className="blog-box-container-min-2-3">
                    <div className="blog-box-time-div">
                        <p>created by: {author}</p> 
                    </div>
                    <Link className="blog-box-container-link" to={`/blog/${"tech"}/${slug}`}>Read more</Link>
                </div>
            </div>
        </div>
    );
}
export default BlogBox