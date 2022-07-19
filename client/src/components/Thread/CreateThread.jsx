import { useState, useEffect } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const CreateThread = ({ Info }) => {
  const [Render, setRender] = useState([]);

  const [Thread, setThread] = useState({});
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    if (document.cookie != "") {
      const username = document.cookie.split("=")[1];
      const userId = Info.Users.filter((user) => {
        return user.username == username;
      })[0].id;
      let details = Thread;
      details.userId = userId;
      axios
        .post(`http://localhost:3001/createThread`, {
          details,
        })
        .then((result) => {
          navigate("/forums");
        });
    }
  }

  function details(e) {
    console.log(Thread);

    const { value, name } = e.target;
    console.log(value, name);
    setThread((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  useEffect(() => {
    if (Info != undefined) {
      console.log(document.cookie == "");
      const forums = [];
      Info.Forums.forEach((forum) => {
        forums.push(<option value={forum.id}>{forum.subName}</option>);
      });
      setRender(
        <div className="forumpostthread">
          <div className="standard-headline">Create new topic</div>
          <form action="/create-thread" onSubmit={submit}>
            <div className="standard-box">
              <div className="two-col">
                <div className="col">
                  <div required className="standard-headline">
                    Subject
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
                <div className="col">
                  <div className="standard-headline">Forum</div>
                  <select
                    onChange={details}
                    className="width100"
                    name="forumsId"
                  >
                    <option required selected="selected"></option>
                    {forums}
                  </select>
                </div>
              </div>
              <div className="spacer"></div>
              <div className="standard-headline">Topic</div>
              <textarea
                required
                className="width100 textarea"
                name="details"
                onChange={details}
                placeholder={
                  document.cookie == "" ? "Please login to post" : ""
                }
              ></textarea>
            </div>
            <div className="spacer"></div>
            <button type="submit" className="button">
              Post new topic
            </button>
          </form>
        </div>,
      );
    }
  }, [Info, Thread]);
  return Render;
};

export default CreateThread;
