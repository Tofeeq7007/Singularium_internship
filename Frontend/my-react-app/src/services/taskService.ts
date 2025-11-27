import type { CreateTaskInput } from "../types";

const API_BASE = import.meta.env.BACKEND_URL;

export const taskService = {
  createTask: async (task: CreateTaskInput) => {
    const response = await fetch(`${API_BASE}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error('Failed to create task');
    return response.json();
  },

  getAllTasks: async () => {
    const response = await fetch(`${API_BASE}/tasks`);
    if (!response.ok) throw new Error('Failed to fetch tasks');
    return response.json();
  },

  getSortedTasks: async () => {
    const response = await fetch(`${API_BASE}/tasks/sorted/highest`);
    if (!response.ok) throw new Error('Failed to fetch sorted tasks');
    return response.json();
  },

  getTaskById: async (id: string) => {
    const response = await fetch(`${API_BASE}/tasks/${id}`);
    if (!response.ok) throw new Error('Failed to fetch task');
    return response.json();
  },

  updateTaskStatus: async (id: string, status: string) => {
    const response = await fetch(`${API_BASE}/tasks/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    if (!response.ok) throw new Error('Failed to update task');
    return response.json();
  },

  deleteTask: async (id: string) => {
    const response = await fetch(`${API_BASE}/tasks/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete task');
    return response.json();
  },
};