import Image from 'next/image'
import styles from './page.module.css'
import FrontAlbum from '../../public/album-front.jpeg'
import BackAlbum from '../../public/album-back.jpeg'
import Video from './components/Video.js';
import localFont from 'next/font/local'

const sectar = localFont({src: './fonts/Sectar.otf'})
export default function Home() {


  return (
    <main className={styles.homeContainer}>
      <h2 className={sectar.className}>ALBUM OUT NOW</h2>
     <div className={styles.albumContainer}>
        <Image src={BackAlbum} width={300} height={300} alt="oops"/>
        <Image src={FrontAlbum} width={300} height={300} alt="oops"/>
     </div>
     <Video urlText="https://d1sxqb6wcb4nin.cloudfront.net/skrewface-commerical.mp4"/>
    </main>
  )
}