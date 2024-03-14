// import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { useOutsideClick } from "../hooks/useOutsideClick";

// const ModalContext = createContext();

// function Modal({ children }) {
//   const [openName, setOpenName] = useState("");

//   const close = () => setOpenName("");
//   const open = setOpenName;

//   return (
//     <ModalContext.Provider value={{ openName, close, open }}>
//       {children}
//     </ModalContext.Provider>
//   );
// }

// function Open({ children, opens: opensWindowName }) {
//   const { open } = useContext(ModalContext);

//   return cloneElement(children, { onClick: () => open(opensWindowName) });
// }

// function Window({ children, name }) {
//   const { openName, close } = useContext(ModalContext);
//   const ref = useOutsideClick(close);

//   if (name !== openName) return null;

//   return createPortal(
//     <div className={styles.overlay}>
//       <div ref={ref} className={styles.styledModal}>
//         <button onClick={close} className={styles.modalBtn}>
//           X
//         </button>

//         <div>{cloneElement(children, { onCloseModal: close })}</div>
//       </div>
//     </div>,
//     document.body
//   );
// }

// Modal.Open = Open;
// Modal.Window = Window;

// export default Modal;

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
