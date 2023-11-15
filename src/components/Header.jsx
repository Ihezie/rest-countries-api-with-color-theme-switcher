import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const getFromLocalStorage = () => {
    if (localStorage.getItem("dark")) {
      return JSON.parse(localStorage.getItem("dark"));
    } else {
      return false;
    }
  };
  const [darkMode, setDarkMode] = useState(getFromLocalStorage());

  useEffect(() => {
    const rootElement = document.querySelector("html");
    if (darkMode) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);
  
  return (
    <header className="flex justify-between h-24 items-center px-[5%] bg-white max-w-[1700px] mx-auto shadow-md dark:bg-darkBlue dark:text-white dark:shadow-lg dark:shadow-black/75">
      <h1 className="font-extrabold md:text-2xl lg:text-3xl dark:text-white">
        <Link to="/">Where in the world?</Link>
      </h1>
      <button
        className="cursor-pointer font-semibold md:text-xl"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        <FontAwesomeIcon
          icon={faMoon}
          size="xl"
          className="mr-3 dark:white-icon"
        />
        Dark Mode
      </button>
    </header>
  );
};
export default Header;
