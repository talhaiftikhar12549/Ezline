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
import MotoSection from './components/MotoSection'
import OurClient from './components/OurClient'
import MainFooter from './components/MainFooter'
import awardPic from "./assets/award-pic.png"

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
    <MotoSection/>
    <OurClient/>
    <MainFooter/>
    <div className='fixed left-24 bottom-28'>
    <img src={awardPic} width="25%" height="25%" />
    </div>
    </div>
    </>
  )
}

export default App
