// import { useNavigation } from "react-router-dom";
// import Loader from "./Loader";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

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
