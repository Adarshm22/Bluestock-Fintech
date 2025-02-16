import React from "react";
import {
  FaTrash, // npm install react-icons
  FaEye,
} from "react-icons/fa";
import { Link } from "react-router";

const UpcomingIpoDashboard = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-800">
          Upcoming IPO | Dashboard
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Hi, Vishal</span>
          <Link to="/dashboard/manage-ipo/register-ipo"><button
            type="button"
            className="border border-[#4f80e1] text-[#4f80e1] px-4 py-2 rounded-md hover:bg-[#4f80e1] hover:text-white transition"
          >
            Register IPO
          </button></Link>
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
            {/* Row 1 */}
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3">Adani Power</td>
              <td className="px-4 py-3">₹129 - 136</td>
              <td className="px-4 py-3">2024-06-03</td>
              <td className="px-4 py-3">2024-06-05</td>
              <td className="px-4 py-3">1301.5 Cr</td>
              <td className="px-4 py-3">Book Built</td>
              <td className="px-4 py-3">2024-06-10</td>
              <td className="px-4 py-3">
                {/* Ongoing (Green) */}
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                  Ongoing
                </span>
              </td>
              <td className="px-4 py-3">
                {/* Update button (blue/purple) */}
                <button className="bg-violet-500 text-white px-3 py-1 rounded-md hover:bg-violet-600 transition">
                  Update
                </button>
              </td>
              <td className="px-4 py-3">
                {/* Delete & View icons */}
                <button className="text-red-500 hover:text-red-600 mr-3">
                  <FaTrash />
                </button>
                <button className="text-orange-500 hover:text-orange-600">
                  <FaEye />
                </button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3">VBL LTD</td>
              <td className="px-4 py-3">₹129 - 136</td>
              <td className="px-4 py-3">2024-06-03</td>
              <td className="px-4 py-3">2024-06-05</td>
              <td className="px-4 py-3">1301.5 Cr</td>
              <td className="px-4 py-3">Book Built</td>
              <td className="px-4 py-3">2024-06-10</td>
              <td className="px-4 py-3">
                {/* Comming (Orange) */}
                <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">
                  Comming
                </span>
              </td>
              <td className="px-4 py-3">
                <button className="bg-[#4f80e1] text-white px-3 py-1 rounded-md hover:bg-blue-600 transition">
                  Update
                </button>
              </td>
              <td className="px-4 py-3">
                <button className="text-red-500 hover:text-red-600 mr-3">
                  <FaTrash />
                </button>
                <button className="text-orange-500 hover:text-orange-600">
                  <FaEye />
                </button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3">Tata Motor</td>
              <td className="px-4 py-3">₹129 - 136</td>
              <td className="px-4 py-3">2024-06-03</td>
              <td className="px-4 py-3">2024-06-05</td>
              <td className="px-4 py-3">1301.5 Cr</td>
              <td className="px-4 py-3">Book Built</td>
              <td className="px-4 py-3">2024-06-10</td>
              <td className="px-4 py-3">
                {/* New Listed (Pink/Red) */}
                <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded-full text-xs font-medium">
                  New Listed
                </span>
              </td>
              <td className="px-4 py-3">
                <button className="bg-[#4f80e1] text-white px-3 py-1 rounded-md hover:bg-blue-600 transition">
                  Update
                </button>
              </td>
              <td className="px-4 py-3">
                <button className="text-red-500 hover:text-red-600 mr-3">
                  <FaTrash />
                </button>
                <button className="text-orange-500 hover:text-orange-600">
                  <FaEye />
                </button>
              </td>
            </tr>

            {/* Row 4 */}
            <tr>
              <td className="px-4 py-3">BSE India</td>
              <td className="px-4 py-3">₹129 - 136</td>
              <td className="px-4 py-3">2024-06-03</td>
              <td className="px-4 py-3">2024-06-05</td>
              <td className="px-4 py-3">Indus Tower</td>
              <td className="px-4 py-3">Book Built</td>
              <td className="px-4 py-3">2024-06-10</td>
              <td className="px-4 py-3">
                {/* No status shown in screenshot (or could be 'Closed'?) */}
              </td>
              <td className="px-4 py-3">
                <button className="bg-[#4f80e1] text-white px-3 py-1 rounded-md hover:bg-blue-600 transition">
                  Update
                </button>
              </td>
              <td className="px-4 py-3">
                <button className="text-red-500 hover:text-red-600 mr-3">
                  <FaTrash />
                </button>
                <button className="text-orange-500 hover:text-orange-600">
                  <FaEye />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {/* Example left arrow (optional) */}
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
