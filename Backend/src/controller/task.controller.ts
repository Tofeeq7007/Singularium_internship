import { Request,Response } from "express";

import { CreateInput } from "../types/taskType";
import { calculateScore } from "../utils/scoring";
import Task from "../models/Task";
import mongoose from "mongoose";
// import { calculateScore } from "../scoring";

export const createTask = async (req: Request, res: Response) => {
    try {
        const body: CreateInput = req.body;
        const score = calculateScore(body);
        const task = await Task.create({
            ...body,
            dependencies: body.dependencies?.map(id => new mongoose.Types.ObjectId(id)) || [],
            score
        });
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error or Task Creation Error" });
    }
};

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find().populate("dependencies");
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const task = await Task.findById(req.params.id).populate("dependencies");

    if (!task) return res.status(404).json({ error: "Task not found" });

    res.json(task);

  } catch (err) {
    res.status(500).json({ error: "Failed to fetch task" });
  }
};


export const getSortedTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find().sort({ score: -1 }).populate("dependencies");
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch  sorted tasks" });
  }
};
