import express from "express"
import { verifyToken } from "../middleware/VerfyToken.js";
import { getStudents, getStudentsById, addStudents, updateStudents, deleteStudent } from "../controllers/Students.js"

const router = express.Router();

router.get('/students', verifyToken, getStudents);
router.get('/students/:id', verifyToken, getStudentsById);
router.post('/students', verifyToken, addStudents);
router.patch('/students/:id', verifyToken, updateStudents);
router.delete('/students/:id', verifyToken, deleteStudent);

export default router;