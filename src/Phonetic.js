import React from "react";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio}>Listen</a>
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
