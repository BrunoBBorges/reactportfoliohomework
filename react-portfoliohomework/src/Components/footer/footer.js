import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {

  return (
    <footer className="pb5 ml3 mr3" style={{ paddingBottom: "115px", paddingTop: "30px" }}>

      <ul className="Horizontal-List">
        <li className="Horizontal-List-Item">
          <a href="https://github.com/BrunoBBorges" rel="noopener noreferrer">
            Github
            </a>
        </li>

        <li className="Horizontal-List-Item">
            Email Me
        </li>

        <li className="Horizontal-List-Item">
            LinkedIn
        </li>
      </ul>
    </footer>
  );
}

export default Footer;