"use client"
import Image from 'next/image'
import styles from './page.module.css'
import FrontAlbum from '../../public/album-front.jpeg'
import BackAlbum from '../../public/album-back.jpeg'
import React from 'react'
import ReactPlayer from 'react-player'
import {useState, useEffect} from 'react';
import localFont from 'next/font/local'

const sectar = localFont({src: './fonts/Sectar.otf'})
export default function Home() {
  const [video, setVideo] = useState(null);
  useEffect(()=>{
    setVideo(
    <ReactPlayer
      url="https://d1sxqb6wcb4nin.cloudfront.net/skrewface-commerical.mp4"
      width='700px'
      height='400px'
      controls={true}
      className={styles.videoContainer}
      
     />
    )
  }, [])

  return (
    <main className={styles.homeContainer}>
      <h2 className={`${sectar.className}`}>ALBUM OUT NOW</h2>
     <div className={styles.albumContainer}>
        <Image src={BackAlbum} width={300} height={300} alt="oops"/>
        <Image src={FrontAlbum} width={300} height={300} alt="oops"/>
     </div>
     <video className={styles.videoContainer} src="https://d1sxqb6wcb4nin.cloudfront.net/skrewface-commerical.mp4" width="700" height="400" controls>
      <source src="https://d1sxqb6wcb4nin.cloudfront.net/skrewface-commerical.mp4" type="video/mp4"/>
     </video>
    </main>
  )
}