import React from "react";
import Logo from "../../assets/images/logo.webp";
import "./Toolbar.css";

const Toolbar = ({ title, maximized, onClickMaximized }) => {
  const classes = maximized ? "bi-arrows-angle-contract" : "bi-arrows-fullscreen";

  const handleMaximized = () => {
    onClickMaximized(!maximized);
  };

  return (
    <div className="d-flex justify-content-between align-items-center toolbar-wrapper">
      <div className="d-flex align-items-center">
        <img src={Logo} alt="logo" className="logo rounded-circle" />
        <span className="text-white ms-2">{title}</span>
      </div>
      <i className={`bi ${classes} icon`} title="Fullscreen" onClick={handleMaximized}></i>
    </div>
  );
};

export default Toolbar;
