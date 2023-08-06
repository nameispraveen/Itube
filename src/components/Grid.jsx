import React, { useState } from 'react';
import style from './grid.module.css';
import { Link } from 'react-router-dom';
import Video from './Video'; // Make sure to import the Video component

export default function Grid({ SearchResults }) {
  console.log("grid is ", SearchResults);
  return (
    <div className={style.grid_one}>
      <div>
        <Link to={`/watch/?v=${SearchResults?.id?.videoId}`}>
          <img  className={style.img} src={SearchResults.snippet.thumbnails.high.url} alt={SearchResults.snippet.title} />
        </Link>
        <h4>{SearchResults.snippet.title}</h4>
        <p className={style.p_font}>{SearchResults.snippet.description}</p>
      </div>
      <Video /> 
    </div>
  );
}
