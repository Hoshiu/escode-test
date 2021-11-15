import { Routes, Route } from "react-router-dom";
import CodePage from "../pages/codePage";

const RouterList = () => {
  return (
    <Routes>
      <Route path="/" element={<CodePage />} />
    </Routes>
  );
};

export default RouterList;
