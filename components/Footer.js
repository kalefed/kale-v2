import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <div className="mx-12 sm:mx-20 md:mx-56 lg:mx-72 py-10">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-6">
          <h1 className="text-lg z-0 font-poppins">
            Interested in chatting or my seeing my resume?
          </h1>
          <a
            href="mailto:kaleighfeder@gmail.com"
            className="text-secondary-col text-lg hover:underline font-poppins"
          >
            kaleighfeder@gmail.com
          </a>
        </div>
        <div className="flex flex-row">
          <IconButton
            size="medium"
            href={"https://www.linkedin.com/in/kaleighfeder/"}
            target="_blank"
            rel="noopener"
            sx={{
              color: "#FFFFFF",
              "&:hover": {
                color: "#C6D794", // Change this to the color you want on hover
              },
            }}
          >
            <LinkedInIcon fontSize="medium" />
          </IconButton>
          <IconButton
            size="medium"
            href={"https://github.com/kalefed"}
            target="_blank"
            rel="noopener"
            sx={{
              color: "#FFFFFF",
              "&:hover": {
                color: "#C6D794", // Change this to the color you want on hover
              },
            }}
          >
            <GitHubIcon fontSize="medium" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Footer;
