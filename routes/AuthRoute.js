import express from "express"
import { verifyToken } from "../middleware/VerfyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js"

const router = express.Router();

router.post('/register', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.get('/users', verifyToken, getUsers);
router.delete('/logout', Logout)

export default router;