import ReactDOM from "react-dom";
import "../css/Modal.css"
function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-box">
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
