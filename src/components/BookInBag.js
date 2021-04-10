import React, { useContext, useState } from "react"
import { bookBagContext } from "./App"
import { toggleClassContext } from "./App"

export default function BookInBag(props) {
  const {
    id,
    title,
    author,
    currentPage,
    allPages,
    imageURL,
    toggleClass,
  } = props
  const { handleMoveToShelfFromBag } = useContext(bookBagContext)
  const { handleToggleClassHide } = useContext(toggleClassContext)
  const [textOnActionButton, setTextOnActionButton] = useState("Finish")
  const [buttonClass, setButtonClass] = useState("btn--primary")
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
        <div>
          <span>
            {currentPage}/{allPages} Pages
          </span>
          <button
            className="btn btn--normal btn--small book-in-bag__edit-progress-button"
            onClick={handleToggleClassHide}
          >
            EDIT
          </button>
        </div>
        <div className={toggleClass ? "" : "hide"}>
          <div className="book-in-bag__edit-progress-section">
            <input
              type="number"
              placeholder={currentPage}
              max={allPages}
              className="book-in-bag__edit-progress-input"
            />
            <button
              className="btn btn--small btn--add book-in-bag__save-progress-button"
              onClick={handleToggleClassHide}
            >
              SAVE
            </button>
          </div>
        </div>

        <button
          className={`btn btn--in-bag ${buttonClass}`}
          onClick={() =>
            setTextOnActionButton((prevText) => {
              setButtonClass((prevButtonClass) => {
                return prevButtonClass === "btn--primary"
                  ? "btn--add"
                  : "btn--primary"
              })
              return prevText === "Finish" ? "Read Again" : "Finish"
            })
          }
        >
          {textOnActionButton}
        </button>
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
