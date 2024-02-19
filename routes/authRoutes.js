import express from 'express';
import { registerUser, loginUser, adminLogin } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post("/admin-login", adminLogin)
router.post('/login', loginUser);

export default router;
