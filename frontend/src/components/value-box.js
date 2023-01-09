import "../static/modal.css"

const ValueBox = ({items:{title,text}})=>{
    return(
        <div className="value-box-container">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
}
export default ValueBox