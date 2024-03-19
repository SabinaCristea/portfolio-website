import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const AppLayout = lazy(() => import("./pages/AppLayout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutMePage = lazy(() => import("./pages/AboutMePage"));
const SkillsPage = lazy(() => import("./pages/SkillsPage"));
const Projects = lazy(() => import("./pages/ProjectsPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter scrollBehavior="auto">
          <Suspense fallback={<Loader height={"h-screen"} />}>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="home" />} />
                <Route path="home" element={<HomePage />} />
                <Route path="about" element={<AboutMePage />} />
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
