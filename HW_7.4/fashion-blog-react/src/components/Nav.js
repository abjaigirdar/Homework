import React from "react";
function Nav(props) {
  return (
    <nav>
      <ul aria-label="Main Navigation" role="navigation">
        {props.isFooter === true ? (
          <li>
            <a href="/#" title="home">
              Home
            </a>
          </li>
        ) : null}
        <li>
          <a href="/#" title="womens">
            Women's
          </a>
        </li>
        <li>
          <a href="/#" title="mens">
            Men's
          </a>
        </li>
        <li>
          <a href="/#" title="street">
            On the Street
          </a>
        </li>
        <li>
          <a href="/#" title="catwalk">
            The Catwalk
          </a>
        </li>
        <li>
          <a href="/#" title="watch">
            AdWatch
          </a>
        </li>
        <li>
          <a href="/#" title="about">
            About
          </a>
        </li>
        {props.isFooter === true ? (
          <li>
            <a href="/#" title="tips">
              Tips
            </a>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default Nav;