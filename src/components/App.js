import React, { useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Header from "./Header.js"
import SearchPage from "./SearchPage.js"
import ShelfBagWrapper from "./ShelfBagWrapper.js"
import WelcomeMessage from "./WelcomeMessage.js"
import "../css/app.css"
import MobileSearchBox from "./MobileSearchBox.js"
import axios from "axios"

const BAG_BOOKS_LOCAL_STORAGE_KEY = "myBookBag.bagBooks"
const SHELF_BOOKS_LOCAL_STORAGE_KEY = "myBookBag.shelfBooks"
const SEARCH_URI = "https://www.googleapis.com/books/v1/volumes?q="

export const bookBagContext = React.createContext()
export const toggleClassContext = React.createContext()
export const searchBookContext = React.createContext()

function App() {
  const [bagBooks, setBagBooks] = useState([])
  const [shelfBooks, setShelfBooks] = useState([])
  const [selectedBookId, setSelectedBookId] = useState()
  const haveSomeBook = bagBooks.length > 0 || shelfBooks.length > 0
  const [toggleClass, setToggleClass] = useState(false)
  const [shelfHighLight, setShelfHighLight] = useState(false)
  const [bookData, setBookData] = useState([])
  const [searchBooks, setSearchBooks] = useState([])
  const [searchInputValue, setSearchInputValue] = useState("")
  const [startIndex, setStartIndex] = useState(0)
  const [totalSearchItems, setTotalSearchItems] = useState(0)

  const [loading, setLoading] = useState(true)

  function handleNextPageInSearchBook() {
    setStartIndex((prevStartIndex) => prevStartIndex + 21)
  }
  function handlePrevPageInSearchBook() {
    setStartIndex((prevStartIndex) => prevStartIndex - 21)
  }

  function handleGetSearchBooksData(volumes) {
    setSearchBooks(
      volumes.map((volume) => {
        return {
          id: volume.id,
          title: volume.volumeInfo.title,
          author: volume.volumeInfo.authors
            ? volume.volumeInfo.authors.join(", ")
            : "N/A",
          allPages: volume.volumeInfo.pageCount
            ? volume.volumeInfo.pageCount
            : "N/A",
          currentPage: 1,
          imageURL: volume.volumeInfo.imageLinks
            ? volume.volumeInfo.imageLinks.thumbnail
            : "../images/mybookbag-image-cover-sample-01.jpg",
          description: volume.volumeInfo.description
            ? volume.volumeInfo.description
            : false,
          status: "onRead",
        }
      })
    )
  }

  function handleGetSearchInputValue(inputValue) {
    setSearchInputValue(inputValue)
  }

  function handleClearSearchInputValue() {
    setSearchInputValue("")
  }

  useEffect(() => {
    console.log(searchBooks)
  }, [searchBooks])

  useEffect(() => {
    console.log(bookData)
    handleGetSearchBooksData(bookData)
  }, [bookData])

  useEffect(() => {
    setLoading(true)
    let cancel
    axios
      .get(
        `${SEARCH_URI}${searchInputValue}&printType=books&startIndex=${startIndex}&maxResults=20`,
        {
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        }
      )
      .then((res) => {
        setLoading(false)
        if (!res.data.items) return
        setTotalSearchItems(res.data.totalItems)
        setBookData(res.data.items.map((i) => i))
      })

    return () => cancel()
  }, [searchInputValue, startIndex])

  //load data
  useEffect(() => {
    const bagBookJson = localStorage.getItem(BAG_BOOKS_LOCAL_STORAGE_KEY)
    if (bagBookJson != null) setBagBooks(JSON.parse(bagBookJson))
    const shelfBookJson = localStorage.getItem(SHELF_BOOKS_LOCAL_STORAGE_KEY)
    if (shelfBookJson != null) setShelfBooks(JSON.parse(shelfBookJson))
  }, [])

  //save data
  useEffect(() => {
    localStorage.setItem(BAG_BOOKS_LOCAL_STORAGE_KEY, JSON.stringify(bagBooks))
    localStorage.setItem(
      SHELF_BOOKS_LOCAL_STORAGE_KEY,
      JSON.stringify(shelfBooks)
    )
  }, [bagBooks, shelfBooks])

  const searchBookContextValue = {
    handleGetSearchInputValue,
    handleClearSearchInputValue,
    handleNextPageInSearchBook,
    handlePrevPageInSearchBook,
    handleMoveToShelfFromSearch,
  }

  const bookBagContextValue = {
    handleAddToBagFromShelf,
    handleBookSelect,
    handleBookDeleteFromShelf,
    handleMoveToShelfFromBag,
  }

  const toggleClassContextValue = {
    handleActiveShelfHighLight,
    handleToggleClassHide,
  }

  function handleToggleClassHide() {
    setToggleClass(!toggleClass)
  }

  function handleActiveShelfHighLight() {
    setTimeout(() => {
      setShelfHighLight(false)
    }, 1500)
    setShelfHighLight(true)
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

  function handleMoveToShelfFromSearch(id) {
    const bookFromSearch = searchBooks.find(
      (searchBook) => searchBook.id === id
    )
    setSelectedBookId(bookFromSearch.id)
    setShelfBooks([...shelfBooks, bookFromSearch])
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
      <searchBookContext.Provider value={searchBookContextValue}>
        <Header />
        <MobileSearchBox />
        {/* <Switch>
          <Route path="/search-page"> */}
        {searchInputValue && (
          <SearchPage
            loading={loading}
            searchBooks={searchBooks}
            searchInputValue={searchInputValue}
            startIndex={startIndex}
            totalSearchItems={totalSearchItems}
            shelfBooks={shelfBooks}
          />
        )}
        {/* </Route>
        </Switch> */}
      </searchBookContext.Provider>
      {!haveSomeBook && <WelcomeMessage />}

      <bookBagContext.Provider value={bookBagContextValue}>
        <toggleClassContext.Provider value={toggleClassContextValue}>
          {haveSomeBook && (
            <ShelfBagWrapper
              bagBooks={bagBooks}
              shelfBooks={shelfBooks}
              toggleClass={toggleClass}
              shelfHighLight={shelfHighLight}
            />
          )}
        </toggleClassContext.Provider>
      </bookBagContext.Provider>
    </Router>
  )
}

// const sampleBagBooks = [
//   {
//     id: 1,
//     title: "Benjamin Flanklin",
//     author: "Walter Isaacson",
//     allPages: 602,
//     currentPage: 364,
//     imageURL: "../images/benfranklin.jpg",
//     status: "onRead",
//   },
//   {
//     id: 2,
//     title: "The Hobbit",
//     author: "Jrr. Tolkien",
//     allPages: 340,
//     currentPage: 201,
//     imageURL: "../images/hobbit.jpg",
//     status: "finish",
//   },
// ]

// const sampleShelfBooks = [
//   {
//     id: 3,
//     title: "Steve Jobs",
//     author: "Walter Isaacson",
//     allPages: 588,
//     currentPage: 120,
//     imageURL: "../images/jobs.jpg",
//   },
//   {
//     id: 4,
//     title: "Harry Potter",
//     author: "J.K. Rowling",
//     allPages: 251,
//     currentPage: 1,
//     imageURL: "../images/harry1.jpg",
//   },
//   {
//     id: 5,
//     title: "Deep Work",
//     author: "Carl Mark",
//     allPages: 289,
//     currentPage: 17,
//     imageURL: "../images/deepwork.jpg",
//   },
//   {
//     id: 6,
//     title: "The Innovators",
//     author: "Walter Isaacson",
//     allPages: 400,
//     currentPage: 10,
//     imageURL: "../images/innovators.jpg",
//   },
//   {
//     id: 7,
//     title: "Elon Musk",
//     author: "Ashlee Wange",
//     allPages: 400,
//     currentPage: 10,
//     imageURL: "../images/elonmusk.jpg",
//   },
//   {
//     id: 8,
//     title: "Steve Noob",
//     author: "Steve Noob",
//     allPages: 400,
//     currentPage: 10,
//     imageURL: "../images/noob.jpg",
//   },
// ]

export default App
