import React from "react";
import "../styles/sidebar.scss";
import audrey from "../audrey-marcum.jpg";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <img src={audrey} />
      <p>Change is expected, growth is voluntary — and so much fun!</p>
    </div>
  );
};

export default Sidebar;
