import React from "react";
import { useLocation } from 'react-router-dom';
import style from './video.module.css'
export default function Video() {
    
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const videoid = queryParams.get('v');
  console.log("video is is ",videoid);
  return (
    <div className={style.video_sceen_adjuset}>
      <iframe
        width="700"
        height="400"
        src={`https://www.youtube.com/embed/${videoid}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h1></h1>
    </div>
  );
}
