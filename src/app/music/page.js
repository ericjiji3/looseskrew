import {topTracks} from '../lib/spotify';
import Albums from './Albums.js';


export default async function Music(){
    const resp = await topTracks();

    return(
        <div>
            <Albums albumsData={resp}/>
        </div>
    )
}