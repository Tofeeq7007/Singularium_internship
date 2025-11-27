import { useState, useEffect } from 'react';
import type { CreateTaskInput, Task } from '../types';
import { taskService } from '../services/taskServices';

export const useTasks = (sortBy: 'score' | 'deadline' | 'all') => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const data =
        sortBy === 'score'
          ? await taskService.getSortedTasks()
          : await taskService.getAllTasks();
      setTasks(data.tasks || data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (taskData: CreateTaskInput) => {
    try {
      await taskService.createTask(taskData);
      await fetchTasks();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create task');
      throw err;
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await taskService.deleteTask(id);
      await fetchTasks();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete task');
      throw err;
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await taskService.updateTaskStatus(id, status);
      await fetchTasks();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update task');
      throw err;
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [sortBy]);

  return { tasks, loading, error, fetchTasks, createTask, deleteTask, updateStatus };
};