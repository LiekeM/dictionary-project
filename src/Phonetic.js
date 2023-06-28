import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    if (props.phonetic.audio !== "") {
      return (
        <div className="Phonetic">
          {props.phonetic.text}
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            🗣️
          </a>
        </div>
      );
    } else {
      return <div className="Phonetic">{props.phonetic.text}</div>;
    }
  } else {
    return null;
  }
}
