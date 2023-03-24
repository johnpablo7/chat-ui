import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layouts/Layout";
// Pages
import { Home } from "../components/pages/Home";
import { NotFound } from "../components/pages/NotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
