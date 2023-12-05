import React from "react";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import Header from "./Header";
import "./App.css";

const App = () => {
  return (
    <div className="main">
      <Header />

      {/* <Banner /> */}

      {/* <Row
        title="NETFLIX ORIGNALS"
        fetchUrl={request.fetchNetflixOrignals}
        isLargeRow={true}
      />
      <Row title="Trending Videos" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horrer Movies" fetchUrl={request.fetchHorrerMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documenteries " fetchUrl={request.fetchDocumenteries} /> */}
    </div>
  );
};

export default App;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const axios = require("axios");

//       const options = {
//         method: "GET",
//         url: "https://free-football-soccer-videos.p.rapidapi.com/",
//         headers: {
//           "X-RapidAPI-Key":
//             "d370787dc8msh0f848f28b77b1bap1ca925jsn4d0284131619",
//           "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
//         },
//       };

//       setTimeout(async () => {
//         try {
//           const response = await axios.request(options);
//           console.log(response.data.slice(0, 10));

//           setVideos(response.data.slice(0, 10));
//         } catch (error) {
//           console.error(error);
//         }
//       }, 3000); // 2 seconds delay
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {videos.map((m) => {
//         return (
//           <div>
//             <h1>{m.title}</h1>
//             <img src={m.url} alt="l" />
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default App;
