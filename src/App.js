import Feed from "./components/js/Feed";
import Navbar from "./components/js/Navbar";
import Sidebar from "./components/js/Sidebar";
import SendMail from "./components/js/SendMial";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import DisplayEmail from "./components/js/DisplayEmail";
import { useEffect, useState } from "react";
import Login from "./components/js/Login";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN, LOGOUT, selectUser } from "./features/userSlice";
import db, { googleAuth } from "./firebase";
import { selectAllMails, setAllMails } from "./features/allMailsSlice";
import { collection, getDocs, where, query, limit } from "firebase/firestore";
import firebase from "firebase/compat/app";
import autoGenerateId from "./autoGenerateId";

function App() {
  const user = useSelector(selectUser);
  const allMails = useSelector(selectAllMails);
  const dispatch = useDispatch();
  useEffect(() => {
    googleAuth.onAuthStateChanged((userAuth) =>
      userAuth
        ? dispatch(
            LOGIN({
              uid: userAuth?.uid,
              photoURL: userAuth?.photoURL,
              email: userAuth?.email,
              displayName: userAuth?.displayName,
            })
          )
        : dispatch(LOGOUT())
    );
  }, []);
  // const usersCollection = collection(db, "users");

  useEffect(() => {
    if (user) {
      // console.log(user);
      const userQuary = query(
        collection(db, "users"),
        where("email", "==", user.email),
        limit(1)
      );
      const setMails = async () => {
        const data = await getDocs(userQuary);
        let userId = null;
        data.forEach((user) => (userId = user.id));
        const isOldUser = userId ? true : false;
        // console.log(isOldUser);

        if (!isOldUser) {
          db.collection("users").add({
            ...user,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            updatedTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
            mails: [
              {
                mailId: autoGenerateId(),
                data: {
                  subject: "first email",
                  sender: "senderEmail",
                  receiver: "receiverEmail",
                  message: "messageEmail",
                  isArchived: false,
                  isDrafted: true,
                  isImportant: false,
                  isInbox: true,
                  isRead: true,
                  isSent: false,
                  isStarred: false,
                  isSnoozed: false,
                },
              },
              {
                mailId: autoGenerateId(),
                data: {
                  subject: "subject",
                  sender: "senderEmail",
                  receiver: "receiverEmail",
                  message: "messageEmail",
                  isArchived: false,
                  isDrafted: true,
                  isImportant: false,
                  isInbox: true,
                  isRead: false,
                  isSent: false,
                  isStarred: false,
                  isSnoozed: false,
                },
              },
              {
                mailId: autoGenerateId(),
                data: {
                  subject: "subject",
                  sender: "senderEmail",
                  receiver: "receiverEmail",
                  message: "messageEmail",
                  isArchived: false,
                  isDrafted: true,
                  isImportant: false,
                  isInbox: true,
                  isRead: false,
                  isSent: false,
                  isStarred: false,
                  isSnoozed: false,
                },
              },
              {
                mailId: autoGenerateId(),
                data: {
                  subject: "subject",
                  sender: "senderEmail",
                  receiver: "receiverEmail",
                  message: "messageEmail",
                  isArchived: false,
                  isDrafted: true,
                  isImportant: false,
                  isInbox: true,
                  isRead: false,
                  isSent: false,
                  isStarred: false,
                  isSnoozed: false,
                },
              },
              {
                mailId: autoGenerateId(),
                data: {
                  subject: "subject",
                  sender: "senderEmail",
                  receiver: "receiverEmail",
                  message: "messageEmail",
                  isArchived: false,
                  isDrafted: true,
                  isImportant: false,
                  isInbox: true,
                  isRead: false,
                  isSent: false,
                  isStarred: false,
                  isSnoozed: false,
                },
              },
              {
                mailId: autoGenerateId(),
                data: {
                  subject: "subject",
                  sender: "senderEmail",
                  receiver: "receiverEmail",
                  message: "messageEmail",
                  isArchived: false,
                  isDrafted: true,
                  isImportant: false,
                  isInbox: false,
                  isRead: false,
                  isSent: true,
                  isStarred: false,
                  isSnoozed: false,
                },
              },
              {
                mailId: autoGenerateId(),
                data: {
                  subject: "subject",
                  sender: "senderEmail",
                  receiver: "receiverEmail",
                  message: "messageEmail",
                  isArchived: false,
                  isDrafted: true,
                  isImportant: false,
                  isInbox: false,
                  isRead: false,
                  isSent: true,
                  isStarred: false,
                  isSnoozed: false,
                },
              },
            ],
          });
        }
        const _data = await getDocs(userQuary);
        let mailDatas = null;
        _data.forEach((user) => (mailDatas = { ...user.data(), uid: user.id }));
        // console.log(mailDatas);
        dispatch(setAllMails(mailDatas?.mails));
      };
      setMails();
    }
  }, [user]);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <Router>
          <img
            src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg"
            alt=""
            className="app__background"
          />
          <div className="app">
            <Navbar />
            <div className="app__wrapper">
              <Sidebar />
              <Routes>
                <Route exact path={`/mail/:id`} element={<DisplayEmail />} />
                <Route path={`/:id`} element={<Feed />} />
                <Route exact path={`/`} />
              </Routes>
            </div>
            <SendMail />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
