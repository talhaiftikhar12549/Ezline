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
  // const targetRef = useRef(null);
  // const [divPosition, setDivPosition] = useState("sticky")
  // const [divHeight, setDivHeight] = useState(0)
  // const [hasTriggered, setHasTriggered] = useState(false);  // State to track trigger status


  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (hasTriggered) return;
  //     setDivHeight(targetRef.current.clientHeight)
  //     console.log(divHeight)

  //     if (divHeight) {
  //       console.log('Element touched the top of the screen!');
  //       setDivPosition("fixed")
  //       setHasTriggered(true);  // Set trigger flag to true
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);  // Cleanup
  //   };
  // }, [hasTriggered]);  // Depend on `hasTriggered`


  const targetRef = useRef(null);
  const [divPosition, setDivPosition] = useState("sticky");
  const [bgColor, setBgColor] = useState("#181828")
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasTriggered) return;

      const rect = targetRef.current.getBoundingClientRect(); // Get position relative to viewport

      if (rect.top <= 0) {  // Check if element has reached the top of the viewport
        setDivPosition("fixed");
setBgColor("#010102")
        setHasTriggered(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);  
    };
  }, [hasTriggered]);

  return (
    <>
      <div className='h-[100vh] w-[100%]'>
        <div className='' ref={targetRef}>
          <NavBar />
        </div>

        <div style={{ position: divPosition, backgroundColor: bgColor }} className='w-[100%] top-0 z-10'>

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
