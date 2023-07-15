import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
// import { createClient } from "pexels";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("world");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [errorMessage, setErrorMessage] = useState(null);

  function handleResponse(response) {
    if (response.status === 200) {
      setErrorMessage(null);
      setResults(response.data[0]);
    } else {
      alert("word");
    }
  }
  // function handlePexelResponse(response) {
  //   console.log(response);
  // }

  function handleError(error) {
    // console.log(error.response.data.message);
    setErrorMessage(error.response.data.message);
    alert(error.response.data.message);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);

    // const PexelApi = createPexelApi(
    //   "GN1zCwCkPKzSWgNxBfR9NL04o5oleuTomzdeHR1RqMGVCMpxpTWri8O6"
    // );
    //   let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}$per_page=1`;
    //   axios.get(pexelApiUrl).then(handlePexelResponse);
  }

  function onSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form className="Form" onSubmit={onSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              placeholder="search.."
              // defaultValue={"search.."}
            />
          </form>
        </section>
        {results && (
          <>
            <Results results={results} />
            <Photos results={results} />
          </>
        )}
      </div>
    );
  } else {
    load();
    return errorMessage;
  }
}
