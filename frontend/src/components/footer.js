import{FaFacebook,FaInstagram,FaWhatsapp, FaTwitter} from "react-icons/fa"
import "../static/footer.css"
import{Link} from "react-router-dom"

const Footer = ()=>{
    return(
        <div className="footer-container">
            <Link to="#" className="icon-link"><FaFacebook /></Link>
            <Link to="#" className="icon-link"><FaTwitter/></Link>
            <Link to="#" className="icon-link"><FaInstagram/></Link>
            <Link to="#" className="icon-link"><FaWhatsapp/></Link>
        </div>
    );
}
export default Footer