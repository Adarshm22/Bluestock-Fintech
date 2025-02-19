import {Router} from 'express'
import { getUser, Login, Registration } from '../Controllers/User.Controllers.js';
import { verifyJwt } from '../Middlewares/auth.middleware.js';

const router = Router();

router.route("/registration").post(Registration);
router.route("/login").post(Login);
router.route("/getUserData").get(verifyJwt, getUser)


export default router;