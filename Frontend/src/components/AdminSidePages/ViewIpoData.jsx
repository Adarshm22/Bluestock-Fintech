import React from 'react';
import { useIpoContextProvider } from '../../context/ipoContext';
import { X } from 'lucide-react';

function ViewIpoData({ onClose }) {
    const { IpoData } = useIpoContextProvider();
    
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900/50 backdrop-blur-md z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg relative">
                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 hover:cursor-pointer text-gray-600 hover:text-gray-900 transition"
                    onClick={onClose}
                >
                    <X size={20} />
                </button>
                
                <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    {IpoData?.companyName} IPO Details
                </h2>
                <hr className="mb-4" />
                
                {/* Company Logo Section */}
                <div className="flex justify-center mb-6">
                    <div className="w-28 h-28 rounded-md overflow-hidden border border-gray-300 shadow-sm">
                        <img
                            src={IpoData?.companyLogoURL}
                            alt="Company Logo"
                            className="object-contain w-full h-full"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { label: 'Company Name', value: IpoData?.companyName },
                        { label: 'Price Band', value: IpoData?.priceBand },
                        { label: 'Open', value: IpoData?.open },
                        { label: 'Close', value: IpoData?.close },
                        { label: 'Issue Size', value: IpoData?.issueSize },
                        { label: 'Status', value: IpoData?.status }
                    ].map((item, index) => (
                        <div key={index}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {item.label}
                            </label>
                            <input
                                type="text"
                                readOnly
                                value={item.value}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm bg-gray-100 cursor-not-allowed"
                            />
                        </div>
                    ))}
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">New Listed IPO Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { label: 'Listing Date', value: IpoData?.listingDate },
                        { label: 'IPO Price', value: IpoData?.ipoPrice },
                        { label: 'Listing Price', value: IpoData?.listingPrice },
                        { label: 'Listing Gain', value: IpoData?.listingGain },
                        { label: 'CMP', value: IpoData?.cmp },
                        { label: 'Current Return', value: IpoData?.currentReturn }
                    ].map((item, index) => (
                        <div key={index}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {item.label}
                            </label>
                            <input
                                type="text"
                                readOnly
                                value={item.value}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm bg-gray-100 cursor-not-allowed"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ViewIpoData;
