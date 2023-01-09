import "../static/modal.css"
import { FaCheck } from "react-icons/fa";


const Modal = ({hideModal,sethideModal,closeModal,title})=>{
    
    
    
    return(
        <>
            <div className={`modal-container ${hideModal && "open-modal"}`}>
                <div className="modal-header">
                    <div className="circle"><FaCheck className="modal-header-icon"/></div>
                </div>
                <div className="modal-body">
                        <h2>{title}</h2>
                        <p>Your request for our services has been successfully recieved</p>
                        <button type="button" onClick={closeModal} > Ok </button>
                </div>
            </div>        
        </>
    );
}

export default Modal