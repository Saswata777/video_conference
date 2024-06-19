import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import UserCount from '../Components/usercount/UserCount'
import Industries from '../Components/industry/Industries'


const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <UserCount/>
        <Industries/>
    </div>
  )
}

export default Home