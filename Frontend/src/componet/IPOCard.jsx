import React from "react";

const IPOCard = ({ ipo }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 ">
      <div className="flex items-center mb-6">
        <img src={ipo.logo} alt={ipo.name} className="h-12 w-12 mr-4" />
        <h2 className="text-lg font-bold text-blue-600 whitespace-nowrap">
          {ipo.name}
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-y-8 gap-4 text-sm text-gray-600">
        <div>
          <p className="font-semibold text-gray-800">PRICE BAND</p>
          <p>{ipo.priceBand}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800">OPEN</p>
          <p>{ipo.open}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800">CLOSE</p>
          <p>{ipo.close}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800">ISSUE SIZE</p>
          <p>{ipo.issueSize}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800">ISSUE TYPE</p>
          <p>{ipo.issueType}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800">LISTING DATE</p>
          <p>{ipo.listingDate}</p>
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
          RHP
        </button>
        <button className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600">
          DHRP
        </button>
      </div>
    </div>
  );
};

export default IPOCard;
