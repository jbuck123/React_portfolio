import React from "react";

// Profile picture
import Profile from "../assets/profile-pic.png";

// mui imports
import Avatar from "@mui/material/Avatar";

export default function Home() {
  return (
    <div className="child-container">
      <Avatar
        alt="Remy Sharp"
        variant="square"
        sx={{ width: 76, height: 76 }}
        src={Profile}
      />
      <h1>hello world</h1>
      <h3>I am James Buchmann</h3>
      <h6> I have: </h6>
      <p> A passion for creating websites</p>
      <p> A strong desire to learn</p>
      <p> A beautiful backhand drive</p>
    </div>
  );
}
