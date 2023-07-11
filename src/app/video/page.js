import {fetchData} from '../api/youtube';

async function getData(){
    const res = await fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UULFFfqTS99AnOesxPFkD8UXyQ&maxResults=50&key=' + process.env.YOUTUBE_API_KEY)
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
      const resJSON = res.json();

    return resJSON;
}
export default async function video(){
    const videos = await getData();
    console.log(videos);
    videos.items.forEach(video => {
        //console.log(video.snippet.resourceId.videoId);
    })
    console.log('GEKKI');
    return(
        <div>
            VIDEO VIDEO VIDEO
        </div>
    )
}

