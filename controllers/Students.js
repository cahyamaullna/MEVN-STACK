import Students from "../models/StudentModel.js";

export const getStudents = async (req, res) => {
    try {
        const students = await Students.findAll({
            attributes: ['id','name', 'age', 'address']
        });
        res.json(students);
    } catch (error) {
        console.log(error);
    }
}

export const getStudentsById = async (req, res) => {
    try {
       const response = await Students.findOne({
        where:{
            id: req.params.id
        }
       });
       res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const addStudents = async (req, res) => {
    const { name, age, address } =req.body;
    try {
        await Students.create({
            name: name,
            age: age,
            address: address
        });
        res.json({msg: "Tambah Siswa Berhasil"})
    } catch (error){
        console.log(error);
    }
}

export const updateStudents = async(req, res) => {
    try {
        await Students.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Student Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteStudent = async (req, res) => {
    try {
        await Students.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Student Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

