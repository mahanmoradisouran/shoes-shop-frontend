import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-white  fixed top-0 right-0 w-full h-full bg-violet-600 z-50 flex justify-center items-center flex-col md:flex-row">
      <span className="text-9xl border-b-2 md:border-b-0 md:border-r-2 border-white p-5">
        404
      </span>
      <p className="text-3xl p-5">
        Sorry the page you're looking for , not found ! <br />
        <Link
          className="link text-sky-400 flex justify-center md:justify-start items-center"
          to="/store/"
        >
          Go home{" "}
          <BsFillArrowRightCircleFill
            className="text-white ml-1 inline"
            size={35}
          />
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
