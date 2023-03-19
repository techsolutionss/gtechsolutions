import React, { useState, useEffect } from "react";
import "../static/about.css"
import Navbar from "../components/navbar";
import Footer from "../components/footer"


const Post = ()=>{
    const [postsList, setPostsList] = useState([]);
    const [maxPages, setMaxPages] = useState([0]);
    const [currentPages, setCurrentPage] = useState([0]);
    const [search, setSearch] = useState([""]);

    const postsPerPage = 6;

    useEffect(() => {
        connection
        .get("posts/")
        .then((res) => {
            setPostsList(res.data);
            setMaxPages(math.ceil(res.data.length / postsPerPage))

        })
        .catch((err) => console.log(err.message));
    }, []);

    useEffect(() => {
        let query = postsList.filter
    })
    return(
        <>
            <Navbar/>
            <div className="about-container">
                <div className="about-container-min-1">

                </div>
                {/* <ProgressBars percent={70} title="HTML"/> */}
            <div className="about-footer-container">
                <Footer/>
            </div>
            </div>
        </>
    );
}
export default Post