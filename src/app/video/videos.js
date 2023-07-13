'use client'
import Image from 'next/image';
import playIcon from '../../../public/icons/play-icon.png'
import fallbackThumbnail from '../../../public/album-front.jpeg';
import {useState, useEffect} from 'react';
import Video from './video.js';
import styles from './styles.module.css';

export default function Videos({ videos }){
    
    return (
      <div className={styles.videosContainer}>
           
            {
                videos.items.map((video, i) => {
                    if(video.snippet.thumbnails.standard != undefined){
                        console.log(video.snippet.thumbnails)
                    }
                    
                    return(
                        <Video videoId={video.snippet.resourceId.videoId} videoTitle={video.snippet.title} videoThumbnail={video.snippet.thumbnails.high.url} fallback={video.snippet.thumbnails.standard != undefined ? true : false}/>
                    )
                })
            } 
        </div>
    )
}

