import { Button } from "@mui/material";
import React from "react";
import "../css/Login.css";
import logo from "../logo.png";

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="" className="login__img" />
        <Button
          variant="contained"
          color="success"
          sx={{
            textTransform: "capitalize",
            px: "5rem",
            py: ".5rem",
            fontSize: "2rem",
          }}
        >
          Log in with Google account
        </Button>
      </div>
    </div>
  );
};

export default Login;
