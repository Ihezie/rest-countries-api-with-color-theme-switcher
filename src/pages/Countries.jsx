import SearchBar from "../components/SearchBar";
import SelectRegion from "../components/SelectRegion";
import Country from "../components/Country";
import { useAppData } from "../AppProvider";
import loadingGif from "../assets/Rolling-1s-197px (1).gif";
import useFetchData from "../useFetchData";
import { useEffect } from "react";

const Countries = () => {
  const url = "https://restcountries.com/v3.1/all";
  const fetchData = useFetchData();

  useEffect(() => {
    fetchData(url);
  }, []);

  const {
    state: { data, loading },
  } = useAppData();

  return (
    <main className="max-w-[1700px] mx-auto">
      <div className="mt-8 md:flex md:mx-[5%] md:justify-between">
        <SearchBar />
        <SelectRegion />
      </div>
      {loading ? (
        <div>
          <img src={loadingGif} alt="loading" className="mx-auto mt-32" />
        </div>
      ) : (
        <section className="mt-12 grid grid-cols-countries justify-between gap-16 px-[13%] sm:px-[5%] md:max-xl:grid-cols-countries-md">
          {data.map((country, index) => (
            <Country key={index} country={country} />
          ))}
        </section>
      )}
    </main>
  );
};
export default Countries;
