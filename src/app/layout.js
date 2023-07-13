"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react'
import ReactPlayer from 'react-player'
import {useState, useEffect} from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [video, setVideo] =useState(null);
  useEffect(()=>{
    setVideo(<ReactPlayer
      className="bg-video"
      url="https://d1sxqb6wcb4nin.cloudfront.net/bg-video.mp4"
      loop={true}
      muted={true}
      controls={false}
      playing={true}
      width="500"
      height="500"
    />);
    
  }, [])
  return (
    <html lang="en">
      <body>
        {/* <video className="bg-video" src={require('https://d1sxqb6wcb4nin.cloudfront.net/bg-video.mp4')} type='video/mp4' autoPlay={true} loop={true} playsInline muted width="100%"/> */}
        {video}
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
