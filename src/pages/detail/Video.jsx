import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

import { useParams } from 'react-router'

import tmdbApi from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'

const Video = () => {
  const location = useLocation()
  const MOVIE_ID = location.pathname.split('/')[2]
  const [trailerUrl, setTrailerUrl] = useState('')
  const [name, setName] = useState('')

  // useEffect(() => {
  async function getVideo() {
    await axios
      .get(
        `${apiConfig.baseUrl}/movie/${MOVIE_ID}/videos?api_key=${apiConfig.apiKey}`
      )
      .then((response) => {
        const trailer = response.data.results.find(
          (result) => result.type === 'Trailer' && result.site === 'YouTube'
        )
        if (trailer) {
          setTrailerUrl(trailer.key)
        } else {
          console.log(`No official trailer found for movie ${MOVIE_ID}`)
        }
      })
  }
  getVideo()

  async function getVideoTitle() {
    await axios
      .get(`${apiConfig.baseUrl}/movie/${MOVIE_ID}?api_key=${apiConfig.apiKey}`)
      .then((response) => {
        setName(response.data.original_title)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  getVideoTitle()
  // }, [])

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <div className="video__title">
        <h2>{name}</h2>
      </div>
      <iframe
        width="760"
        height="415"
        src={`https://www.youtube.com/embed/${trailerUrl}`}
        title={name}
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Video
