import React from 'react'
import Nav from '../Navbar/Nav'
import Home from '../Home/Home'
import Category from '../Category/Category'
import Destination from '../Destination/Destination'
import Guide from '../Guide/Guide'
import About from '../About/About'
import Newsletter from '../NewsLetter/NewsLetter'
import Sponser from '../Sponser/Sponser'

const Layout = () => {
  return (
    <div className='container mx-auto'>
        <Nav/>
        <Home/>
        <Category/>
        <Destination/>
        <Guide/>
        <About/>
        <Sponser/>
        <Newsletter/>
    </div>
  )
}

export default Layout