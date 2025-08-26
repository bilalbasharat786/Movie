import React, { useEffect, useState } from "react";
import "./Hero.css";



function Hero() {
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    // TMDB trending data fetch
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=944a4dcfa30d2998783dd7ba8ba5c664`)
      .then((res) => res.json())
      .then((data) => {
        // top 5 trending shows/movies select
        const items = data.results.slice(0, 5).map((item) => ({
          title: item.title || item.name, // movies have title, TV shows have name
          desc: item.overview,
          img: `https://image.tmdb.org/t/p/original${item.backdrop_path}`
        }));
        setSlides(items);
      })
      .catch((err) => console.error(err));
  }, []);

  // slider interval
  useEffect(() => {
    if (slides.length === 0) return;
    const t = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 400);
    }, 5000);
    return () => clearInterval(t);
  }, [slides]);

  if (slides.length === 0) return <p style={{textAlign:"center"}}>Loading...</p>;

  return (
    <section className="hero" id="hero">
      <div
        className={`hero-bg ${animating ? "fade-out" : "fade-in"}`}
        style={{ backgroundImage: `url(${slides[index].img})` }}
        aria-hidden="true"
      />
      <div className="hero-gradient" aria-hidden="true" />
      <div className="container hero-content">
        <h1 className="title">{slides[index].title}</h1>
        <p className="desc">{slides[index].desc}</p>
        <div className="cta">
          <button className="btn">▶ Play</button>
          <button className="ghost-btn">More Info</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
