import React from "react";
import "./App.css"; // Import the Tailwind CSS

import Navbar from "./components/Navbar";
import Features from "./components/Features"; // Your other sections
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";

function App() {
   
   
    return (
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
            <Navbar />
            <HeroSection />
            <Features />
            <Projects />
            <Pricing />
            <Testimonials />

            <Contact />
        </div>
    );
}

// FeatureCard Component
const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
            <i className={`${icon} text-4xl mb-4`}></i>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

// ProjectCard Component
const ProjectCard = ({ openModal }) => {
    return (
        <div className="relative group">
            <img
                src="https://via.placeholder.com/400"
                alt="Project 1"
                className="rounded-lg shadow-lg group-hover:shadow-2xl transform group-hover:scale-105 transition duration-300"
                onClick={openModal}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="px-4 py-2 bg-primary text-white rounded-lg">
                    View Project
                </button>
            </div>
        </div>
    );
};

export default App;
