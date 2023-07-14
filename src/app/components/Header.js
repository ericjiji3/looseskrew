import Link from 'next/link'
import localFont from 'next/font/local'
import styes from './header.css'
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
        </div>
        
    )
}