import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import FunctionTestPage from "./pages/FunctionTestPage";
import IndexPage from "./pages/IndexPage";

const Router = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<IndexPage />} />
          <Route path="function_test" element={<FunctionTestPage />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

export default Router;
