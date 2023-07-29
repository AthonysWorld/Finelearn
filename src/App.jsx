import React from 'react'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Categories from './Components/Categories'
import Expert from './Components/Experts'
import Explore from './Components/Explore'
import Online from './Components/Online'
// import Popular from './Components/Popular'
import Compete from './Components/compete'
import Featured from './Components/featured'
import Publications from './Components/Publications'
import Recent from './Components/Recent'
import Reviews from './Components/Reviews'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <Categories/>
      <Expert/>
      <Explore/>
      <Online/>
      {/* <Popular/> */}
      <Compete/>
      <Featured/>
      <Publications/>
      <Recent/>
      <Reviews/>
      <Footer/>
      </div>
  )
}

export default App
