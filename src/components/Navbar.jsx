// src/components/Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
 };
 const [darkMode, setDarkMode] = useState(false);

 const toggleDarkMode = () => {
     setDarkMode(!darkMode);
     document.documentElement.classList.toggle("dark", !darkMode);
 };



    return (
        <nav className="bg-darkblueish text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  
                    <button
                        onClick={toggleDarkMode}
                        className="ml-4 p-2 bg-lightblue text-white rounded-md"
                    >
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                     
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <h1 className="text-2xl font-bold">My Course</h1>
                        </div>
                        <div className="hidden md:flex space-x-4 ml-10">
                            <a
                                href="#features"
                                className="hover:text-lightblue hover:drop-shadow-md"
                            >
                                Features
                            </a>
                            <a
                                href="#projects"
                                className="hover:text-lightblue hover:drop-shadow-md"
                            >
                                Projects
                            </a>
                            <a
                                href="#pricing"
                                className="hover:text-lightblue hover:drop-shadow-md"
                            >
                                Pricing
                            </a>
                            <a
                                href="#contact"
                                className="hover:text-lightblue hover:drop-shadow-md"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                    {/* Hamburger menu */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-lightblue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lightblue"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                        <a
                            href="#features"
                            className="block text-white hover:bg-darkblueish-light hover:drop-shadow-md px-3 py-2 rounded-md text-base font-medium"
                        >
                            Features
                        </a>
                        <a
                            href="#projects"
                            className="block text-white hover:bg-darkblueish-light hover:drop-shadow-md px-3 py-2 rounded-md text-base font-medium"
                        >
                            Projects
                        </a>
                        <a
                            href="#pricing"
                            className="block text-white hover:bg-darkblueish-light hover:drop-shadow-md px-3 py-2 rounded-md text-base font-medium"
                        >
                            Pricing
                        </a>
                        <a
                            href="#contact"
                            className="block text-white hover:bg-darkblueish-light hover:drop-shadow-md px-3 py-2 rounded-md text-base font-medium"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
