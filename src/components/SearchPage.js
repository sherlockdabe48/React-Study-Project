import React, { useContext } from "react"
import SearchBookList from "./SearchBookList"
import { searchBookContext } from "./App"

export default function SearchPage({ searchInputValue, searchBooks, loading }) {
  const { handleClearSearchInputValue } = useContext(searchBookContext)

  return (
    <>
      <div>
        <h2 className="topic">{searchInputValue} </h2>
        <span className="sub-topic">Search Result: 20 items</span>

        <div className="search-page__container">
          <div className="search-page__close-btn-container ">
            <button
              className="btn btn--close-page"
              onClick={handleClearSearchInputValue}
            >
              &times;
            </button>
          </div>
          <SearchBookList loading={loading} searchBooks={searchBooks} />

          <div className="search-page__close-btn-container ">
            <button
              className="btn btn--close-page"
              onClick={handleClearSearchInputValue}
            >
              &times;
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
