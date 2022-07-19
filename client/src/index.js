import React from "react";
import ReactDOM from "react-dom/client";
import "./index2.css";
import Axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import Register from "./components/Register/Register";
import Upload from "./components/Register/UploadPicture";
import MatchPage from "./components/Matches/MatchPage";
import CreateEventPage from "./components/CreateEvent/CreateEvent";

import reportWebVitals from "./reportWebVitals";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import OrganisationTab from "./components/Organisation/Organisationtab";
import ForumPage from "./components/Forums/ForumPage";
import ForumThread from "./components/Forums/ForumThread";
import LatestResults from "./components/Right2Col/LatestResults";
import Right2Col from "./components/Right2Col/Right2Col";
import NavBar from "./components/NavigationBar/NavBar";
import LeftCol from "./components/LeftCol/LeftCol";
import AllMatches from "./components/AllMatches/AllMatches";
import AllResultsPage from "./components/AllResults/AllResultsPage";
import NewEventCells from "./components/AllEvents/NewEventCells";
import ThreadHead from "./components/Threads/ThreadHead";
import ThreadsPage from "./components/Threads/ThreadPage";
import EventPage from "./components/Event/EventPage";
import CreateThread from "./components/Thread/CreateThread";
// import ResultCells from "./components/AllResults/AllResults";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body class="cols1101" style={{ backgroundColor: "black" }}>
        <div className="navbar showSmall">
          <NavBar />
        </div>
        <div className="widthControl">
          <div className="bgPadding">
            <div className="colCon">
              <div className="contentCol">
                <Router>
                  <Routes>
                    <Route path="/" element={<ForumPage />} />
                  </Routes>
                  <Routes>
                    <Route path="/matches" element={<AllMatches />} />
                    <Route path="/match/:matchId" element={<MatchPage />} />
                  </Routes>
                  <Routes>
                    <Route path="/results" element={<AllResultsPage />} />
                  </Routes>
                  <Routes>
                    <Route path="/events" element={<NewEventCells />} />
                  </Routes>
                  <Routes>
                    <Route path="/event/:eventId" element={<EventPage />} />
                  </Routes>
                  <Routes>
                    <Route path="/createEvent" element={<CreateEventPage />} />
                  </Routes>
                  <Routes>
                    <Route
                      path="/Organisation/:orgName"
                      element={<OrganisationTab />}
                    />
                  </Routes>
                  <Routes>
                    <Route path="/forums/" element={<ForumPage />} />
                  </Routes>
                  <Routes>
                    <Route path="/forums/:subName" element={<ForumThread />} />
                  </Routes>
                  <Routes>
                    <Route
                      path="/forums/threads/:threadName"
                      element={<ThreadsPage />}
                    />
                  </Routes>
                  <Routes>
                    <Route path="/register" element={<Register />} />
                  </Routes>
                  <Routes>
                    <Route path="/create-thread" element={<CreateThread />} />
                  </Routes>
                </Router>
              </div>
              <LeftCol />
              <Right2Col />
            </div>
          </div>
        </div>
      </body>
    </html>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
