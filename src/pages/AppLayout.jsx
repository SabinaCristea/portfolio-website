// import { useNavigation } from "react-router-dom";
// import Loader from "./Loader";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import MenuBtn from "../components/MenuBtn";

function AppLayout() {
  return (
    <div>
      <div className="hidden md:flex">
        <NavBar />
      </div>
      <MenuBtn />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
