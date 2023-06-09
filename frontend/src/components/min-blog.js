import "../static/blog.css"
import imaging from "../assets/images/blue-shirt-man.jpg"
import { Link } from "react-router-dom";

const MinBlog = ({thumbnail,title,author,slug})=>{

        return(
        <>
        <div className="min-blog-container">
            <div className="min-blog-container-min-1">
                <img src={thumbnail} alt="" />
            </div>
            <div className="min-blog-title">
                <h3>{title}</h3>
            </div>
            <div className="min-blog-link">
                <p>Author: {author}</p>
                <Link className="min-blog-link-btn" to={`/blog/${"tech"}/${slug}`}>read more</Link>
            </div>
        </div>
        </>
    );
}

export default MinBlog