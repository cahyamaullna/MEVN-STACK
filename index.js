import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import AuthRoute from "./routes/AuthRoute.js";
import EmployeesRoute from "./routes/EmployeesRoute.js";

dotenv.config();

//SWAGGER
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
const swaggerDocument = YAML.load('./swagger.yaml');
//ENDSWAGGER 

//IMPORTDB
// import Users from "./models/UserModel.js";
// import Employees from "./models/EmployeeModel.js";
const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

try {
    await db.authenticate();
    console.log('Database Connected');
    // await Users.sync();
    // await Employees.sync();
} catch (error) {
    console.error(error);
}
 
app.use(cors({ credentials:true, origin:'http:localhost:3000' }));
app.use(cookieParser());
app.use(express.json());

//ROUTER
app.use('/api', AuthRoute);
app.use('/api', EmployeesRoute);
//ENDROUTER

app.listen(3000,()=> console.log('server running at port 3000'));