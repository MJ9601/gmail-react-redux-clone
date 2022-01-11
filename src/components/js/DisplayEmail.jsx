import {
  Forward,
  Label,
  LabelOutlined,
  MoreVert,
  Replay,
  Reply,
  Star,
  StarBorderOutlined,
  StarOutline,
} from "@mui/icons-material";
import { Avatar, Button, IconButton, iconClasses } from "@mui/material";
import { blueGrey, red } from "@mui/material/colors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Router,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { selectAllMails, setMailList } from "../../features/allMailsSlice";
import { selectMail, setMail } from "../../features/mailSlice";
import "../css/DisplayEmail.css";
import FeedHead from "./FeedHead";

const DisplayEmail = () => {
  const { data } = useSelector(selectMail);
  const dispatch = useDispatch();
  const currentURL = useLocation();
  const allMails = useSelector(selectAllMails);
  useEffect(() => {
    const urlFactor = currentURL.pathname.split("/")[2];
    const _mail = allMails.filter((mail) => mail.mailId == [urlFactor] && mail);
    console.log(..._mail);
    dispatch(setMail(..._mail));
  }, [currentURL, allMails]);

  const iconButton = (Icon) => (
    <IconButton>
      <Icon className="disEmail__iconSetting" />
    </IconButton>
  );
  return (
    <div className="disEmail">
      <FeedHead />
      <div className="disEmail__container">
        <h1 className="disEmail__subject">
          {data.subject}
          {!data.isImportant ? iconButton(LabelOutlined) : iconButton(Label)}
        </h1>
        <div className="disEmail__head">
          <div className="disEmail__info">
            <Avatar sx={{ backgroundColor: red[600] }}>{data.sender[0]}</Avatar>
            <div className="disEmail__sender">
              <h1>
                {data.sender} <span>&lt;{data.sender}@yahoo.com&gt;</span>
              </h1>
              <p>to {data.receiver}</p>
            </div>
          </div>
          <h5></h5>
          <div className="disEmail__icons">
            {!data.isStarred ? iconButton(StarOutline) : iconButton(Star)}
            <IconButton>
              <Reply className="disEmail__iconSetting" />
            </IconButton>
            <IconButton>
              <MoreVert className="disEmail__iconSetting" />
            </IconButton>
          </div>
        </div>
        <div className="disEmail__msg">{data.message}</div>
        <div className="disEmail__iconWrapper">
          <Button
            variant="outlined"
            sx={{
              color: blueGrey[600],
              mx: ".8rem",
              borderColor: blueGrey[600],
            }}
            startIcon={<Reply />}
          >
            Reply
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: blueGrey[600],
              mx: ".8rem",
              borderColor: blueGrey[600],
            }}
            startIcon={<Forward />}
          >
            Forward
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DisplayEmail;
