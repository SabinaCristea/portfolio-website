// import { useNavigation } from "react-router-dom";
// import Loader from "./Loader";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function AppLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
