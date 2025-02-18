import React from "react";
import bseIndia from '../../../assets/bseIndia.png'
import NseIndia from '../../../assets/NseIndia.png'
import sebi from '../../../assets/sebi.png'
import MoneyControl from '../../../assets/MoneyControl.png'
import { Link } from "react-router";


const QuickLinks = () => {

    const QuickLinkObj = [
        { img: NseIndia, text: "NSE India", link: "https://www.nseindia.com/" },
        { img: bseIndia, text: "BSE India", link: "https://www.bseindia.com/?trk=test" },
        { img: sebi, text: "SEBI", link: "https://www.sebi.gov.in/" },
        { img: MoneyControl, text: "Money Control", link: "https://www.moneycontrol.com/" }
    ]
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
                    <ul className="space-y-4 overflow-auto">
                        {/* 1. NSE India */}
                        {
                            QuickLinkObj?.map((Obj) => (
                                <li className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-12 w-12">
                                            <img
                                                src={Obj.img}
                                                alt="NSE India"
                                                className="w-full h-full object-contain rounded-full"
                                            />
                                        </div>
                                        <span className="text-gray-800 text-sm">{Obj.text}</span>
                                    </div>
                                    <a href={Obj.link} target="_blank" className="text-sm text-gray-600 hover:underline">
                                        Visit Now
                                    </a>

                                </li>
                            ))
                        }


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default QuickLinks;
