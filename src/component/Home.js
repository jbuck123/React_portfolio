import React from "react";

// Profile picture
import Profile from "../assets/profile-pic.png";

// mui imports
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <div className="child-container">
      <div className="home-padding">
        <Avatar
          alt="Remy Sharp"
          variant="square"
          sx={{ width: 120, height: 120 }}
          src={Profile}
        />
        <h1 className="home-title">hello world</h1>
        <h1 className="home-title">I am James Buchmann</h1>
        <div className="home-links">
          <h3 className="home-subtitle">Important Links</h3>
          <Stack spacing={2} direction="row">
            <Button target='_blank' href="https://github.com/jbuck123" variant="outlined">GitHub</Button>
            <Button target='_blank' href="https://www.linkedin.com/in/james-buchmann-b82b76225/" variant="outlined">LinkedIn</Button>
            <Button target='_blank' href="https://github.com/jbuck123" variant="outlined">Blog</Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}
