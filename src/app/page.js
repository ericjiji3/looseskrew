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
  const [front, setFront] = useState(false);
  const [back, setBack] = useState(false);

  const handleFront = (e) =>{
    setFront(!front);
    console.log('hi')
  }
  const handleBack = (e) =>{
    setBack(!back);
    console.log('hi')
  }

  return (
    <main className={styles.homeContainer}>
      <h2 className={`${sectar.className}`}>ALBUM OUT NOW</h2>
     <div className={styles.albumContainer}>
        <div className={front ? styles.frontActive : styles.front} onClick={handleFront}>
          <Image src={BackAlbum} width={300} height={300} alt="oops" />
        </div>
        <div className={back ? styles.backActive : styles.back} onClick={handleBack}>
          <Image src={FrontAlbum} width={300} height={300} alt="oops"/>
        </div>
     </div>
     <video className={styles.videoContainer} width="700" height="400" controls>
      <source src="https://d1sxqb6wcb4nin.cloudfront.net/skrewface-commerical.mp4" type="video/mp4"/>
     </video>
     <ReactPlayer url='https://d1sxqb6wcb4nin.cloudfront.net/skrewface-commerical.mp4' controls={true} className={styles.videoContainer} width={700} height={400}/>
    </main>
  )
}