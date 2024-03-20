import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

function Modal({ children, onClose, style }) {
  const ref = useOutsideClick(onClose);

  return createPortal(
    <div
      className={`fixed top-0 left-0 w-[100%] h-[100vh] backdrop-blur-[3rem] z-[1000] transition-all duration-[0.5s] ${onClose || "overflow-hidden"}`}
    >
      <div
        className="flex items-center justify-center  fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[2rem] shadow-modal p-[4rem] transition-all duration-[0.5s]"
        ref={ref}
        style={style}
      >
        <button
          className="bg-none border-none p-[0.4rem] translate-x-[0.8rem] transition-all duration-[0.2s] absolute top-[1.5rem] right-[3rem] hover:text-[var(--color-orange-steps)]"
          onClick={onClose}
        >
          X
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
