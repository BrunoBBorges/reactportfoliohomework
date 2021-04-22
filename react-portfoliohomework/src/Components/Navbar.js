import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
//Font awesome icons

function NavBar() {
  const location = useLocation();
  return (
    <ul
      className="fixed-bottom-nav flex justify-center list pv2 mv0 fw6"
      style={{ backgroundColor: "blue" }}
      id="navbar">
      <li className=" f6  ph3 ">
        <Link
          to="/search"
          className={
            (location.pathname === "/search" ? "nav-link active" : "nav-link", "link dim white")}>
          <label className="f6 tc">Home</label>
        </Link>
      </li>
      {/* Home link */}
      <li className=" f6  ph3">
        <Link
          to="/profile"
          className={
            (location.pathname === "/profile" ? "nav-link active" : "nav-link", "link dim white")}>
          <label className="f6 tc">About</label>
        </Link>
      </li>
      <li className="f6  ph3 ">
        <Link
          to="/update-profile"
          className={
            (location.pathname === "/update-profile" ? "nav-link active" : "nav-link", "link dim white")}>
          <label className="f6 tc">Contact</label>
        </Link>
      </li>
    </ul>
  );
}
export default NavBar;
