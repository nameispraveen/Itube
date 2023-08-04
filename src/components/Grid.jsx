import React, { useState } from 'react';
import style from './grid.module.css';

export default function Grid({ SearchResults }) {
   const[videoid,setvideoid]=useState(null);
    console.log("grid is ",SearchResults);

    function videoplayfunction(){
      setvideoid(SearchResults?.id?.videoId);
      console.log("video is clicked ",SearchResults?.id?.videoId);
    }
  
    return (
      <div className={style.grid_one}>
        <div>
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe> */}
          {/* <a href={`https://www.youtube.com/watch?v=${SearchResults.id.videoId}`} target="_blank" rel="noopener noreferrer"> */}
            <img onClick={videoplayfunction} className={style.img} src={SearchResults.snippet.thumbnails.high.url} alt={SearchResults.snippet.title} />
          {/* </a> */}
          <h4>{SearchResults.snippet.title}</h4>
          <p className={style.p_font}>{SearchResults.snippet.description}</p>
        </div>
      </div>
    );
}
