import React, { useState, useEffect, useRef } from "react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Button, { OutlineButton } from "../button/Button";
import Modal, { ModalContent } from "../modal/Modal";

import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import "./hero-slide.scss";
import { useNavigate } from "react-router";

const HeroSlide = () => {

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(1, 7));
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide container">
      <Swiper
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        navigation={false}
        autoplay={{ delay: 10000 }}
        spaceBetween={30}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems.map((item, i) => (
        <TrailerModal key={i} id={item.id} />
      ))}
    </div>
  );
};

const HeroSlideItem = (props) => {
  let hisrory = useNavigate();

  const item = props.item;

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = async () => {
    const body = document.querySelector("body")

    body.style.overflow = "hidden";
    const modal = document.querySelector(`#modal_${item.id}`);

    const videos = await tmdbApi.getVideos(category.movie, item.id);

    if (videos.results.length > 0) {
      const videSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML = "No trailer";
    }

    modal.classList.toggle("active");
  };

  return (
      <div
        className={`hero-slide__item ${props.className}`}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="hero-slide__item__content container">
          <div className="hero-slide__item__content__info">
            <h2 className="title">{item.title}</h2>
            <div className="overview">{item.overview}</div>
            <div className="btns">
              <Button onClick={() => hisrory("/movie/" + item.id)} className="btnSlide">
                Watch now
              </Button>
              <OutlineButton onClick={setModalActive} className="btnSlide">
                Watch trailer
              </OutlineButton>
            </div>
          </div>
          <div className="hero-slide__item__content__poster">
            <img src={apiConfig.w500Image(item.poster_path)} alt="" />
          </div>
        </div>
      </div>
  );
};

const TrailerModal = ({ id }) => {

  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute("src", "");

  return (
    <Modal active={false} id={`modal_${id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default HeroSlide;
