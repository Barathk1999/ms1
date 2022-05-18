import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Header = () => {
  return (
    <>
      <header>
        <p>
          Connect with us{" "}
          <FacebookIcon
            style={{ margin: "0px 0px -5px 10px", color: "#4267B2" }}
          />{" "}
          <LinkedInIcon
            style={{ margin: "0px 0px -5px 10px", color: "#0077b5" }}
          />{" "}
          <TwitterIcon
            style={{ margin: "0px 0px -5px 10px", color: "#1DA1F2" }}
          />
        </p>
      </header>
      <div className="navbar">
        <>
          <img
            src="data:image/png;base64,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"
            width="50px"
          />
          <p
            style={{
              margin: "15px 10px 0px 10px",
              color: "#521410",
              textDecoration: "none"
            }}
          >
            Job Application Form
          </p>
        </>
      </div>
    </>
  );
};

export default Header;
