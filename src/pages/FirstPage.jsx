import Hobbies from "../ui/Hobbies";
import PresentationCard from "../ui/PresentationCard";
import WhoAmI from "../ui/WhoAmI";
import Home from "./Home";

function FirstPage() {
  return (
    <div>
      <Home />
      <PresentationCard />
      <WhoAmI />
      <Hobbies />
    </div>
  );
}

export default FirstPage;
