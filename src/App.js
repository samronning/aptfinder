import Search from "./pages/Search";
import ListView from "./pages/ListView";
import { Routes, Route, Outlet } from "react-router-dom";
import T from "@mui/material/Typography";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/list" element={<Outlet />}>
        <Route path=":location" element={<ListView />} />
      </Route>
      <Route path="*" element={<T>Page not found</T>} />
    </Routes>
  );
};

export default App;
