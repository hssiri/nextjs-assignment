import Link from "next/link"

export default function Navbar() {
    return (
    <div>
            <header className="bg-white">
                <nav className="flex justify-between items-center mx-auto p-4 bg-slate-100">
                    <div className="">
                        <ul className="flex item-center gap-4">
                            <li>
                                <Link href="/" className="no-underline hover:text-sky-500 ">Home</Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="no-underline hover:text-sky-500">Post</Link>
                            </li>
                            <li>
                                <Link href="/blogs" className="no-underline hover:text-sky-500">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <input className="bg-sky-200 focus:border-blue-500 px-5 py-2 rounded-full" placeholder="Search" />
                    </div>
                </nav>
            </header>
        </div>
        
        

    )
}