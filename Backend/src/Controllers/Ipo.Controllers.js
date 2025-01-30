import { IPO } from "../Models/ipoModel.js";
import { AsyncHandeller } from "../Utils/AsyncHandeller.js";
import { Upload_On_Cloudinary } from "../Utils/Cloudinary.js";
import { ApiResponse } from "../Utils/ApiResponse.js";

// Todo: make the date into utc format to store in db;
const Register_NewIpo = AsyncHandeller(async (req, res, next) => {
  const ipoObj = req.body;

  if (ipoObj) {
    const emptyFields = Object.entries(ipoObj)
      .filter(
        ([key, value]) => value === "" || value === undefined || value === null
      )
      .map(([key]) => key);

    if (emptyFields.length > 0) {
      return next({
        message: `${emptyFields.join(", ")} are Empty`,
      });
    }
  }
  if (!["Upcoming", "Ongoing", "Closed", "Listed"].includes(ipoObj.status)) {
    return next({ message: "Invalid status value" });
  }

  // this ensure that a company cannot give more than one ipo on same listeing date
  const existingIpo = await IPO.findOne({
    companyName: ipoObj.companyName,
    listingDate: ipoObj.listingDate,
  });

  if (existingIpo)
    return next({
      message: "An IPO for this company on this date already exists!",
    });

  const logoPath = req.files?.companyLogoURL[0]?.path;
  const RHP_Path = req.files?.rhpPdfUrl[0]?.path;
  const DRHP_Path = req.files?.drhpPdfUrl[0]?.path;

  if ([logoPath, RHP_Path, DRHP_Path].some((path) => path === "")) {
    console.log("path not specified for files");
    return next({
      message: "File uploading fails.",
    });
  }

  const logoUrl = await Upload_On_Cloudinary(logoPath);
  const rhpPdfUrl = await Upload_On_Cloudinary(RHP_Path);
  const drhpPdfUrl = await Upload_On_Cloudinary(DRHP_Path);

  if (!logoUrl || !rhpPdfUrl || !drhpPdfUrl) {
    return next({ message: "File upload failed. Please try again." });
  }

  ipoObj.companyLogoURL = logoUrl;
  ipoObj.rhpPdfUrl = rhpPdfUrl;
  ipoObj.drhpPdfUrl = drhpPdfUrl;

  const registeredIPO = await IPO.create(ipoObj);
  if (!registeredIPO)
    return next({ message: "IPO registration failed.Try again" });

  return res
    .status(200)
    .json(new ApiResponse(200, registeredIPO, "IPO registration successfull"));
});


export { Register_NewIpo };
