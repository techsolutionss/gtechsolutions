import "../static/blog.css"
import Navbar from "../components/navbar";
import BlogPage from "../components/blog-page";
// import imaging from "../assets/images/sample.jpg"



const Blog = ()=>{
    return(
        <>
        <Navbar/>
        <div className="blog-container">
          <div className="blog-container-min-1">
              <div className="blog-container-min-1-1">         
                  <h2>Welcome to Gtech solution blog</h2>
                  <p>A blog for passionate web developers</p>
              </div>
          </div>  
          <div className="blog-container-min-2">
          
          </div>
          <BlogPage/>  
        </div>
        </>
    );
}
export default Blog