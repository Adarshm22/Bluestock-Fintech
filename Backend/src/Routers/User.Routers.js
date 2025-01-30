import {Router} from 'express'
import { Login, Registration } from '../Controllers/User.Controllers.js';

const router = Router();

router.route("/registration").post(Registration);
router.route("/login").post(Login);


export default router;