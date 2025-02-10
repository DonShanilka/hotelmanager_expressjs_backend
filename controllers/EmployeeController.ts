import express from 'express';
import { EmployeeAdd } from '../services/EmployeeService';


const router = express.Router();

exports.saveEmployee = async (req : any, res : any) => {
  const emp = req.body;
  console.log("Received Employee: ", emp);

  try {
    const addEmp = await EmployeeAdd(emp);
    res.status(200).json(addEmp);
  } catch (error) {
    console.error("Error Adding Employee: ", error);
    res.status(400).send("Error Adding Employee")
  }
};