import "../static/commentsection.css"

const Comment = ({comments:{name,date,comment}})=>{
    return(
        <div className="comment-container">
            <div className="comment-container-header">
                <h4>{name}</h4>
                <p>{date}</p>
            </div>
            <div className="comment-container-body">
                <p>
                    {comment}
                </p>
            </div>
        </div>
    );
}
export default Comment