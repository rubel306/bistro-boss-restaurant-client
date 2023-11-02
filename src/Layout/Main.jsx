import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  const loginPage = location.pathname.includes("login");
  return (
    <div>
      {loginPage || <NavBar></NavBar>}
      <Outlet></Outlet>
      {loginPage || <Footer></Footer>}
    </div>
  );
};

export default Main;
