import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Header.js"
import SearchPage from "./SearchPage.js"
import ShelfBagWrapper from "./ShelfBagWrapper.js"
import WelcomeMessage from "./WelcomeMessage.js"
import "../css/app.css"
// import { v4 as uuidv4 } from "uuid"
// const SEARCH_URI = "https://www.googleapis.com/books/v1/volumes?q="

export const bookBagContext = React.createContext()

function App() {
  const [bagBooks, setBagBooks] = useState(sampleBagBooks)
  const [shelfBooks, setShelfBooks] = useState(sampleShelfBooks)
  const [selectedBookId, setSelectedBookId] = useState()
  const selectedBook = shelfBooks.find(
    (shelfBook) => shelfBook.id === setSelectedBookId
  )
  useEffect(() => {
    console.log(bagBooks)
    console.log(selectedBook)
    console.log(shelfBooks)
  }, [bagBooks, selectedBook, shelfBooks])

  const bookBagContextValue = {
    handleAddToBagFromShelf,
    handleBookSelect,
    handleBookDeleteFromShelf,
    handleMoveToShelfFromBag,
  }

  function handleAddToBagFromShelf(id) {
    const newBagBook = shelfBooks.find((shelfBook) => shelfBook.id === id)
    setSelectedBookId(newBagBook.id)
    setBagBooks([...bagBooks, newBagBook])
    setShelfBooks(shelfBooks.filter((shelfBook) => shelfBook.id !== id))
  }

  function handleBookSelect(id) {
    setSelectedBookId(id)
  }

  function handleMoveToShelfFromBag(id) {
    const bookFromBag = bagBooks.find((bagBook) => bagBook.id === id)
    setSelectedBookId(bookFromBag.id)
    setShelfBooks([...shelfBooks, bookFromBag])
    setBagBooks(bagBooks.filter((bagBook) => bagBook.id !== id))
  }

  function handleBookDeleteFromShelf(id) {
    if (selectedBookId != null && selectedBookId === id) {
      setSelectedBookId(undefined)
    }
    setShelfBooks(shelfBooks.filter((shelfBook) => shelfBook.id !== id))
  }

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/search-page">
          <SearchPage />
        </Route>
      </Switch>
      <WelcomeMessage />

      <bookBagContext.Provider value={bookBagContextValue}>
        <ShelfBagWrapper bagBooks={bagBooks} shelfBooks={shelfBooks} />
      </bookBagContext.Provider>
    </Router>
  )
}

const sampleBagBooks = [
  {
    id: 1,
    title: "Benjamin Flanklin",
    author: "Walter Isaacson",
    allPages: 602,
    currentPage: 364,
    imageURL: "../images/benfranklin.jpg",
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "Jrr. Tolkien",
    allPages: 340,
    currentPage: 201,
    imageURL: "../images/hobbit.jpg",
  },
]

const sampleShelfBooks = [
  {
    id: 3,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    allPages: 588,
    currentPage: 120,
    imageURL: "../images/jobs.jpg",
  },
  {
    id: 4,
    title: "Harry Potter",
    author: "J.K. Rowling",
    allPages: 251,
    currentPage: 1,
    imageURL: "../images/harry1.jpg",
  },
  {
    id: 5,
    title: "Deep Work",
    author: "Carl Mark",
    allPages: 289,
    currentPage: 17,
    imageURL: "../images/deepwork.jpg",
  },
  {
    id: 6,
    title: "The Innovators",
    author: "Walter Isaacson",
    allPages: 400,
    currentPage: 10,
    imageURL: "../images/innovators.jpg",
  },
  {
    id: 7,
    title: "Elon Musk",
    author: "Ashlee Wange",
    allPages: 400,
    currentPage: 10,
    imageURL: "../images/elonmusk.jpg",
  },
  {
    id: 8,
    title: "Steve Noob",
    author: "Steve Noob",
    allPages: 400,
    currentPage: 10,
    imageURL: "../images/noob.jpg",
  },
]

export default App
