import React from "react";
import { Link } from "react-router-dom";


function NavBar() {

  return (
    <ul className="fixed-bottom-nav flex justify-center list pv2 mv0 fw6" style={{ backgroundColor: "blue" }}id="navbar">
      <li className=" f6  ph3 ">
          <label className="f6 tr">Home</label>
      </li>
      <li className="">
          <label className="f6 tr">About</label>
      </li>
      <li className="f6  ph3 ">
          <label className="f6 tr">Contact</label>
      </li>
    </ul>
  );
}
export default NavBar;
