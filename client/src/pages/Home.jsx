import React from "react";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";

const Home = () => {
  return (
    <div>
      <Hero />
      <MovieRow title="Trending Now" fetchUrl="/trending/movie/week" />
      <MovieRow title="Popular Movies" fetchUrl="/movie/popular" />
      <MovieRow title="Top Rated" fetchUrl="/movie/top_rated" />
      <MovieRow title="Upcoming" fetchUrl="/movie/upcoming" />
    </div>
  );
};

export default Home;

