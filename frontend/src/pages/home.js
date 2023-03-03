import "../static/home.css"
import  Navbar  from "../components/navbar";
import ValueBox from "../components/value-box";
import { Link } from "react-router-dom";
import { values } from "../utility/datas";
import { useState } from "react";
import Services from "./services";
import CommentSection from "./commentssection";
import Footer from "../components/footer";


const Home = ()=>{
    const [value,setvalue] = useState(values)
    return(
        <>
            <Navbar/>
            <div className="home-container">
                <div className="home-column-1">
                    <div className="home-column-1-1">
                        <h2 className="home-column-1-header">Give your brand the online presence it deserves with with Tech<span>solution</span>. </h2>
                        <p className="home-column-1-p">    
                            Techsolution is committed to providing web development services and data analysis to identify key insights and drive much traffic to your business
                        </p>
                        <p className="home-column-1-p">
                            We develop functional and appealing websites, analyse and identity
                            key insights to help clients unlock potential and maximize growth.
                            When it comes to creative website design and analysing data, we have 
                            got it all covered. We are responsible for the sites performance and capacity,
                            a personalized customer experience which is focused on the success of our clients businesses.
                        </p>
                        <div className="home-column-1-links-container">
                            <Link className="home-link" to="/contact">Get in touch</Link>
                            <Link className="home-link" to="/order">Hire us today</Link>
                        </div>
                    </div>
                </div>
                <div className="home-column-2-1">
                        <h2 className="home-column-2-1-header">The values we live by</h2>
                        <div className="home-column-2-1-boxes">
                            {
                                value.map((item,idx) =>{
                                    return(
                                        <ValueBox key={idx} items={item}/>
                                    );
                                })
                            }
                            
                        </div>
                </div>
                <Services/>
                <CommentSection/>
                <Footer/>
            </div>
        </>
        
    );
}
export default Home