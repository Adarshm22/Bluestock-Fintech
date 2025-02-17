import { Router } from "express";
import { change_CompanyLogo, delete_Ipo, fetchIpo, Register_NewIpo, update_IpoData } from "../Controllers/Ipo.Controllers.js";
import { upload } from "../Middlewares/multer.middleware.js";
import { verifyJwt } from "../Middlewares/auth.middleware.js";

const router = Router();

router.route("/registerIpo").post(
  verifyJwt,
  upload.fields([
    { name: "companyLogoURL", maxCount: 1 },
    { name: "rhpPdfUrl", maxCount: 1 },
    { name: "drhpPdfUrl", maxCount: 1 },
  ]),
  Register_NewIpo
);

router.route("/:Id/updateIpo").patch(verifyJwt, update_IpoData);

router.route("/:Id/deleteIpo").delete(verifyJwt, delete_Ipo);

router.route("/:Id/updateLogo").patch(upload.single("companyLogoURL") ,verifyJwt, change_CompanyLogo);

router.route("/getIpos").get(fetchIpo)

export default router;
