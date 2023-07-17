"use client"
import React from 'react'
import ReactPlayer from 'react-player'
import {useState, useEffect} from 'react';
import styles from '../page.module.css'

export default function Video({urlText}){
    // const [video, setVideo] = useState(null);
    // useEffect(()=>{
    //   setVideo(
      
    //   )
    // }, [])
    
    return(
        <ReactPlayer
        url={urlText}
        width={700}
        height={400}
        controls={true}
        className={styles.videoContainer}
        
       />
    )
}