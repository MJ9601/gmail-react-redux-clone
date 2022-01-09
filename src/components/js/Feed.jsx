import React from "react";
import "../css/Feed.css";
import Email from "./Email";
import FeedHead from "./FeedHead";

const Feed = () => {
  return (
    <div className="feed">
      <FeedHead />
      <div className="feed__mail_wrapper">
        <Email />
        <Email />
        <Email />
      </div>
    </div>
  );
};

export default Feed;
