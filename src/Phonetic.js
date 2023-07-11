import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    if (props.phonetic.audio !== "") {
      return (
        <div className="Phonetic">
          {props.phonetic.text}
          <audio controls>
            <source src={props.phonetic.audio} type="audio/mpeg"></source>
          </audio>
        </div>
      );
    } else {
      return <div className="Phonetic">{props.phonetic.text}</div>;
    }
  } else {
    return null;
  }
}
