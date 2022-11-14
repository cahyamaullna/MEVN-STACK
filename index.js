import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import AuthRoute from "./routes/AuthRoute.js";
import StudentsRoute from "./routes/StudentsRoute.js";

dotenv.config();
// import Students from "./models/StudentModel.js";
// import Users from "./models/UserModel.js";
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected');
    // await Students.sync();
    // await Users.sync();
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials:true, origin:'http:localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(AuthRoute);
app.use(StudentsRoute);


app.listen(3000,()=> console.log('server running at port 3000'));