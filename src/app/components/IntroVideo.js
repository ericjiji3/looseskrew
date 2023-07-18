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
      url="https://d1sxqb6wcb4nin.cloudfront.net/introVidCutMorer.mp4"
      muted={true}
      controls={false}
      playing={true}
      playsinline={true}
      loop={false}

    />);
    const fadeOut = setTimeout(()=>{
        finishVid()
        setFadeVid(true)
    }, 1500);
    const hide = setTimeout(()=>{
        finishVid()
        setNoVid(true)
    }, 1900);
    return ()=>{
        clearTimeout(fadeOut, hide)
    }
  }, [finishVid])
    return(
        <div className={`intro-container ${fadeVid ? "fade" : ""} ${noVid ? "none" : ""}`}>
            {video}
        </div>
    )
}