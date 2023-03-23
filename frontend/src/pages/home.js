import "../static/home.css"
import  Navbar  from "../components/navbar";
// import ValueBox from "../components/value-box";
import { Link } from "react-router-dom";
// import { values } from "../utility/datas";
// import { useState } from "react";
import Services from "./services";
import CommentSection from "./commentssection";
import Footer from "../components/footer";
import ValueBox1 from "../components/value-box-1";


const Home = ()=>{
    return(
        <>
            <Navbar/>
            <div className="home-container">
                <div className="home-column-1">
                    <div className="home-column-1-1">
                        <h2 className="home-column-1-header">Give your brand the online presence it deserves with Gtech<span>solution</span>. </h2>
                        <p className="home-column-1-p">
                            We develop functional and appealing websites.
                            When it comes to creative website design and analysing data, we have 
                            got it all covered. We are responsible for the sites performance and capacity,
                            a personalized customer experience which is focused on the success of our clients businesses.
                        </p>
                        <p className="home-column-1-p home-column-1-p-close">    
                            Techsolution is committed to providing web development services and data analysis to identify key insights and drive much traffic to your business.
                        </p>
                        <div className="home-column-1-links-container">
                            <Link className="home-link" to="/contact">Get in touch</Link>
                            <Link className="home-link" to="/order">Hire us today</Link>
                        </div>
                        <div className="home-column-1-1-2">
                            <div className="home-column-1-1-2-column">
                                <h2>5+</h2>
                                <p>Years of experience</p>
                            </div>
                            <div className="home-column-1-1-2-column">
                                <h2>5+</h2>
                                <p>Countries</p>
                            </div>
                            <div className="home-column-1-1-2-column">
                                <h2>110+</h2>
                                <p>Completed projects</p>
                            </div>
                        </div>
                    </div>
                    <div className="home-column-1-2">
                        <div className="home-column-1-2-box"></div>
                        <div className="home-column-1-2-box-2"></div>
                        <div className="home-column-1-2-box-3"></div>
                    </div>
                </div>
                <div className="home-column-2-1">
                    <div className="home-column-2-1-box"></div>
                    <div className="home-column-2-1-box-2"></div>
                    <div className="home-column-2-1-box-3"></div>
                </div>
                <ValueBox1/>
                <Services/>
                <CommentSection/>
                <Footer/>
            </div>
        </>
        
    );
}
export default Home