import express from "express"
import { verifyToken } from "../middleware/VerfyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js"
import { getStudents, addStudents } from "../controllers/Students.js"

const router = express.Router();

router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout)
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.get('/students', verifyToken, getStudents);
router.post('/students', verifyToken, addStudents);

export default router;