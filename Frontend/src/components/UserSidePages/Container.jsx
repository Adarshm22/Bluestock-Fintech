import Navbar from "./Ipos/Navbar";
import FAQ from "./Ipos/FAQ";
import IPOCard from "./Ipos/IPOCard";
import { useIpoContextProvider } from "../../context/ipoContext";
import { useEffect } from "react";

function Container() {
  const { DisplayedIpoList, fetchIpos } = useIpoContextProvider()

  useEffect(() => {
    fetchIpos()
  }, []);
  return (
    <>
      <div >
        <Navbar />
        <div className="h-[85vh] overflow-auto bg-gray-100 p-6">
          <h1 className="text-2xl font-bold  text-gray-800 mb-6">
            Upcoming IPO
          </h1>

          <p className=" text-sm text-gray-600 mb-6">
            Explore the latest IPOs and their details. All data is fetched
            dynamically for accuracy.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3  gap-4 w-full items-center justify-around ">
            {DisplayedIpoList &&
              DisplayedIpoList.map((ipo, index) => <IPOCard key={index} ipo={ipo} />)}
          </div>
        </div>
        <FAQ />
      </div>
    </>
  );
}

export default Container;
