import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useAppData } from "../AppProvider";

const SearchBar = () => {
  const {
    state: { searchParam },
    dispatch,
  } = useAppData();

  return (
    <div className="w-[90%] mx-auto bg-white h-16 flex items-center pl-10 pr-2 shadow-md rounded-md md:mx-0 md:w-1/2 lg:w-1/3 dark:bg-darkBlue dark:text-white dark:shadow-lg dark:shadow-black/75">
      <label htmlFor="search-bar">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="lg"
          className="gray-icon cursor-pointer dark:white-icon"
        />
      </label>
      <input
        value={searchParam}
        onChange={(e) => {
          dispatch({ type: "SEARCH BY NAME", payload: e.target.value });
        }}
        type="text"
        id="search-bar"
        placeholder="Search for a country..."
        className="ml-8 w-full outline-none font-semibold !bg-transparent dark:placeholder:text-white/75"
      />
    </div>
  );
};
export default SearchBar;
