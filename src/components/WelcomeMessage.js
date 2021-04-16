import React from "react"

export default function WelcomeMessage() {
  return (
    <div className="welcome-message__container">
      <h1 className="welcome-message__topic">What you will read today?</h1>
      <h3 className="welcome-message__tip">
        Get Start : <br />
        1. Search your first book.
        <br /> 2. Add the book to your "Shelf".
        <br /> 3. Add the book you wanna read to "Bag"
      </h3>
    </div>
  )
}
