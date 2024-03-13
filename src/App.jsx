import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
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
          <Suspense
            fallback={
              <Loader
                color="var(--color-orange-steps)"
                secondaryColor="white"
              />
            }
          >
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
