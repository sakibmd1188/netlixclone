import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  console.log("------");
  console.log(movies);

  useEffect(() => {
    async function rowData() {
      const res = await axios.get(fetchUrl);
      //  console.log(res);
      //  console.log('------');
      setMovies(res?.data?.results);
    }
    rowData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      // https://developers.google.com/youtube/player_parameters
    },
  };

  const handelClick = (m) => {
    console.log("click");
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(null ,{ tmdbId: m?.id })
        .then((url) => {
          
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log(url);
        })
        .catch((error) => console.log(error));
  }
  };
  return (
    <div className="row">
      <p>{title}</p>

      <div className="row_posters">
        {movies.map((m) => (
          <>
            <img
              key={m?.id}
              onClick={() => handelClick(m)}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? m?.poster_path : m?.backdrop_path
              }`}
              alt={m.original_name}
            />
            
          </>
        ))}
      </div>

  {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
