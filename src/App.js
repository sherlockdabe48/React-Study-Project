import React from "react"
import Header from "./components/Header.jsx"
import ShelftBagWrapper from "./components/ShelftBagWrapper.jsx"
import WelcomeMessage from "./components/WelcomeMessage.jsx"
import "./css/app.css"

function App() {
  return (
    <>
      <Header />
      <WelcomeMessage />
      <ShelftBagWrapper />
    </>
  )
}

export default App
