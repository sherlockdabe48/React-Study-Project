import React from "react"
import Shelf from "./Shelf"
import Bag from "./Bag"

export default function ShelfBagWrapper({
  bagBooks,
  shelfBooks,
  toggleClass,
  shelfHighLight,
  inputRef,
}) {
  return (
    <div className="shelf-bag-wrapper">
      {bagBooks.length > 0 && (
        <Bag bagBooks={bagBooks} toggleClass={toggleClass} />
      )}
      {shelfBooks.length > 0 && (
        <Shelf
          shelfBooks={shelfBooks}
          shelfHighLight={shelfHighLight}
          inputRef={inputRef}
        />
      )}
    </div>
  )
}
