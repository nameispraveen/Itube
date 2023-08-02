import React, { useState } from 'react'
import search from './search.module.css'
export default function Search() {
    const[searchtext,setsearchtext]=useState(null);
    function searchfunction(){
      console.log("search text is ",searchtext);
    }
  return (
    <div>
        <input type='text' placeholder='Search ..' onChange={(e)=>setsearchtext(e.target.value)}/>
        <button onClick={searchfunction}>Submit</button>
        <hr />
    </div>
  )
}
