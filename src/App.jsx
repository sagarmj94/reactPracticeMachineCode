import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Loader from "./components/Loader";
import { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AutocompletePage = lazy(() => import("./pages/AutocompletePage"));
const InfiniteScrollPage = lazy(() => import("./pages/InfiniteScrollPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="autocomplete" element={<AutocompletePage />} />
            <Route path="/infinite-scroll" element={<InfiniteScrollPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
