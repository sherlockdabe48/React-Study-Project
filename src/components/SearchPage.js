import React, { useContext } from "react"
import { Link } from "react-router-dom"
import SearchBookList from "./SearchBookList"
import { searchBookContext } from "./App"

export default function SearchPage({ searchInputValue }) {
  const { handleClearSearchInputValue } = useContext(searchBookContext)
  return (
    <>
      <div>
        <h2 className="topic">{searchInputValue} </h2>
        <span className="sub-topic">Search Result: 8 items</span>
        <div className="search-page__container">
          <div className="search-page__close-btn-container ">
            <button
              className="btn btn--close-page"
              onClick={handleClearSearchInputValue}
            >
              &times;
            </button>
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
