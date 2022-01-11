import {
  ArrowBack,
  CheckCircle,
  Delete,
  Drafts,
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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAllMails, setMailList } from "../../features/allMailsSlice";
import { LOGOUT } from "../../features/userSlice";
import "../css/FeedHead.css";

const FeedHead = () => {
  const dispatch = useDispatch();
  const allMails = useSelector(selectAllMails);
  const navigate = useNavigate();

  const iconButton = (Icon, action) => {
    if (!action)
      return (
        <IconButton>
          <Icon sx={{ fontSize: "2rem", mx: ".5rem", my: ".5rem" }} />
        </IconButton>
      );

    if (action === "LOGOUT")
      return (
        <IconButton onClick={() => dispatch(LOGOUT())}>
          <Icon sx={{ fontSize: "2rem", mx: ".5rem", my: ".5rem" }} />
        </IconButton>
      );
    else if (action === "goBack")
      return (
        <IconButton onClick={() => navigate(-1)}>
          <Icon sx={{ fontSize: "2rem", mx: ".5rem", my: ".5rem" }} />
        </IconButton>
      );
    else
      return (
        <IconButton
          onClick={() => {
            navigate(`/${action}`);
            dispatch(
              setMailList(allMails.filter((mail) => mail.data[action] && mail))
            );
          }}
        >
          <Icon sx={{ fontSize: "2rem", mx: ".5rem", my: ".5rem" }} />
        </IconButton>
      );
  };
  return (
    <div className="feedhead">
      <div className="fHead__left">
        {iconButton(ArrowBack, "goBack")}
        {iconButton(MoveToInbox, "isArchived")}
        {iconButton(Mail)}
        {iconButton(Delete, "isDeleted")}
        {iconButton(Drafts, "isRead")}
        {iconButton(WatchLater, "isSnoozed")}
        {iconButton(CheckCircle, "isStarred")}
        {iconButton(LabelImportant, "isImportant")}
        {iconButton(MoreVert)}
      </div>
      <div className="fHead__right">
        {iconButton(Print)}
        {iconButton(ExitToApp, "LOGOUT")}
      </div>
    </div>
  );
};

export default FeedHead;
