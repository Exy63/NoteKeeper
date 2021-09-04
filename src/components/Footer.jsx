import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  const fullName = "Ilya Prikazchikov";
  return (
    <footer>
      <p>
        {fullName} ⓒ {year}
      </p>
    </footer>
  );
}

export default Footer;
