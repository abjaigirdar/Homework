import React from "react";
import Nav from "./Nav";

function Footer() {
  return (
    <footer>
      <Nav isFooter={true} />
      <p>&copy; 2013 Valet Industries. Inc</p>
    </footer>
  );
}

export default Footer;