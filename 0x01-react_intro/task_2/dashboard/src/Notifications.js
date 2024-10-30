import React from "react";
import "./Notifications.css";

import { getLatestNotification } from "./utils";

import closebtn from "./close-icon.png";

const btnStyles = {
  position: "absolute",
  top: "9px",
  right: "3px",
  border: "none",
  background: "none",
  cursor: "pointer",
  justify: 'center'
  
};

const closeButton = () => console.log("Close button has been clicked");
export default function Notifications() {
  return (
    <div className="Notifications">
      <button onClick={closeButton} aria-label="close" style={btnStyles}>
        <img src={closebtn} alt="close icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}/>
      </ul>
    </div>
  );
}
