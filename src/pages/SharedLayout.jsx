import { Outlet} from "react-router-dom";
import Header from "../components/Header";
import useFetchData from "../useFetchData";
import { useEffect } from "react";

const SharedLayout = () => {
    const url = "https://restcountries.com/v3.1/all";
    const fetchData = useFetchData();

    useEffect(() => {
      fetchData(url);
    }, []);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default SharedLayout;
