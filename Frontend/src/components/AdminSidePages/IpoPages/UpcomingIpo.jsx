import React, { useEffect, useState } from "react";
import { FaTrash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useIpoContextProvider } from "../../../context/ipoContext";
import ViewIpoData from "../viewIpoData";

const UpcomingIpoDashboard = () => {
  const { fetchIpos, DisplayedIpoList, deleteIpo, filterIpoForViewing } = useIpoContextProvider();
  const [showDeleteBox, setshowDeleteBox] = useState(false)
  const [complaintId, setcomplaintId] = useState(null)
  const [showIpoDatabox , setshowIpoDatabox] = useState(false)
  const navigate = useNavigate()


  useEffect(() => {
    fetchIpos();
  }, []);

  const onClose = ()=>{
    setshowIpoDatabox(false)
  }

  // Helper function for dynamic status styling
  const getStatusClass = (status) => {
    switch (status) {
      case "Ongoing":
        return "bg-green-100 text-green-700";
      case "Comming":
        return "bg-orange-100 text-orange-600";
      case "New Listed":
        return "bg-pink-100 text-pink-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-white p-4">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-800">
          Upcoming IPO | Dashboard
        </h1>
        <div className="flex items-center gap-4">
          <Link to="/dashboard/manage-ipo/register-ipo">
            <button
              type="button"
              className="border border-[#4f80e1] text-[#4f80e1] px-4 py-2 rounded-md hover:bg-[#4f80e1] hover:text-white transition"
            >
              Register IPO
            </button>
          </Link>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto border border-gray-200 rounded-md">
        <table className="w-full text-sm text-gray-700">
          {/* Table Head */}
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th scope="col" className="px-4 py-3">Company</th>
              <th scope="col" className="px-4 py-3">Price Band</th>
              <th scope="col" className="px-4 py-3">Open</th>
              <th scope="col" className="px-4 py-3">Close</th>
              <th scope="col" className="px-4 py-3">ISSUE SIZE</th>
              <th scope="col" className="px-4 py-3">ISSUE TYPE</th>
              <th scope="col" className="px-4 py-3">Listing Date</th>
              <th scope="col" className="px-4 py-3">Status</th>
              <th scope="col" className="px-4 py-3">Action</th>
              <th scope="col" className="px-4 py-3">Delete/View</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {DisplayedIpoList && DisplayedIpoList?.length > 0 ? (
              DisplayedIpoList.map((ipo, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="px-4 py-3">{ipo.companyName}</td>
                  <td className="px-4 py-3">{ipo.priceBand}</td>
                  <td className="px-4 py-3">{ipo.open}</td>
                  <td className="px-4 py-3">{ipo.close}</td>
                  <td className="px-4 py-3">{ipo.issueSize}</td>
                  <td className="px-4 py-3">{ipo.issueType}</td>
                  <td className="px-4 py-3">{ipo.listingDate}</td>
                  <td className="px-4 py-3">
                    <span className={`${getStatusClass(ipo.status)} px-2 py-1 rounded-full text-xs font-medium`}>
                      {ipo.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                    onClick={()=> navigate(`/dashboard/manage-ipo/${ipo._id}/update-ipo`)}
                    className="bg-violet-500 hover:cursor-pointer text-white px-3 py-1 rounded-md hover:bg-violet-600 transition">
                      Update
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => {
                        setshowDeleteBox(true)
                        setcomplaintId(ipo._id)
                      }}
                      className="text-red-500 hover:text-red-600 mr-3 hover:cursor-pointer">
                      <FaTrash />
                    </button>
                    <button 
                    onClick={()=>{
                      setshowIpoDatabox(true)
                      filterIpoForViewing(ipo._id)
                    }}
                    className="text-orange-500 hover:text-orange-600 hover:cursor-pointer">
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="px-4 py-3 text-center text-gray-500">
                  No IPOs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className={`${showDeleteBox ? "fixed inset-0 flex justify-center items-center bg-gray-100/20 backdrop-blur-sm z-50 " : "hidden"}`}>
        <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full mx-4 sm:mx-8 md:mx-12 text-center">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-blue-800 mb-3 sm:mb-4">
            Are you sure you want to delete this IPO?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
            <button
              onClick={() => {
                deleteIpo(complaintId);
                setshowDeleteBox(false);
              }}
              className="bg-red-500 text-white py-1.5 px-4 sm:py-2 sm:px-6 rounded-md hover:bg-red-600 transition-all text-sm sm:text-base"
            >
              Yes, Delete
            </button>
            <button
              onClick={() => setshowDeleteBox(false)}
              className="bg-gray-500 text-white py-1.5 px-4 sm:py-2 sm:px-6 rounded-md hover:bg-gray-600 transition-all text-sm sm:text-base"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

     { showIpoDatabox &&  <ViewIpoData onClose={onClose}/>}

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <button className="px-3 py-1 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
          &lt;
        </button>
        <button className="px-3 py-1 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
          1
        </button>
        <button className="px-3 py-1 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
          2
        </button>
        <button className="px-3 py-1 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
          3
        </button>
        <button className="px-3 py-1 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
          &gt;
        </button>
      </div>
    </div>


  );
};

export default UpcomingIpoDashboard;
