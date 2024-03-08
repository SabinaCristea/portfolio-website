import { Link } from "react-router-dom";
import styles from "./CarouselCard.module.css";

function CarouselCard({ data }) {
  // return (
  //   <div>
  //     {data.map((project, index) => (
  //       <div key={index}>
  //         <img src={project.src} alt={project.alt} />
  //         <Link to={project.codeLink}>Code</Link>
  //         <Link to={project.siteLink}>Site</Link>
  //       </div>
  //     ))}
  //   </div>
  // );
  return (
    <div>
      <div className={`${styles.projectCard}`}>
        <img src={data[0].src} alt={data[0].alt} />
        <Link to={data[0].codeLink}>Code</Link>
        <Link to={data[0].siteLink}>Site</Link>
      </div>
      <div>
        <img src={data[1].src} alt={data[1].alt} />
        <Link to={data[1].codeLink}>Code</Link>
        <Link to={data[1].siteLink}>Site</Link>
      </div>
      <div>
        <img src={data[2].src} alt={data[2].alt} />
        <Link to={data[2].codeLink}>Code</Link>
        <Link to={data[2].siteLink}>Site</Link>
      </div>
      <div>
        <img src={data[3].src} alt={data[3].alt} />
        <Link to={data[3].codeLink}>Code</Link>
        <Link to={data[3].siteLink}>Site</Link>
      </div>
      <div>
        <img src={data[4].src} alt={data[4].alt} />
        <Link to={data[4].codeLink}>Code</Link>
        <Link to={data[4].siteLink}>Site</Link>
      </div>
    </div>
  );
}

export default CarouselCard;
