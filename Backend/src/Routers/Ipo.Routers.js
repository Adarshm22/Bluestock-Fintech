import { Router } from "express";
import { Register_NewIpo } from "../Controllers/Ipo.Controllers.js";
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

export default router;
