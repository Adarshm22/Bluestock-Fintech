import { IPO } from "../Models/ipoModel.js";
import { AsyncHandeller } from "../Utils/AsyncHandeller.js";
import {
  delete_from_Cloudinary,
  Upload_On_Cloudinary,
} from "../Utils/Cloudinary.js";
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

const update_IpoData = AsyncHandeller(async (req, res, next) => {
  const { Id } = req.params;
  const newIpoData = req.body;
  const fetchedIpo = await IPO.findById({ _id: Id });

  if (!fetchedIpo) {
    return next({
      message: "Ipo do not exist",
    });
  }

  let updatedIpoData = {};
  for (const key in newIpoData) {
    if (newIpoData[key] !== fetchedIpo[key]) {
      updatedIpoData[key] = newIpoData[key];
    }
  }

  if (Object.keys(updatedIpoData).length === 0) {
    return next({
      message: "No Update Found",
    });
  }

  const Modified = await IPO.findByIdAndUpdate(
    { _id: Id },
    { $set: updatedIpoData },
    { new: true, runValidators: true }
  );

  if (!Modified) {
    return next({
      message: "Data updation Unseccessful ! try again",
    });
  }

  return res
    .status(200)
    .json(new ApiResponse(200, Modified, "Data Modification Successfull"));
});

const delete_Ipo = AsyncHandeller(async (req, res, next) => {
  const { Id } = req.params;

  const fetchedIpo = await IPO.findById({ _id: Id });

  if (!fetchedIpo) {
    return next({
      message: "Ipo no found",
    });
  }

  await delete_from_Cloudinary(fetchedIpo.companyLogoURL);
  await delete_from_Cloudinary(fetchedIpo.rhpPdfUrl);
  await delete_from_Cloudinary(fetchedIpo.drhpPdfUrl);

  const deletedIpoData = await IPO.findByIdAndDelete({ _id: Id });

  if (!deletedIpoData) {
    return next({
      message: "Ipo Deletion failed ! try again",
    });
  }

  return res
    .status(200)
    .json(new ApiResponse(200, deletedIpoData, "Ipo deletion successful"));
});

const change_CompanyLogo = AsyncHandeller(async (req, res, next) => {
  const { Id } = req.params;
  const logoPath = req.file?.path;
  
const ipo = await IPO.findById({_id : Id });
  
if(!ipo){
  return next({
    message:"ipo not found"
  })
}
  if (logoPath) {
    await delete_from_Cloudinary(ipo.companyLogoURL);
  }

  const newUrl = await Upload_On_Cloudinary(logoPath);

  if (!newUrl) {
    console.log("no image url received form cloudinary");
  }

  const IpoWithUpdatedImage = await IPO.findByIdAndUpdate(
    { _id: Id },
    { $set: { companyLogoURL: newUrl } },
    { new: true }
  );

  if (!IpoWithUpdatedImage) {
    return next({
      message: "Logo updation failed",
    });
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, IpoWithUpdatedImage, "Logo updation successfull")
    );
});

const fetchIpo = AsyncHandeller(async (req, res, next)=>{
  const Ipos = await IPO.find();
  if(!Ipos){
    return next({
      message:"Internal Error Occured ! try afterSometime"
    })
  }
  return res.status(200).json(new ApiResponse(200, Ipos, "Fetching all IPO successfull"));
})

export { Register_NewIpo, update_IpoData, delete_Ipo, change_CompanyLogo, fetchIpo };
