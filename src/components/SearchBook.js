import React, { useContext, useEffect, useState } from "react"
import { searchBookContext } from "./App"

export default function SearchBook(props) {
  const {
    id,
    title,
    author,
    description,
    allPages,
    imageURL,
    shelfBooks,
  } = props
  const { handleMoveToShelfFromSearch } = useContext(searchBookContext)

  const [isAlreadyAdded, setAlreadyAdded] = useState(false)

  useEffect(
    (id) => {
      const alreadyAddedBook = shelfBooks.find(
        (shelfBook) => shelfBook.id === id
      )
      if (alreadyAddedBook) setAlreadyAdded(true)
    },
    [isAlreadyAdded, shelfBooks]
  )

  return (
    <>
      <div className="search-book__container">
        <div>
          <img
            className="search-book__book-image"
            src={imageURL}
            alt="search book"
          />
        </div>
        <div className="search-book__book-detail-grid">
          <div>
            <label className="search-book__label">Title: </label>
            <span className="search-book__title">{title}</span>
            <br />
            <label className="search-book__label">By:</label>
            <span className="search-book__author">{author}</span>
          </div>
          {description && (
            <span className="search-book__desciption">{description}</span>
          )}
          <div>
            <label className="search-book__label">Pages: </label>
            <span className="search-book__pages">{allPages} pages</span>
          </div>
          <div className="search-book__btn-wrapper">
            {!isAlreadyAdded && (
              <button
                className="btn btn--primary btn--in-search-book mr-1"
                onClick={() => {
                  handleMoveToShelfFromSearch(id)
                  setAlreadyAdded(true)
                }}
              >
                Add to Shelf
              </button>
            )}

            <button className="btn btn--normal btn--in-search-book">
              See in Shelf
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
