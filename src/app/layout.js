import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import BgVideo from './components/BgVideo'
import IntroVideo from './components/IntroVideo'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  
  return (
    <html lang="en" >
      <body>
        {/* <video className="bg-video" src={require('https://d1sxqb6wcb4nin.cloudfront.net/bg-video.mp4')} type='video/mp4' autoPlay={true} loop={true} playsInline muted width="100%"/> */}
        <IntroVideo/>
        <div className="fadeIn">
          <BgVideo/>
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
