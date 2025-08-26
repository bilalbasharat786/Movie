import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "944a4dcfa30d2998783dd7ba8ba5c664",
    language: "en-US",
  },
});

export default tmdb;
