import Head from 'next/head'
import { Canvas } from '@react-three/fiber';
import Page from './components/Page'
import { Scroll, ScrollControls } from "@react-three/drei";
import Elements from './components/Elements';
import ScrollManager from './components/ScrollManager';
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
              <Page onSectionChange={setSection} /> 
              </Scroll>
            </ScrollControls> 
          </Canvas>   
        </div>
      </main>
    </>
  )
}
