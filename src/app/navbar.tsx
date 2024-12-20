import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center shadow-md p-4">
            <h1 className="font-bold text-slate-700">Myanmar Festivals and States</h1>
            <div className="flex gap-5">
            <Link className="bounce-link" href={'/'}>Home</Link>
            <Link className="bounce-link2" href={'/festivals'}>Festivals</Link>
            <Link className="bounce-link3" href={'/about'} >States</Link>
            </div>
        </nav>
    )
}

export default Navbar;