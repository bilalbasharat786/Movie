import React from "react";
import "./MovieCard.css";

function MovieCard({ title, img, year }) {
  return (
    <div className="movie-card" title={title}>
      <img src={img} alt={title} loading="lazy" />
      <div className="movie-meta">
        <h3>{title}</h3>
        <span>{year}</span>
      </div>
    </div>
  );
}

export default MovieCard;
