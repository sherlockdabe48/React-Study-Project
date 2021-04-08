import React from "react"

export default function BookInShelf({ title, imageURL }) {
  return (
    <div className="book-in-shelf__container">
      <img
        className="book-image-in-bag"
        src={`${imageURL}`}
        alt="book in shelf"
      />

      <label>{title}</label>
    </div>
  )
}
