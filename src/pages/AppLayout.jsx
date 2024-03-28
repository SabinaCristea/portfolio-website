// import { useNavigation } from "react-router-dom";
// import Loader from "./Loader";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Menu from "../components/Menu";

function AppLayout() {
  return (
    <div>
      <div className="hidden md:flex">
        <NavBar />
      </div>
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
