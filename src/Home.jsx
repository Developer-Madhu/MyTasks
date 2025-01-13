import React from 'react'
import Navbar from './Components/Navbar'
import MainText from './Components/MainText'
import Search from './Components/Search'
import Footer from './Components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <MainText />
        <Search />
        <Footer />
    </div>
  )
}

export default Home