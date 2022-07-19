import { useState, useEffect, useParams } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";
import Cookies from "universal-cookie";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

const Login = ({ setUsername }) => {
  const [Info, setInfo] = useState({});
  const [loginDetails, setLoginDetails] = useState({});
  const [msg, setMsg] = useState("");

  const cookies = new Cookies();

  function loginCheck(e) {
    e.preventDefault();
    axios
      .post(`${BACKEND_URL}/login`, {
        loginDetails,
      })
      .then((response) => {
        response.accepted == false
          ? setMsg("Incorrect username and/or password")
          : resetPage();
      })
      .catch((err) => console.log(err));
  }

  function resetPage() {
    cookies.set("username", loginDetails.username);
    window.location.reload();
  }
  function details(e) {
    const { value, name } = e.target;
    setLoginDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={loginCheck}>
      <input
        type="text"
        name="username"
        className="loginInput"
        required="required"
        placeholder="Username"
        onChange={details}
      />
      <input
        type="password"
        name="password"
        className="loginInput"
        required="required"
        placeholder="Password"
        onChange={details}
      />

      <div className="login-error" bis_skin_checked="1">
        {msg}
      </div>
      <button
        type="submit"
        className="login-button button"
        name="login"
        style={{ textAlign: "center", margin: "1px" }}
      >
        Login
      </button>
    </form>
  );
};
export default Login;
