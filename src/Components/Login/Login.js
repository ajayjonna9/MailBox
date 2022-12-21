import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../SignUp/Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import authreducer, { authActions } from "../Store/Reducers/AuthReducer";
import { useDispatch } from "react-redux";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const [showPassword, setShowPassword] = useState(false);
  //const dispatcher = useDispatch();

  const navigator = useNavigate();
  const onclicktoggle = () => {
    navigator("/signup");
  };
  const showpassword = () => {
    setShowPassword(!showPassword);
  };
  const onsubmit = (e) => {
    e.preventDefault();
    //dispatcher(authActions.setFirst());
    async function Login() {
      try {
        const head = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const obj = {
          email: email.current.value,
          password: password.current.value,
        };
        const url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC_XszKq-9JB05XkOXIsQPXmT2Z9npHY6E";

        const res = await axios.post(url, obj, head);

        console.log(res);

        const values = {
          token: res.data.idToken,
          email: res.data.email,
        };

        //dispatcher(authActions.addtoken(values));
        console.log("login success");
        //navigator("/");
      } catch (err) {
        alert("somthing went wrong, please try again");
      }
    }
    Login();
  };
  return (
    <div className="background">
      <div className="form">
        <Card>
          <Card.Body>
            <Card.Title className="m-4">Login</Card.Title>
            <Form onSubmit={onsubmit}>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={email}
                required
              />
              <Form.Control
                type={!showPassword ? "password" : "text"}
                placeholder="Enter password"
                ref={password}
                className="mt-2"
                required
              />

              <Form.Check
                className="text-start mt-2"
                type="checkbox"
                id="default-checkbox"
                label="Show Password"
                onClick={showpassword}
              />

              <Button variant="success" type="submit" className="mt-5 ">
                Login
              </Button>
              <div className="mt-2 mb-2">
                <a href="/forgetpassword">forget password</a>
              </div>
            </Form>
          </Card.Body>
        </Card>
        <div>
          <Button
            className="togglelogin"
            variant="info"
            onClick={onclicktoggle}
          >
            Don't have an account?SignUp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
