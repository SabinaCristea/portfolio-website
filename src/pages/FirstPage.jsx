import Hobbies from "../ui/Hobbies";
import PresentationCard from "../ui/PresentationCard";
import WhoAmI from "../ui/WhoAmI";
import Home from "./Home";

function FirstPage() {
  return (
    <div>
      <Home />
      <PresentationCard />
      <div id="section-about">
        <WhoAmI />
      </div>
      <Hobbies />
      {/* <img
          src="src/assets/drinking-coffee.png"
          alt="Girl drinking coffee"
          className={`$(styles.coffeeGirlImg) absolute bottom-0 right-[-10rem] h-[65rem]`}
        /> */}
    </div>
  );
}

export default FirstPage;
