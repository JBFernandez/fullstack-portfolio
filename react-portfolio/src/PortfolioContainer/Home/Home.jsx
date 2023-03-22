import React from 'react'
import { Profile } from './Profile/Profile'
import { Header } from './Header/Header'
import Footer  from './Footer/Footer'
import './home.css'

export const Home = () => {
  return (
    <div className='home-container' >
        <Header />
        <Profile/>
        <Footer />      
    </div>

    )
}
