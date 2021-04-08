import React from "react"
import BookInBag from "./BookInBag"

export default function BagBookList({ bagBooks }) {
    
  return (
    <>
      {bagBooks.map((bagBook) => {
        return <BookInBag key={bagBook.id} {...bagBook} />
      })}
      
      <div className="btn--container">
        <button className="btn btn--add btn--see-more">Add Book &#43;</button>
      </div>
    </>
  )
}
