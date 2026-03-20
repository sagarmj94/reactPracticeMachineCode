import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Loader from "./components/Loader";
import { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const AutocompletePage = lazy(() => import("./pages/AutocompletePage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="autocomplete" element={<AutocompletePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
