import express from "express";
import { createTask, getAllTasks, getSortedTasks, getTaskById } from "../controller/task.controller";
import { get } from "mongoose";
const taskRouter = express.Router();

taskRouter.post("/", createTask);

taskRouter.get("/", getAllTasks);

taskRouter.get("/sorted/highest", getSortedTasks);

taskRouter.get("/:id", getTaskById);
export default taskRouter;