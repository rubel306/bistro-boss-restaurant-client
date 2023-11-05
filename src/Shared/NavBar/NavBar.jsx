import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const navItems = (
    <>
      <li>
        <Link className=" hover:text-white hover:bg-[#BB8506]" to={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link className=" hover:text-white hover:bg-[#BB8506]" to={"/menu"}>
          Our Menu
        </Link>
      </li>
      <li>
        <Link
          className=" hover:text-white hover:bg-[#BB8506]"
          to={"/order/salad"}
        >
          Order Food
        </Link>
      </li>
      <li>
        <Link
          to={"/dashboard/mycart"}
          className="bg-[#1F2937] mx-1 hover:text-white hover:bg-[#BB8506]"
        >
          <FaShoppingCart></FaShoppingCart>
          <span className="badge badge-secondary">+ {cart?.length || 0}</span>
        </Link>
      </li>

      {user ? (
        <>
          <button
            onClick={logOut}
            className="btn btn-active btn-ghost hover:bg-[#BB8506]"
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link
              className=" hover:text-white hover:bg-[#BB8506]"
              to={"/login"}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className=" hover:text-white hover:bg-[#BB8506]"
              to={"/signup"}
            >
              Sign Up
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div
      style={{ backgroundColor: "rgba(21, 21, 21, 0.5)" }}
      className="navbar fixed z-10  text-white max-w-screen-xl"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div className="logo">
          <h3>BISTRO BOSS</h3>
          <h4>Restaurant</h4>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
    </div>
  );
};

export default NavBar;
