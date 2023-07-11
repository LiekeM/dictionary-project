import React, { useState } from "react";
import { createClient } from "pexels";
import "./Photos.css";

const client = createClient(
  "GN1zCwCkPKzSWgNxBfR9NL04o5oleuTomzdeHR1RqMGVCMpxpTWri8O6"
);

export default function Photos(props) {
  let [photosUrls, setPhotosUrls] = useState([]);
  let query = props.results.word;

  function photoSearch() {
    client.photos.search({ query, per_page: 4 }).then((photos) => {
      let urls = [];
      for (let i = 0; i < photos.photos.length; i++) {
        urls.push(photos.photos[i].src.landscape);
      }
      setPhotosUrls(urls);
    });
  }

  photoSearch();

  return (
    <section className="Photos">
      <div className="row">
        {photosUrls.map((url) => {
          return (
            <div className="col">
              <img src={url} className="img-fluid"></img>
            </div>
          );
        })}
      </div>
    </section>
  );
}
