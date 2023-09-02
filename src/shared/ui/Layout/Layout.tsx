import { Outlet } from "react-router-dom";
import { Header } from "../Header";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
};
