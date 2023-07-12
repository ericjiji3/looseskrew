'use client'
import Image from 'next/image';
import playIcon from '../../../public/icons/play-icon.png'
import fallbackThumbnail from '../../../public/album-front.jpeg';


async function getData(){
    const res = await fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UULFFfqTS99AnOesxPFkD8UXyQ&maxResults=50&key=' + process.env.YOUTUBE_API_KEY, { next: { revalidate: 86400 } })
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }

    return res.json();
}

export default function video(){
    const videos = use(getData());
    console.log(videos);
    const handleClick = event => {
        console.log('CLICKCKCKCKKK');
    }

    return(
        <div className="videos-container">
            VIDEO VIDEO VIDEO
            {
                videos.items.map((video, i) => {
                    if(video.snippet.thumbnails.standard != undefined){
                        console.log(video.snippet.thumbnails)
                    }
                    
                    return(
                        <div className="video-container" id={video.snippet.resourceId.videoId} onClick={handleClick}>
                            <h4 className="video-title">{video.snippet.title}</h4>
                            <Image src={playIcon} width={50} height={50}/>
                            {video.snippet.thumbnails.standard != undefined ? <Image src={video.snippet.thumbnails.high.url} width={480} height={360}/> : <Image src={fallbackThumbnail} width={500} height={200}/>}
                            {/* <Image src={video.snippet.thumbnails.standard.url} width={500} height={200}/> */}
                        </div>
                    )
                })
            } 
            {/* <iframe width="500" height="200" src={"https://www.youtube.com/embed/" + video.snippet.resourceId.videoId} allowfullscreen></iframe> */}
            {/* <iframe width="1263" height="480" src="https://www.youtube.com/embed/ucpE4-Ei4F4" title="Da$H - &quot;Stain&quot; (prod. New Reign) [OFFICIAL AUDIO]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
    )
}

