import express from 'express';
const router = express.Router()
import { registerNewUser, loginUser, logoutUser } from '../controllers/authController.js';

import { isAuthenticatedUser , isAuthorizedUser} from '../middleware/authMiddleware.js';

router.route('/auth/register').post(isAuthenticatedUser ,isAuthorizedUser("admin","editor"), registerNewUser);
router.route('/auth/login').post(loginUser);
router.route('/auth/logout').post(logoutUser);

export default router;