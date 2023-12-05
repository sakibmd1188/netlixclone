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

      <Banner />

      <Row
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
      <Row title="Documenteries " fetchUrl={request.fetchDocumenteries} />
    </div>
  );
};

export default App;

