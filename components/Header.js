import Image from 'next/image'
import logo from '../contents/images/logo.png'
import SecondButton from '../atoms/SecondButton'

export default function Header() {
    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                    <a className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1" href="#">
                        <Image src={logo} alt="Logo" />
                    </a>
                </div>
                <div className="flex items-center relative">
                    <a className="mr-4" href="#">
                        <button className="bg-primaryBtn text-white font-bold py-2 px-4 rounded-full">
                            Sign Up
                        </button>
                    </a>
                    <div className="dropdown relative">
                        <SecondButton text = "Log In"/>
                    </div>
                </div>
            </div>
        </nav>
    )
}