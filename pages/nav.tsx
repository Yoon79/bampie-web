import React, {useState} from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        // <nav className="bg-gradient-to-r from-amber-300 to-amber-900 p-4">
        <nav className=" bg-bam p-3 border-b-2 border-pie">
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
                <div className="hidden md:flex space-x-4 text-base md:text-l font-bold">
                    <a
                        href="#new"
                        className={`text-pie hover:ring-pie hover:ring-2 rounded-full ring-offset-2 ring-offset-bam ${
                            open ? " hover:ring-pie" : " hover:ring-pie"
                        }`}
                    >
                        New
                    </a>
                    <a
                        href="#music"
                        className={`text-pie hover:ring-pie hover:ring-2 rounded-full ring-offset-2 ring-offset-bam ${
                            open ? "hover:ring-pie" : "hover:text-pie"
                        }`}
                    >
                        Music
                    </a>
                    <a
                        href="#contact"
                        className={`text-pie hover:ring-pie hover:ring-2 rounded-full ring-offset-2 ring-offset-bam ${
                            open ? "hover:ring-pie" : "hover:text-pie"
                        }`}
                    >
                        Contact
                    </a>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden py-2 px-4 font-bold">
                    <a
                        href="#new"
                        className="block text-pie hover:text-bean py-2 px-4 text-base font-mono font-body"
                    >
                        New
                    </a>
                    <a
                        href="#music"
                        className="block text-pie hover:text-bean py-2 px-4 text-base font-mono font-body"
                    >
                        Music
                    </a>
                    <a
                        href="#contact"
                        className="block text-pie hover:text-bean py-2 px-4 text-base font-mono font-body"
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
}
