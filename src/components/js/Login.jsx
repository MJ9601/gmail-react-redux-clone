import { Button } from "@mui/material";
import React, { useEffect } from "react";
import "../css/Login.css";
import logo from "../logo.png";
import db, { googleAuth, provider } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN, selectUser } from "../../features/userSlice";
import { setAllMails } from "../../features/allMailsSlice";
import autoGenerateId from "../../autoGenerateId";


const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const signIn = async () => {
    try {
      const response = await googleAuth.signInWithPopup(provider);
      // console.log(response?.user);
      const user = {
        uid: response?.user?.multiFactor?.user?.uid,
        photoURL: response?.user?.multiFactor?.user?.photoURL,
        email: response?.user?.multiFactor?.user?.email,
        displayName: response?.user?.multiFactor?.user?.displayName,
      };
      dispatch(LOGIN(user));
    } catch (error) {
      console.log(error.message);
    }
  };

 

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="" className="login__img" />
        <Button
          onClick={signIn}
          variant="contained"
          color="success"
          sx={{
            textTransform: "capitalize",
            width: "80%",
            fontSize: "2rem",
            mb: "5rem",
          }}
        >
          Google account
        </Button>
      </div>
    </div>
  );
};

export default Login;
