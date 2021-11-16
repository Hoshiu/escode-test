import { Routes, Route } from "react-router-dom";
import CodePage from "../pages/codePage";
import HomePage from "../pages/homePage"
import RandPage from "../pages/randPage"
const RouterList = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<CodePage />} />
      <Route path="/rand" element={<RandPage />} />
    </Routes> 
  );
};

export default RouterList;
