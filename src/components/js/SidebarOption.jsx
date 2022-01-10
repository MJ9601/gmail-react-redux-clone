import React, { useState } from "react";
import "../css/SidebarOption.css";
import { useNavigate } from "react-router-dom";

const SidebarOption = ({ Icon, title, counter }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("null");
  return (
    <div
      className="sideOp"
      onClick={() => title !== "More" && navigate(`/${user}/${title}`)}
    >
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
