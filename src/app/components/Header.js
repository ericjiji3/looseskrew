'use client'
import Link from 'next/link'
import localFont from 'next/font/local'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './header.css'
import Ig from '../../../public/icons/ig.png';
import Spotify from '../../../public/icons/spotify.png';
import Youtube from '../../../public/icons/youtube.png';
import Apple from '../../../public/icons/apple.png';

const helpMe = localFont({src: '../fonts/HelpMe.ttf'})
const sectar = localFont({src: '../fonts/Sectar.otf'})
export default function Header(){
    const currentRoute = usePathname();

    return (
        <div className="header">
            <div className="logo">
                <h2 className={`header-text ${helpMe.className}`}>DA$H</h2>
            </div>
            <div className="nav-container">
                <Link href="/" className={currentRoute === "/" ? `nav-item active ${sectar.className}` : `nav-item ${sectar.className}`}>HOME</Link>
                <Link href="/music" className={currentRoute === "/music" ? `nav-item active ${sectar.className}` : `nav-item ${sectar.className}`}>MUSIC</Link>
                <Link href="/video" className={currentRoute === "/video" ? `nav-item active ${sectar.className}` : `nav-item ${sectar.className}`}>VIDEOS</Link>
                <Link href="/shop" className={currentRoute === "/shop" ? `nav-item active ${sectar.className}` : `nav-item ${sectar.className}`}>SHOP</Link>
            </div>
            <div className="social-container">
                <a href="https://www.instagram.com/heirdash/?hl=en" target="_blank" ><Image src={Ig} alt="oops"/></a>
                <a href="https://www.youtube.com/channel/UCFfqTS99AnOesxPFkD8UXyQ" target="_blank"><Image src={Youtube} alt="oops"/></a>
                <a href="https://open.spotify.com/artist/6xFrZbce9KH5APjBe4QVNa" target="_blank"><Image src={Spotify} alt="oops"/></a>
                <a href="https://music.apple.com/us/artist/da%24h/431164645" target="_blank"><Image src={Apple} alt="oops"/></a>
            </div>
        </div>
        
    )
}