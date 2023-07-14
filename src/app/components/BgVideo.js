"use client"
import React from 'react'
import ReactPlayer from 'react-player'
import {useState, useEffect} from 'react';

export default function BgVideo(){
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
    return(
        <div>
            {video}
        </div>
    )
}