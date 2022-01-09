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
import "../css/Sidebar.css";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__compose">
        <Add sx={{ fontSize: "2rem", mr: ".4rem" }} />
        <span>Compose</span>
      </div>
      <div className="sidebar__options">
        <SidebarOption Icon={Inbox} title="Inbox" counter={10} />
        <SidebarOption Icon={Star} title="Starred" counter={10} />
        <SidebarOption Icon={AccessTime} title="Snoozed" counter={10} />
        <SidebarOption Icon={LabelImportant} title="Important" counter={10} />
        <SidebarOption Icon={Send} title="Send" counter={10} />
        <SidebarOption Icon={Note} title="Drafts" counter={10} />
        <SidebarOption Icon={ExpandMore} title="More" />
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
