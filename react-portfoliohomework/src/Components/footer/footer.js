import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./footer.css";

function footer() {
  const location = useLocation();
  return (
    <footer
      className="pb5 ml3 mr3" style={{ paddingBottom: "115px", paddingTop: "30px" }}>

      <ul className="Horizontal-List">
        <li className="Horizontal-List-Item">
          <Link to="../index.js/" className={(location.pathname === "/" ? "nav-link active" : "nav-link", "f7")}>
            Github
          </Link>
        </li>

        <li className="Horizontal-List-Item">
          <Link to="/" className={(location.pathname === "/" ? "nav-link active" : "nav-link", "f7")}>
            Email Me
          </Link>
        </li>

        <li className="Horizontal-List-Item">
          <Link to="/" className={(location.pathname === "/" ? "nav-link active" : "nav-link", "f7")}>
            LinkedIn
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default footer;