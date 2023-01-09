import "../static/home.css"
import  Navbar  from "../components/navbar";
import ValueBox from "../components/value-box";
import { Link } from "react-router-dom";
import { values } from "../utility/datas";
import { useState } from "react";


const Home = ()=>{
    const [value,setvalue] = useState(values)
    return(
        <>
            <Navbar/>
            <div className="home-container">
                <div className="home-column-1">
                    <div className="home-column-1-1">
                        <h2 className="home-column-1-header">Give your brand the online presence it deserves with with Tech<span>solution</span>. </h2>
                        <p className="home-column-1-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam 
                            sed vel porro reiciendis Lorem ipsum dolor sit, amet 
                            consectetur adipisicing elit. Officiis similique ut laudantium deserunt ipsum autem 
                            modi pariatur perspiciatis vero! Ducimus!
                            provident cum necessitatibus molestiae hic eveniet aliquam?
                        </p>
                        <div className="home-column-1-links-container">
                            <Link className="home-link" to="#">Get in touch</Link>
                            <Link className="home-link" to="/order">Hire us today</Link>
                        </div>
                    </div>
                </div>
                <div className="home-column-2">
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
                </div>
            </div>
        </>
        
    );
}
export default Home