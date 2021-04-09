import React, { useContext } from "react"
import { bookBagContext } from "./App"

export default function BookInShelf({ id, title, imageURL }) {
  const { handleAddToBagFromShelf } = useContext(bookBagContext)
  return (
    <div className="book-in-shelf__container">
      <div className="book-in-shelf__add-button-container">
        <img
          className="book-image-in-shelf"
          src={`${imageURL}`}
          alt="book in shelf"
        />
        <button
          className="btn btn--add btn--circle book-in-shelf__add-button"
          onClick={() => handleAddToBagFromShelf(id)}
        >
          +
        </button>
      </div>

      <p className="book-in-shelf__title">{title}</p>
    </div>
  )
}
