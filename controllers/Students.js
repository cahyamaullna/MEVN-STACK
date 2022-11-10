import Students from "../models/StudentModel.js";

export const getStudents = async (req, res) => {
    try {
        const students = await Students.findAll({
            attributes: ['name', 'age', 'address']
        });
        res.json(students);
    } catch (error) {
        console.log(error);
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