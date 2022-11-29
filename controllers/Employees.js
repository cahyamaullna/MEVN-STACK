import Employees from "../models/EmployeeModel.js"

export const getEmployees = async (req, res)=>{
    try {
        const employees = await Employees.findAll({
            attributes: ['id','name','nip','jabatan','email']
        });
        res.json(employees)
    } catch (error) {
        console.log(error);
    }
}

export const getEmployeesById = async (req, res) => {
    try {
        const response = await Employees.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
    }
}

export const addEmployees = async (req, res) => {
    const { name, nip, jabatan, email } = req.body;
    try {
        await Employees.create({
            name: name,
            nip: nip,
            jabatan: jabatan,
            email: email
        });
        res.json({msg: "Tambah Employee berhasil"})
    } catch (error) {
        console.log(error);
    }
}

export const updateEmployees = async(req, res) => {
    try {
        await Employees.update(req.body,{
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({msg: "Employee Updated"})
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteEmployees = async (req, res) => {
    try {
        await Employees.destroy({
            where:{
                id: req.params.id
            }
        });
    } catch (error) {
        console.log(error.message);
    }
}