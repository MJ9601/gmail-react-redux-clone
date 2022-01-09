import React from "react";
import "../css/SidebarOption.css";

const SidebarOption = ({ Icon, title, counter }) => {
  return (
    <div className="sideOp">
      <div>
        <Icon
          sx={{ fontSize: "2rem", mr: ".5rem" }}
          className="sideOp__onhover"
        />
        <h3 className="sideOp__onhover limited">{title}</h3>
      </div>
      <h4 className="sideOp__onhover limited">{!counter ? "" : counter}</h4>
    </div>
  );
};

export default SidebarOption;
