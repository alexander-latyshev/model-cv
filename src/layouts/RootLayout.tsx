import React from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../components/header/header";
import "./RootLayout.scss";

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
