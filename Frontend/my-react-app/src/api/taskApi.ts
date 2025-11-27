import axios from "axios";
import type { CreateTaskInput, Task } from "../types";

const API_URL =  import.meta.env.BACKEND_URL; // Your backend URL
console.log("API URL:", API_URL);
export const getAllTasks = async (): Promise<Task[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getSortedTasks = async (): Promise<Task[]> => {
  const res = await axios.get(`${API_URL}/sorted/highest`);
  return res.data;
};

export const createTask = async (task: CreateTaskInput): Promise<Task> => {
  const res = await axios.post(API_URL, task);
  return res.data.task;
};

export const getTaskById = async (id: string): Promise<Task> => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};