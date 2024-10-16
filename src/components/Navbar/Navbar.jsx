import React, { useContext } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // signout button click
  const handleSignOut = () => {
    logOut()
      .then(() => {
        // signout successful
      })
      .catch((error) => console.error(error));
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 font-semibold text-lg text-[#444444]">
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="text-xl flex items-center">
          <img src={logo} alt="logo" className="h-14 w-auto" />{" "}
          {/* Increased size */}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex items-center">
        <ul className="menu menu-horizontal px-1 text-base">{navItems}</ul>
      </div>
      <div className="navbar-end flex items-center ">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-outline border-[#FF3811] bg-none text-[#FF3811] font-semibold w-auto border-2 text-base"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/login"
            className="btn btn-outline border-[#FF3811] bg-none text-[#FF3811] font-semibold w-auto border-2 text-base"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
