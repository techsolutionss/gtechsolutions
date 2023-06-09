import "../static/blog.css"
import BlogBox from "./blog-box";
import {blogs} from "../utility/jsonData/blogcomment"
import { useEffect, useState } from "react";

const BlogPage = ()=>{

    const [blog,setBlog] = useState([])
    useEffect(()=>{
        const pullBlog = ()=>{
            setBlog(blogs)
        }
        pullBlog()
    })
    return(
        <section className="blog-page-container">
            <div className="grid3">
                {blog.length ?
                    blog.map((item)=>
                        <BlogBox key={item.id} title={item.title}
                            author={item.author}
                            body={item.body}
                            thumbnail={item.thumbnail}
                            created_at={item.created_at}
                        /> 
                    ): <div className="empty-blog-container"><h2>there are no blogs at the moment</h2></div>
                }    
            </div>
        </section>
    );
}
export default BlogPage