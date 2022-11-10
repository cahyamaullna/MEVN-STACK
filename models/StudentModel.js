import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Students = db.define('students', {
    name:{
        type: DataTypes.STRING
    },
    age:{
        type: DataTypes.INTEGER
    },
    address:{
        type: DataTypes.TEXT
    },
},{
    freezeTableName:true
});

export default Students;