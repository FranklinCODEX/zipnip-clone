
import { useState } from "react";
import logo from "../assets/images/logo.png"

export default function Navbar () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    }

    return (
        <nav className="container mx-auto border-white text-white my-4" >
            <div className="flex flex-row justify-between items-center px-2 lg:p-0 " >
                <img src={logo} className=""  alt="" />
                <div className="lg:flex sm flex-row hidden  justify-center gap-3" >
                    <span className="flex flex-row items-center space-x-2 px-2">
                        <p>Products</p>
                        <i className=" fa-solid fa-chevron-down text-white"></i>
                    </span>
                    <span className="flex flex-row items-center space-x-2 px-2">
                        <p>Pricing</p>
                        <i className=" fa-solid fa-chevron-down text-white"></i>
                    </span>
                    <span className="flex flex-row items-center space-x-2 px-2">
                        <p>Intégration</p>
                        <i className=" fa-solid fa-chevron-down text-white"></i>
                    </span>
                    <span className="flex flex-row items-center space-x-2 px-2">
                        <p>Resources</p>
                        <i className=" fa-solid fa-chevron-down text-white"></i>
                    </span>
                </div>
                <div className="lg:flex sm flex-row hidden items-center gap-2" >
                    <button className="bg-black text-white px-6 rounded-md py-1" >sign up for free</button>
                    <button className="bg-white text-black px-6 rounded-md py-1" >login</button>
                </div>

                <div onClick={openMenu}  className="sm:block lg:hidden" >
                    <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
                </div>
            </div>
        </nav>
    )
}