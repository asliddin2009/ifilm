import React, { useState, useEffect } from "react"

import { useParams } from "react-router"

import tmdbApi from "../../api/tmdbApi"
import apiConfig from "../../api/apiConfig"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"

const CastList = (props) => {
  const { category } = useParams()

  const [casts, setCasts] = useState([])

  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.credits(category, props.id)
      setCasts(res.cast.slice(0, 10), res.cast.popular)
    }
    getCredits()
  }, [category, props.id])

  //   console.log(casts);
  return (
    <div>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        loop={false}
        modules={[Pagination, Navigation]}
        className="mySwiper casts"
      >
        {casts.map((item, i) => (
          <SwiperSlide key={i}>
            <a
              target="blank"
              href={`https://www.google.com/search?q=${item.name}`}
            >
              <div
                style={{
                  backgroundImage: `url(${apiConfig.w500Image(
                    item.profile_path
                  )}`,
                }}
                className="img casts__item__img casts__item"
              ></div>
            </a>
            <a
              target="blank"
              href={`https://www.google.com/search?q=${item.name}`}
            >
              <p className="casts__item__name">{item.name}</p>
            </a>
            <a
              target="blank"
              href={`https://www.google.com/search?q=${item.name}+${item.character}&hl=xx-elmer&tbm=isch&sxsrf=ALiCzsasq9GdUqka2Pnc7D7UW4b1MHqzCw%3A1662891595565&source=hp&biw=1800&bih=1047&ei=S7YdY-eNIOf0qwGfo7PYDA&iflsig=AJiK0e8AAAAAYx3EW0WzJ93HKQioWLHrsM1w_S9EyzNT&oq=&gs_lcp=CgNpbWcQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGCsFmgCcAB4AIABAIgBAJIBAJgBAKoBC2d3cy13aXotaW1nsAEK&sclient=img`}
            >
              <p className="casts__item__description">{item.character}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CastList
