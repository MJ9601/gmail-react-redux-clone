import {
  ArrowBack,
  CheckCircle,
  Delete,
  ExitToApp,
  Info,
  LabelImportant,
  Mail,
  MoreVert,
  MoveToInbox,
  Print,
  WatchLater,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import "../css/FeedHead.css";

const FeedHead = () => {
  const iconButton = (Icon) => (
    <IconButton>
      <Icon sx={{ fontSize: "2rem", mx: ".5rem", my: ".5rem" }} />
    </IconButton>
  );
  return (
    <div className="feedhead">
      <div className="fHead__left">
        {iconButton(ArrowBack)}
        {iconButton(MoveToInbox)}
        {iconButton(Info)}
        {iconButton(Delete)}
        {iconButton(Mail)}
        {iconButton(WatchLater)}
        {iconButton(CheckCircle)}
        {iconButton(LabelImportant)}
        {iconButton(MoreVert)}
      </div>
      <div className="fHead__right">
        {iconButton(Print)}
        {iconButton(ExitToApp)}
      </div>
    </div>
  );
};

export default FeedHead;
