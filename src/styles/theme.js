import { extendTheme } from '@chakra-ui/react';
import { League_Gothic, DM_Sans } from 'next/font/google';

const league = League_Gothic({subsets: ['latin']})
const dm = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700']
})


const theme = extendTheme({
  fonts: {
    heading: league.style.fontFamily,
    body: dm.style.fontFamily
  },
});

export default theme;