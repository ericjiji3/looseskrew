import Link from 'next/link'

export default function Header(){
    return (
        <div className="nav-container">
            <Link href="/">Home</Link>
            <Link href="/music">Music</Link>
            <Link href="/video">Videos</Link>
            <Link href="/shop">Shop</Link>
        </div>
    )
}