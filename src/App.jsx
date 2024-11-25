import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import AnimationSection from './components/AnimationSection'
import AboutUsSection from './components/AboutUsSection'
import OurProjectManagement from './components/OurProjectManagementSection'

function App() {


  return (
    <>
    <div className='h-[100vh]'>
    <NavBar/>
    <AnimationSection/>
    <AboutUsSection/>
    <OurProjectManagement/>
    </div>
    </>
  )
}

export default App
