import { useState, useEffect, useParams } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import { countryList } from "./country.mjs";
import * as module from "../infoFunctions";
import { useSearchParams, useNavigate } from "react-router-dom";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

const Register = ({ setUsername }) => {
  const [Info, setInfo] = useState({});
  const [loginDetails, setLoginDetails] = useState();
  const [msg, setMsg] = useState("");
  const [Error, setError] = useState({
    usernameError: true,
    passwordError: true,
    emailError: true,
    confirmPasswordError: true,
    confirmEmailError: true,
  });

  function updateErrors() {
    setError({
      usernameError: loginDetails.username == undefined,
      passwordError: loginDetails.password == undefined,
      emailError: loginDetails.email == undefined,
      confirmPasswordError: loginDetails.confirmPasswordInput == undefined,
      confirmEmailError: loginDetails.confirmEmailInput == undefined,
    });
  }

  function loginCheck(e) {
    e.preventDefault();
    updateErrors();

    if (loginDetails.password !== loginDetails.confirmPasswordInput) {
      setMsg("Both password do not match, please re-enter");
    } else {
      axios
        .post(`http://localhost:3001/register`, {
          loginDetails,
        })
        .then((response) => {
          response.data.accepted == true
            ? alert("Accepted")
            : alert("Email is in use");
        })
        .catch((err) => console.log(err));
    }
  }

  function details(e) {
    const { value, name } = e.target;
    setLoginDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function generateCountryList() {
    let List = [<option value="0">Select a country</option>];
    countryList.forEach((country) => {
      List.push(<option value={country.Code2}>{country.Country}</option>);
    });
    return List;
  }

  return (
    <div className="signup standard-box" bis_skin_checked="1">
      <form onSubmit={loginCheck}>
        <div className="indent" bis_skin_checked="1">
          <div className="header" bis_skin_checked="1">
            Sign up
          </div>
          <span>
            Thank you for signing up to Tetris Hub!
            <br />
            We only need you to fill in some information, before your account is
            ready.
          </span>
          <div className="horizontal-line" bis_skin_checked="1"></div>
          <div className="section-header" bis_skin_checked="1">
            Personal info
          </div>
          <div className="indent" bis_skin_checked="1">
            <div className="input-columns" bis_skin_checked="1">
              <div className="col input" bis_skin_checked="1">
                Username
                <input
                  onChange={details}
                  type="text"
                  name="username"
                  id="usernameInput"
                  tabIndex="1"
                  autoFocus="autoFocus"
                  required="required"
                  data-username-lookup-url="/usernamesearch"
                />
                <span
                  className="validation-error"
                  id="usernameError"
                  hidden="true"
                >
                  <i className=" fa fa-times" aria-hidden="true"></i>
                  <span className="message">Field required</span>
                </span>
              </div>
              <div className="col input" bis_skin_checked="1">
                Password
                <input
                  onChange={details}
                  type="password"
                  name="password"
                  id="passwordInput"
                  tabIndex="2"
                  required="required"
                />
                <span
                  className="validation-error"
                  id="passwordError"
                  hidden="true"
                >
                  <i className=" fa fa-times" aria-hidden="true"></i>
                  <span className="message">Field required</span>
                </span>
              </div>
              <div className="col input" bis_skin_checked="1">
                Email
                <input
                  onChange={details}
                  type="text"
                  name="email"
                  id="emailInput"
                  tabIndex="4"
                  required="required"
                />
                <span
                  className="validation-error"
                  id="emailError"
                  hidden="true"
                >
                  <i className=" fa fa-times" aria-hidden="true"></i>
                  <span className="message">Field required</span>
                </span>
              </div>
            </div>
            <div className="input-columns" bis_skin_checked="1">
              <div className="col" bis_skin_checked="1"></div>
              <div className="col input" bis_skin_checked="1">
                Confirm password
                <input
                  onChange={details}
                  type="password"
                  name="confirmPasswordInput"
                  tabIndex="3"
                  required="required"
                />
                <span
                  className="validation-error"
                  id="confirmPasswordError"
                  hidden="true"
                >
                  <i className=" fa fa-times" aria-hidden="true"></i>
                  <span className="message">Field required</span>
                </span>
              </div>
              <div className="col input" bis_skin_checked="1">
                Confirm email
                <input
                  onChange={details}
                  type="text"
                  name="confirmEmailInput"
                  tabIndex="5"
                  required="required"
                />
                <span
                  className="validation-error"
                  id="confirmEmailError"
                  hidden="true"
                >
                  <i className=" fa fa-times" aria-hidden="true"></i>
                  <span className="message">Field required</span>
                </span>
              </div>
            </div>
          </div>
          <div className="horizontal-line" bis_skin_checked="1"></div>
          <div className="section-header" bis_skin_checked="1">
            Flag
          </div>
          <div className="indent" bis_skin_checked="1">
            <div className="input-columns" bis_skin_checked="1">
              <div className="col input" bis_skin_checked="1">
                Flag to display
                <select onChange={details} tabIndex="6" name="country">
                  {generateCountryList()}
                </select>
              </div>
            </div>
          </div>
          <div className="horizontal-line" bis_skin_checked="1"></div>

          <div className="section-header" bis_skin_checked="1">
            Privacy and data
          </div>
          <span>
            By creating an account on TetrisHub we will store and process data
            of and about you. You can at all times read the full and latest
            terms
            <a href="/terms" target="_blank" bis_skin_checked="1">
              {" "}
              here{" "}
            </a>
            and privacy policy
            <a href="/privacy" target="_blank" bis_skin_checked="1">
              {" "}
              here
            </a>
            .
          </span>
          <div className="horizontal-line" bis_skin_checked="1"></div>
          <input
            onChange={details}
            type="text"
            className="hidden"
            id="signup-timezone"
            tabIndex="7"
            name="timezone"
          />
          <div className="submit-row" bis_skin_checked="1">
            <button
              type="submit"
              className="submit"
              tabIndex="9"
              id="signup-validate-button"
            >
              Create account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Register;
