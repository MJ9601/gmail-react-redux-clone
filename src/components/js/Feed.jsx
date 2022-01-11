import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  selectAllMails,
  selectMailList,
  setMailList,
} from "../../features/allMailsSlice";
import "../css/Feed.css";
import Email from "./Email";
import FeedHead from "./FeedHead";

const Feed = () => {
  const mailList = useSelector(selectMailList);
  const dispatch = useDispatch();
  const currentURL = useLocation();
  const allMails = useSelector(selectAllMails);
  useEffect(() => {
    const urlFactor = currentURL.pathname.split("/")[1];
    dispatch(
      setMailList(allMails.filter((mail) => mail.data[urlFactor] && mail))
    );
  }, [currentURL, allMails]);
  return (
    <>
      {mailList.length == 0 ? (
        <div className="feed">
          <FeedHead />
        </div>
      ) : (
        <div className="feed">
          <FeedHead />
          <div className="feed__mail_wrapper">
            {mailList.map((mail) => (
              <Email key={mail.mailId} mailData={mail.data} mail={mail} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Feed;
