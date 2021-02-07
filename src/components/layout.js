import React from "react"
import Navbar from "./Navbar"
import Footer from "./footer"
import './layout.css'
const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default layout
