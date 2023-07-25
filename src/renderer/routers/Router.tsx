import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import FunctionTestPage from "../pages/functionTestPage/FunctionTestPage";
import IndexPage from "../pages/indexPage/IndexPage";

const MainRouter = () => {
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

export default MainRouter;
