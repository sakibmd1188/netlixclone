import axios from "./axios";
import React, { useEffect, useState } from "react";
import request from "./request";
import "./banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";
const Banner = () => {
  const [bannerTitle, setBannerTitle] = useState([]);
  useEffect(() => {
    async function bannerData() {
      const res = await axios.get(request.fetchNetflixOrignals);
      // console.log(res.data.results[0].id);
      // setBannerTitle(res.data.results[0]);
        setBannerTitle(
          res.data.results[Math.floor(Math.random() * res.data.results.length)]
        );
    }
    bannerData();
  }, []);

  let value1=bannerTitle.overview;
  const concatenatedStatement = value1.slice(0, 100) + "...";
  console.log(value1);
  console.log(concatenatedStatement);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${bannerTitle?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {bannerTitle?.name ||
            bannerTitle?.title ||
            bannerTitle?.original_name}
        </h1>
        <div className="buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        {}
        <p className="desc">{bannerTitle.overview}</p>
    <p>more...</p>
      </div>
      <div className="bannerBottom"></div>
    </header>
  );
};

export default Banner;
