import React, { useState } from "react";
import Parse from "parse/dist/parse.min.js";
import "./App.css";
import { Button, Input } from "antd";
import bcrypt from "bcryptjs";

export const UserRegistration = () => {
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const doUserRegistration = async function () {
    const fullnameValue = fullname;
    // using bcrypt to encrypt the password before sent to the database
    const passwordValue = bcrypt.hashSync(
      password,
      "$2a$10$CwTycUXWue0Thq9StjUM0u"
    );

    // this regex checks for a minimum of 8 characters with at least one number and one special character
    const passRegex = new RegExp("^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
    // this regex checks for a minimum of 5 letters
    const fullnameRegex = new RegExp("^[a-zA-Z0-9s,-]{5,}");

    // if username and password meet criteria then create a new user
    if (passRegex.test(password)) {
      console.log("password not valid");
      if (fullnameRegex.test(fullnameValue)) {
        const createdUser = await Parse.User.signUp(
          fullnameValue,
          passwordValue
        );
        alert(`User ${createdUser.getUsername()} was successfully created!`);
        // clears the input fields upon a successful registration
        setFullname("");
        setPassword("");
        setEmail("");
        return true;
      } else {
        console.log(fullnameRegex.test(fullnameValue));
        alert(`Full name must be at least 5 letters long.`);
      }
      // if password does not meet conditions give user an alert
    } else {
      alert(
        `Password must be a minimum of 8 characters and including at least one number and one special character.`
      );
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
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            size="large"
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
