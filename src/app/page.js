"use client"
import Image from 'next/image'
import styles from './page.module.css'
import FrontAlbum from '../../public/album-front.jpeg'
import BackAlbum from '../../public/album-back.jpeg'
import React from 'react'
import ReactPlayer from 'react-player'
import {useState, useEffect} from 'react';

export default function Home() {
  const [video, setVideo] = useState(null);
  useEffect(()=>{
    setVideo(
    <ReactPlayer
      url="https://d1sxqb6wcb4nin.cloudfront.net/skrewface-commerical.mp4"
      width={700}
      height={400}
      controls={true}
     />
    )
  }, [])

  return (
    <main className={styles.homeContainer}>
     HOMEHOMEHOME
     <div className={styles.albumContainer}>
        <Image src={BackAlbum} width={300} height={300} alt="oops"/>
        <Image src={FrontAlbum} width={300} height={300} alt="oops"/>
     </div>
     {/* <video controls width={700} height={400} src={require('/bg-video.mp4')} type='video/mp4' preload="metadata"/> */}
     {video}
    </main>
  )
}