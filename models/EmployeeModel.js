import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Employees = db.define('employees', {
    name:{
        type: DataTypes.STRING
    },
    nip:{
        type: DataTypes.INTEGER
    },
    jabatan:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
},{
    freezeTableName:true
});

export default Employees;