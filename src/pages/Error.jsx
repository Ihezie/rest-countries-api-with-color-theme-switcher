import { Link } from "react-router-dom";
const Error = () => {
  return (
    <main className="mt-32 px-[8%] uppercase pb-16 sm:px-[12%] lg:px-[5%] max-w-[1700px] mx-auto text-center">
      <h1 className="font-extrabold text-2xl dark:text-white">
        Oops, page not found
      </h1>
      <Link to="/" className="text-[16px] details-btn mt-8 inline-block">
        Back to home
      </Link>
    </main>
  );
}
export default Error