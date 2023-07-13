import Image from 'next/image'
import styles from './page.module.css'
import FrontAlbum from '../../public/album-front.jpeg'
import BackAlbum from '../../public/album-back.jpeg'

export default function Home() {
  return (
    <main className={styles.homeContainer}>
     HOMEHOMEHOME
     <div className={styles.albumContainer}>
        <Image src={BackAlbum} width={300} height={300} alt="oops"/>
        <Image src={FrontAlbum} width={300} height={300} alt="oops"/>
     </div>
     <video controls width={700} height={400} src={require('../../public/skrewface-commerical.mp4')} type='video/mp4' preload="metadata"/>
    </main>
  )
}