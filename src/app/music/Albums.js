import Image from 'next/image'
import styles from './styles.module.css';

export default function Album({ albumsData }){
    return(
        <div className={styles.albumsContainer}>
            {
                albumsData.items.map((album, index) =>{
                    console.log(album)
                    return(
                        <div key={index} className={styles.albumContainer}>
                            <a href={album.external_urls.spotify} className={styles.albumLink}>
                                
                                <Image
                                    src={album.images[1].url}
                                    width={album.images[1].width}
                                    height={album.images[1].height}
                                    alt="oops"
                                />
                                <span>{album.name}</span>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}