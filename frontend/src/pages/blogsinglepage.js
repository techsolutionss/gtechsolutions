import "../static/blog.css"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import imaging from "../assets/images/blue-shirt-man.jpg"
import twitter from "../assets/images/twitter.png"
import instagram from "../assets/images/instagram.png"
import facebook from "../assets/images/facebook.png"
import Footer from "../components/footer"
import MinBlog from "../components/min-blog";
import { FaThumbsUp,FaComment } from "react-icons/fa";
import BlogCommentBox from "../components/blog-comment-box";
import {blogs} from "../utility/jsonData/blogcomment"
// import { Link } from "react-router-dom";
import { blogComments } from "../utility/jsonData/blogcomment";


const BlogSinglePage = ()=>{

    const location = useLocation()
    var pathname = location.pathname.split("/").at(-1)
    var category = location.pathname.split("/").at(-2)

    const [comment,setComment] = useState("")
    const [blogComment,setBlogComment] = useState([])
    const [blog,setBlog] = useState([])
    useEffect(()=>{
        const pullBlog = ()=>{
            setBlog(blogs)
        }
        pullBlog()
    })

    useEffect(()=>{
        window.scroll(0,0)
    })
    useEffect(()=>{
        const pullSingleBlog = ()=>{
            console.log(pathname)
            console.log(category)
        }
        pullSingleBlog()
    },[pathname,category])

    useEffect(()=>{
        const pullBlogComments = ()=>{
            setBlogComment(blogComments)
        }
        pullBlogComments()
    })
    const submitBlogComment = (e)=>{
        e.preventDefault()
        alert("welcome")
        alert(comment)
    }
    const openLink = (e)=>{
        alert("thanks for your patronage")
    }
    
    return(
        <>
            <div className="blog-single-page-container-header">
                <div className="blog-single-page-container-header-1">
                    <Navbar/>   
                </div>
                <div className="blog-single-page-container-header-2">
                    <div className="blog-single-page-container-header-2-min-1">
                        <h2>{category} </h2>
                    </div>
                    <div className="blog-single-page-container-header-2-min-2">
                        <h2>Recent Post</h2>
                    </div>
                    
                </div>    
            </div>    
            <div className="blog-single-page-container-row">
                <div className="blog-single-page-container-col-1">
                    <div className="blog-single-page-container-col-1-1">
                        <img src={imaging} alt="" />
                        <div className="overlay">
                            <h2>becoming a successful django developer in one year</h2>
                        </div>
                    </div>
                    <div className="blog-single-page-container-col-1-2">
                        <div className="blog-title">
                            <h2>becoming a successful django developer in one year</h2>
                        </div>
                        <div className="blog-author">
                            <div className="blog-author-1">
                                <div className="thumps-up-cont" data-like>
                                    <FaThumbsUp className="thumps-up-icon"/>
                                    <p>{"1,245"}</p>
                                </div>
                                <div className="comment-icon-cont">
                                    <FaComment className="comments-icon"/>
                                    <p>{"185"}</p>
                                </div>
                            </div>
                            <div className="blog-author-2">
                                <p>Share this post to:</p>
                                <img src={twitter} alt="" className="twitter-icon" onClick={openLink}/>
                                <img src={instagram} alt=""  onClick={openLink}/>
                                <img src={facebook} alt=""  onClick={openLink}/>
                            </div>
                        </div>
                        <div className="blog-comment">
                            <div className="blog-comment-1">
                                <p>Author: {"Gtechsolutions"}</p>
                            </div>
                            <div className="blog-comment-2">
                                <p>posted at: {"02 march 2023"}, {7} min read</p>
                            </div>
                        </div>
                    </div>
                    <div className="blog-single-page-container-col-1-3">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sunt dolorem dolorum corrupti vitae aspernatur perspiciatis itaque qui dignissimos repellendus quos, enim a minus tenetur cumque hic vel voluptatibus voluptate mollitia fugiat unde. Tenetur nihil voluptates odit recusandae vitae est, ratione magni cumque esse dolorem quae non ipsum eius dolor totam suscipit quod laudantium nam repellat id distinctio illo molestiae quo harum. Mollitia cum excepturi corporis laudantium soluta doloribus tenetur commodi quaerat temporibus ex omnis in aliquid fugit numquam unde, voluptates eveniet alias id beatae iure similique odio architecto consectetur. Expedita magni quos, at quasi commodi officia earum consequatur porro perspiciatis veniam, perferendis iure accusantium nulla minus atque quidem saepe dolorem repudiandae! Sapiente, rerum. Explicabo expedita adipisci molestiae exercitationem magni dignissimos quae, ducimus sunt dicta deserunt maxime accusamus modi perspiciatis officiis voluptates eligendi nesciunt numquam omnis. Odio fuga voluptas ut dolorem quam porro veritatis eum et. Rerum autem iusto voluptates velit saepe quidem. Laudantium sint voluptate quo odit minima ipsam recusandae magni architecto blanditiis ad corrupti reprehenderit cum, sequi, provident quam necessitatibus. Nemo obcaecati qui maiores quisquam libero praesentium! Doloremque nisi quas fugiat a sit soluta. Ducimus quidem nesciunt rerum corrupti eaque neque veniam adipisci deleniti facere animi totam dolorem nemo aliquid numquam delectus, perferendis iusto nulla incidunt tempore. Sunt ipsa ea qui expedita rerum, autem explicabo illum consectetur quia molestias voluptatem earum maiores quidem, vitae corrupti facilis quasi magni excepturi accusantium. Quam dolore sapiente iusto architecto at ad rem earum, natus eaque? Ex in tempora dolore error id quasi distinctio incidunt. Id dolores odio nihil repudiandae incidunt veniam accusamus, optio officiis voluptas, eligendi illo sed! Quidem accusamus, ea est sequi neque ipsam eius iure corrupti, delectus animi odio quasi, fuga odit facere voluptate molestiae corporis incidunt possimus voluptatum alias omnis quisquam qui. In saepe voluptates animi ad soluta. Consequuntur nulla distinctio temporibus aliquam culpa animi ut modi minima dolorum ducimus sint eum, sequi aliquid similique quam commodi pariatur magnam iste, voluptates nobis molestiae adipisci repellat. Soluta ad, ipsam dicta officiis, placeat minus quisquam ducimus sunt maiores aliquam mollitia est doloribus optio beatae amet iusto possimus veritatis vitae odio corporis, quis repellat ea. Aspernatur molestiae distinctio nesciunt sit expedita possimus dolor commodi cum, optio, ratione omnis excepturi iusto sunt deserunt a rem, modi nostrum iste quia? Debitis in rem, nostrum dolorum laborum accusamus unde quae iure deserunt molestiae, quaerat possimus dolorem repudiandae ipsum totam repellendus veritatis doloribus enim dolores ipsam velit aut omnis cupiditate. Veritatis corporis assumenda eaque natus ex adipisci aut voluptatibus laboriosam quisquam? Nesciunt in ullam laborum vitae. At ad earum cum quaerat omnis, quia odit quibusdam exercitationem a nemo adipisci doloremque neque obcaecati aperiam. Alias aperiam officiis cumque, maiores id unde at ut ad atque reiciendis a quisquam adipisci blanditiis expedita tempore error laudantium amet ea dolore iste! Nostrum vero numquam eveniet voluptas, odio adipisci enim placeat esse iure unde? Assumenda perspiciatis ipsa maiores ea excepturi reiciendis, mollitia quia officia! Animi molestias quasi eveniet perspiciatis quas nisi iste ea excepturi enim eius illo officiis perferendis qui ex ab esse, possimus fugiat quaerat quibusdam maiores quidem? Optio sit magni a deleniti sequi officiis, iure excepturi accusantium culpa omnis voluptates quasi non vel, repudiandae eum. Excepturi dolores voluptas totam, asperiores in recusandae corrupti quidem quaerat voluptate repudiandae similique perspiciatis iste ipsum, cum voluptatem ut debitis, sint ab beatae temporibus nostrum sed non distinctio. Ex deserunt inventore exercitationem corporis voluptatem ipsa sit sint quaerat. Aliquam incidunt eum vitae distinctio ipsam est? Veritatis, cum. Dignissimos assumenda, id saepe quisquam ipsum impedit sunt eligendi quis, architecto nam consectetur quos officiis adipisci accusamus alias sit. Quam impedit corporis hic provident dolorum, laudantium, asperiores obcaecati natus fuga dolores quisquam. Iste sed repudiandae recusandae aliquid eveniet repellendus deserunt porro, laborum cupiditate placeat voluptatum corrupti esse quis dolore autem accusantium aspernatur eum ipsam iusto deleniti aliquam! Placeat veritatis ullam alias culpa saepe aperiam officia aliquam, voluptates enim nostrum similique illo eligendi obcaecati porro. Molestias eaque error quas autem ea omnis aut esse. Vitae rerum iste sit aliquid maiores et rem, ratione consectetur. Rerum enim deleniti ullam placeat consequuntur eius itaque, eos et aliquam incidunt nulla odio dolore natus dolores animi vel numquam voluptatum. Sint obcaecati quae temporibus sapiente! Qui amet nihil nemo nisi accusamus animi quia voluptatum, tenetur magnam hic cum ullam exercitationem voluptatibus minus quaerat neque culpa totam blanditiis consequuntur perferendis ipsum? Laudantium numquam harum a, maiores quo cupiditate quae obcaecati alias natus soluta atque molestias consequatur fugiat et veritatis animi adipisci enim assumenda dolorem totam nemo ut neque sapiente itaque. Illo, maiores provident pariatur dolore amet reprehenderit esse quas beatae. Nulla, magni odit quo fugiat illum obcaecati qui perspiciatis voluptatibus cupiditate repudiandae consectetur porro alias iste dignissimos doloribus assumenda cum ut veritatis, eius error ex recusandae! Veniam voluptas libero deleniti mollitia nostrum, ratione obcaecati doloremque asperiores, fugit maxime veritatis ipsum eveniet, quia assumenda! Maiores eius excepturi labore, eaque ex vitae ullam ut, eos eligendi harum consectetur a expedita quaerat repudiandae dicta possimus placeat. Blanditiis beatae itaque nisi voluptate facilis ab natus odio obcaecati deleniti fugiat, iste dolores? Suscipit nobis excepturi natus assumenda sint ea voluptatem exercitationem beatae vitae molestias consequuntur quas hic sed ducimus asperiores rerum aspernatur dolores, necessitatibus adipisci magnam earum nihil. Ab nam nemo debitis ipsum. Iste, ipsum animi, aliquid alias sequi ut perferendis ratione nisi tempora obcaecati rerum ullam nostrum fugiat vero dolore. Voluptate numquam eius modi facere eos nulla id corporis quaerat ab inventore esse ex tenetur asperiores delectus, fugit, molestias deleniti doloremque illum vel, quibusdam totam in doloribus repudiandae quam! Nesciunt, suscipit voluptates voluptatum nihil quisquam dolore tempore optio ipsam eligendi accusantium tempora totam quasi esse dolorem, voluptate sapiente, adipisci aspernatur molestias. A officia sit temporibus accusantium possimus vel blanditiis illum? Dicta adipisci totam, perspiciatis sit deleniti temporibus dolores, quae architecto laudantium dignissimos ipsam voluptatibus voluptate beatae explicabo odit numquam, ab aliquid. Deleniti laborum maxime non magni id nobis quam debitis aperiam explicabo ipsa sint, recusandae reprehenderit sunt animi facilis quibusdam ratione esse velit porro obcaecati, aut accusamus soluta adipisci qui! Itaque sint ratione, enim laborum similique ipsum quia.
                        </p>
                    </div>
                    <div className="blog-single-page-container-col-1-4">
                        <h2>Comments</h2>
                        <div className="blog-single-page-container-col-1-4-min-1">
                            {blogComment.length ?
                                blogComment.map((item)=>
                                    <BlogCommentBox key={item.name} comments ={item}/> 
                                ): <div className="empty-blog-comment-container"><h2>there are no comments to display</h2></div>
                            }
                        </div>
                    </div>
                    <div className="blog-single-page-container-col-1-5">
                        <h2>Leave a reply</h2>
                        <form onSubmit={submitBlogComment}>
                            {/* <div className="blog-single-page-input-group">
                                <input type="text" />
                            </div> */}
                            <div className="blog-single-page-input-group text-area">
                                <textarea name="" id="" cols="30" rows="10" placeholder="type your comments..." onInput={(e)=>setComment( e.target.value)}>

                                </textarea>
                            </div>
                            <div className="blog-single-page-from-btn">
                                <input type="submit" value="publish comment" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="blog-single-page-container-col-2">
                    {blog.length ?
                        blog.map((item)=>
                            <MinBlog key={item.slug}
                                thumbnail={item.thumbnail}
                                author={item.author}
                                title={item.title}
                                slug={item.slug}
                            /> 
                        ): <div className="empty-min-blog-container"><h2>there is nothing to display</h2></div>
                    }
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default BlogSinglePage
