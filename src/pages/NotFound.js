import { Link } from "react-router-dom";
import NotFoundImg from "../assets/not-found-img.png";

const NotFound = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center not-found">
        <img src={NotFoundImg} alt="Not-Found" />
        <h2>Not Found</h2>
        <Link to="/" className="btn btn-primary">
          GO Back
        </Link>
      </div>
    </>
  );
};

export default NotFound;
