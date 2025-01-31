
import logo from "../assets/images/logo.png"

export default function Navbar () {

    return (
        <nav className="container mx-auto border-white w-full text-white my-4" >
            <div className="flex flex-row justify-between items-center " >
                <img src={logo} className=""  alt="" />
                <div className="flex flex-row  justify-center gap-3" >
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
                <div className="flex flex-row items-center gap-2" >
                    <button className="bg-black text-white px-6 rounded-md py-1" >sign up for free</button>
                    <button className="bg-white text-black px-6 rounded-md py-1" >login</button>
                </div>
            </div>
        </nav>
    )
}