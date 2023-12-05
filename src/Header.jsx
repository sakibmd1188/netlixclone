import React, { useEffect, useState } from "react";
import "./header.css";
import img1 from "./images/Netflix-avatar.png";


function Header() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);
  return (
    <div className={`header ${show && "nav_black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="e"
        className="img"
      />
      <img src={img1} alt="e" className="img" />
    </div>
  );
}

export default Header;
