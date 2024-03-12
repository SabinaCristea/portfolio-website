import { useNavigate } from "react-router-dom";

function PageNotFound() {
const navigate = useNavigate();

  return <div className="flex flex-col items-center gap-10">
  <div className="text-center mt-[7rem] text-[2rem]">Sorry, page not found 😕</div>
  <button onClick={()=>navigate(-1)} className="bg-[var(--color-purple-hobby-card)] text-white text-[2rem] py-[1rem] px-[2rem] rounded-[100rem]">Go back</button>
  </div>;
}

export default PageNotFound;
