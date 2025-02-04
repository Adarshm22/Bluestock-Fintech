import { Router } from "express";
import { change_CompanyLogo, delete_Ipo, fetchIpo, Register_NewIpo, update_IpoData } from "../Controllers/Ipo.Controllers.js";
import { upload } from "../Middlewares/multer.middleware.js";

const router = Router();

router.route("/registerIpo").post(
  upload.fields([
    { name: "companyLogoURL", maxCount: 1 },
    { name: "rhpPdfUrl", maxCount: 1 },
    { name: "drhpPdfUrl", maxCount: 1 },
  ]),
  Register_NewIpo
);

router.route("/:Id/updateIpo").patch(update_IpoData);

router.route("/:Id/deleteIpo").delete(delete_Ipo);

router.route("/:Id/updateLogo").patch(upload.single("companyLogoURL") , change_CompanyLogo);

router.route("/getIpos").get(fetchIpo)

export default router;
