import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="footer">
      <div>&copy; {date.getFullYear()} Samundra Karki</div>
    </footer>
  );
};

export default Footer;
