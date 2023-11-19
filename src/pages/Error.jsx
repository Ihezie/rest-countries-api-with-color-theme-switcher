import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
const Error = () => {
  return (
    <main className="mt-32 px-[8%] uppercase pb-16 sm:px-[12%] lg:px-[5%] max-w-[1700px] mx-auto text-center">
      <h1 className="font-extrabold text-2xl dark:text-white">
        Oops, page not found
      </h1>
      <FontAwesomeIcon
        icon={faBan}
        className="block mx-auto mt-4"
        size="5x"
      />
      <Link to="/" className="text-[16px] details-btn mt-4 inline-block">
        Back to home
      </Link>
    </main>
  );
};
export default Error;
