import React, { useState } from "react";
import Parse from "parse/dist/parse.min.js";
import "./App.css";
import { Button, Input } from "antd";

export const UserRegistration = () => {
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");

  const doUserRegistration = async function () {
    const fullnameValue = fullname;
    const passwordValue = password;

    try {
      const createdUser = await Parse.User.signUp(fullnameValue, passwordValue);
      alert(
        `Success! User ${createdUser.getUsername()} was successfully created!`
      );

      // clears the input fields upon a successful registration
      setFullname("");
      setPassword("");
      return true;
    } catch (error) {
      alert(`Error! ${error}`);
    }
  };

  return (
    <div>
      <div className="container">
        <h2 className="heading">{"User Registration"}</h2>
        <div className="form_wrapper">
          <Input
            value={fullname}
            onChange={(event) => setFullname(event.target.value)}
            placeholder="Full name (username)"
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
