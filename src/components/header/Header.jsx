import React, { useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

import { Link, useLocation } from "react-router-dom";

import "./header.scss";

import logo from "../../assets/ifilm.png";
import MovieSearch from "../movie-grid/MovieSearch";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex((e) => e.path === pathname);

  // useEffect(() => {
  //   const shrinkHeader = () => {
  //     if (
  //       document.body.scrollTop > 100 ||
  //       document.documentElement.scrollTop > 100
  //     ) {
  //       headerRef.current.classList.add("shrink");
  //     } else {
  //       headerRef.current.classList.remove("shrink");
  //     }
  //   };
  //   window.addEventListener("scroll", shrinkHeader);
  //   return () => {
  //     window.removeEventListener("scroll", shrinkHeader);
  //   };
  // }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <Link key={i} to={e.path}>
              <li key={i} className={`${i === active ? "active" : ""}`}>
                {e.display}
              </li>
            </Link>
          ))}
        </ul>
        <div className="search">
          <a>
            <li className="search-icon">
              <FiSearch />
            </li>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
