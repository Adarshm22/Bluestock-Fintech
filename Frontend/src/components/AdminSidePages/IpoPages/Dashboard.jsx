import React from "react";

const QuickLinks = () => {
    return (
        <div className="">
            <div className="text-xl  p-10">
                <h2 >Dashboard</h2>
            </div>
            <div className="flex justify-center mt-15 ">
                <div className="bg-white p-4 w-full h-full max-w-sm">
                    {/* Heading */}
                    <h2 className="text-lg  text-gray-900">Quick Links</h2>
                    {/* Subheading */}
                    <p className="text-sm text-gray-500 mb-4">
                        Adipiscing elit, sed do eiusmod tempor
                    </p>

                    {/* Links List */}
                    <ul className="space-y-4 h-60 overflow-auto">
                        {/* 1. NSE India */}
                        <li className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="/nse-india-logo.png"
                                    alt="NSE India"
                                    className="w-8 h-8 rounded-full"
                                />
                                <span className="text-gray-800 text-sm">NSE India</span>
                            </div>
                            <button className="text-sm text-gray-600 hover:underline">
                                Visit Now
                            </button>
                        </li>
                        <li className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="/nse-india-logo.png"
                                    alt="NSE India"
                                    className="w-8 h-8 rounded-full"
                                />
                                <span className="text-gray-800 text-sm">NSE India</span>
                            </div>
                            <button className="text-sm text-gray-600 hover:underline">
                                Visit Now
                            </button>
                        </li>
                        <li className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="/nse-india-logo.png"
                                    alt="NSE India"
                                    className="w-8 h-8 rounded-full"
                                />
                                <span className="text-gray-800 text-sm">NSE India</span>
                            </div>
                            <button className="text-sm text-gray-600 hover:underline">
                                Visit Now
                            </button>
                        </li>

                        {/* 2. BSE India */}
                        <li className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="/bse-india-logo.png"
                                    alt="BSE India"
                                    className="w-8 h-8 rounded-full"
                                />
                                <span className="text-gray-800 text-sm">BSE India</span>
                            </div>
                            <button className="text-sm text-gray-600 hover:underline">
                                Visit Now
                            </button>
                        </li>

                        {/* 3. SEBI */}
                        <li className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="/sebi-logo.png"
                                    alt="SEBI"
                                    className="w-8 h-8 rounded-full"
                                />
                                <span className="text-gray-800 text-sm">SEBI</span>
                            </div>
                            <button className="text-sm text-gray-600 hover:underline">
                                Visit Now
                            </button>
                        </li>

                        {/* 4. Money Control */}
                        <li className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="/money-control-logo.png"
                                    alt="Money Control"
                                    className="w-8 h-8 rounded-full"
                                />
                                <span className="text-gray-800 text-sm">Money Control</span>
                            </div>
                            <button className="text-sm text-gray-600 hover:underline">
                                Visit Now
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default QuickLinks;
