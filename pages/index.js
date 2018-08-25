import React from 'react'

import '../styles/index.scss'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import WeBelieveIn from '../components/WeBelieveIn'
import WeProvide from '../components/WeProvide'
import Info from '../components/Info'

export default () => {
  return (
    <>
      <Navbar />
      <Header />
      <WeBelieveIn />
      <WeProvide />
      <Info />
    </>
  )
}
