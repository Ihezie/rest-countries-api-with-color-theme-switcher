import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Attribution from "../components/Attribution";
import useFetchData from "../useFetchData";
import { useEffect } from "react";
import { useAppData } from "../AppProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";

const SharedLayout = () => {
  const url = "https://restcountries.com/v3.1/all";
  const fetchData = useFetchData();
  const {
    state: { error },
  } = useAppData();

  useEffect(() => {
    fetchData(url);
  }, []);
  return (
    <>
      <Header />
      {error ? (
        <main>
          <h1 className="text-red-500 text-center text-3xl pt-[30vh] font-extrabold mb-4">
            Unable to fetch data
          </h1>
          <FontAwesomeIcon
            icon={faFaceFrown}
            className="block mx-auto red-icon"
            size='5x'
          />
        </main>
      ) : (
        <Outlet />
      )}
      <Attribution/>
    </>
  );
};
export default SharedLayout;
