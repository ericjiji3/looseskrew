import Link from 'next/link'
import localFont from 'next/font/local'
import Image from 'next/image'
import styles from './header.css'
import Ig from '../../../public/icons/ig.png';
import Spotify from '../../../public/icons/spotify.png';
import Youtube from '../../../public/icons/youtube.png';
import Apple from '../../../public/icons/apple.png';

const helpMe = localFont({src: '../fonts/HelpMe.ttf'})
const sectar = localFont({src: '../fonts/Sectar.otf'})
export default function Header(){
    return (
        <div className="header">
            <div className="logo">
                <h2 className={`header-text ${helpMe.className}`}>DA$H</h2>
            </div>
            <div className="nav-container">
                <Link href="/" className={`nav-item ${sectar.className}`}>HOME</Link>
                <Link href="/music" className={`nav-item ${sectar.className}`}>MUSIC</Link>
                <Link href="/video" className={`nav-item ${sectar.className}`}>VIDEOS</Link>
                <Link href="/shop" className={`nav-item ${sectar.className}`}>SHOP</Link>
            </div>
            <div className="social-container">
                <a href="https://www.instagram.com/heirdash/?hl=en" target="_blank"><Image src={Ig}/></a>
                <a href="https://www.youtube.com/channel/UCFfqTS99AnOesxPFkD8UXyQ" target="_blank"><Image src={Youtube}/></a>
                <a href="https://open.spotify.com/artist/6xFrZbce9KH5APjBe4QVNa" target="_blank"><Image src={Spotify}/></a>
                <a href="https://music.apple.com/us/artist/da%24h/431164645" target="_blank"><Image src={Apple}/></a>
            </div>
        </div>
        
    )
}