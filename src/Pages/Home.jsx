import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import UserCount from '../Components/usercount/UserCount'
import Industries from '../Components/industry/Industries'
import BusinessPlan from '../Components/businessplan/BusinessPlan'


const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <UserCount/>
        <Industries/>
        <BusinessPlan/>
    </div>
  )
}

export default Home