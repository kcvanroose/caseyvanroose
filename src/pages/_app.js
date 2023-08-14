
import '@/styles/globals.css'
import { League_Gothic, DM_Sans } from 'next/font/google';

const league = League_Gothic({
  subsets: ['latin'],
  variable: "--display-font"
})
const dm = DM_Sans({
    subsets: ['latin'],
    weight: ['400','500','700'],
    variable: "--body-font"
})


export default function App({ Component, pageProps }) {
  return (
    <div className={`${league.variable} ${dm.variable}`}>
   
      
        <Component {...pageProps} />
      
   
    </div>
  )
}
