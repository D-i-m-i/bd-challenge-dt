import React, { useState } from "react";
import Parse from "parse/dist/parse.min.js";
import "./App.css";
import { Button, Input } from "antd";

export const UserRegistration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const doUserRegistration = async function () {
    const usernameValue = username;
    const passwordValue = password;
    try {
      const createdUser = await Parse.User.signUp(usernameValue, passwordValue);
      alert(
        `Success! User ${createdUser.getUsername()} was successfully created!`
      );
      return true;
    } catch (error) {
      alert(`Error! ${error}`);
    }
  };

  return (
    <div>
      <div className="header">
        <img
          className="header_logo"
          alt="BDSwiss Logo"
          src={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhandeln.com%2Fwp-content%2Fuploads%2F2018%2F09%2Fbdswiss-logo.jpg&f=1&nofb=1&ipt=f266f1cf1bac1c0a6b1f86723f05e4ff88234b90a4349704b02e1cea9181101a&ipo=images"
          }
        />
        <p className="header_text_bold">{"Demetris' Challenge App"}</p>
      </div>
      <div className="container">
        <h2 className="heading">{"User Registration"}</h2>
        <div className="form_wrapper">
          <Input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
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
            onClick={() => doUserRegistration()}
            type="primary"
            className="form_button"
            color={"#208AEC"}
            size="large"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};
