import React, {useState} from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-2xl md:text-3xl font-heading">
                    BamPie
                </div>
                <button
                    className="md:hidden text-white"
                    onClick={() => setOpen(!open)}
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
                <div className="hidden md:flex space-x-4 text-base md:text-xl font-body">
                    <a
                        href="#"
                        className={`text-white ${
                            open ? "hover:text-gray-300" : "hover:text-white"
                        }`}
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className={`text-white ${
                            open ? "hover:text-gray-300" : "hover:text-white"
                        }`}
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className={`text-white ${
                            open ? "hover:text-gray-300" : "hover:text-white"
                        }`}
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        className={`text-white ${
                            open ? "hover:text-gray-300" : "hover:text-white"
                        }`}
                    >
                        Contact
                    </a>
                </div>
            </div>
            {open && (
                <div className="md:hidden py-2 px-4">
                    <a
                        href="#"
                        className="block text-white hover:text-gray-300 py-2 px-4 text-base font-body"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="block text-white hover:text-gray-300 py-2 px-4 text-base font-body"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="block text-white hover:text-gray-300 py-2 px-4 text-base font-body"
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        className="block text-white hover:text-gray-300 py-2 px-4 text-base font-body"
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
}
