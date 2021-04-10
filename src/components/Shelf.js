import React from "react"
import ShelfBookList from "./ShelfBookList"

export default function Shelft({ shelfBooks, shelfHighLight }) {
  return (
    <div>
      <h2 className="topic" id="in-my-shelf">
        In my Shelf
      </h2>
      <div className={shelfHighLight ? "shelf-container__highlight" : ""}>
        <div className="shelf-container">
          <ShelfBookList shelfBooks={shelfBooks} />
          <div className="btn--container mt-2">
            <button className="btn btn--optional btn--see-more">
              See More &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
