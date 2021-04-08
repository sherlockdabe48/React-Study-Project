import React from "react"
import { Link } from "react-router-dom"
import SearchBookList from "./SearchBookList"

export default function SearchPage() {
  return (
    <>
      <div>
        <h2 className="topic">Search Result: 8 items</h2>
        <div className="search-page__container">
          <div className="search-page__close-btn-container ">
            <Link to="/">
              <button className="btn btn--close-page">&times;</button>
            </Link>
          </div>
          <SearchBookList />
          <div className="btn--container">
            <button className="btn btn--optional btn--see-more">
              See More &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
