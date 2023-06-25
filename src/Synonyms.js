import React from "react";

export default function Synonyms(props) {
  console.log("synonyms obj", props.synonyms);
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        <strong>Synonyms: </strong>
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
