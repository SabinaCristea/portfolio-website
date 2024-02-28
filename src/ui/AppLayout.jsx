// import { useNavigation } from "react-router-dom";
// import Loader from "./Loader";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

function AppLayout() {
  // const navigation = useNavigation();
  // const isLoading = navigation.state === "loading";

  return (
    <div>
      {/* {isLoading && <Loader />} */}

      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
