import { useState } from 'react'
import axios from 'axios'

import apiConfig from '../../api/apiConfig'

const Video = ({ title, id }) => {
  // const MOVIE_ID = location.pathname.split('/')[2]
  const MOVIE_ID = id
  const [trailerUrl, setTrailerUrl] = useState('')

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

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <div className="video__title">
        <h2>{title}</h2>
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
