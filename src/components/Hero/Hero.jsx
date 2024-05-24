import React from 'react'
import { Dashboard } from '../../screens'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import DashboardScreen from '../../screens/dashboard/DashboardScreen'

function Hero() {
  return (
    <div className="Hero">
      <Sidebar/>
        <Navbar/>
        <DashboardScreen/>
        

    </div>
  )
}

export default Hero