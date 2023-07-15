"use client"
import React from 'react'
import ReactPlayer from 'react-player'
import {useState, useEffect} from 'react';

export default function IntroVideo({finishVid}){
    const [video, setVideo] =useState(null);
    const [fadeVid, setFadeVid] = useState(false);
    const [noVid, setNoVid] = useState(false);

  useEffect(()=>{
    setVideo(<ReactPlayer
      className="intro-video"
      url="https://d1sxqb6wcb4nin.cloudfront.net/introVidCut.mp4"
      muted={true}
      controls={false}
      playing={true}
      loop={false}
      width="500"
      height="500"
    />);
    const fadeOut = setTimeout(()=>{
        finishVid()
        setFadeVid(true)
    }, 5500);
    const hide = setTimeout(()=>{
        finishVid()
        setNoVid(true)
    }, 5900);
    return ()=>{
        clearTimeout(fadeOut, hide)
    }
  }, [])
    return(
        <div className={`intro-container ${fadeVid ? "fade" : ""} ${noVid ? "none" : ""}`}>
            {video}
        </div>
    )
}