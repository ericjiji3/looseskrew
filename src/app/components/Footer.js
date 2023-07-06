import Link from 'next/link'

export default function Footer(){
    return (
        <div className="nav-container">
            <Link href="/">Home</Link>
            <Link href="/music">Music</Link>
            <Link href="/video">Videos</Link>
        </div>
    )
}