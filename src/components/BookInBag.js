import React, { useContext } from "react"
import { bookBagContext } from "./App"

export default function BookInBag(props) {
  const { id, title, author, currentPage, allPages, imageURL } = props
  const { handleMoveToShelfFromBag } = useContext(bookBagContext)
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
        <button
          className="btn btn--danger btn--in-bag"
          onClick={() => handleMoveToShelfFromBag(id)}
        >
          Remove
        </button>
      </div>
    </div>
  )
}
