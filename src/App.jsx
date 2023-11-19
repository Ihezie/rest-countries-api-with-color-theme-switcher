import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Countries from "./pages/Countries";
import CountryDetails from "./pages/CountryDetails";
import Error from "./pages/Error";
import AppProvider from "./AppProvider";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Countries />} />
            <Route path="/:countryName" element={<CountryDetails />} />
            <Route path="*" element={<Error />} />
            <Route path="error" element={<Error />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
