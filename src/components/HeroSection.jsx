import React from "react";

const HeroSection = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-black to-gray-900 p-8 h-screen relative overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                    backgroundImage:
                        "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDCMhh31Re9uD9fhoizKJrljYS7t399oFM_s5dc_xptXKdEKfkYApot4z5T16VIpA6EKzN2tnDJlTuwFPTFBy244QzN3s4XhWflLyNBuohfHcBNOuRRVEscuKmi5wPX0sb2QvrnJHIwkXTUsDMo3Xqoaot4x1C4W-elYf9VtsZx0l6UxzT8YF6iZ3Htd0/s1158/all-project-low-very-low.jpg')",
                }}
            ></div>

            <div className="md:w-1/2 text-white">
                <h1 className="text-5xl font-bold mb-4">
                    Master Email Template Design & Development
                </h1>
                <p className="mb-6 text-lg">
                    Learn to create professional, responsive, and dark mode
                    compatible email templates using Figma, Photoshop, HTML, and
                    CSS.
                </p>
                <button className="bg-white text-darkblueish px-4 py-2 rounded hover:shadow-lg transition">
                    Enroll Now
                </button>
            </div>
            <div className="md:w-1/2 mb-6 md:mb-0">
                <div
                    style={{ paddingTop: "56.25%" }} // 16:9 Aspect Ratio
                    className="relative w-full pt0"
                >
                    <iframe
                        className="md:absolute relative top-0 left-0 w-full h-full rounded"
                        src="https://www.youtube.com/embed/TouoUAHucG0" // Replace with your video URL
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Video"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
