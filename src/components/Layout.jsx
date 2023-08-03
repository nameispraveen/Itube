import React from 'react'
import Grid from './Grid'
import style from './leyout.module.css'
export default function Layout({SearchResults}) {
  console.log("layout ",SearchResults)
  return (
    <div className={style.layout_main}>
            {SearchResults
        ? SearchResults.length > 0 && (
            <div>
                {SearchResults.map((item,index) => ( <Grid SearchResults={item} key={index}/>))}
            </div>
          )
        : null}
    </div>
  )
}
