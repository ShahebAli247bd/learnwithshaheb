import React from "react";

const PricingSection = () => {
    return (
        <section className="py-20 bg-gradient-to-r  to-gray-700 from-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-12">
                    Pricing Plans
                </h2>
                <div className="text-2xl font-bold mb-4 text-center">
                    এই কোর্সের মূল্য আনুমানিক{" "}
                    <span className="line-through text-red-500">৪০০০/-</span>{" "}
                    টাকা মাত্র
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Free Live Class Card */}
                    <div className="bg-gradient-to-r from-gray-900 to-gray-900 rounded-lg p-6 shadow-lg relative">
                        <h1 className="text-2xl font-bold mb-4 text-center">
                            Live Class
                        </h1>

                        <h2 className="text-3xl font-bold mb-4 text-center">
                            Price:
                            <span className=" text-green-500"> 500/-</span> only
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✅</span>
                                <span>২ মাসের কম্প্রিহেনসিভ কোর্স</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✅</span>
                                <span>
                                    ৫টি প্রোজেক্ট: ডিজাইন থেকে HTML & CSS-এ
                                    রূপান্তর
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✅</span>
                                <span>লাইভ ক্লাস</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-red-500 mr-2">✅</span>
                                <span>রিয়েল-টাইম সমস্যা সমাধান</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✅</span>
                                <span>
                                    ইমেইল মার্কেটিং প্ল্যাটফর্মে হ্যান্ডস-অন
                                    ট্রেনিং
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✅</span>
                                <span>Dark Mode & Accessibility ফিক্সিং</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✅</span>
                                <span>ব্যক্তিগত পোর্টফোলিও টেমপ্লেট তৈরি</span>
                            </li>
                            <li className="flex items-center line-through">
                                <span className="text-green-500 mr-2">❌</span>
                                <span>রেকর্ডেড ভিডিও</span>
                            </li>
                            <li className="flex items-center line-through">
                                <span className="text-green-500 mr-2">❌</span>
                                <span>
                                    VS Code Plugin & Chrome Extension প্রদান
                                </span>
                            </li>

                            <li className="flex items-center line-through">
                                <span className="text-green-500 mr-2">❌</span>
                                <span>
                                    LinkedIn থেকে ক্লায়েন্ট হান্টিং শিখানো হবে
                                </span>
                            </li>
                            <li className="flex items-center line-through">
                                <span className="text-green-500 mr-2">❌</span>
                                <span>
                                    এক্সক্লুসিভ সার্টিফিকেট সফলদের জন্য!
                                </span>
                            </li>
                        </ul>
                        <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                            Enroll Now
                        </button>
                    </div>

                    {/* Comprehensive Course Card */}
                    <div className="bg-gradient-to-r from-gray-900 to-gray-900 rounded-lg p-6 shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-center">
                            Comprehensive Course
                        </h3>
                        <h2 className="text-3xl font-bold mb-4 text-center">
                            Price:
                            <span className=" text-green-500">
                                {" "}
                                1000/-
                            </span>{" "}
                            only
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✅</span>
                                <span>২ মাসের কম্প্রিহেনসিভ কোর্স</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✅</span>
                                <span>
                                    ৫টি প্রোজেক্ট: ডিজাইন থেকে HTML & CSS-এ
                                    রূপান্তর
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✅</span>
                                <span>লাইভ ক্লাস</span>
                            </li>

                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✅</span>
                                <span>রিয়েল-টাইম সমস্যা সমাধান</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✅</span>
                                <span>
                                    ইমেইল মার্কেটিং প্ল্যাটফর্মে হ্যান্ডস-অন
                                    ট্রেনিং
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✅</span>
                                <span>Dark Mode & Accessibility ফিক্সিং</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✅</span>
                                <span>ব্যক্তিগত পোর্টফোলিও টেমপ্লেট তৈরি</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✅</span>
                                <span>রেকর্ডেড ভিডিও</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✅</span>
                                <span>
                                    VS Code Plugin & Chrome Extension প্রদান
                                </span>
                            </li>

                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✅</span>
                                <span>
                                    LinkedIn থেকে ক্লায়েন্ট হান্টিং শিখানো হবে
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✅</span>
                                <span>
                                    এক্সক্লুসিভ সার্টিফিকেট সফলদের জন্য!
                                </span>
                            </li>
                        </ul>
                        <button className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
