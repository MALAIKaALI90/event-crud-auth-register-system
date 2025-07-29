import React from 'react'
import HeroSection from '../Components/Hero'
import EventCards from '../Components/Events'
import { Routes, Route } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <Routes>
   <Route path='/' element={<HeroSection/>}/>
     <Route  path="/events" element={<EventCards/>} />
      </Routes>
    </div>
  )
}

export default HomePage
