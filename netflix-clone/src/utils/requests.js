// const API_KEY = import.meta.env.VITE_REACT_APP_apikey;
const API_KEY = process.env.REACT_APP_API_KEY;
// const API_KEY = "4d8086f8086a8165b668fad87f748247"

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShow: `tv/popular?api_key=${API_KEY}&with_genres=99&page=1`,
};

export default requests;

//  baseURL: "https://api.themoviedb.org/3/trending/all/week?api_key=4d8086f8086a8165b668fad87f748247&language=en-US"
