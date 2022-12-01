import express from "express"
import { verifyToken } from "../middleware/VerfyToken.js";
import { getEmployees, getEmployeesById, addEmployees, updateEmployees, deleteEmployees } from "../controllers/Employees.js";

const router = express.Router();

router.get('/employees', verifyToken, getEmployees);
router.get('/employees/:id', verifyToken, getEmployeesById);
router.post('/employees', verifyToken, addEmployees);
router.patch('/employees/:id', verifyToken, updateEmployees);
router.delete('/employees/:id', verifyToken, deleteEmployees);

export default router;