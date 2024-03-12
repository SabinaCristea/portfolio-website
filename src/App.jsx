import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import "./index.css";
// import AppLayout from "./ui/AppLayout";
// import Projects from "./pages/Projects";
// import PageNotFound from "./ui/PageNotFound";
// import FirstPage from "./pages/FirstPage";
// import SkillsPage from "./pages/SkillsPage";
import { Suspense, lazy } from "react";
import { SpinnerCircular } from "spinners-react";
import Loader from "./ui/Loader";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const AppLayout = lazy(() => import("./ui/AppLayout"));
const FirstPage = lazy(() => import("./pages/FirstPage"));
const SkillsPage = lazy(() => import("./pages/SkillsPage"));
const Projects = lazy(() => import("./pages/Projects"));
const PageNotFound = lazy(() => import("./ui/PageNotFound"));

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        <Suspense fallback={<Loader color="var(--color-orange-steps)" secondaryColor="white" />}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<FirstPage />} />
              <Route path="skills" element={<SkillsPage />} />
              <Route path="projects" element={<Projects />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
