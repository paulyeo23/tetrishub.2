import { useState, useEffect, useParams } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";

import axios from "axios";

export const NavigationBar = ({ user }) => {
  return (
    <div className="navbar">
      <nav className="navcon">
        <div className="Link" style={{ float: "left" }}>
          <a href="/matches" className="navmatches" bis_skin_checked="1">
            Matches
          </a>
          <a href="/results" className="navresults" bis_skin_checked="1">
            Results
          </a>
          <a href="/events" className="navevents" bis_skin_checked="1">
            Events
          </a>
          <a href="/stats" className="navstats" bis_skin_checked="1">
            Stats
          </a>
          <a href="/galleries" className="navgalleries" bis_skin_checked="1">
            Galleries
          </a>
          <a
            href="/forums"
            className="navforums no-promode"
            bis_skin_checked="1"
          >
            Forums
          </a>
        </div>

        <div
          className="navsearch search-typeahead"
          bis_skin_checked="1"
          style={{ float: "right" }}
        >
          <form action="/search?term=">
            <span
              className="twitter-typeahead"
              style={{ position: "relative", display: "inline-block" }}
            >
              <input
                type="text"
                className="navsearchinput tt-input"
                name="query"
                data-topbar-search-url="/search?term="
                placeholder="Search..."
                autoComplete="off"
                spellCheck="false"
                dir="auto"
                style={{ position: "relative", verticalAlign: "top" }}
              />
              <pre
                aria-hidden="true"
                style={{
                  position: "absolute",
                  visibility: "hidden",
                  " whiteSpace": "pre",
                  fontFamily: "Open Sans; sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontVariant: "normal",
                  fontWeight: 400,
                  wordSpacing: "0px",
                  letterSpacing: "0px",
                  textIndent: "0px",
                  textRendering: "auto",
                  textTransform: "none",
                }}
              ></pre>
              <div
                className="tt-menu"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "0px",
                  zIndex: 100,
                  display: "none",
                }}
                bis_skin_checked="1"
              >
                <div
                  className="tt-dataset tt-dataset-teamSearch"
                  bis_skin_checked="1"
                ></div>
              </div>
            </span>
            <div className="search-submit-hidden" bis_skin_checked="1">
              <input type="submit" tabIndex="-1" />
            </div>
            <div className="navsearchborder" bis_skin_checked="1"></div>
            <button type="submit" className="navsearchicon" aria-label="Search">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
