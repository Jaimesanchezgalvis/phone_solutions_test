import { Route, Routes } from "react-router-dom";

import { Plp } from "../pages/Plp";
import { Pdp } from "../pages/Pdp";
import { SearchPage } from "../pages/SearchPage";
import { NotFound404 } from "../pages/NotFound404";

export const AppRotuer = () => {
  return (
    <Routes>
        <Route path="/" element={<Plp />} />
        <Route path="/:id" element={<Pdp />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/*" element={<NotFound404 />} />
    </Routes>
  );
};
