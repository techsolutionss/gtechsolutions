import "../static/modal.css"
import { FaCheck } from "react-icons/fa";


const Modal = ({openModal,setopenModal,closeModal,title,message})=>{
    
    
    
    return(
        <>
            <div className={`modal-container ${openModal && "open-modal"}`}>
                <div className="modal-header">
                    <div className="circle"><FaCheck className="modal-header-icon"/></div>
                </div>
                <div className="modal-body">
                        <h2>{title}</h2>
                        <p>{message}</p>
                        <button type="button" onClick={closeModal} > Ok </button>
                </div>
            </div>        
        </>
    );
}

export default Modal