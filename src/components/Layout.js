import React from "react";
import SideBar from "../components/SideBar";
import "../styles/Layout.css";
import NavBar from "../components/NavBar";

const Layout = ({ children, title }) => {
  const menu = [
    {
        icon: "bx bxs-dashboard bx-sm",
        name: "Dashboard",
        path: "/dashboard",
        exact: true,
    },
    {
        icon: "bx bxs-building bx-sm",
        name: "Starships",
        path: "/starships",
        exact: true,
    },
    {
        icon: "bx bxs-shopping-bag bx-sm",
        name: "People",
        path: "/people",
        exact: true,
    },
    {
        icon: "bx bxs-book-bookmark bx-sm",
        name: "Vehicles",
        path: "/vehicles",
        exact: true,
    },
    {
        icon: "bx bxs-grid bx-sm",
        name: "Species",
        path: "/species",
        exact: true,
    },
  ];

  return (
    <div className="dashboard-wrapper">
      <SideBar menuItems={menu} />
      <div className="main-wrapper">
        <NavBar currentPage={title} />
        {children}
      </div>
    </div>
  );
};

export default Layout;