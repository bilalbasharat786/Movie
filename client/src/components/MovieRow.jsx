import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const API_KEY = "944a4dcfa30d2998783dd7ba8ba5c664";

const MovieRow = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseURL}${fetchUrl}?api_key=${API_KEY}&language=en-US`);
        setMovies(res.data.results);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="p-6">
      {/* Row Title */}
      <h2 className="text-2xl font-bold text-white mb-5">{title}</h2>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            {/* Poster */}
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />

            {/* Info Section */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-semibold text-white truncate">{movie.title || movie.name}</h3>
              <p className="text-xs text-gray-300 line-clamp-2">{movie.overview}</p>
              <p className="text-xs mt-2 text-gray-400">
                ⭐ {movie.vote_average} | ⏳ {movie.release_date || movie.first_air_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
