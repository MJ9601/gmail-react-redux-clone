import React from "react";
import { useParams } from "react-router-dom";
import "../css/Feed.css";
import Email from "./Email";
import FeedHead from "./FeedHead";

const Feed = () => {
  // const {url} =useParams()
  return (
    <div className="feed">
      <FeedHead />
      <div className="feed__mail_wrapper">
        <Email />
        <Email />
      </div>
    </div>
  );
};

export default Feed;
