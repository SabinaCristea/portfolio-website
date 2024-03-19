import { SpinnerCircular } from "spinners-react";

function Loader({ height }) {
  return (
    // <div className="flex items-center justify-center h-screen">
    <div className={`flex items-center justify-center ${height}`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <SpinnerCircular
          color="var(--color-orange-steps)"
          secondaryColor="white"
        />
      </div>
    </div>
  );
}

export default Loader;
