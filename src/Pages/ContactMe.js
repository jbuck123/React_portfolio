import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactMe() {
  return (
    <div className="center">
      <div
        align="center"
        onClick={() => {
          alert("clicked");
        }}
      >
        <i className="fa faFacebookF"></i>
      </div>
      <a href="https://www.facebook.com/james.buchmann/">
        <FontAwesomeIcon icon={faFacebookF} size="6x" inverse />
      </a>
      <a href="https://github.com/jbuck123">
        <FontAwesomeIcon
          icon={faGithub}
          size="6x"
          inverse
          transform="shrink-6 left-4"
        />
      </a>
      <a href="https://www.linkedin.com/in/james-buchmann-b82b76225/">
        <FontAwesomeIcon icon={faLinkedin} size="6x" inverse />
      </a>
      <a href="https://www.instagram.com/james.buchmann/">
        <FontAwesomeIcon icon={faInstagram} inverse />
      </a>
    </div>
  );
}
