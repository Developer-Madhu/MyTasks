import React from 'react'
import Navbar from './Components/Navbar'
import MainText from './Components/MainText'
import Search from './Components/Search'
import Tasks from './Components/Tasks'

const Home = () => {
  return (
    <div>
        <Navbar />
        <MainText />
        <Search />
        <Tasks />
    </div>
  )
}

export default Home