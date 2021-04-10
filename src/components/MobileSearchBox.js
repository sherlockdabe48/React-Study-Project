import React from "react"
import { Link } from "react-router-dom"

export default function MobileSearchBox() {
  return (
    <div className="mobile__search-box-wrapper">
      <input
        className="mobile__input-search-box mr-1"
        type="text"
        placeholder="Find other book..."
      />
      <Link to="/search-page">
        <button className="btn btn--primary mobile__search-button">
          Search
        </button>
      </Link>
    </div>
  )
}
