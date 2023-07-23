import React, {useState} from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        // <nav className="bg-gradient-to-r from-amber-300 to-amber-900 p-4">
        <nav className="bg-gradient-to-r bg-bam p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-pie text-shadow font-bold text-2xl md:text-3xl font-heading font-mono">
                    BamPie
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setOpen(!open)}
                >
                    <svg
                        className="h-6 w-6 text-pie"
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

                {/* Desktop menu */}
                <div className="hidden md:flex space-x-4 text-base md:text-l font-mono font-body ">
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
                        Contact
                    </a>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden py-2 px-4">
                    <a
                        href="#"
                        className="block text-white hover:text-gray-300 py-2 px-4 text-base font-mono font-body"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="block text-white hover:text-gray-300 py-2 px-4 text-base font-mono font-body"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="block text-white hover:text-gray-300 py-2 px-4 text-base font-mono font-body"
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
}
