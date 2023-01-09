import "../static/about.css"
import Navbar from "../components/navbar";
import ProgressBars from "../components/progressbars";
import Footer from "../components/footer"


const About = ()=>{
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
export default About