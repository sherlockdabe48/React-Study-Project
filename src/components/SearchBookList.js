import React from "react"
import SearchBook from "./SearchBook"

export default function SearchBookList({ searchBooks, loading }) {
  if (loading) return <h2 className="text-center">"Loading..."</h2>
  return (
    <>
      <div className="search-book-list__grid">
        {searchBooks.map((searchBook) => {
          return <SearchBook key={searchBook.id} {...searchBook} />
        })}
      </div>
      <div className="btn--container">
        <button className="btn btn--normal btn--see-more search-book-list__pagination-button">
          Next Page &gt;
        </button>
      </div>
    </>
  )
}
