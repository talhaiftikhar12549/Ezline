import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import AnimationSection from './components/AnimationSection'

function App() {


  return (
    <>
    <div className='h-[100vh]'>
    <NavBar/>
    <AnimationSection/>
    </div>
    </>
  )
}

export default App
