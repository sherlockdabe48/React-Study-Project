import React from "react"
import BagBookList from "./BagBookList"

export default function Bag({ bagBooks, toggleClass }) {
  return (
    <div>
      <h2 className="topic">In my Bag</h2>
      <div className="bag-container">
        <BagBookList bagBooks={bagBooks} toggleClass={toggleClass} />
      </div>
    </div>
  )
}
