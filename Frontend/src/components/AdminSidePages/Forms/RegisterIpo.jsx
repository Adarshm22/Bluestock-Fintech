import React, { useState } from "react";

const IpoForm = () => {
    const [formData, setFormData] = useState({
        companyLogoURL: null,
        companyName: "",
        priceBand: "",
        open: "Not Issued",
        close: "Not Issued",
        issueSize: "",
        issueType: "",
        status: "",
        listingDate: "",
        ipoPrice: "",
        listingPrice: "",
        listingGain: "",
        cmp: "",
        currentReturn: "",
        rhpPdfUrl: null,
        drhpPdfUrl: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Stub: Upload Logo
    const handleLogoUpload = () => {
        console.log("Logo upload clicked");
    };

    // Form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // your submission logic here
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* Outer Container */}
            <div className="max-w-6xl mx-auto bg-white p-6 rounded-md shadow-md">
                {/* Top Section: Title + Buttons */}
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-800">
                            Upcoming IPO Information
                        </h1>
                        <h3 className="text-gray-700">Manage your IPO Details</h3>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* 'Register' button is the form submit */}
                        <button
                            form="ipoForm"
                            type="submit"
                            className="text-white px-4 py-2 rounded-md hover:bg-blue-500"
                            style={{ backgroundColor: "#4f80e1" }}
                        >
                            Register
                        </button>
                        {/* 'Cancel' button (no submission) */}
                        <button
                            type="button"
                            className="ring-2 ring-blue-400 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
                        >
                            Cancel
                        </button>
                    </div>
                </div>

                {/* The Form Card */}
                <form
                    id="ipoForm"
                    onSubmit={handleSubmit}
                    className="border border-gray-200 rounded-md p-6"
                >
                    {/* Heading inside the form */}
                    <h2 className="text-lg font-medium text-gray-800">
                        IPO Information
                    </h2>
                    <h4 className="text-gray-600 mb-2">Enter IPO Details</h4>
                    <hr className="text-gray-300 mb-3" />

                    {/* Company Logo Section */}
                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-gray-700 mb-2">
                            Company Logo
                        </h3>
                        <div className="flex items-end gap-4">
                            <div className="w-28 h-28 rounded-sm overflow-hidden">
                                <img
                                    src="https://tse1.mm.bing.net/th?id=OIP.WKaWZhi1msRjSsFFZEkEiwHaEu&pid=Api&P=0&h=180"
                                    alt="Logo"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div className="flex gap-2 mb-5">
                                <button
                                    type="button"
                                    onClick={handleLogoUpload}
                                    className="text-white px-3 py-2 rounded-md text-sm"
                                    style={{ backgroundColor: "#4f80e1" }}
                                >
                                    Upload Logo
                                </button>
                                <button
                                    type="button"
                                    onClick={handleLogoUpload}
                                    className="px-6 text-blue-600 py-2 rounded-md text-sm ring-2 ring-blue-500"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 2-column grid for the first set of fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Company Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Company Name
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="Vodafone Idea"
                                required
                            />
                        </div>

                        {/* Price Band */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Price Band
                            </label>
                            <input
                                type="number"
                                name="priceBand"
                                value={formData.priceBand}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="230"
                                required
                            />
                        </div>

                        {/* Open */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Open
                            </label>
                            <input
                                type="text"
                                name="open"
                                value={formData.open}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="Not Issued"
                            />
                        </div>

                        {/* Close */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Close
                            </label>
                            <input
                                type="text"
                                name="close"
                                value={formData.close}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="Not Issued"
                            />
                        </div>

                        {/* Issue Size */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Issue Size
                            </label>
                            <input
                                type="text"
                                name="issueSize"
                                value={formData.issueSize}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="2300 Cr."
                                required
                            />
                        </div>

                        {/* Issue Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Issue Type
                            </label>
                            <select
                                name="issueType"
                                value={formData.issueType}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select Issue Type</option>
                                <option value="Fixed Price">Fixed Price</option>
                                <option value="Book Building">Book Building</option>
                            </select>
                        </div>

                        {/* Status */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Status
                            </label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select Status</option>
                                <option value="Upcoming">Upcoming</option>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Closed">Closed</option>
                                <option value="Listed">Listed</option>
                            </select>
                        </div>
                    </div>

                    {/* New Listed IPO Details */}
                    <h3 className="text-sm md:text-base font-medium text-gray-800 mt-8 mb-4">
                        New Listed IPO Details (When IPO Get Listed)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Listing Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Listing Date
                            </label>
                            <input
                                type="text"
                                name="listingDate"
                                value={formData.listingDate}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="2024-05-30"
                                required
                            />
                        </div>

                        {/* IPO Price */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                IPO Price
                            </label>
                            <input
                                type="number"
                                name="ipoPrice"
                                value={formData.ipoPrice}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="230"
                                required
                            />
                        </div>

                        {/* Listing Price */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Listing Price
                            </label>
                            <input
                                type="number"
                                name="listingPrice"
                                value={formData.listingPrice}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="250"
                                required
                            />
                        </div>

                        {/* Listing Gain */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Listing Gain
                            </label>
                            <input
                                type="number"
                                name="listingGain"
                                value={formData.listingGain}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="10"
                                required
                            />
                        </div>

                        {/* CMP */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                CMP
                            </label>
                            <input
                                type="number"
                                name="cmp"
                                value={formData.cmp}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="410"
                                required
                            />
                        </div>

                        {/* Current Return */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Current Return
                            </label>
                            <input
                                type="number"
                                name="currentReturn"
                                value={formData.currentReturn}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="36"
                                required
                            />
                        </div>

                        {/* RHP PDF Link as File Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Enter RHP PDF
                            </label>
                            <input
                                type="file"
                                name="rhpPdfUrl"
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* DRHP PDF Link as File Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Enter DRHP PDF
                            </label>
                            <input
                                type="file"
                                name="drhpPdfUrl"
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default IpoForm;
