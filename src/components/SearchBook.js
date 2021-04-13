import React from "react"

export default function SearchBook(props) {
  const { title, author, description, allPages, imageURL } = props

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
          <button className="btn btn--primary btn--in-search-book">
            Add to Shelf
          </button>
        </div>
      </div>
    </>
  )
}
