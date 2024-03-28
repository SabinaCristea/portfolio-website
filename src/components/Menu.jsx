import { useState } from "react";
import Modal from "./Modal";
import NavBar from "./NavBar";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  function handleOpenMenu() {
    setShowMenu((showMenu) => !showMenu);
  }

  return (
    <>
      <button
        className="fixed bg-[var(--color-pink-primary)] p-[0.7rem] sm:p-[1rem] rounded-[1rem] top-[1rem] left-[1rem] sm:top-[2rem] sm:left-[2rem] md:hidden z-[999999]"
        onClick={() => {
          handleOpenMenu();
        }}
      >
        <img
          src="/assets/svgs/menu.svg"
          alt="Menu button svg"
          className="w-[2rem] sm:w-[3rem] fill-[var(--color-pink-primary)]"
        />
      </button>
      {showMenu && (
        <Modal
          style={{
            backgroundColor: "var(--color-pink-primary)",
          }}
          onClose={() => setShowMenu(false)}
          className="w-[30rem] sm:w-[40rem] h-[auto] px-0 py-0"
          additionalStyle="md:hidden"
        >
          <NavBar onClose={() => setShowMenu(false)} />
        </Modal>
      )}
    </>
  );
}

export default Menu;
