import Image from 'next/image'
import styles from './page.module.css'
import FrontAlbum from '../../public/album-front.jpeg'
import BackAlbum from '../../public/album-back.jpeg'

export default function Home() {
  return (
    <main className={styles.homeContainer}>
     HOMEHOMEHOME
     <div className={styles.albumContainer}>
        <Image src={BackAlbum} width={300} height={300}/>
        <Image src={FrontAlbum} width={300} height={300}/>
     </div>
     <video controls width={700} height={400} preload="metadata">
        <source src={require('../../public/skrewface-commerical.mp4#t=1')} type="video/mp4"></source>
     </video>
    </main>
  )
}