'use client'
import localFont from 'next/font/local'
import styles from './styles.module.css'

const sectar = localFont({src: '../fonts/Sectar.otf'})
export default function Shop(){
    return(
        <div className={`${styles.shop} ${sectar.className}`}>
            COMING SOON
        </div>
    )
}