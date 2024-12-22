import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center shadow-md p-4 w-full fixed top-0 bg-white z-50">
            <h1 className="font-bold text-slate-700">Myanmar Festivals and States</h1>
            <div className="flex gap-5">
            <Link className="bounce-link" href={'/'}>Home</Link>
            <Link className="bounce-link3" href={'/state'} >States</Link>
            <Link className="bounce-link2" href={'/festivals'}>Festivals</Link>
            </div>
        </nav>
    )
}

export default Navbar;