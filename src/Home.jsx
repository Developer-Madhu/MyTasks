import React from 'react'
import Navbar from './Components/Navbar'
import MainText from './Components/MainText'
import Search from './Components/Search'
import Footer from './Components/Footer'
import Analytics from './Components/Analytics'

const Home = () => {
  return (
    <div>
        <Navbar />
        <MainText />
        <Search />
        <br />
        <Analytics />
        <br />
        <Footer />
    </div>
  )
}

export default Home