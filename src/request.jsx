const API_KEY="30571a9bc7d4b88660577c46e7037959";
const request={
fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOrignals:`discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRated:`movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies:`discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchComedyMovies:`discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrerMovies:`discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies:`discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumenteries:`discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default request;