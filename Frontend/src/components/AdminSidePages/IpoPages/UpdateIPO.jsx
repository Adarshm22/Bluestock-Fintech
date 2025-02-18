import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useIpoContextProvider } from "../../../context/ipoContext";
import toast from "react-hot-toast";

const UpdateIPO = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    const { fetchIpoToBeUpdated, IpoData, Token } = useIpoContextProvider()
    const [formData, setFormData] = useState({
        companyName: "",
        priceBand: "",
        open: "",
        close: "",
        issueSize: "",
        issueType: "",
        status: "",
        listingDate: "",
        ipoPrice: "",
        listingPrice: "",
        listingGain: "",
        cmp: "",
        currentReturn: "",
    });

    useEffect(() => {
        if (id) {
            fetchIpoToBeUpdated(id)
        }
    }, [id]);

    useEffect(() => {
        if (IpoData) {
            setFormData({
                companyName: IpoData.companyName,
                priceBand: IpoData.priceBand,
                open: IpoData.open,
                close: IpoData.close,
                issueSize: IpoData.issueSize,
                issueType: IpoData.issueType,
                status: IpoData.status,
                listingDate: IpoData.listingDate,
                ipoPrice: IpoData.ipoPrice,
                listingPrice: IpoData.listingPrice,
                listingGain: IpoData.listingGain,
                cmp: IpoData.cmp,
                currentReturn: IpoData.currentReturn
            });

        }
    }, [IpoData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
       try {
       const ToastId =  toast.loading("Updation Under Progress")
        const response = await fetch(`http://localhost:4000/api/v1/ipos/${id}/updateIpo`,{
            method:"PATCH",
            headers:{
                Authorization: Token,
                "Content-Type":"Application/json" 
            },
            body:JSON.stringify(formData)
        });

        const responseData = await response.json();

        if(response.ok){
            toast.success(responseData.message, {id:ToastId})
            navigate('/dashboard/manage-ipo')
        }else{
            toast.error(responseData.message, {id: ToastId})
            console.log(responseData)
        }

       } catch (error) {
        console.log("Error in UpdateIpo function::",error)
       }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="max-w-4xl w-full bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
                    Update IPO Details
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Ensure all details are correct before updating
                </p>

                {IpoData?.companyLogoURL && (
                    <img
                        src={IpoData.companyLogoURL}
                        alt="Company Logo"
                        className="w-32 h-32 mx-auto mb-6 rounded-lg shadow-md"
                    />
                )}

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData?.companyName}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-1 focus:ring-blue-500"
                            placeholder="Vodafone Idea"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Price Band
                        </label>
                        <input
                            type="number"
                            name="priceBand"
                            value={formData?.priceBand}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-1 focus:ring-blue-500"
                            placeholder="230"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Open
                        </label>
                        <input
                            type="date"
                            name="open"
                            value={formData?.open}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Close
                        </label>
                        <input
                            type="date"
                            name="close"
                            value={formData?.close}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Issue Size
                        </label>
                        <input
                            type="text"
                            name="issueSize"
                            value={formData?.issueSize}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-1 focus:ring-blue-500"
                            placeholder="2300 Cr."
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Issue Type
                        </label>
                        <select
                            name="issueType"
                            value={formData?.issueType}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-1 focus:ring-blue-500"
                            required
                        >
                            <option value="">Select Issue Type</option>
                            <option value="Fixed Price">Fixed Price</option>
                            <option value="Book Building">Book Building</option>
                        </select>
                    </div>

                    {/* Right Column */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Status
                        </label>
                        <select
                            name="status"
                            value={formData?.status}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-1 focus:ring-blue-500"
                            required
                        >
                            <option value="">Select Status</option>
                            <option value="Upcoming">Upcoming</option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Closed">Closed</option>
                            <option value="Listed">Listed</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Listing Date
                        </label>
                        <input
                            type="date"
                            name="listingDate"
                            value={formData?.listingDate}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-1 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            IPO Price
                        </label>
                        <input
                            type="number"
                            name="ipoPrice"
                            value={formData?.ipoPrice}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-1 focus:ring-blue-500"
                            placeholder="230"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Listing Price
                        </label>
                        <input
                            type="number"
                            name="listingPrice"
                            value={formData?.listingPrice}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-1 focus:ring-blue-500"
                            placeholder="250"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Listing Gain
                        </label>
                        <input
                            type="number"
                            name="listingGain"
                            value={formData?.listingGain}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-1 focus:ring-blue-500"
                            placeholder="10"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            CMP
                        </label>
                        <input
                            type="number"
                            name="cmp"
                            value={formData?.cmp}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-1 focus:ring-blue-500"
                            placeholder="410"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Current Return
                        </label>
                        <input
                            type="number"
                            name="currentReturn"
                            value={formData?.currentReturn}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-1 focus:ring-blue-500"
                            placeholder="36"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-2 flex justify-center mt-4">
                        <button
                            type="submit"
                            className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                        >
                            Update IPO
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateIPO;
