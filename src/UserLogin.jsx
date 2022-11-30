import React, { useState } from "react";
import Parse from "parse/dist/parse.min.js";
import "./App.css";
import { Button, Input } from "antd";
import { UserRegistration } from "./UserRegistration";

export const UserLogin = () => {
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  const doUserLogIn = async function () {
    // Note that these values come from state variables that we've declared before
    const fullnameValue = fullname;
    const passwordValue = password;
    try {
      const loggedInUser = await Parse.User.logIn(fullnameValue, passwordValue);
      // logIn returns the corresponding ParseUser object
      alert(
        `Success! User ${loggedInUser.get(
          "username"
        )} has successfully signed in!`
      );
      // To verify that this is in fact the current user, `current` can be used
      const currentUser = await Parse.User.current();
      console.log(loggedInUser === currentUser);
      // Clear input fields
      setFullname("");
      setPassword("");
      // Update state variable holding current user
      getCurrentUser();
      return true;
    } catch (error) {
      // Error can be caused by wrong parameters or lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const doUserLogOut = async function () {
    try {
      await Parse.User.logOut();
      // To verify that current user is now empty, currentAsync can be used
      const currentUser = await Parse.User.current();
      if (currentUser === null) {
        alert("Success! No user is logged in anymore!");
      }
      // Update state variable holding current user
      getCurrentUser();
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };
  const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    setCurrentUser(currentUser);
    return currentUser;
  };

  return (
    <div>
      <div className="header">
        <img
          className="header_logo"
          alt="BDSwiss logo"
          src={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhandeln.com%2Fwp-content%2Fuploads%2F2018%2F09%2Fbdswiss-logo.jpg&f=1&nofb=1&ipt=f266f1cf1bac1c0a6b1f86723f05e4ff88234b90a4349704b02e1cea9181101a&ipo=images"
          }
        />
        <p className="header_text_bold">{"Demetris' Challenge App"}</p>
      </div>
      {currentUser === null && (
        <div className="container">
          <h2 className="heading">{"User Login"}</h2>
          <div className="form_wrapper">
            <Input
              value={fullname}
              onChange={(event) => setFullname(event.target.value)}
              placeholder="Full Name"
              size="large"
              className="form_input"
            />
            <Input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              size="large"
              type="password"
              className="form_input"
            />
          </div>
          <div className="form_buttons">
            <Button
              onClick={() => doUserLogIn()}
              type="primary"
              className="form_button"
              color={"#208AEC"}
              size="large"
              block
            >
              Log In
            </Button>
          </div>
          <p style={{ marginTop: "40px" }}>
            Are you a new user? Register below!{" "}
          </p>
          <UserRegistration />
        </div>
      )}
      {currentUser !== null && (
        <div className="container" style={{ display: "flex" }}>
          <div>
            <h2 className="heading">{`Welcome ${currentUser.get(
              "username"
            )}! To logout click`}</h2>
          </div>
          <div style={{ margin: "12px 0 0 5px" }}>
            <Button
              onClick={() => doUserLogOut()}
              type="primary"
              className="logout_button"
              color={"#208AEC"}
              size="large"
              danger
            >
              here
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
