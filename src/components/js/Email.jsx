import {
  AccessTime,
  Archive,
  CropSquare,
  Delete,
  Drafts,
  LabelOutlined,
  StarOutline,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import "../css/Email.css";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("null");
  const iconButton = (Icon) => (
    <IconButton>
      <Icon sx={{ fontSize: "2rem", mx: ".1rem" }} />
    </IconButton>
  );
  return (
    <div className="email" onClick={() => navigate(`/${user}/mail/id`)}>
      <div className="email__icon_wrapper">
        {iconButton(CropSquare)}
        {iconButton(StarOutline)}
        {iconButton(LabelOutlined)}
      </div>
      <div className="email__sender">stackoverflow</div>
      <div className="email__msg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        officia vel ducimus, est iusto fuga.
      </div>
      <div className="email__date">9 jan</div>
      <div className="email__icon_onhover">
        {iconButton(Archive)}
        {iconButton(Delete)}
        {iconButton(Drafts)}
        {iconButton(AccessTime)}
      </div>
    </div>
  );
};

export default Email;
