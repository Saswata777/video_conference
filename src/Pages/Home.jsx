import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import UserCount from '../Components/usercount/UserCount'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <UserCount/>
    </div>
  )
}

export default Home