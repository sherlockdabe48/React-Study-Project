import React, { useContext, useEffect, useRef, useState } from "react"
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
    bagBook,
  } = props
  const { handleMoveToShelfFromBag } = useContext(bookBagContext)
  const { handleToggleClassHide } = useContext(toggleClassContext)
  const [textOnActionButton, setTextOnActionButton] = useState("Finish")
  const [buttonClass, setButtonClass] = useState("btn--primary")
  const [progress, setProgress] = useState(currentPage)
  const progressRef = useRef()

  function handleChangeProgress(e) {
    const max = parseInt(e.target.max)
    if (parseInt(e.target.value) > max) {
      e.target.value = max
    }
    setProgress(e.target.value)
  }

  function finishBook() {
    bagBook.currentPage = allPages

    if (parseInt(bagBook.currentPage) === allPages) {
      alert("Congratulations! You just finished a book")
      toggleFinishButton()
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    finishBook()
  }

  function toggleFinishButton() {
    setTextOnActionButton((prevText) => {
      setButtonClass((prevButtonClass) => {
        return prevButtonClass === "btn--primary" ? "btn--add" : "btn--primary"
      })
      return prevText === "Finish" ? "Read Again" : "Finish"
    })
  }

  useEffect(() => {}, [progress])

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
            {progress}/{allPages} Pages
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
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                placeholder={progress}
                max={allPages}
                ref={progressRef}
                className="book-in-bag__edit-progress-input"
                onInput={(e) => handleChangeProgress(e)}
              />
              <button
                className="btn btn--small btn--add book-in-bag__save-progress-button"
                type="submit"
                onClick={handleToggleClassHide}
              >
                SAVE
              </button>
            </form>
          </div>
        </div>

        <button
          className={`btn btn--in-bag ${buttonClass}`}
          onClick={() => {
            if (currentPage !== allPages) {
              setProgress(allPages)
              finishBook()
            }
          }}
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
