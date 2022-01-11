import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMail, sendMailClose } from "../../features/mailSlice";
import "../css/SendMail.css";

const SendMail = () => {
  const sendMail = useSelector(selectSendMail);
  const dispatch = useDispatch();
  return (
    <div className="send" style={{ display: !sendMail && "none" }}>
      <div className="send__header">
        <h1 className="send__mail">Message</h1>
        <IconButton onClick={() => dispatch(sendMailClose())}>
          <Close sx={{ fontSize: "2.4rem", color: "#eee" }} />
        </IconButton>
      </div>
      <form action="">
        <input
          type="text"
          className="send__input"
          required
          placeholder="To: "
        />
        <hr />
        <input
          type="text"
          className="send__input"
          required
          placeholder="Subject: "
        />
        <hr />
        <textarea
          className="send__input send__message"
          placeholder="Message: "
        ></textarea>
        <input type="submit" className="send__input submit" value="Send" />
      </form>
    </div>
  );
};

export default SendMail;
