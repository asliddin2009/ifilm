import React, { useState, useEffect, useRef } from "react";

import { useParams } from "react-router";

import tmdbApi from "../../api/tmdbApi";

const VideoList = (props) => {
  const { category } = useParams();

  const [videos, setVideos] = useState([]);
  const [trailerKey, setTrailerKey] = useState("");
  const [trailerName, setTrailerName] = useState("");

  const [noTrailer, setNoTrailer] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      const res = await tmdbApi.getVideos(category, props.id, {
        params: {},
      });
      setVideos(
        res.results.slice(0, 100).forEach((video) => {
          const videoName = video.name.split(" ");
          console.log(videoName);
          if (
            (video.name == "Official Trailer" || video.official == true,
            videoName[1],
            videoName[2] == "Official" || videoName[0],
            videoName[1],
            videoName[2] == "Trailer")
          ) {
            setTrailerKey(video.key);
            setTrailerName(video.name);
          } else if (video.name == "Official Teaser" || videoName[2] === "Teaser") {
            setTrailerKey(video.key);
            setTrailerName(video.name);
          }
          return setTrailerKey(video.key);
          setTrailerName(video.name);
        })
      );
    };
    getVideos();
  }, [category, props.id]);

  console.log(trailerKey + " " + trailerName);
  return (
    <>{noTrailer ? "" : <Video trailerKey={trailerKey} name={trailerName} />}</>
  );
};

const Video = ({ trailerKey, name }) => {
  const iframeRef = useRef();

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div className="video__title">
        <h2>{name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${trailerKey}`}
        // src={`https://www.youtube.com/embed/jumy9LR2vyI`}
        ref={iframeRef}
        width="1000px"
        title="video"
      ></iframe>
    </div>
  );
};

export default VideoList;
