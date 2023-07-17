import Albums from './Albums.js';
import {topTracks} from '../lib/spotify'

export default async function Music(){
    const resp = await topTracks();

    return(
        <div>
            <Albums albumsData={resp}/>
        </div>
    )
}