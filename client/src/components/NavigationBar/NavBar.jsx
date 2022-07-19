import Dropdown from "react-bootstrap/Dropdown";
import Login from "./Login";
import Cookies from "universal-cookie";

export const NavBar = ({ user }) => {
  function logOut() {
    Cookies.remove("username");
    window.location.reload();
  }
  return (
    <div className="navbar" bis_skin_checked="1">
      <nav className="navcon">
        <a href="/matches" className="navmatches" bis_skin_checked="1">
          Matches
        </a>
        <a href="/results" className="navresults" bis_skin_checked="1">
          Results
        </a>
        <a href="/events" className="navevents" bis_skin_checked="1">
          Events
        </a>
        <div className="navburger navburger1" bis_skin_checked="1">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="navbreakline1" bis_skin_checked="1"></div>
        <a href="/stats" className="navstats" bis_skin_checked="1">
          Stats
        </a>
        <a href="/galleries" className="navgalleries" bis_skin_checked="1">
          Galleries
        </a>
        <a
          href="/ranking/teams"
          className="navranking smartphone-only"
          bis_skin_checked="1"
        >
          Rankings
        </a>
        <a href="/forums" className="navforums no-promode" bis_skin_checked="1">
          Forums
        </a>

        <div className="navbreakline2" bis_skin_checked="1"></div>
        <div className="navsearch search-typeahead" bis_skin_checked="1">
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
                  whiteSpace: "pre",
                  fontFamily: "Open Sans",
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
        <div className="navborder" bis_skin_checked="1"></div>
        <div className="navbell" bis_skin_checked="1">
          <i
            className="fa fa-bell"
            data-user="1569650"
            data-notification-token="08671aa5e47c31e58210a7b247c94c2695c16991a9b9c097f2e155457f0f8895"
            data-push-url-authority="https://cf-notification.hltv.org"
            data-notification-icon-url="/img/static/favicon/apple-touch-icon.png"
          >
            <div data-reactroot="" className="" bis_skin_checked="1"></div>
          </i>
          <div className="arrow" bis_skin_checked="1"></div>
          <div className="arrow2" bis_skin_checked="1"></div>
        </div>
        <div className="navenv" bis_skin_checked="1">
          <i className="fa fa-envelope-o " title="0 unread"></i>
          <div className="arrow" bis_skin_checked="1"></div>
          <div className="arrow2" bis_skin_checked="1"></div>
        </div>
        <div className="navborder" bis_skin_checked="1"></div>
        {document.cookie == "" ? (
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sign in
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Login />
              <Dropdown.Item href="/register">Register</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {document.cookie.split("=")[1]}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href={`/Profile/${user}`}>Profile</Dropdown.Item>
              <Dropdown.Item href="/Tournaments">Tournaments</Dropdown.Item>
              <Dropdown.Item
                href="/"
                onclick={(e) => {
                  Cookies.remove("username");
                  window.location.reload();
                }}
              >
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}

        <div className="navpopup" id="popupnotification" bis_skin_checked="1">
          <div
            data-reactroot=""
            className="notification_arrow notificationBarPopup"
            bis_skin_checked="1"
          >
            <div className="nav-popup-header" bis_skin_checked="1">
              Notifications
            </div>
          </div>
        </div>
        <div className="navpopup" id="popupinbox" bis_skin_checked="1">
          <div className="nav-popup-header" bis_skin_checked="1">
            Inbox
            <a
              href="/inbox"
              className="right nav-popup-header-a"
              bis_skin_checked="1"
            >
              Inbox
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
