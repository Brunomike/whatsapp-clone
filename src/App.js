import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";

import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  //BEM naming convention
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <div className="app__body">
            <Router>
              <Sidebar />
              <Routes>
                <Route path="/" element={<p></p>} />
                <Route
                  path="/rooms/:roomId"
                  element={
                    <React.Fragment>
                      <Chat />
                    </React.Fragment>
                  }
                />
              </Routes>
            </Router>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
