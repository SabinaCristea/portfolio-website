import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import "./index.css";
import AppLayout from "./ui/AppLayout";
import Projects from "./pages/Projects";
import PageNotFound from "./ui/PageNotFound";
import FirstPage from "./pages/FirstPage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<FirstPage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="projects" element={<Projects />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
