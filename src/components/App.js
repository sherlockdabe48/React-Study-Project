import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Header.js"
import SearchPage from "./SearchPage.js"
import ShelfBagWrapper from "./ShelfBagWrapper.js"
import WelcomeMessage from "./WelcomeMessage.js"
import "../css/app.css"
// const SEARCH_URI = "https://www.googleapis.com/books/v1/volumes?q="


function App() {
  const [bagBooks, setBagBooks] = useState(sampleBagBooks)
  const [shelfBooks, setShelfBooks] = useState(sampleShelfBooks)

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/search-page">
          <SearchPage />
        </Route>
      </Switch>
      <WelcomeMessage />
      <ShelfBagWrapper bagBooks={bagBooks} shelfBooks={shelfBooks} />
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
    id: 1,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    allPages: 588,
    currentPage: 120,
    imageURL: "../images/jobs.jpg",
  },
  {
    id: 2,
    title: "Harry Potter",
    author: "J.K. Rowling",
    allPages: 251,
    currentPage: 1,
    imageURL: "../images/harry1.jpg",
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Carl Mark",
    allPages: 289,
    currentPage: 17,
    imageURL: "../images/deepwork.jpg",
  },
  {
    id: 4,
    title: "The Innovators",
    author: "Walter Isaacson",
    allPages: 400,
    currentPage: 10,
    imageURL: "../images/innovators.jpg",
  },
  {
    id: 5,
    title: "Elon Musk",
    author: "Ashlee Wange",
    allPages: 400,
    currentPage: 10,
    imageURL: "../images/elonmusk.jpg",
  },
  {
    id: 6,
    title: "Steve Noob",
    author: "Walter Isaacson",
    allPages: 400,
    currentPage: 10,
    imageURL: "../images/noob.jpg",
  },
]

export default App
