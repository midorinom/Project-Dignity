import React, { useContext } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import UserContext from "../../context/userContext";
import styles from "./footer.module.css";

const Footer = () => {
  const userCtx = useContext(UserContext);
  return (
    <div className="container-fluid bg-warning px-5 pt-4">
      <div className="row">
        <div className="col-auto">
          <h5>For Jobseekers</h5>
          <p>Jobseekers Landing Page</p>
          <p>Job Listings</p>
          <p>Saved Jobs</p>
        </div>
        <div className="col-auto">
          <h5>For Employers</h5>
          <p>Employers Landing Page</p>
          <p>Post a Job</p>
          <p>Search CVs</p>
        </div>
        <div className="col-auto">
          <h5>About Project Dignity</h5>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Work for Us</p>
          <p>Help</p>
        </div>
        <div className="col"></div>
        <div className="col-4">
          <h5 className="mb-2">Subscribe to our newsletter</h5>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control bg-warning border border-dark rounded-0"
              value="Email Address"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span
              className="input-group-text bg-warning border border-dark rounded-0"
              id="basic-addon2"
            >
              Subscribe
            </span>
          </div>
          <div className="d-flex">
            <div className="d-flex flex-column align-items-center">
              <div style={{ transform: "scale(2)" }} className="mb-2">
                <FacebookIcon />
              </div>

              <p>Facebook</p>
            </div>
            <div className="mx-2 d-flex flex-column align-items-center">
              <div style={{ transform: "scale(2)" }} className="mb-2">
                <YouTubeIcon />
              </div>
              <p>YouTube</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <div style={{ transform: "scale(2)" }} className="mb-2">
                <InstagramIcon />
              </div>
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <p>© 2022 | All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
