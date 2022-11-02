import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
export default function Education() {
  return (
    <div className="grid-collumn-container">
      <h1 className="education-title">Education</h1>
      <div className="education-container">
        <h3> Saint Cloud Technical and Community College</h3>
        <p> Associates degree </p>
        <p>2017 - 2019</p>

        <div className="button">
          <Button
            size="small"
            target="_blank"
            href="https://www.sctcc.edu/"
            className="button"
            variant="outlined"
          >
            School Website
          </Button>
        </div>
      </div>
      <div className="education-container">
        <h3>University of Minnesota</h3>
        <p>Major: Psychology</p>
        <p>Minor: Spanish</p>
        <p>Web Development Certificate (Coding Boot Camp)</p>
        <p>2019-2021</p>
        <div className="button">
          <Button
            size="small"
            target="_blank"
            href="https://twin-cities.umn.edu/"
            className="button"
            variant="outlined"
          >
            School Website
          </Button>
        </div>
      </div>
    </div>
  );
}
