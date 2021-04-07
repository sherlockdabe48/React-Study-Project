import React from "react"
import "../css/header.css"

export default function Header() {
  return (
    <div className="header-container">
      <h1 className="header__logo">MY BOOK BAG</h1>
      <div className="header__search-box-wrapper">
        <input className="header__input-search-box mr-1" type="text" placeholder="Find other book..."/>
        <button className="btn btn--primary">Search</button>
      </div>
    </div>
  )
}
