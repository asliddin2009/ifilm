import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import { OutlineButton } from "../components/button/Button";
import HeroSlide from "../components/hero-slide/HeroSlide";
import MovieList from "../components/movie-list/MovieList";

import { category, movieType, tvType } from "../api/tmdbApi";

const Home = () => {
  return (
    <>
      <div className="modals">
        <HeroSlide />
      </div>
      {/* <!-- SAPE RTB DIV 640x480 --> */}
<div id="SRTB_783791"></div>
{/* <!-- SAPE RTB END --> */}
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Popular Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>
        {/* <!-- SAPE RTB DIV 600x340 --> */}
        <div id="SRTB_783789"></div>
        {/* <!-- SAPE RTB END --> */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>
        {/* <!-- SAPE RTB JS -->  */}
        <script
          async="async"
          src="https://cdn-rtb.sape.ru/rtb-b/js/546/2/134546.js"
          type="text/javascript"
        ></script>
        {/* <!-- SAPE RTB END --> */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
          {/* <!-- SAPE RTB JS --> */}
          <script
            async="async"
            src="https://cdn-rtb.sape.ru/rtb-b/js/546/2/134546.js"
            type="text/javascript"
          ></script>
          {/* <!-- SAPE RTB END --> */}
        </div>
      </div>
    </>
  );
};

export default Home;
