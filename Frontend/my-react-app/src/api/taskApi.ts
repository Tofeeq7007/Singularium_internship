import axios from "axios";
import type { CreateTaskInput, Task } from "../types";
import { API_BASE } from "../config";
console.log("API_BASE in taskServices:", API_BASE);

export const getAllTasks = async (): Promise<Task[]> => {
  const res = await axios.get(API_BASE);
  return res.data;
};

export const getSortedTasks = async (): Promise<Task[]> => {
  const res = await axios.get(`${API_BASE}/sorted/highest`);
  return res.data;
};

export const createTask = async (task: CreateTaskInput): Promise<Task> => {
  const res = await axios.post(API_BASE, task);
  return res.data.task;
};

export const getTaskById = async (id: string): Promise<Task> => {
  const res = await axios.get(`${API_BASE}/${id}`);
  return res.data;
};