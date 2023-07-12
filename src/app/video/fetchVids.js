'use server'

export async function getData(){
    const res = await fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UULFFfqTS99AnOesxPFkD8UXyQ&maxResults=50&key=' + process.env.YOUTUBE_API_KEY, { next: { revalidate: 86400 } })
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }

    return res.json();
}