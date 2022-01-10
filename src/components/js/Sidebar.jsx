import {
  AccessTime,
  Add,
  ExpandMore,
  Inbox,
  LabelImportant,
  LockClock,
  Mail,
  More,
  Note,
  Person,
  Phone,
  PlusOne,
  Send,
  Star,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Sidebar.css";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  const navigate = useNavigate();
  const sideOptionButton = [
    { Icon: Inbox, title: "Inbox", counter: 10 },
    { Icon: Star, title: "Starred", counter: 10 },
    { Icon: AccessTime, title: "Snoozed", counter: 10 },
    { Icon: LabelImportant, title: "Important", counter: 10 },
    { Icon: Send, title: "Send", counter: 10 },
    { Icon: Note, title: "Drafts", counter: 10 },
    { Icon: ExpandMore, title: "More", counter: 0 },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar__compose">
        <Add sx={{ fontSize: "2rem", mr: ".4rem" }} />
        <span>Compose</span>
      </div>
      <div className="sidebar__options">
        {sideOptionButton.map(({ Icon, title, counter }, index) => (
          <SidebarOption
            key={index}
            Icon={Icon}
            title={title}
            counter={counter}
          />
        ))}
      </div>
      <div className="sidebar__com">
        <IconButton>
          <Person />
        </IconButton>
        <IconButton>
          <Phone />
        </IconButton>
        <IconButton>
          <Mail />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
