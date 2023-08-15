import Head from 'next/head'
import { Canvas } from '@react-three/fiber';
import Page from '../components/Page'
import { Scroll, ScrollControls } from "@react-three/drei";
import Elements from '../components/Elements';
import ScrollManager from '../components/ScrollManager';
import { useState } from 'react';




export default function Home() {
  const [section, setSection] = useState(0);
  return (
    <>
      <Head>
        <title>Casey van Roose</title>
        <meta name="description" content="personal website for casey van roose" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='w-screen h-screen fixed'>
          <Canvas shadows className='canvas fixed' > 
              <ScrollControls pages={6} damping={0.2}> 
              <ScrollManager section={section} onSectionChange={setSection} />
              <Elements section={section} />
              <Scroll html>
              <Page section={section} onSectionChange={setSection} /> 
              </Scroll>
            </ScrollControls> 
          </Canvas>
          <Menu section={section} onSectionChange={setSection} />   
        </div>
      </main>
    </>
  )
}
const Menu = ({section, onSectionChange}) => {
  return (
      <div className={`fixed top-0 z-10 backdrop-blur-md w-full ${section === 0 ? 'invisible' : ''}`}>  
          <div className="flex w-full gap-4 justify-center text-white py-1">
              <div onClick={() => onSectionChange(1)} className={`text-base font-body ${section === 1 ? 'underlined' : ''}`}>About</div>  
              <div onClick={() => onSectionChange(2)} className={`text-base font-body ${section === 2 || section === 3 ? 'underlined' : ''}`}>Skills</div>
              <div onClick={() => onSectionChange(4)} className={`text-base font-body ${section === 4 ? 'underlined' : ''}`}>Work Experience</div>
              <div onClick={() => onSectionChange(5)} className={`text-base font-body ${section === 5 || section === 6 ? 'underlined' : ''}`}>Contact</div>
          </div>
      </div>
  )
}