import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { useOutsideClick } from "../hooks/useOutsideClick";

function Modal({ children, onClose, style }) {
  const ref = useOutsideClick(onClose);

  return createPortal(
    <div className={`${styles.overlay} ${onClose || "overflow-hidden"}`}>
      <div className={styles.styledModal} ref={ref} style={style}>
        <button className={styles.modalBtn} onClick={onClose}>
          X
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
