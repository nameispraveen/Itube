import React from 'react'
import header from './header.module.css'
import Search from './Search'
export default function Header() {
  return (
    <div className={header.one}>
      <Search />
    </div>
  )
}
