import {
  Apps,
  ArrowDropDown,
  Menu,
  MenuBook,
  Notifications,
  Search,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "../css/Navbar.css";
import logo from "../logo.png";

const Navbar = () => {
  const user = useSelector(selectUser);
  return (
    <div className="navbar">
      <div className="navbar__left">
        <IconButton>
          <Menu className="navbar__icons" />
        </IconButton>
        <img src={logo} alt="" className="navbar__logo" />
      </div>
      <div className="navbar__center">
        <Search className="navbar__searchIcons" />
        <input
          type="text"
          placeholder="Search mail"
          className="navbar__input"
        />
        <ArrowDropDown className="navbar__searchIcons" />
      </div>
      <div className="navbar__right">
        <IconButton>
          <Apps className="navbar__icons" />
        </IconButton>
        <IconButton>
          <Notifications className="navbar__icons" />
        </IconButton>
        <IconButton>
          <Avatar src={user.photoURL}>{user.displayName[0]}</Avatar>
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
