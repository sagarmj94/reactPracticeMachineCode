import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
