import React, { useEffect, useState } from "react";
import "./Hero.css";

const slides = [
  {
    title: "Stranger Things",
    desc: "Mystery, drama and adventure unfold in Hawkins.",
    img: "https://image.tmdb.org/t/p/original/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg"
  },
  {
    title: "Money Heist",
    desc: "A criminal mastermind plans the biggest heist in history.",
    img: "https://image.tmdb.org/t/p/original/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
  },
  {
    title: "Wednesday",
    desc: "A darkly funny coming-of-age story with a supernatural twist.",
    img: "https://image.tmdb.org/t/p/original/9PFonBhy4cQy7Jz20NpMygczOkv.jpg"
  }
];

function Hero() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 400); // match fade-out duration
    }, 5000);
    return () => clearInterval(t);
  }, []);

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
