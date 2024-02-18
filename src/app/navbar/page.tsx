import Image from "next/image"
import Link from "next/link"

const NavbarComponent = () => {
    return (

        <nav className="bg-black">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-start mx-auto p-4 gap-3">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <p className="text-4xl">NOCAUT</p>
                    {/* <Image src="https://flowbite.com/docs/images/logo.svg" width={8} height={8} alt="Flowbite Logo" /> */}
                </a>
                <ul className="flex gap-3">
                    <li className="text-2xl hover:text-[#4b1d24] hover:scale-110">
                        <Link href='/about'>Nosotros</Link>
                    </li>
                    <li className="text-2xl hover:text-[#4b1d24] hover:scale-110">
                        <Link href='/music'>Música</Link>
                    </li>
                    <li className="text-2xl hover:text-[#4b1d24] hover:scale-110">
                        <Link href='/news'>Noticias</Link>
                    </li>
                    <li className="text-2xl hover:text-[#4b1d24] hover:scale-110">
                        <Link href='/contact'>Contacto</Link>
                    </li>
                </ul>

            </div>
        </nav>

    )
}

export default NavbarComponent