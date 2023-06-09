import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log("this is the meaning component: ", props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>"{definition.example}"</em>
            </p>
          </div>
        );
      })}
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
