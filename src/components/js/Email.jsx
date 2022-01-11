import {
  AccessTime,
  Archive,
  CheckBox,
  CropSquare,
  Delete,
  Drafts,
  Label,
  LabelOutlined,
  Mail,
  Star,
  StarOutline,
  WatchLater,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import "../css/Email.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { setMail } from "../../features/mailSlice";

const Email = ({ mailData, mail }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const iconButton = (Icon) => (
    <IconButton>
      <Icon sx={{ fontSize: "2rem", mx: ".1rem" }} />
    </IconButton>
  );

  const handleClick = () => {
    dispatch(setMail(mail));
    navigate(`/mail/${mail.mailId}`);
  };
  return (
    <div
      className="email"
      style={{ backgroundColor: mailData.isRead && "#fff" }}
      onClick={handleClick}
    >
      <div className="email__icon_wrapper">
        {iconButton(CropSquare)}
        {!mailData.isStarred ? iconButton(StarOutline) : iconButton(Star)}
        {!mailData.isImportant ? iconButton(LabelOutlined) : iconButton(Label)}
      </div>
      <div className="email__sender">{mailData.sender}</div>
      <div className="email__msg">{mailData.message}</div>
      <div className="email__date">9 jan</div>
      <div className="email__icon_onhover">
        {iconButton(Archive)}
        {iconButton(Delete)}
        {mailData.isRead ? iconButton(Drafts) : iconButton(Mail)}
        {!mailData.isSnoozed ? iconButton(AccessTime) : iconButton(WatchLater)}
      </div>
    </div>
  );
};

export default Email;
