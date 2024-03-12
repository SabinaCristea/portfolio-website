import { SpinnerCircular } from "spinners-react";

function Loader() {
  return (
    <div className="flex items-center justify-center">
      <SpinnerCircular
        color="var(--color-orange-steps)"
        secondaryColor="white"
      />
    </div>
  );
}

export default Loader;
