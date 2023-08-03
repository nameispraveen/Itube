import React from 'react'
import Grid from './Grid'
import style from './leyout.module.css'
export default function Layout({SearchResults}) {
  console.log("layout ",SearchResults)
  return (
    <div>
            {SearchResults
        ? SearchResults.length > 0 && (
            <div  className={style.layout_main}>
                {SearchResults.map((item,index) => ( <Grid SearchResults={item} key={index}/>))}
            </div>
          )
        : null}
    </div>
  )
}
