import { useState } from "react";
import Modal from "./Modal";
import NavBar from "./NavBar";

function MenuBtn() {
  const [showMenu, setShowMenu] = useState(false);

  function handleOpenMenu() {
    setShowMenu((showMenu) => !showMenu);
  }

  return (
    <>
      <button
        className="bg-[var(--color-pink-primary)] p-[0.7rem] sm:p-[1rem] rounded-[1rem] absolute top-[1rem] left-[1rem] sm:top-[2rem] sm:left-[2rem] md:hidden"
        onClick={() => {
          console.log("asdfghjk");
          handleOpenMenu();
        }}
      >
        <img
          src="src/assets/svgs/menu.svg"
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
          className="w-[32rem] sm:w-[40rem] h-[50rem]"
          additionalStyle="md:hidden"
        >
          <NavBar />
        </Modal>
      )}
    </>
  );
}

export default MenuBtn;
