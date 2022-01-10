import Feed from "./components/js/Feed";
import Navbar from "./components/js/Navbar";
import Sidebar from "./components/js/Sidebar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DisplayEmail from "./components/js/DisplayEmail";
import { useState } from "react";
import Login from "./components/js/Login";

function App() {
  const [user, setUser] = useState("null");
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
                <Route
                  exact
                  path={`/${user}/mail/:id`}
                  element={<DisplayEmail />}
                />
                <Route path={`/${user}/:id`} element={<Feed />} />
              </Routes>
            </div>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
