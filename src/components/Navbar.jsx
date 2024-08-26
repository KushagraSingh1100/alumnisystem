const Navbar = () => {
  return (
    <div className="navbar">
      <div className="top">
        <a className="heading" href="/">
          <div className="logo">
            <img src={require("../utils/logo.png")} alt="" />
            <h1>Alumni Portal</h1>
          </div>
        </a>
        <a className="sign" href="/">
          LOGIN / SIGN UP
        </a>
      </div>
      <div className="bottom">
        <div className="links">
          <div className="text">
            <a href="/">Home</a>
            <div class="dropdown">
              <button class="dropbtn">
                About <div className="unicode">&#129171;</div>
              </button>
              <div class="dropdown-content">
                <a href="/">About Us</a>
                <a href="/">Contact Us</a>
                <a href="/">Management</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">
                Directory <div className="unicode">&#129171;</div>
              </button>
              <div class="dropdown-content">
                <a href="/">Year Book</a>
                <a href="/">Alumni Directory</a>
                <a href="/">Almuni Nearby</a>
                <a href="/">Invite BatchMates</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">
                Events <div className="unicode">&#129171;</div>
              </button>
              <div class="dropdown-content">
                <a href="/">Events</a>
                <a href="/">Gallery</a>
              </div>
            </div>
            <a href="/">Mentorship</a>
            <div class="dropdown">
              <button class="dropbtn">
                Jobs & Internship <div className="unicode">&#129171;</div>
              </button>
              <div class="dropdown-content">
                <a href="/">Jobs</a>
                <a href="/">Internships</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">
                Groups <div className="unicode">&#129171;</div>
              </button>
              <div class="dropdown-content">
                <a href="/">Special Interests Groups</a>
                <a href="/">Professional Groups</a>
                <a href="/">International Chapters</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">
                Campuses <div className="unicode">&#129171;</div>
              </button>
              <div class="dropdown-content">
                <a href="/">Lucknow</a>
                <a href="/">Noida</a>
                <a href="/">Jaipur</a>
                <a href="/">Dubai</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">
                Newsletters <div className="unicode">&#129171;</div>
              </button>
              <div class="dropdown-content">
                <a href="/">2024</a>
                <a href="/">2023</a>
                <a href="/">2022</a>
                <a href="/">2021</a>
              </div>
            </div>
            <a href="/">Milestones of the month</a>
            <div class="dropdown">
              <button class="dropbtn">
                Updates <div className="unicode">&#129171;</div>
              </button>
              <div class="dropdown-content">
                <a href="/">Specail Visits</a>
                <a href="/">Alumni Visits</a>
                <a href="/">News</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
