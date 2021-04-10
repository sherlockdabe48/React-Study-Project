import React from "react"

import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="header-container">
      <h1 className="header__logo">MY BOOK BAG</h1>
      <div className="header__search-box-wrapper">
        <input
          className="header__input-search-box mr-1"
          type="text"
          placeholder="Find other book..."
        />
        <Link to="/search-page">
          <button className="btn btn--primary header__search-button">
            Search
          </button>
        </Link>
      </div>
    </div>
  )
}
