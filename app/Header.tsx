import Link from "next/link";

function Header() {
    return ( <header className="p-5 bg-gray-500">
        <Link href="/" className="px-2 py-1 bg-white text-gray-800 rounded-lg">
        Home</Link>
    </header> );
}

export default Header;