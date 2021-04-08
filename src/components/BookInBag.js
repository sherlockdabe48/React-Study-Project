import React from "react"

export default function BookInBag({
  title,
  author,
  currentPage,
  allPages,
  imageURL,
}) {
  return (
    <div className="book-in-bag__container">
      <img className="book-image-in-bag" src={imageURL} alt="book in bag" />
      <div className="book-in-bag__detail-grid">
        <div>
          <label>Title: </label>
          <span>{title}</span>
          <br />
          <label>By: </label>
          <span>{author}</span>
        </div>
        <br />
        <label>Progress:</label>
        <span>
          {currentPage}/{allPages} Pages
        </span>
        <button className="btn btn--primary btn--in-bag">Finished</button>
        <button className="btn btn--optional btn--in-bag">
          Add to Favorite
        </button>
        <button className="btn btn--danger btn--in-bag">Remove</button>
      </div>
    </div>
  )
}
