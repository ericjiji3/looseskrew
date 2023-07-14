import Image from 'next/image'
import styles from './styles.module.css';
import localFont from 'next/font/local'

const sectar = localFont({src: '../fonts/Sectar.otf'})
export default function Album({ albumsData }){
    return(
        <div className={styles.albumsContainer}>
            {
                albumsData.items?.map((album, index) =>{
                    
                    if(album != undefined){
                        return(
                        
                            <div key={index} className={styles.albumContainer}>
                                <a href={album.external_urls.spotify} className={styles.albumLink}>
                                    
                                    <Image
                                        src={album.images[1].url}
                                        width={album.images[1].width}
                                        height={album.images[1].height}
                                        alt="oops"
                                    />
                                    <span className={sectar.className}>{album.name}</span>
                                </a>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}