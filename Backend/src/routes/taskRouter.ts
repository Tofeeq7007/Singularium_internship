import express, { Request, Response } from "express";
import { createTask, getAllTasks, getSortedTasks, getTaskById } from "../controller/task.controller";
import { get } from "mongoose";
import Task from "../models/Task";
const taskRouter = express.Router();

taskRouter.post("/", createTask);

taskRouter.get("/", getAllTasks);

taskRouter.get("/sorted/highest", getSortedTasks);

taskRouter.get("/:id", getTaskById);
taskRouter.delete("/:id", async(req:Request,res:Response)=>{
    const id = req.params.id;
    const task =  await Task.findByIdAndDelete(id);
    if(!task){
        return  res.status(404).json({message:"Task not found"});
    }
    return res.status(200).json({message:"Task deleted successfully"});
});
export default taskRouter;