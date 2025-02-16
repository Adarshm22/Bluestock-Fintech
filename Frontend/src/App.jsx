import { useState } from "react";
import Navbar from "./componet/Navbar";
import IPOCard from "./componet/IPOCard";
import FAQ from "./componet/FAQ";

function App() {
  const [count, setCount] = useState(0);
  const ipoData = [
    {
      logo: "/path-to-logo/nova.png",
      name: "Nova Agritech Ltd.",
      priceBand: "25 - 45",
      open: "2024-08-23",
      close: "2024-08-24",
      issueSize: "18.43 Cr.",
      issueType: "Book Built",
      listingDate: "2024-08-30",
    },
    {
      logo: "/path-to-logo/epack.png",
      name: "EPACK Durable Ltd.",
      priceBand: "28 - 32",
      open: "2024-07-19",
      close: "2024-07-21",
      issueSize: "50.00 Cr.",
      issueType: "Book Built",
      listingDate: "2024-07-29",
    },
    {
      logo: "/path-to-logo/nova.png",
      name: "Nova Agritech Ltd.",
      priceBand: "25 - 45",
      open: "2024-08-23",
      close: "2024-08-24",
      issueSize: "18.43 Cr.",
      issueType: "Book Built",
      listingDate: "2024-08-30",
    },
    {
      logo: "/path-to-logo/epack.png",
      name: "EPACK Durable Ltd.",
      priceBand: "28 - 32",
      open: "2024-07-19",
      close: "2024-07-21",
      issueSize: "50.00 Cr.",
      issueType: "Book Built",
      listingDate: "2024-07-29",
    },
    {
      logo: "/path-to-logo/nova.png",
      name: "Nova Agritech Ltd.",
      priceBand: "25 - 45",
      open: "2024-08-23",
      close: "2024-08-24",
      issueSize: "18.43 Cr.",
      issueType: "Book Built",
      listingDate: "2024-08-30",
    },
    {
      logo: "/path-to-logo/epack.png",
      name: "EPACK Durable Ltd.",
      priceBand: "28 - 32",
      open: "2024-07-19",
      close: "2024-07-21",
      issueSize: "50.00 Cr.",
      issueType: "Book Built",
      listingDate: "2024-07-29",
    },
    // Add more objects as needed
  ];

  return (
    <>
      <div>
        <Navbar />
        <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-2xl font-bold  text-gray-800 mb-6">
            Upcoming IPO
          </h1>
          <p className=" text-sm text-gray-600 mb-6">
            Explore the latest IPOs and their details. All data is fetched
            dynamically for accuracy.
          </p>
          <div className="flex flex-wrap mx-auto gap-4">
            {ipoData &&
              ipoData.map((ipo, index) => <IPOCard key={index} ipo={ipo} />)}
          </div>
        </div>
        <FAQ />
      </div>
    </>
  );
}

export default App;