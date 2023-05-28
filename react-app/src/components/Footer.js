import React from "react";
import "../App.css";
const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <div className="container text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Eddie Peters. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
