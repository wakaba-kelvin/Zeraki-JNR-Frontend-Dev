import React from 'react'
import AppBar from '../appBar/AppBar'
import AppBarProfile from '../appBar/AppBarProfile'
import AppBarLang from '../appBar/AppBarLang'

function Navbar() {
  return (
    <div className="navbar">
        <AppBar/>
        <AppBarLang/>
        <AppBarProfile/>
    </div>
  )
}

export default Navbar