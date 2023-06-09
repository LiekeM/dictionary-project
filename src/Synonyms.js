import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log("synonyms obj", props.synonyms);
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map((synonym, index) => {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
