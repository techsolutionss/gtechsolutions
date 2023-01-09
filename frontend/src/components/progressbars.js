import "../static/progressbars.css"


const ProgressBars = ({title,percent})=>{
    return(
        <>
            <div className="progress-container">
                <h2 className="progress-container-header">{title}  {percent}%</h2>
                <div className="progress">
                    <div className="progress-bars" style={{width:`${percent}%`}}></div>
                </div>
            </div>
        </>
    );
}
export default ProgressBars