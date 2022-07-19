import { useState, useEffect, startTransition } from "react";
import axios from "axios";
import * as module from "../infoFunctions";

import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import Cookies from "universal-cookie";

const SubmitQual = ({ Info, event }) => {
  const [Thread, setThread] = useState();
  const navigate = useNavigate();
  function submit(e) {
    e.preventDefault();
    if (document.cookie != "") {
      const username = document.cookie.split("=")[1];
      const userId = Info.Users.filter((user) => {
        return user.username == username;
      })[0].id;

      Thread.split(",");

      axios.post(`http://localhost:3001/createThread`, {}).then((result) => {
        navigate("/forums");
      });
    }
  }

  function details(e) {
    const { value, name } = e.target;
    console.log(value, name);
    setThread((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const [Render, setRender] = useState([
    <div className="forumpostthread">
      <div className="standard-headline">Create new topic</div>
      <form action="/create-thread" onSubmit={submit}>
        <div className="standard-box">
          <div className="two-col">
            <div className="col">
              <div required className="standard-headline">
                Video Link
              </div>
              <input
                required
                type="text"
                name="title"
                className="width100"
                placeholder="Topic title"
                onChange={details}
              />
            </div>
          </div>
          <div className="spacer"></div>
          <div className="standard-headline">Scores</div>
          <textarea
            required
            className="width100 textarea"
            name="QualScore"
            onChange={details}
            placeholder={
              document.cookie == ""
                ? "Please login to post"
                : "Add raw scores without commas, seperate each entry with commas"
            }
          ></textarea>
        </div>
        <div className="spacer"></div>
        {document.cookie == "" ? (
          <button type="submit" className="button" disabled>
            Post new qual
          </button>
        ) : (
          <button type="submit" className="button">
            Post new qual
          </button>
        )}
      </form>
    </div>,
  ]);

  return Render;
};

export default SubmitQual;
