
async function getData(){
    const resp = await fetch('')
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }

    return res.json();
}

export default function Music(){
    return(
        <div>
            MUSIC MUSIC MUSIC
        </div>
    )
}