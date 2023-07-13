'use client'
import Image from 'next/image';
import playIcon from '../../../public/icons/play-icon.png'
import fallbackThumbnail from '../../../public/album-front.jpeg';
import {useState, useEffect} from 'react';
import styles from './styles.module.css';

export default function Videos(props){
    const [showYoutube, setShowYoutube] = useState(false);

    const handleClick = event =>{
        console.log(event.currentTarget.id);
        setShowYoutube(true);
    }
 
    return (
        <div className={styles.videoContainer} id={props.videoId} onClick={handleClick}>
            {showYoutube ?
                <div className={styles.youtubeVideo}>
                    <iframe width="480" height="360" src={"https://www.youtube.com/embed/" + props.videoId} allowfullscreen></iframe> 
                </div>
                :
                <div className={styles.fallbackVideo}>
                    <h4 className={styles.videoTitle}>{props.videoTitle}</h4>
                    <Image className={styles.playIcon} src={playIcon} width={50} height={50}/>
                    {props.fallback ? <Image className={styles.thumbnail} src={props.videoThumbnail} width={480} height={360}/> : <Image className={styles.thumbnail} src={fallbackThumbnail} width={480} height={360}/>}
                </div>
                
            }
            
            {/* <Image src={video.snippet.thumbnails.standard.url} width={500} height={200}/> */}
        </div>
        )   
}
{/* <iframe width="500" height="200" src={"https://www.youtube.com/embed/" + video.snippet.resourceId.videoId} allowfullscreen></iframe> */}
