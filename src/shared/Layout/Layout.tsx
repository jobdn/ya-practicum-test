import { Outlet } from "react-router-dom";
import { Header } from "../Header";

export const Layout = () => {
  return (
    <div>
      <Header className="header" />
      <section className="page-content">
        <Outlet />
      </section>
    </div>
  );
};
