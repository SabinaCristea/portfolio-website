// import { useNavigation } from "react-router-dom";
// import Loader from "./Loader";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ErrorPage from "./ErrorMessage";
// import { SpinnerCircular } from "spinners-react";

function AppLayout() {
  // const navigation = useNavigation();
  // const isLoading = navigation.state === "loading";

  return (
    <div>
      {/* {isLoading && <SpinnerCircular color="var(--color-orange-steps)" secondaryColor="white" />} */}

      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
