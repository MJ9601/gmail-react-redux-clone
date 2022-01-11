import React, { useEffect, useState } from "react";
import "../css/SidebarOption.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { selectAllMails, setMailList } from "../../features/allMailsSlice";

const SidebarOption = ({ Icon, title }) => {
  const identefier = {
    Inbox: "isInbox",
    Starred: "isStarred",
    Snoozed: "isSnoozed",
    Important: "isImportant",
    Send: "isSent",
    Drafts: "isDrafted",
  };
  const navigate = useNavigate();
  const allMails = useSelector(selectAllMails);
  const dispatch = useDispatch();

  const handelClick = () => {
    if (allMails.length != 0) {
      const listOfMails = allMails.filter(
        (mail) => mail.data[identefier[title]] && mail
      );
      // console.log(listOfMails);
      dispatch(setMailList(listOfMails));
    }
    title !== "More" && navigate(`/${[identefier[title]]}`);
  };
  const [counter, setCounter] = useState(null);
  useEffect(() => {
    if (allMails.length != 0) {
      const listOfMails = allMails.filter(
        (mail) => mail.data[identefier[title]] && mail
      );
      setCounter(listOfMails.length);
    }
  }, [allMails]);
  return (
    <div className="sideOp" onClick={handelClick}>
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
