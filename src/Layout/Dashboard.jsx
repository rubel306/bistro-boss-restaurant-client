import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaRegCalendarAlt,
  FaHome,
  FaCalendarCheck,
  FaStarHalfAlt,
  FaBars,
  FaShoppingBag,
  FaRegEnvelope,
} from "react-icons/fa";
import "./dashboard.css";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80  text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink to={"/dashboard/home"}>
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaRegCalendarAlt></FaRegCalendarAlt>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/payments"}>
              <FaWallet></FaWallet>
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/mycart"}>
              <FaShoppingCart></FaShoppingCart>
              My Cart{" "}
              <span className="badge badge-secondary">
                + {cart?.length || 0}
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reviews"}>
              <FaStarHalfAlt></FaStarHalfAlt>
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/bookings"}>
              <FaCalendarCheck></FaCalendarCheck>
              My Bookings
            </NavLink>
          </li>
        </ul>
        <div className="divider"></div>
        <ul className="menu p-4 w-80 text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              <FaBars></FaBars>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <FaShoppingBag></FaShoppingBag>
              Order Food
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>
              <FaRegEnvelope></FaRegEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
