import React from "react";
import Picture from "../assets/Portfolio.jpeg";
import EmojiEmotionsSharpIcon from '@mui/icons-material/EmojiEmotionsSharp';
export default function AboutMe() {
  return (
    <div className="aboutme-container">
      <div className="aboutme-padding">
        <h1 className="aboutme-title"> About me </h1>
        <img className="aboutme-picture" src={Picture}></img>
        <div className="aboutme-content">
        <p className="aboutme-text"> Self taught Full-Stack Developer who specializes in database developemnt but also finds enjoyment designing UX / UI.</p>
        <p> I love making fun side projects to help me learn new skill.... typically disc golf themed <EmojiEmotionsSharpIcon /></p>
        </div>
      </div>
    </div>
  );
}

// ABOUT ME CONTENT

{
  /* <h1 className="aboutme-title">About me</h1>
<div className="aboutme-content">
  <img className="aboutme-picture" src={Picture}></img>

  <ul className="aboutme-text">
      <li>  I am a Full-Stack developer, based in Minneapolis, that specializes
    in frontend and backend developement.</li>
      <li>   I reguraraly post to my blog
    which I use as a tool to help me solidify my learning and share my
    expierences with others.</li>
      <li>When I'm not coding I am typically Disc Golfing at one of the many courses in the Minneapolis metro area.</li>
  </ul>
</div> */
}
