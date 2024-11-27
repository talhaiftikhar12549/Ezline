import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import AnimationSection from './components/AnimationSection'
import AboutUsSection from './components/AboutUsSection'
import OurProjectManagement from './components/OurProjectManagementSection'
import IphoneSection from './components/IphoneSection'
import SoftwareDevlifeCycle from './components/SoftwareDevLifeCycle'

function App() {


  return (
    <>
    <div className='h-[100vh] w-[100%]'>
    <NavBar/>
    <AnimationSection/>
    <AboutUsSection/>
    <OurProjectManagement/>
    <IphoneSection/>
    <SoftwareDevlifeCycle/>
    </div>
    </>
  )
}

export default App
