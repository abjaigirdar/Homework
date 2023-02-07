import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div>
        <Link to="/">
          <h2>BearBull</h2>
        </Link>
      </div>
      <div>
        <Link to="/Dashboard">
          <h3>Stonks</h3>
        </Link>
      </div>
      <div>
        <Link to="/about">
          <h3>About</h3>
        </Link>
      </div>
    </div>
  );
}

export default Nav;