import React from "react";

const IPOCard = ({ ipo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 max-w-sm w-full grid items-center justify-center">
      {/* Top Section: Logo + Name */}
      <div className="flex items-center justify-between gap-3 mb-4 ">
       <div className="w-24 h-24">
       <img
          src={ipo.companyLogoURL}
          alt={ipo.companyName}
          className="h-full w-full  object-contain"
        />
       </div>
        <h2 className="text-md font-semibold text-[#4f80e1]">
          {ipo.companyName}
        </h2>
      </div>

      {/* Grid of IPO Details */}
      <div className="grid grid-cols-3 gap-x-6 gap-y-3 text-sm">
        <div>
          <p className="text-xs uppercase text-gray-500">Price Band</p>
          <p className="text-black font-medium">{ipo.priceBand}</p>
        </div>
        <div>
          <p className="text-xs uppercase text-gray-500">Open</p>
          <p className="text-black font-medium">{ipo.open}</p>
        </div>
        <div>
          <p className="text-xs uppercase text-gray-500">Close</p>
          <p className="text-black font-medium">{ipo.close}</p>
        </div>
        <div>
          <p className="text-xs uppercase text-gray-500">Issue Size</p>
          <p className="text-black font-medium">{ipo.issueSize}</p>
        </div>
        <div>
          <p className="text-xs uppercase text-gray-500">Issue Type</p>
          <p className="text-black font-medium">{ipo.issueType}</p>
        </div>
        <div>
          <p className="text-xs uppercase text-gray-500">Listing Date</p>
          <p className="text-black font-medium">{ipo.listingDate}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-4">
        <a
          href={ipo.rhpPdfUrl}
          target="_blank"
         
          className="px-4 py-1 rounded-md border border-[#4f80e1] text-[#4f80e1] bg-white font-medium hover:bg-[#4f80e1] hover:text-white transition"
        >
          RHP
        </a>
        <a
          href={ipo.drhpPdfUrl}
          target="_blank"
    
          className="px-4 py-1 rounded-md bg-red-500 text-white font-medium hover:bg-red-600 transition"
        >
          DRHP
        </a>
      </div>
    </div>
  );
};

export default IPOCard;
