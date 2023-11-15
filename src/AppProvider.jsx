import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
const AppContext = createContext();

const initialState = {
  data: [],
  region: "",
  loading: true,
  searchParam: "",
  countryDetails: null,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;

export const useAppData = () => {
  return useContext(AppContext);
};
