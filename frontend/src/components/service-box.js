import "../static/footer.css"

const ServiceBox = ({service:{title,description}})=>{
    return(
        <div className="service-box-container">
            <h2>{title}</h2>
            <hr />
            <p>{description}</p>
                
        </div>
    );
}
export default ServiceBox