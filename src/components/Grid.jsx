import React from 'react';
import style from './grid.module.css';

export default function Grid({ SearchResults }) {
    console.log("grid is ",SearchResults);
  
    return (
      <div className={style.grid_one}>
        <div>
          <a href={`https://www.youtube.com/watch?v=${SearchResults.id.videoId}`} target="_blank" rel="noopener noreferrer">
            <img className={style.img} src={SearchResults.snippet.thumbnails.high.url} alt={SearchResults.snippet.title} />
          </a>
          <p>{SearchResults.snippet.title}</p>
          <p>{SearchResults.snippet.description}</p>
        </div>
      </div>
    );
}
