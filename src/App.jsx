import { useState, useEffect, useRef } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AnimationSection from './components/AnimationSection';
import AboutUsSection from './components/AboutUsSection';
import OurProjectManagement from './components/OurProjectManagementSection';
import IphoneSection from './components/IphoneSection';
import SoftwareDevlifeCycle from './components/SoftwareDevLifeCycle';
import MotoSection from './components/MotoSection';
import OurClient from './components/OurClient';
import MainFooter from './components/MainFooter';
import awardPic from "./assets/award-pic.png";
import AnimationSectionNavBar from './components/AnimationSectionNavBar';

function App() {
  const targetRef = useRef(null);
  const [divPosition, setDivPosition]=useState("sticky")
  const [hasTriggered, setHasTriggered] = useState(false);  // State to track trigger status

  useEffect(() => {
    const handleScroll = () => {
      if (hasTriggered) return;  // Exit if already triggered

      const rect = targetRef.current.getBoundingClientRect();
      if (rect.top <= 0) {
        // console.log('Element touched the top of the screen!');
        setDivPosition("fixed")
        setHasTriggered(true);  // Set trigger flag to true
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);  // Cleanup
    };
  }, [hasTriggered]);  // Depend on `hasTriggered`

  return (
    <>
      <div className='h-[100vh] w-[100%]'>
        <NavBar />
        <div ref={targetRef} style={{position:divPosition}} className='bg-[#010102] w-[100%] top-0 z-10'>
          <AnimationSectionNavBar />
        </div>
        <AnimationSection />
        <AboutUsSection />
        <OurProjectManagement />
        <IphoneSection />
        <SoftwareDevlifeCycle />
        <MotoSection />
        <OurClient />
        <MainFooter />
        <div className='fixed left-24 bottom-28'>
          <img src={awardPic} width="25%" height="25%" />
        </div>
      </div>
    </>
  );
}

export default App;
