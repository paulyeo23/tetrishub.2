import { useState, useEffect } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import * as module from "../infoFunctions";
import { useParams } from "react-router-dom";
import ThreadHead from "./ThreadHead";
import Comments from "./Comments";

const AddComment = ({ threadId, Info }) => {
  console.log(threadId);
  const [Thread, setThread] = useState({ threadId: threadId });

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
        .post(`http://localhost:3001/replyThread`, {
          details,
        })
        .then((result) => {
          window.location.reload();
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
  return (
    <div className="newreply-con">
      <div className="standard-box">
        <div className="newreply-topbar"></div>
        <form onSubmit={submit}>
          <textarea
            name="post"
            required
            onChange={details}
            className="newreply-textarea"
            placeholder="This is an international site, please write your comment in English. Comments in another language will be deleted."
          ></textarea>
          <button type="submit" className="button newreply-post">
            Post
          </button>
        </form>
      </div>
      <div className="error-message hidden"></div>
    </div>
  );
};
export default AddComment;
