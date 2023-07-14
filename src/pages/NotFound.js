import { Link } from "react-router-dom";
import NotFoundImg from "../assets/not-found-img.png";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <img src={NotFoundImg} alt="Not-Found" />
        <h2>Not Found</h2>
        <Link to="/">GO Back</Link>
      </div>
    </>
  );
};

export default NotFound;
